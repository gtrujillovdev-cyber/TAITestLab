// =====================================================================
// domstub.js — DOM mínimo para poder cargar y ejercitar los scripts de
// TAI Prep con Node (sin navegador ni dependencias externas). No es un
// DOM completo: solo implementa lo que estos scripts realmente usan
// (createElement, classList, dataset, un subconjunto de querySelector,
// eventos, localStorage, location.hash...). Solo para tests, no se
// distribuye como parte de la app.
// =====================================================================
'use strict';

function EventTargetMixin(Base) {
    return class extends Base {
        constructor(...args) {
            super(...args);
            this._listeners = {};
        }
        addEventListener(type, fn) {
            (this._listeners[type] = this._listeners[type] || []).push(fn);
        }
        removeEventListener(type, fn) {
            if (!this._listeners[type]) return;
            this._listeners[type] = this._listeners[type].filter((f) => f !== fn);
        }
        dispatchEvent(evt) {
            // Soporta tanto addEventListener(...) como la propiedad IDL
            // "onclick"/"onchange"/... (un único slot), igual que un DOM
            // real: supuestos.js usa "nextBtn.onclick = () => {...}".
            const inline = this['on' + evt.type];
            if (typeof inline === 'function') inline.call(this, evt);
            (this._listeners[evt.type] || []).slice().forEach((fn) => fn(evt));
            return true;
        }
    };
}

class Bare {}
class EventTarget extends EventTargetMixin(Bare) {}

class ClassList {
    constructor(el) { this.el = el; }
    add(...names) { names.forEach((n) => n && this.el._classSet.add(n)); }
    remove(...names) { names.forEach((n) => this.el._classSet.delete(n)); }
    contains(n) { return this.el._classSet.has(n); }
    toggle(n, force) {
        if (force === true) { this.add(n); return true; }
        if (force === false) { this.remove(n); return false; }
        if (this.contains(n)) { this.remove(n); return false; }
        this.add(n); return true;
    }
}

class Element extends EventTarget {
    constructor(tagName) {
        super();
        this.tagName = (tagName || 'div').toUpperCase();
        this.attributes = {};
        this.dataset = {};
        this.children = [];
        this.parentNode = null;
        this.style = {};
        this._classSet = new Set();
        this.value = '';
        this.checked = false;
        this.disabled = false;
        this._text = '';
    }

    get className() { return [...this._classSet].join(' '); }
    set className(val) { this._classSet = new Set(String(val).split(/\s+/).filter(Boolean)); }
    get classList() { return this._classListObj || (this._classListObj = new ClassList(this)); }

    setAttribute(name, value) {
        const v = value === undefined ? '' : String(value);
        this.attributes[name] = v;
        if (name === 'class') this.className = v;
        if (name.startsWith('data-')) {
            const camel = name.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
            this.dataset[camel] = v;
        }
        if (name === 'checked') this.checked = true;
        if (name === 'disabled') this.disabled = true;
        if (name === 'tabindex') this._tabindex = v;
    }
    getAttribute(name) { return Object.prototype.hasOwnProperty.call(this.attributes, name) ? this.attributes[name] : null; }
    hasAttribute(name) { return Object.prototype.hasOwnProperty.call(this.attributes, name); }
    removeAttribute(name) { delete this.attributes[name]; if (name === 'class') this._classSet = new Set(); }

    appendChild(child) {
        if (child.tagName === '#fragment') {
            child.children.slice().forEach((c) => this.appendChild(c));
            child.children = [];
            return child;
        }
        if (child.parentNode) child.parentNode.removeChild(child);
        this.children.push(child);
        child.parentNode = this;
        return child;
    }
    removeChild(child) {
        this.children = this.children.filter((c) => c !== child);
        child.parentNode = null;
        return child;
    }
    remove() { if (this.parentNode) this.parentNode.removeChild(this); }

    set innerHTML(html) {
        this.children = [];
        parseInto(this, html || '');
    }
    get innerHTML() { return '[not implemented]'; }

    set textContent(text) {
        this.children = [];
        const t = new TextNode(String(text));
        t.parentNode = this;
        this.children.push(t);
    }
    get textContent() {
        return collectText(this);
    }

    focus() { rootDocument.activeElement = this; }
    click() { this.dispatchEvent({ type: 'click', target: this, preventDefault() {}, stopPropagation() {} }); }

    querySelector(sel) { return querySelector(this, sel); }
    querySelectorAll(sel) { return querySelectorAll(this, sel); }

