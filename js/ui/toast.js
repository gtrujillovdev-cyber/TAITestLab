// =====================================================================
// TAI.ui.toast — notificaciones no bloqueantes (sustituye a alert()).
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});
    TAI.ui = TAI.ui || {};

    let host = null;

    function ensureHost() {
        if (host) return host;
        host = document.createElement('div');
        host.id = 'toast-host';
        host.className = 'toast-host';
        host.setAttribute('role', 'status');
        host.setAttribute('aria-live', 'polite');
        document.body.appendChild(host);
        return host;
    }

    const ICONS = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };

    function show(message, opts) {
        opts = opts || {};
        const type = opts.type || 'info';
        const duration = opts.duration || 4200;
        const el = ensureHost();

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `<span class="toast-icon" aria-hidden="true">${ICONS[type] || ICONS.info}</span><span class="toast-msg"></span><button type="button" class="toast-close" aria-label="Cerrar notificación">&times;</button>`;
        toast.querySelector('.toast-msg').textContent = message;

        function remove() {
            toast.classList.add('toast-out');
            setTimeout(() => toast.remove(), 220);
        }

        toast.querySelector('.toast-close').addEventListener('click', remove);
        el.appendChild(toast);
        requestAnimationFrame ? requestAnimationFrame(() => toast.classList.add('toast-in')) : toast.classList.add('toast-in');

        if (duration > 0) setTimeout(remove, duration);
        return remove;
    }

    TAI.ui.toast = {
        show,
        success: (msg, opts) => show(msg, Object.assign({ type: 'success' }, opts)),
        error: (msg, opts) => show(msg, Object.assign({ type: 'error' }, opts)),
        info: (msg, opts) => show(msg, Object.assign({ type: 'info' }, opts)),
        warning: (msg, opts) => show(msg, Object.assign({ type: 'warning' }, opts))
    };
})(window);
