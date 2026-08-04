// =====================================================================
// Vista: Quiz / Examen — flujo enfocado con autoguardado y atajos de
// teclado. TAI.views.quiz.startTest(mode, extra) prepara el examen y
// navega a #/quiz; render() se encarga de pintarlo (tanto si viene de
// startTest como si se está recuperando un examen tras una recarga).
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});
    TAI.views = TAI.views || {};
    const { store, utils, state, router } = TAI;

    // ---- Estado interno del examen actual (en memoria) ----
    let currentExam = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let currentOptionOrder = [];
    let timerInterval = null;
    let secondsElapsed = 0;
    let isCountdown = false;
    let timeLimitSeconds = 0;
    let isLearningMode = true;
    let currentMode = 'short';
    let tickCounter = 0;

    let els = {};
    let keyHandler = null;

    function startTest(mode, extra) {
        let pool = (typeof baseDeDatos !== 'undefined' && Array.isArray(baseDeDatos)) ? baseDeDatos.slice() : [];
        currentMode = mode;

        const selectedOpos = state.settings.selectedOpos || [];
        if (selectedOpos.length === 0 && mode !== 'fallos') {
            TAI.ui.toast.warning('Selecciona al menos una oposición en Configuración.');
            router.navigate('settings');
            return;
        }

        if (mode !== 'fallos') {
            pool = pool.filter(q => !q.oposiciones || selectedOpos.some(o => q.oposiciones.includes(o)));
        }

        isLearningMode = !!state.settings.learningMode;

        if (mode === 'theme' && extra) {
            pool = pool.filter(p => p.bloque === extra.bloque && p.tema === extra.tema);
        }
        if (mode === 'oficiales') {
            pool = pool.filter(p => p.origen === 'oficial');
        }
        if (mode === 'fallos') {
            pool = store.getFailedQuestions();
        }

        pool = utils.shuffle(pool);

        let numQuestions = 10;
        isCountdown = false;
        timeLimitSeconds = 0;

        if (mode === 'short') numQuestions = 10;
        if (mode === 'global') numQuestions = 30;
        if (mode === 'oficiales') numQuestions = Math.min(25, pool.length);
        if (mode === 'fallos') numQuestions = pool.length;
        if (mode === 'theme') numQuestions = 10;
        if (mode === 'simulacro') {
            numQuestions = 80;
            isCountdown = true;
            timeLimitSeconds = 120 * 60;
            isLearningMode = false; // Fuerza modo examen (no se persiste en Ajustes)
        }

        currentExam = pool.slice(0, Math.min(numQuestions, pool.length));
        currentQuestionIndex = 0;
        userAnswers = [];
        secondsElapsed = 0;
        tickCounter = 0;

        if (currentExam.length === 0) {
            TAI.ui.toast.warning('No hay preguntas disponibles para esta configuración.');
            return;
        }

        persistSnapshot();
        state.quizActive = true;
        router.navigate('quiz');
    }

    function persistSnapshot() {
        store.setExamInProgress({
            mode: currentMode,
            currentExam,
            currentQuestionIndex,
            userAnswers,
            isLearningMode,
            isCountdown,
            timeLimitSeconds,
            secondsElapsed,
            savedAt: new Date().toISOString()
        });
    }

    function loadSnapshot(snap) {
        currentMode = snap.mode;
        currentExam = snap.currentExam || [];
        currentQuestionIndex = snap.currentQuestionIndex || 0;
        userAnswers = snap.userAnswers || [];
        isLearningMode = !!snap.isLearningMode;
        isCountdown = !!snap.isCountdown;
        timeLimitSeconds = snap.timeLimitSeconds || 0;
        secondsElapsed = snap.secondsElapsed || 0;
    }

    function render(container, params) {
        if (currentExam.length === 0) {
            const snap = store.getExamInProgress();
            if (snap && snap.currentExam && snap.currentExam.length) {
                loadSnapshot(snap);
                TAI.ui.toast.info('Continuando tu examen guardado.');
            }
        }

        state.quizActive = currentExam.length > 0;
        TAI.ui.nav.render();

        if (currentExam.length === 0) {
            container.innerHTML = `
                <div class="quiz-empty">
                    <h1>Sin examen en curso</h1>
                    <p class="hint">No hay ningún test activo. Empieza uno nuevo desde "Elegir Test".</p>
                    <button class="btn-primary" id="quiz-empty-btn">Elegir Test</button>
                </div>`;
            container.querySelector('#quiz-empty-btn').addEventListener('click', () => router.navigate('choose-test'));
            return;
        }

        const wrap = document.createElement('div');
        wrap.className = 'view-quiz';
        wrap.innerHTML = `
            <div class="quiz-topbar">
                <span class="badge" id="question-counter"></span>
                ${isCountdown || !isCountdown ? '<span class="badge timer-badge" id="timer">00:00</span>' : ''}
            </div>
            <div class="progress-bar-container"><div id="progress-bar"></div></div>
            <div class="question-container">
                <span id="question-badge" class="badge"></span>
                <h1 id="question-text" tabindex="-1"></h1>
            </div>
            <div id="options-container" class="options-grid" role="group" aria-label="Opciones de respuesta"></div>
            <div id="insitu-feedback" class="hidden feedback-insitu" role="status" aria-live="polite"></div>
            <button id="next-btn" class="btn-primary hidden" type="button">Siguiente pregunta (Enter)</button>
            <p class="hint quiz-shortcuts-hint">Atajos: 1-4 o A-D para elegir, Enter/Espacio para avanzar, Esc para salir.</p>
        `;
        container.appendChild(wrap);

        els = {
            counter: wrap.querySelector('#question-counter'),
            timer: wrap.querySelector('#timer'),
            progressBar: wrap.querySelector('#progress-bar'),
            badge: wrap.querySelector('#question-badge'),
            text: wrap.querySelector('#question-text'),
            options: wrap.querySelector('#options-container'),
            feedback: wrap.querySelector('#insitu-feedback'),
            nextBtn: wrap.querySelector('#next-btn'),
            questionContainer: wrap.querySelector('.question-container')
        };

        els.nextBtn.addEventListener('click', advanceOrFinish);

        keyHandler = handleKeydown;
        document.addEventListener('keydown', keyHandler);

        startTimer();
        renderQuestion();
    }

    function onLeave() {
        stopTimer();
        if (keyHandler) {
            document.removeEventListener('keydown', keyHandler);
            keyHandler = null;
        }
    }

    function isModalOpen() {
        const overlay = document.querySelector('.modal-overlay');
        return overlay && !overlay.classList.contains('hidden');
    }

    function handleKeydown(e) {
        if (isModalOpen()) return;
        const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f'];
        const key = e.key.toLowerCase();

        if (key === 'escape') {
            e.preventDefault();
            requestExit();
            return;
        }

        if ((key === 'enter' || key === ' ') && !els.nextBtn.classList.contains('hidden')) {
            e.preventDefault();
            advanceOrFinish();
            return;
        }

        let displayIndex = -1;
        if (/^[1-9]$/.test(key)) displayIndex = parseInt(key, 10) - 1;
        else if (LETTERS.includes(key)) displayIndex = LETTERS.indexOf(key);

        if (displayIndex >= 0) {
            const btn = els.options.querySelectorAll('.option-btn')[displayIndex];
            if (btn && !btn.disabled) {
                e.preventDefault();
                btn.click();
            }
        }
    }

    async function requestExit() {
        const ok = await TAI.ui.modal.confirm({
            title: 'Salir del examen',
            message: 'Tu progreso se ha guardado automáticamente. Podrás reanudarlo más tarde desde Inicio.',
            confirmText: 'Salir',
            cancelText: 'Seguir en el examen'
        });
        if (ok) {
            state.quizActive = false;
            router.navigate('dashboard');
        }
    }

    function startTimer() {
        clearInterval(timerInterval);
        formatAndShowTimer();
        timerInterval = setInterval(() => {
            if (isCountdown) {
                timeLimitSeconds--;
                if (timeLimitSeconds <= 0) {
                    clearInterval(timerInterval);
                    timeLimitSeconds = 0;
                    TAI.ui.modal.info({ title: 'Tiempo agotado', message: 'Se ha agotado el tiempo del simulacro. Vamos a corregirlo.' })
                        .then(() => finishExam());
                    return;
                }
            } else {
                secondsElapsed++;
            }
            formatAndShowTimer();
            tickCounter++;
            if (tickCounter % 5 === 0) persistSnapshot();
        }, 1000);
    }

    function formatAndShowTimer() {
        if (!els.timer) return;
        els.timer.textContent = utils.formatTime(isCountdown ? timeLimitSeconds : secondsElapsed);
    }

    function stopTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    function renderQuestion() {
        const q = currentExam[currentQuestionIndex];
        els.counter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentExam.length}`;
        const progressPct = (currentQuestionIndex / currentExam.length) * 100;
        els.progressBar.style.width = `${progressPct}%`;
        els.badge.textContent = utils.questionBadgeText(q);
        els.text.textContent = q.pregunta;
        els.text.focus({ preventScroll: true });

        els.options.innerHTML = '';
        els.feedback.classList.add('hidden');
        els.nextBtn.classList.add('hidden');

        currentOptionOrder = q.opciones.map((text, originalIndex) => ({ text, originalIndex }));
        currentOptionOrder = utils.shuffle(currentOptionOrder);

        const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
        currentOptionOrder.forEach((opt, displayIndex) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'option-btn';
            btn.innerHTML = `<span class="opt-letter" aria-hidden="true">${LETTERS[displayIndex] || ''}</span> <span>${utils.escapeHtml(opt.text)}</span>`;
            btn.dataset.originalIndex = opt.originalIndex;
            btn.addEventListener('click', () => selectOption(opt.originalIndex, btn));
            els.options.appendChild(btn);
        });
    }

    function selectOption(originalIndex, clickedBtn) {
        userAnswers[currentQuestionIndex] = originalIndex;
        const currentQ = currentExam[currentQuestionIndex];
        const isCorrect = originalIndex === currentQ.respuestaIndex;

        // Deshabilita todas las opciones inmediatamente, en ambos modos.
        // Evita que un doble clic (o una pulsación de teclado repetida)
        // en la ÚLTIMA pregunta en Modo Examen dispare selectOption() una
        // segunda vez durante el pequeño margen antes de que
        // advanceOrFinish() cambie de pantalla.
        const allBtns = els.options.querySelectorAll('.option-btn');
        allBtns.forEach(b => (b.disabled = true));

        if (isLearningMode) {
            els.feedback.classList.remove('hidden', 'success-bg', 'error-bg');
            els.nextBtn.classList.remove('hidden');

            if (isCorrect) {
                clickedBtn.classList.add('correct-insitu');
                els.feedback.classList.add('success-bg');
                els.feedback.textContent = '✅ ¡Correcto!';
                removeFailedQuestion(currentQ);
            } else {
                clickedBtn.classList.add('wrong-insitu');
                els.feedback.classList.add('error-bg');
                els.feedback.textContent = '❌ Incorrecto.';
                saveFailedQuestion(currentQ);
                allBtns.forEach(b => {
                    if (parseInt(b.dataset.originalIndex, 10) === currentQ.respuestaIndex) {
                        b.classList.add('correct-insitu');
                    }
                });
            }
            if (currentQ.explicacion) {
                const expEl = document.createElement('p');
                expEl.className = 'explicacion-box';
                expEl.innerHTML = `💡 ${utils.escapeHtml(currentQ.explicacion)}`;
                els.feedback.appendChild(expEl);
            }
            persistSnapshot();
        } else {
            if (!isCorrect) saveFailedQuestion(currentQ);
            else removeFailedQuestion(currentQ);
            persistSnapshot();
            advanceOrFinish();
        }
    }

    function saveFailedQuestion(q) {
        const list = store.getFailedQuestions();
        if (!list.some(x => x.id === q.id)) {
            list.push(q);
            store.setFailedQuestions(list);
        }
    }

    function removeFailedQuestion(q) {
        const list = store.getFailedQuestions().filter(x => x.id !== q.id);
        store.setFailedQuestions(list);
    }

    function advanceOrFinish() {
        // Evita procesar un avance "extra" si el botón "Siguiente" o una
        // tecla quedan pulsados justo durante el margen de 200ms antes de
        // navegar a #/results (p.ej. doble clic tras la última pregunta).
        if (currentQuestionIndex >= currentExam.length) return;

        currentQuestionIndex++;
        persistSnapshot();

        if (currentQuestionIndex < currentExam.length) {
            renderQuestion();
        } else {
            els.progressBar.style.width = '100%';
            els.nextBtn.classList.add('hidden');
            els.options.querySelectorAll('.option-btn').forEach(b => (b.disabled = true));
            setTimeout(finishExam, 200);
        }
    }

    function finishExam() {
        stopTimer();

        let aciertos = 0;
        let fallos = 0;
        currentExam.forEach((q, index) => {
            if (userAnswers[index] === q.respuestaIndex) aciertos++;
            else fallos++;
        });

        const notaSobre10 = utils.computeScore(aciertos, fallos, currentExam.length);
        const timeUsed = isCountdown ? (120 * 60) - timeLimitSeconds : secondsElapsed;
        const bloques = utils.computeBlockBreakdown(currentExam, userAnswers);

        const historyEntry = {
            fecha: new Date().toISOString(),
            modo: currentMode,
            nota: notaSobre10,
            aciertos,
            fallos,
            total: currentExam.length,
            tiempoSegundos: timeUsed,
            bloques
        };
        const history = store.getHistory();
        history.push(historyEntry);
        store.setHistory(history.length > 100 ? history.slice(-100) : history);

        state.lastResult = {
            exam: currentExam,
            userAnswers: userAnswers.slice(),
            aciertos,
            fallos,
            nota: notaSobre10,
            timeUsed,
            bloques,
            mode: currentMode
        };

        store.clearExamInProgress();
        state.quizActive = false;

        // Reset del estado en memoria para el próximo test.
        currentExam = [];
        currentQuestionIndex = 0;
        userAnswers = [];

        router.navigate('results');
    }

    TAI.views.quiz = { render, onLeave, startTest };
})(window);
