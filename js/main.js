// =====================================================================
// TAI.main — arranque de la aplicación.
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});

    function boot() {
        TAI.theme.init();

        const router = TAI.router;
        router.register('dashboard', TAI.views.dashboard);
        router.register('settings', TAI.views.settings);
        router.register('choose-test', TAI.views.chooseTest);
        router.register('quiz', TAI.views.quiz);
        router.register('results', TAI.views.results);
        router.register('bank', TAI.views.bank);
        router.register('supuestos', TAI.views.supuestos);
        router.register('supuesto', TAI.views.supuesto);
        router.register('progress', TAI.views.progress);
        router.register('help', TAI.views.help);
        router.register('minigame', TAI.views.minigame);

        const viewRoot = document.getElementById('view-root');
        const navRoot = document.getElementById('nav-root');

        TAI.ui.nav.init(navRoot);
        router.init(viewRoot);

        setTimeout(() => TAI.views.help.showOnboardingModalIfFirstVisit(), 400);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})(window);
