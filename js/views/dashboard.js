// =====================================================================
// Vista: Inicio / Dashboard
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});
    TAI.views = TAI.views || {};
    const { store, utils, router } = TAI;

    function statBox(value, label, extraClass) {
        return `<div class="stat-box ${extraClass || ''}"><span class="stat-value">${value}</span><span class="stat-label">${label}</span></div>`;
    }

    function render(container) {
        const history = store.getHistory();
        const failed = store.getFailedQuestions();
        const examInProgress = store.getExamInProgress();

        const notaMedia = history.length ? (history.reduce((a, h) => a + h.nota, 0) / history.length) : 0;
        const mejorNota = history.length ? Math.max(...history.map(h => h.nota)) : 0;
        const racha = utils.computeStreak(history);

        const wrap = document.createElement('div');
        wrap.className = 'view-dashboard';

        let resumeBanner = '';
        if (examInProgress && examInProgress.currentExam && examInProgress.currentExam.length) {
            const pct = Math.round((examInProgress.currentQuestionIndex / examInProgress.currentExam.length) * 100);
            resumeBanner = `
                <div class="resume-banner" role="status">
                    <div>
                        <strong>Tienes un examen a medias</strong>
                        <p class="hint">${utils.modeLabel(examInProgress.mode)} · pregunta ${examInProgress.currentQuestionIndex + 1} de ${examInProgress.currentExam.length} (${pct}%)</p>
                    </div>
                    <div class="resume-actions">
                        <button type="button" class="btn-primary small-btn" id="resume-exam-btn">Reanudar</button>
                        <button type="button" class="btn-secondary small-btn" id="discard-exam-btn">Descartar</button>
                    </div>
                </div>`;
        }

        wrap.innerHTML = `
            <h1>Inicio</h1>
            <p class="hint">Resumen de tu progreso y accesos directos a los modos de test más usados.</p>
            ${resumeBanner}
            <div class="stats-grid dashboard-stats">
                ${statBox(notaMedia.toFixed(2), 'Nota media', 'neutral')}
                ${statBox(mejorNota.toFixed(2), 'Mejor nota')}
                ${statBox(failed.length, 'Fallos pendientes', failed.length ? 'error' : 'neutral')}
                ${statBox(racha, racha === 1 ? 'Día seguido' : 'Días seguidos', 'neutral')}
            </div>
            <h2 class="section-title">Accesos rápidos</h2>
            <div class="menu-grid" id="dashboard-shortcuts">
                <button class="btn-card" data-start="short"><h3>⏱️ Test Corto</h3><p>10 preguntas aleatorias para un repaso rápido.</p></button>
                <button class="btn-card" data-start="global"><h3>🌍 Test Global</h3><p>30 preguntas mezcladas de todos los bloques.</p></button>
                <button class="btn-card highlight" data-start="simulacro"><h3>🎓 Simulacro Real</h3><p>80 preguntas, 120 min, condiciones de examen.</p></button>
                <button class="btn-card danger-card" data-start="fallos" ${failed.length ? '' : 'disabled'}><h3>🔥 Repaso de Fallos</h3><p>${failed.length} preguntas falladas pendientes.</p></button>
            </div>
            <p class="dashboard-more"><a href="#/choose-test">Ver todos los modos de test →</a></p>
        `;

        container.appendChild(wrap);

        const resumeBtn = wrap.querySelector('#resume-exam-btn');
        if (resumeBtn) {
            resumeBtn.addEventListener('click', () => router.navigate('quiz', { id: 'resume' }));
        }
        const discardBtn = wrap.querySelector('#discard-exam-btn');
        if (discardBtn) {
            discardBtn.addEventListener('click', async () => {
                const ok = await TAI.ui.modal.confirm({
                    title: 'Descartar examen',
                    message: 'Se perderá el progreso del examen a medias. Esta acción no se puede deshacer.',
                    confirmText: 'Descartar',
                    danger: true
                });
                if (ok) {
                    store.clearExamInProgress();
                    TAI.ui.toast.info('Examen descartado.');
                    render0(container);
                }
            });
        }

        wrap.querySelectorAll('[data-start]').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.disabled) return;
                TAI.views.quiz.startTest(btn.dataset.start);
            });
        });
    }

    function render0(container) {
        container.innerHTML = '';
        render(container);
    }

    TAI.views.dashboard = { render };
})(window);
