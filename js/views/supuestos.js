// =====================================================================
// Vistas: Supuestos Prácticos — menú (#/supuestos) y resolución
// (#/supuesto/:id). Mismo esquema de datos que la versión anterior
// (opciones ya prefijadas "a) ".."d) " + respuestaCorrecta).
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});
    TAI.views = TAI.views || {};
    const { store, state, router } = TAI;

    // ---------------- Menú ----------------
    function renderMenu(container) {
        const wrap = document.createElement('div');
        wrap.className = 'view-supuestos-menu';
        wrap.innerHTML = `
            <h1>📝 Supuestos Prácticos</h1>
            <p class="hint">Elige un caso práctico. La Parte II del examen consiste en preguntas basadas en un supuesto.</p>
            <div id="supuestos-list" class="menu-grid"></div>
        `;
        container.appendChild(wrap);

        const list = wrap.querySelector('#supuestos-list');
        const supuestos = (typeof baseDeSupuestos !== 'undefined' && Array.isArray(baseDeSupuestos)) ? baseDeSupuestos : [];

        if (supuestos.length === 0) {
            list.innerHTML = '<p class="hint">No hay supuestos cargados en la base de datos.</p>';
            return;
        }

        supuestos.forEach(s => {
            const btn = document.createElement('button');
            btn.className = 'btn-card';
            btn.innerHTML = `<h3>${TAI.utils.escapeHtml(s.titulo)}</h3><p>${s.preguntas.length} preguntas basadas en el caso práctico.</p>`;
            btn.addEventListener('click', () => router.navigate('supuesto', { id: s.id }));
            list.appendChild(btn);
        });
    }

    // ---------------- Resolución de un supuesto ----------------
    let currentSupuesto = null;
    let qIndex = 0;
    let answers = [];
    let aciertos = 0;
    let fallos = 0;
    let keyHandler = null;

    function isModalOpen() {
        const overlay = document.querySelector('.modal-overlay');
        return overlay && !overlay.classList.contains('hidden');
    }

    function renderActive(container, params) {
        const supuestos = (typeof baseDeSupuestos !== 'undefined' && Array.isArray(baseDeSupuestos)) ? baseDeSupuestos : [];
        currentSupuesto = supuestos.find(s => s.id === (params && params.id));

        if (!currentSupuesto) {
            container.innerHTML = `<h1>Supuesto no encontrado</h1><p class="hint">Vuelve al listado de supuestos.</p>`;
            const btn = document.createElement('button');
            btn.className = 'btn-primary';
            btn.textContent = 'Ver Supuestos';
            btn.addEventListener('click', () => router.navigate('supuestos'));
            container.appendChild(btn);
            return;
        }

        qIndex = 0;
        answers = [];
        aciertos = 0;
        fallos = 0;
        state.quizActive = true;
        TAI.ui.nav.render();

        const wrap = document.createElement('div');
        wrap.className = 'view-supuesto-active split-screen';
        wrap.innerHTML = `
            <div class="supuesto-context-panel">${currentSupuesto.contextoHTML}</div>
            <div class="supuesto-questions-panel">
                <div class="progress-bar-container"><div id="supuesto-progress-bar"></div></div>
                <div class="question-container">
                    <span id="supuesto-question-badge" class="badge"></span>
                    <h1 id="supuesto-question-text" tabindex="-1"></h1>
                </div>
                <div id="supuesto-options-container" class="options-grid" role="group" aria-label="Opciones de respuesta"></div>
                <div id="supuesto-feedback" class="hidden feedback-insitu" role="status" aria-live="polite"></div>
                <button id="supuesto-next-btn" class="btn-primary hidden" type="button">Siguiente pregunta (Enter)</button>
                <button id="supuesto-finish-btn" class="btn-primary danger-card hidden" type="button" style="margin-top:10px;">Finalizar Supuesto</button>
            </div>
        `;
        container.appendChild(wrap);

        keyHandler = handleKeydown;
        document.addEventListener('keydown', keyHandler);

        renderQuestion(wrap);
    }

    function handleKeydown(e) {
        if (isModalOpen()) return;
        const key = e.key.toLowerCase();
        if (key === 'escape') {
            e.preventDefault();
            requestExit();
            return;
        }
        const nextBtn = document.getElementById('supuesto-next-btn');
        if ((key === 'enter' || key === ' ') && nextBtn && !nextBtn.classList.contains('hidden')) {
            e.preventDefault();
            nextBtn.click();
            return;
        }
        const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f'];
        let idx = -1;
        if (/^[1-9]$/.test(key)) idx = parseInt(key, 10) - 1;
        else if (LETTERS.includes(key)) idx = LETTERS.indexOf(key);
        if (idx >= 0) {
            const options = document.querySelectorAll('#supuesto-options-container .option-btn');
            const btn = options[idx];
            if (btn && !btn.disabled) {
                e.preventDefault();
                btn.click();
            }
        }
    }

    async function requestExit() {
        const ok = await TAI.ui.modal.confirm({
            title: 'Salir del supuesto',
            message: 'Se perderá el progreso de este supuesto práctico (no se autoguarda). ¿Salir ahora?',
            confirmText: 'Salir',
            cancelText: 'Seguir'
        });
        if (ok) {
            state.quizActive = false;
            router.navigate('supuestos');
        }
    }

    function renderQuestion(wrap) {
        const q = currentSupuesto.preguntas[qIndex];
        const progressPct = (qIndex / currentSupuesto.preguntas.length) * 100;
        wrap.querySelector('#supuesto-progress-bar').style.width = `${progressPct}%`;
        wrap.querySelector('#supuesto-question-badge').textContent = `Pregunta ${qIndex + 1} de ${currentSupuesto.preguntas.length}`;
        const textEl = wrap.querySelector('#supuesto-question-text');
        textEl.textContent = q.pregunta;
        textEl.focus({ preventScroll: true });

        const optionsContainer = wrap.querySelector('#supuesto-options-container');
        optionsContainer.innerHTML = '';
        const feedback = wrap.querySelector('#supuesto-feedback');
        const nextBtn = wrap.querySelector('#supuesto-next-btn');
        const finishBtn = wrap.querySelector('#supuesto-finish-btn');
        feedback.classList.add('hidden');
        nextBtn.classList.add('hidden');

        q.opciones.forEach((opcion, index) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'option-btn';
            btn.textContent = opcion;
            btn.addEventListener('click', () => selectOption(index, btn, optionsContainer, feedback, nextBtn));
            optionsContainer.appendChild(btn);
        });

        if (qIndex === currentSupuesto.preguntas.length - 1) {
            finishBtn.classList.remove('hidden');
            finishBtn.onclick = () => finishSupuesto();
        } else {
            finishBtn.classList.add('hidden');
        }

        nextBtn.onclick = () => {
            qIndex++;
            if (qIndex < currentSupuesto.preguntas.length) renderQuestion(wrap);
        };
    }

    function selectOption(selectedIndex, clickedBtn, container, feedback, nextBtn) {
        const q = currentSupuesto.preguntas[qIndex];
        answers[qIndex] = selectedIndex;

        const allBtns = container.querySelectorAll('.option-btn');
        allBtns.forEach(b => (b.disabled = true));

        feedback.classList.remove('hidden', 'success-bg', 'error-bg');

        if (selectedIndex === q.respuestaCorrecta) {
            clickedBtn.classList.add('correct-insitu');
            feedback.classList.add('success-bg');
            feedback.textContent = '✅ ¡Correcto!';
            aciertos++;
        } else {
            clickedBtn.classList.add('wrong-insitu');
            feedback.classList.add('error-bg');
            feedback.textContent = '❌ Incorrecto.';
            fallos++;
            allBtns[q.respuestaCorrecta].classList.add('correct-insitu');
        }

        if (q.explicacion) {
            const expEl = document.createElement('p');
            expEl.className = 'explicacion-box';
            expEl.innerHTML = `💡 ${TAI.utils.escapeHtml(q.explicacion)}`;
            feedback.appendChild(expEl);
        }

        if (qIndex < currentSupuesto.preguntas.length - 1) {
            nextBtn.classList.remove('hidden');
        }
    }

    async function finishSupuesto() {
        const total = currentSupuesto.preguntas.length;
        const notaSobre10 = TAI.utils.computeScore(aciertos, fallos, total);

        const history = store.getHistory();
        history.push({
            fecha: new Date().toISOString(),
            modo: 'supuesto:' + currentSupuesto.id,
            nota: notaSobre10,
            aciertos,
            fallos,
            total,
            tiempoSegundos: null
        });
        store.setHistory(history.length > 100 ? history.slice(-100) : history);

        state.quizActive = false;

        await TAI.ui.modal.info({
            title: 'Supuesto finalizado',
            message: `Aciertos: ${aciertos} · Fallos: ${fallos} · Nota: ${notaSobre10.toFixed(2)} sobre 10.`
        });
        router.navigate('supuestos');
    }

    function onLeaveActive() {
        if (keyHandler) {
            document.removeEventListener('keydown', keyHandler);
            keyHandler = null;
        }
        // Si se abandona el supuesto sin pasar por requestExit() (atrás/
        // adelante del navegador, hash editado a mano...), la navegación
        // no debe quedarse encajada en modo "enfocado" en el resto de la app.
        state.quizActive = false;
    }

    TAI.views.supuestos = { render: renderMenu };
    TAI.views.supuesto = { render: renderActive, onLeave: onLeaveActive };
})(window);