    // Canvas 2D context stub (para el gráfico de progreso)
    getContext() {
        return {
            scale() {}, clearRect() {}, beginPath() {}, moveTo() {}, lineTo() {},
            stroke() {}, fill() {}, fillRect() {}, arc() {}, fillText() {},
            set strokeStyle(v) {}, set fillStyle(v) {}, set lineWidth(v) {}, set font(v) {}
        };
    }
    get clientWidth() { return 600; }
    get clientHeight() { return 180; }
}

class TextNode {
    constructor(text) { this.tagName = '#text'; this.textContentValue = text; this.parentNode = null; this._classSet = new Set(); this.children = []; }
    get textContent() { return this.textContentValue; }
}

function collectText(node) {
    if (node.tagName === '#text') return node.textContentValue;
    return node.children.map(collectText).join('');
}

// ---------------- Parser HTML mínimo ----------------
// Soporta el subconjunto de HTML que generan las plantillas de TAI Prep:
// etiquetas con atributos entre comillas simples/dobles, atributos
// booleanos (checked/disabled), texto y anidamiento simple. No soporta
// comentarios HTML ni CDATA.
const VOID_TAGS = new Set(['br', 'hr', 'img', 'input', 'meta', 'link']);

function parseInto(root, html) {
    let i = 0;
    const stack = [root];
    const len = html.length;

    function top() { return stack[stack.length - 1]; }

    while (i < len) {
        if (html[i] === '<') {
            if (html[i + 1] === '/') {
                const close = html.indexOf('>', i);
                stack.pop();
                i = close + 1;
                continue;
            }
            const tagMatch = /^<([a-zA-Z0-9]+)((?:\s+[^<>]*?)?)\s*(\/?)>/.exec(html.slice(i));
            if (!tagMatch) { i++; continue; }
            const [full, tagName, attrStr] = tagMatch;
            const el = new Element(tagName);
            parseAttrs(attrStr).forEach(([k, v]) => el.setAttribute(k, v));
            top().appendChild(el);
            i += full.length;
            if (!VOID_TAGS.has(tagName.toLowerCase()) && !full.endsWith('/>')) {
                stack.push(el);
            }
            continue;
        }
        const next = html.indexOf('<', i);
        const textEnd = next === -1 ? len : next;
        const raw = html.slice(i, textEnd);
        const text = decodeEntities(raw);
        if (text.trim().length || /\S/.test(text)) {
            if (text.length) {
                const t = new TextNode(text);
                t.parentNode = top();
                top().children.push(t);
            }
        }
        i = textEnd;
    }
}

function decodeEntities(str) {
    return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');
}

function parseAttrs(attrStr) {
    const attrs = [];
    const re = /([a-zA-Z0-9_-]+)(?:\s*=\s*("([^"]*)"|'([^']*)'))?/g;
    let m;
    while ((m = re.exec(attrStr))) {
        const name = m[1];
        const value = m[3] !== undefined ? m[3] : (m[4] !== undefined ? m[4] : '');
        attrs.push([name, m[2] !== undefined ? value : '']);
    }
    return attrs;
}

// ---------------- Motor de selectores mínimo ----------------
function splitTopLevel(sel, sepRe) {
    // separa por comas de nivel superior (no dentro de :not(...))
    const parts = [];
    let depth = 0, last = 0;
    for (let i = 0; i < sel.length; i++) {
        const c = sel[i];
        if (c === '(') depth++;
        if (c === ')') depth--;
        if (depth === 0 && sepRe.test(c)) {
            parts.push(sel.slice(last, i));
            last = i + 1;
        }
    }
    parts.push(sel.slice(last));
    return parts.map((s) => s.trim()).filter(Boolean);
}

