// =====================================================================
// TAI.store — Persistencia en localStorage
// Mantiene EXACTAMENTE el mismo formato que la versión anterior para las
// claves ya existentes ("failedQuestions", "testHistory", "themePref"),
// y añade claves nuevas y aditivas para las funciones nuevas.
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});

    function safeGet(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            if (raw === null) return fallback;
            return JSON.parse(raw);
        } catch (e) {
            console.warn(`No se pudo leer "${key}" de localStorage, se usa valor por defecto.`, e);
            return fallback;
        }
    }

    function safeSet(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.warn(`No se pudo guardar "${key}" en localStorage.`, e);
            return false;
        }
    }

    function safeRemove(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn(`No se pudo borrar "${key}" de localStorage.`, e);
        }
    }

    // themePref se guarda históricamente como STRING PLANO (no JSON), no
    // como el resto de claves. Se conserva ese formato para no perder las
    // preferencias ya guardadas por usuarios de la versión anterior.
    function getThemePref() {
        try {
            return localStorage.getItem('themePref') || 'light';
        } catch (e) {
            return 'light';
        }
    }

    function setThemePref(value) {
        try {
            localStorage.setItem('themePref', value);
        } catch (e) {
            console.warn('No se pudo guardar themePref.', e);
        }
    }

    const KEYS = {
        FAILED: 'failedQuestions',
        HISTORY: 'testHistory',
        SETTINGS: 'appSettings',       // nueva, aditiva
        EXAM_IN_PROGRESS: 'examInProgress', // nueva, aditiva (autoguardado)
        ONBOARDING_SEEN: 'onboardingSeen',  // nueva, aditiva
        SEEN_QUESTIONS: 'seenQuestionIds'   // nueva, aditiva (contador de cobertura del banco)
    };

    TAI.store = {
        KEYS,
        safeGet,
        safeSet,
        safeRemove,
        getThemePref,
        setThemePref,

        getFailedQuestions() {
            return safeGet(KEYS.FAILED, []);
        },
        setFailedQuestions(list) {
            safeSet(KEYS.FAILED, list);
        },
        getHistory() {
            return safeGet(KEYS.HISTORY, []);
        },
        setHistory(list) {
            safeSet(KEYS.HISTORY, list);
        },
        getSettings(defaults) {
            return safeGet(KEYS.SETTINGS, defaults);
        },
        setSettings(settings) {
            safeSet(KEYS.SETTINGS, settings);
        },
        getExamInProgress() {
            return safeGet(KEYS.EXAM_IN_PROGRESS, null);
        },
        setExamInProgress(snapshot) {
            safeSet(KEYS.EXAM_IN_PROGRESS, snapshot);
        },
        clearExamInProgress() {
            safeRemove(KEYS.EXAM_IN_PROGRESS);
        },
        hasSeenOnboarding() {
            return safeGet(KEYS.ONBOARDING_SEEN, false) === true;
        },
        markOnboardingSeen() {
            safeSet(KEYS.ONBOARDING_SEEN, true);
        },

        // Ids (de baseDeDatos) que ya le han salido al usuario en algún test,
        // para poder mostrar "cuántas preguntas del banco ya te han salido".
        getSeenQuestionIds() {
            return safeGet(KEYS.SEEN_QUESTIONS, []);
        },
        markQuestionSeen(id) {
            if (id === undefined || id === null) return;
            const seen = safeGet(KEYS.SEEN_QUESTIONS, []);
            if (!seen.includes(id)) {
                seen.push(id);
                safeSet(KEYS.SEEN_QUESTIONS, seen);
            }
        }
    };
})(window);
