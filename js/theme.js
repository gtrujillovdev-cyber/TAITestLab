// =====================================================================
// TAI.theme — Claro / Oscuro / Sistema (misma lógica y misma clave de
// localStorage "themePref" que la versión anterior).
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});
    const store = TAI.store;

    const systemPrefersDark = global.matchMedia
        ? global.matchMedia('(prefers-color-scheme: dark)')
        : { matches: false, addEventListener() {} };

    function apply(themeValue) {
        const body = document.body;
        if (themeValue === 'dark') {
            body.classList.add('dark-mode');
        } else if (themeValue === 'light') {
            body.classList.remove('dark-mode');
        } else if (themeValue === 'system') {
            if (systemPrefersDark.matches) body.classList.add('dark-mode');
            else body.classList.remove('dark-mode');
        }
        const meta = document.getElementById('theme-color-meta');
        if (meta) meta.setAttribute('content', body.classList.contains('dark-mode') ? '#0f172a' : '#f1f5f9');
        store.setThemePref(themeValue);
    }

    function init() {
        const saved = store.getThemePref();
        apply(saved);
        if (systemPrefersDark.addEventListener) {
            systemPrefersDark.addEventListener('change', () => {
                if (store.getThemePref() === 'system') apply('system');
            });
        }
    }

    TAI.theme = { apply, init };
})(window);
