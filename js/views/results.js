// =====================================================================
// Vista: Resultados — pinta TAI.state.lastResult (calculado por quiz.js
// al finalizar). Incluye desglose de aciertos/fallos por bloque.
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});
    TAI.views = TAI.views || {};
    const { state, utils, router } = TAI;

    function render(container) {
        const result = state.lastResult;
        const wrap = document.createElement('div');
        wrap.className = 'view-results';

        if (!result) {
            wrap.innerHTML = `
                <h1>Resultados</h1>
                <p class="hint">No hay ningún resultado reciente que mostrar en esta sesión. Consulta tu histórico completo en Mi Progreso.</p>
                <button class="btn-primary" id="results-to-progress">Ir a Mi Progreso</button>`;
            container.appendChild(wrap);
            wrap.querySelector('#results-to-progress').addEventListener('click', () => router.navigate('progress'));
            return;
        }

        const pct = (result.nota / 10) * 100;
        const color = result.nota >= 5 ? 'var(--success)' : 'var(--danger)';
        let feedbackText;
        if (result.nota >= 8) feedbackText = '¡Plaza asegurada! Nivel excelente.';
        else if (result.nota >= 5) feedbackText = '¡Aprobado! (Aplicada la penalización de -0.33 por fallo).';
        else feedbackText = 'Suspenso. Estos fallos ya están guardados en tu registro.';

        const bloqueRows = Object.keys(result.bloques).sort().map(b => {
            const stats = result.bloques[b];
            const label = utils.BLOQUE_LABELS[b] || `Bloque ${b}`;
            return `<div class="block-breakdown-row">
                <span class="block-breakdown-label">${label}</span>
                <span class="block-breakdown-bar"><span style="width:${Math.round((stats.aciertos / stats.total) * 100)}%"></span></span>
                <span class="block-breakdown-count">${stats.aciertos}/${stats.total}</span>
            </div>`;
        }).join('');

        let errorsHTML = '<h3 style="color:var(--success);">¡Test perfecto! Ningún fallo registrado en este intento.</h3>';
        if (result.fallos > 0) {
            errorsHTML = '<h3>Repaso de fallos en este test:</h3>' + result.exam.map((q, index) => {
                const marcadaIndex = result.userAnswers[index];
                if (marcadaIndex === q.respuestaIndex) return '';
                const tuTexto = (marcadaIndex !== undefined && q.opciones[marcadaIndex] !== undefined) ? q.opciones[marcadaIndex] : 'En blanco';
                const explicacionHTML = q.explicacion
                    ? `<p class="explicacion-box">💡 ${utils.escapeHtml(q.explicacion)}</p>`
                    : '';
                return `<div class="error-item">
                    <div class="q">${index + 1}. ${utils.escapeHtml(q.pregunta)}</div>
                    <div class="wrong-ans">❌ Tu respuesta: ${utils.escapeHtml(tuTexto)}</div>
                    <div class="right-ans">✅ Correcta: ${utils.escapeHtml(q.opciones[q.respuestaIndex])}</div>
                    ${explicacionHTML}
                </div>`;
            }).join('');
        }

        wrap.innerHTML = `
            <div class="results-header">
                <h1>Resultados</h1>
                <div class="score-circle" style="background: conic-gradient(${color} ${pct}%, var(--card-bg) ${pct}%);">
                    <span id="score-text">${result.nota.toFixed(2)}</span>
                </div>
                <p class="feedback" style="color:${color}">${feedbackText}</p>
            </div>

            <div class="stats-grid">
                <div class="stat-box"><span class="stat-value">${result.aciertos}</span><span class="stat-label">Aciertos</span></div>
                <div class="stat-box error"><span class="stat-value">${result.fallos}</span><span class="stat-label">Fallos</span></div>
                <div class="stat-box neutral"><span class="stat-value">${utils.formatTime(result.timeUsed)}</span><span class="stat-label">Tiempo Invertido</span></div>
            </div>

            <div class="block-breakdown">
                <h3>Desglose por bloque</h3>
                ${bloqueRows}
            </div>

            <div id="errors-container" class="errors-list">${errorsHTML}</div>

            <div class="results-actions">
                <button class="btn-primary" id="results-again">Repetir modo</button>
                <button class="btn-secondary" id="results-home">Ir a Inicio</button>
            </div>
        `;

        container.appendChild(wrap);

        wrap.querySelector('#results-home').addEventListener('click', () => router.navigate('dashboard'));
        wrap.querySelector('#results-again').addEventListener('click', () => {
            const mode = result.mode && !result.mode.startsWith('supuesto:') && result.mode !== 'theme' ? result.mode : null;
            if (mode) TAI.views.quiz.startTest(mode);
            else router.navigate('choose-test');
        });
    }

    TAI.views.results = { render };
})(window);
