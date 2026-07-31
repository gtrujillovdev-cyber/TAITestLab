// =====================================================================
// TAI.router — router hash-based minimalista, sin dependencias.
// Cada vista se registra con register(name, viewModule) y expone:
//   render(container, params) -> pinta la vista dentro de "container"
//   onLeave() (opcional)      -> limpieza (listeners, intervalos...)
//   focused (opcional, bool)  -> si true, la navegación persistente se
//                                colapsa a modo enfocado (quiz/supuesto).
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});

    const views = {};
    let currentView = null;
    let currentParams = {};
    let container = null;
    let onChangeCallbacks = [];

    function register(name, viewModule) {
        views[name] = viewModule;
    }

    function parseHash() {
        const raw = global.location.hash.replace(/^#\/?/, '');
        const [name, ...rest] = raw.split('/');
        const params = {};
        if (rest.length) params.id = decodeURIComponent(rest.join('/'));
        return { name: name || 'dashboard', params };
    }

    function onChange(cb) {
        onChangeCallbacks.push(cb);
    }

    function navigate(name, params) {
        const query = params && params.id ? `/${encodeURIComponent(params.id)}` : '';
        const target = `#/${name}${query}`;
        if (global.location.hash === target) {
            // Mismo hash: forzamos el render igualmente (p.ej. reiniciar quiz).
            handleRoute();
        } else {
            global.location.hash = target;
        }
    }

    function focusMain() {
        if (!container) return;
        const heading = container.querySelector('h1, h2, [data-view-title]');
        const target = heading || container;
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: false });
    }

    function handleRoute() {
        const { name, params } = parseHash();
        const view = views[name] || views.dashboard;
        const resolvedName = views[name] ? name : 'dashboard';

        if (currentView && typeof currentView.onLeave === 'function') {
            try { currentView.onLeave(); } catch (e) { console.error(e); }
        }

        currentView = view;
        currentParams = params;
        container.innerHTML = '';
        try {
            view.render(container, params);
        } catch (e) {
            console.error('Error al renderizar la vista', resolvedName, e);
            container.innerHTML = '<p role="alert">No se pudo cargar esta sección. Vuelve a Inicio e inténtalo de nuevo.</p>';
        }
        focusMain();

        onChangeCallbacks.forEach(cb => {
            try { cb(resolvedName, params, view); } catch (e) { console.error(e); }
        });
    }

    function init(containerEl) {
        container = containerEl;
        global.addEventListener('hashchange', handleRoute);
        if (!global.location.hash) {
            global.location.hash = '#/dashboard';
        } else {
            handleRoute();
        }
    }

    function getCurrentName() {
        return parseHash().name;
    }

    TAI.router = {
        register,
        navigate,
        init,
        onChange,
        getCurrentName,
        getCurrentParams: () => currentParams
    };
})(window);
