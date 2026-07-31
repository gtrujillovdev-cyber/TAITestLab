// =====================================================================
// TAI.ui.nav — navegación persistente (sidebar en escritorio, barra
// inferior + hoja "más" en móvil). Se colapsa a modo "enfocado" cuando
// TAI.state.quizActive es true, para no distraer durante un examen.
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});
    TAI.ui = TAI.ui || {};

    const ITEMS = [
        { name: 'dashboard', label: 'Inicio', icon: '🏠' },
        { name: 'choose-test', label: 'Elegir Test', icon: '📝' },
        { name: 'bank', label: 'Banco', icon: '📚' },
        { name: 'supuestos', label: 'Supuestos', icon: '🗂️' },
        { name: 'progress', label: 'Progreso', icon: '📈' },
        { name: 'settings', label: 'Ajustes', icon: '⚙️' },
        { name: 'help', label: 'Ayuda', icon: '❓' }
    ];

    // En la barra inferior de móvil solo caben cómodamente unos pocos;
    // el resto vive en la hoja "Más".
    const MOBILE_PRIMARY = ['dashboard', 'choose-test', 'bank', 'progress'];

    let rootEl = null;
    let mobileSheetOpen = false;

    function buildDesktopNav(activeName, focused) {
        const nav = document.createElement('nav');
        nav.className = 'app-nav app-nav-desktop';
        nav.setAttribute('aria-label', 'Navegación principal');

        if (focused) {
            nav.classList.add('app-nav-focused');
            nav.innerHTML = `<div class="nav-focused-label">Examen en curso</div>
                <button type="button" class="btn-secondary nav-exit-btn" id="nav-exit-focused">🚪 Salir</button>`;
            return nav;
        }

        const list = document.createElement('ul');
        list.className = 'nav-list';
        ITEMS.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#/${item.name}`;
            a.className = 'nav-link';
            a.dataset.navItem = item.name;
            if (item.name === activeName) {
                a.classList.add('active');
                a.setAttribute('aria-current', 'page');
            }
            a.innerHTML = `<span class="nav-icon" aria-hidden="true">${item.icon}</span><span class="nav-text">${item.label}</span>`;
            li.appendChild(a);
            list.appendChild(li);
        });
        nav.appendChild(list);
        return nav;
    }

    function buildMobileNav(activeName, focused) {
        const nav = document.createElement('nav');
        nav.className = 'app-nav app-nav-mobile';
        nav.setAttribute('aria-label', 'Navegación principal (móvil)');

        if (focused) {
            nav.classList.add('app-nav-focused');
            nav.innerHTML = `<div class="nav-focused-label">Examen en curso</div>
                <button type="button" class="btn-secondary nav-exit-btn" id="nav-exit-focused-m">🚪 Salir</button>`;
            return nav;
        }

        const bar = document.createElement('div');
        bar.className = 'nav-bottom-bar';

        MOBILE_PRIMARY.forEach(name => {
            const item = ITEMS.find(i => i.name === name);
            bar.appendChild(navBottomLink(item, activeName));
        });

        const moreBtn = document.createElement('button');
        moreBtn.type = 'button';
        moreBtn.className = 'nav-bottom-item nav-more-btn';
        moreBtn.setAttribute('aria-haspopup', 'true');
        moreBtn.setAttribute('aria-expanded', String(mobileSheetOpen));
        moreBtn.innerHTML = `<span class="nav-icon" aria-hidden="true">☰</span><span class="nav-text">Más</span>`;
        moreBtn.addEventListener('click', () => {
            mobileSheetOpen = !mobileSheetOpen;
            render();
        });
        bar.appendChild(moreBtn);
        nav.appendChild(bar);

        if (mobileSheetOpen) {
            const sheet = document.createElement('div');
            sheet.className = 'nav-more-sheet';
            sheet.setAttribute('role', 'menu');
            const extra = ITEMS.filter(i => !MOBILE_PRIMARY.includes(i.name));
            extra.forEach(item => {
                const a = document.createElement('a');
                a.href = `#/${item.name}`;
                a.className = 'nav-more-link';
                a.setAttribute('role', 'menuitem');
                if (item.name === activeName) a.classList.add('active');
                a.innerHTML = `<span class="nav-icon" aria-hidden="true">${item.icon}</span> ${item.label}`;
                a.addEventListener('click', () => { mobileSheetOpen = false; });
                sheet.appendChild(a);
            });
            nav.appendChild(sheet);
        }

        return nav;
    }

    function navBottomLink(item, activeName) {
        const a = document.createElement('a');
        a.href = `#/${item.name}`;
        a.className = 'nav-bottom-item';
        if (item.name === activeName) {
            a.classList.add('active');
            a.setAttribute('aria-current', 'page');
        }
        a.innerHTML = `<span class="nav-icon" aria-hidden="true">${item.icon}</span><span class="nav-text">${item.label}</span>`;
        return a;
    }

    function attachExitHandlers() {
        ['nav-exit-focused', 'nav-exit-focused-m'].forEach(id => {
            const btn = document.getElementById(id);
            if (!btn) return;
            btn.addEventListener('click', async () => {
                const ok = await TAI.ui.modal.confirm({
                    title: 'Salir del examen',
                    message: 'Tu progreso se ha ido guardando automáticamente. Podrás reanudar este examen más tarde desde Inicio. ¿Salir ahora?',
                    confirmText: 'Salir',
                    cancelText: 'Seguir en el examen'
                });
                if (ok) {
                    TAI.state.quizActive = false;
                    TAI.router.navigate('dashboard');
                }
            });
        });
    }

    function render() {
        if (!rootEl) return;
        const activeName = TAI.router.getCurrentName();
        const focused = !!TAI.state.quizActive;
        rootEl.innerHTML = '';
        rootEl.appendChild(buildDesktopNav(activeName, focused));
        rootEl.appendChild(buildMobileNav(activeName, focused));
        attachExitHandlers();
    }

    function init(el) {
        rootEl = el;
        TAI.router.onChange(() => {
            mobileSheetOpen = false;
            render();
        });
        render();
    }

    TAI.ui.nav = { init, render };
})(window);