function matchesCompound(el, compound) {
    // compound: tag?#id?.class*[attr(=val)?]*:pseudo*
    const re = /(#[\w-]+)|(\.[\w-]+)|(\[[^\]]+\])|(:[\w-]+(?:\([^)]*\))?)|([a-zA-Z][\w-]*)/g;
    let m;
    let ok = true;
    while ((m = re.exec(compound))) {
        if (m[1]) { if (el.getAttribute('id') !== m[1].slice(1)) ok = false; }
        else if (m[2]) { if (!el.classList || !el.classList.contains(m[2].slice(1))) ok = false; }
        else if (m[3]) {
            const inner = m[3].slice(1, -1);
            const eqIdx = inner.indexOf('=');
            if (eqIdx === -1) {
                if (!el.hasAttribute(inner)) ok = false;
            } else {
                const attrName = inner.slice(0, eqIdx).trim();
                let attrVal = inner.slice(eqIdx + 1).trim();
                attrVal = attrVal.replace(/^["']|["']$/g, '');
                if (el.getAttribute(attrName) !== attrVal) ok = false;
            }
        } else if (m[4]) {
            const pseudo = m[4];
            if (pseudo === ':checked') { if (!el.checked) ok = false; }
            else if (pseudo.startsWith(':not(')) {
                const inner = pseudo.slice(5, -1);
                if (matchesCompound(el, inner)) ok = false;
            }
            // otros pseudo (:hover, :disabled...) se ignoran silenciosamente
        } else if (m[5]) {
            if (el.tagName !== m[5].toUpperCase()) ok = false;
        }
        if (!ok) break;
    }
    return ok;
}

function matchesSelector(el, selector) {
    const groups = splitTopLevel(selector, /,/);
    return groups.some((group) => {
        const steps = group.split(/\s+/).filter(Boolean);
        // Coincide el último paso con el elemento; los anteriores deben
        // encontrarse entre los ancestros, en orden (descendiente simple).
        let idx = steps.length - 1;
        if (!matchesCompound(el, steps[idx])) return false;
        let cursor = el.parentNode;
        idx--;
        while (idx >= 0) {
            let found = false;
            while (cursor) {
                if (matchesCompound(cursor, steps[idx])) { found = true; break; }
                cursor = cursor.parentNode;
            }
            if (!found) return false;
            cursor = cursor.parentNode;
            idx--;
        }
        return true;
    });
}

function walk(node, cb) {
    node.children.forEach((c) => {
        if (c.tagName !== '#text') {
            cb(c);
            walk(c, cb);
        }
    });
}

function querySelectorAll(root, sel) {
    const out = [];
    walk(root, (el) => { if (matchesSelector(el, sel)) out.push(el); });
    return out;
}
function querySelector(root, sel) {
    let found = null;
    walk(root, (el) => { if (!found && matchesSelector(el, sel)) found = el; });
    return found;
}

// ---------------- Document / window ----------------
let rootDocument;

function createDocument() {
    const doc = new EventTarget();
    doc.readyState = 'complete';
    doc.activeElement = null;
    doc.documentElement = new Element('html');
    doc.body = new Element('body');
    doc.documentElement.appendChild(doc.body);

    doc.createElement = (tag) => new Element(tag);
    doc.createDocumentFragment = () => new Element('#fragment');
    doc.getElementById = (id) => querySelector(doc.documentElement, `#${id}`);
    doc.querySelector = (sel) => querySelector(doc.documentElement, sel);
    doc.querySelectorAll = (sel) => querySelectorAll(doc.documentElement, sel);

    rootDocument = doc;
    return doc;
}

// opts.localStorage: reutiliza un backing store ya existente (para
// simular que localStorage sobrevive a una recarga de página).
// opts.hash: hash inicial de location (persiste igual que en un navegador
// real, donde la URL sobrevive a un F5).
function createWindowSandbox(opts) {
    opts = opts || {};
    const store = opts.localStorage ? opts.localStorage._store : {};
    const localStorage = opts.localStorage || {
        _store: store,
        getItem(k) { return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null; },
        setItem(k, v) { store[k] = String(v); },
        removeItem(k) { delete store[k]; },
        clear() { Object.keys(store).forEach((k) => delete store[k]); }
    };

    const doc = createDocument();
    doc.head = new Element('head');
    doc.documentElement.appendChild(doc.head);

    // Estructura mínima equivalente a index.html
    const metaTheme = doc.createElement('meta');
    metaTheme.setAttribute('id', 'theme-color-meta');
    doc.head.appendChild(metaTheme);

    const navRoot = doc.createElement('div');
    navRoot.setAttribute('id', 'nav-root');
    const viewRoot = doc.createElement('main');
    viewRoot.setAttribute('id', 'view-root');
    doc.body.appendChild(navRoot);
    doc.body.appendChild(viewRoot);

    const location = { _hash: opts.hash || '' };
    Object.defineProperty(location, 'hash', {
        get() { return location._hash; },
        set(v) {
            const changed = location._hash !== v;
            location._hash = v;
            if (changed) sandbox.dispatchEvent({ type: 'hashchange' });
        }
    });

    const sandbox = new EventTarget();
    Object.assign(sandbox, {
        document: doc,
        localStorage,
        location,
        console,
        setTimeout, clearTimeout, setInterval, clearInterval,
        requestAnimationFrame: (cb) => setTimeout(cb, 0),
        devicePixelRatio: 1,
        getComputedStyle: () => ({ getPropertyValue: () => '#334455' }),
        Math, Date, JSON, Array, Object, Promise, Set, Map, String, Number, Boolean, RegExp, Error
    });
    sandbox.window = sandbox;
    sandbox.global = sandbox;
    return sandbox;
}

module.exports = { createWindowSandbox };
