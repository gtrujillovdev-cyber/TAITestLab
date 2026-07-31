// =====================================================================
// TAI.state — estado compartido en memoria entre vistas.
// No persiste nada por sí mismo (eso es responsabilidad de TAI.store);
// simplemente evita pasar objetos gigantes por la URL/hash del router.
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});
    const store = TAI.store;

    const DEFAULT_SETTINGS = {
        learningMode: true,
        selectedOpos: ['AGE', 'SAS', 'Junta de Andalucía', 'Diputación de Sevilla']
    };

    const settings = Object.assign({}, DEFAULT_SETTINGS, store.getSettings(DEFAULT_SETTINGS));

    const state = {
        settings,

        // true mientras hay un quiz/supuesto en curso: el router y la nav
        // usan este flag para colapsar la navegación a modo "enfocado".
        quizActive: false,

        // Resultado del último test completado (para pintar /results sin
        // tener que volver a calcular todo ni serializarlo en la URL).
        lastResult: null,

        // Supuesto seleccionado actualmente (para /supuesto/:id).
        activeSupuestoId: null,

        saveSettings() {
            store.setSettings(state.settings);
        }
    };

    TAI.state = state;
})(window);
