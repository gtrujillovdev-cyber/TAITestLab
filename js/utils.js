// =====================================================================
// TAI.utils — helpers puros compartidos por varias vistas
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});

    const BLOQUE_LABELS = {
        I: 'Bloque I — Organización del Estado',
        II: 'Bloque II — Tecnología básica',
        III: 'Bloque III — Desarrollo de sistemas',
        IV: 'Bloque IV — Sistemas y comunicaciones'
    };

    const MODE_LABELS = {
        short: 'Test Corto',
        global: 'Test Global',
        simulacro: 'Simulacro Real',
        theme: 'Por Tema',
        fallos: 'Repaso de Fallos',
        oficiales: 'Exámenes Oficiales'
    };

    function modeLabel(modo) {
        if (!modo) return '';
        if (modo.startsWith('supuesto:')) return 'Supuesto Práctico';
        return MODE_LABELS[modo] || modo;
    }

    function formatTime(totalSeconds) {
        const safeSeconds = Math.max(0, Math.floor(totalSeconds || 0));
        const m = String(Math.floor(safeSeconds / 60)).padStart(2, '0');
        const s = String(safeSeconds % 60).padStart(2, '0');
        return `${m}:${s}`;
    }

    function shuffle(array) {
        const copy = array.slice();
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    // Nota INAP: aciertos - fallos/3, sobre 10, sin bajar de 0.
    function computeScore(aciertos, fallos, total) {
        let notaNeta = aciertos - fallos / 3;
        if (notaNeta < 0) notaNeta = 0;
        const notaSobre10 = total > 0 ? (notaNeta / total) * 10 : 0;
        return Number(notaSobre10.toFixed(2));
    }

    function questionBadgeText(q) {
        if (q.origen === 'oficial') {
            const ops = (q.oposiciones && q.oposiciones.length) ? ` (${q.oposiciones.join(', ')})` : '';
            return `${BLOQUE_LABELS[q.bloque] || ('Bloque ' + q.bloque)} · 📜 Examen Oficial${ops}`;
        }
        return `${BLOQUE_LABELS[q.bloque] || ('Bloque ' + q.bloque)} · Tema ${q.tema}`;
    }

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    // Calcula el desglose de aciertos/fallos por bloque para un examen ya
    // corregido (currentExam + userAnswers, mismos índices).
    function computeBlockBreakdown(exam, userAnswers) {
        const breakdown = {};
        exam.forEach((q, index) => {
            const marcada = userAnswers[index];
            const bloque = q.bloque || '—';
            if (!breakdown[bloque]) breakdown[bloque] = { aciertos: 0, fallos: 0, total: 0 };
            breakdown[bloque].total++;
            if (marcada === q.respuestaIndex) breakdown[bloque].aciertos++;
            else breakdown[bloque].fallos++;
        });
        return breakdown;
    }

    function todayKey(date) {
        const d = date || new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    // Racha de estudio: nº de días consecutivos (incluyendo hoy o ayer)
    // con al menos un test completado en el historial.
    function computeStreak(history) {
        if (!history || history.length === 0) return 0;
        const days = new Set(history.map(h => {
            const d = new Date(h.fecha);
            return isNaN(d) ? null : todayKey(d);
        }).filter(Boolean));

        let streak = 0;
        const cursor = new Date();
        // Si hoy no hay estudio, la racha puede seguir contando desde ayer
        // (para no penalizar a quien aún no ha estudiado hoy).
        if (!days.has(todayKey(cursor))) {
            cursor.setDate(cursor.getDate() - 1);
        }
        while (days.has(todayKey(cursor))) {
            streak++;
            cursor.setDate(cursor.getDate() - 1);
        }
        return streak;
    }

    TAI.utils = {
        BLOQUE_LABELS,
        MODE_LABELS,
        modeLabel,
        formatTime,
        shuffle,
        computeScore,
        questionBadgeText,
        escapeHtml,
        computeBlockBreakdown,
        computeStreak,
        todayKey
    };
})(window);
