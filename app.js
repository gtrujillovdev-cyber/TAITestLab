// =====================================================================
// TAI Prep — Lógica de la aplicación
// Todas las preguntas (tanto las de elaboración propia como las
// procedentes de exámenes oficiales) usan el mismo esquema canónico
// definido en preguntas.js: opciones en texto plano + respuestaIndex.
// =====================================================================

// -----------------------------------------------------
// Persistencia robusta (localStorage puede estar corrupto,
// bloqueado por el navegador, o no existir en modo privado)
// -----------------------------------------------------
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
    } catch (e) {
        console.warn(`No se pudo guardar "${key}" en localStorage.`, e);
    }
}

// Variables de Estado
let currentExam = [];
let currentQuestionIndex = 0;
let userAnswers = []; // índices seleccionados (o null si no coincide ninguna opción)
let currentOptionOrder = []; // mapping de posición mostrada -> índice original de opciones
let timerInterval;
let secondsElapsed = 0;
let isCountdown = false;
let timeLimitSeconds = 0;
let isLearningMode = true; // Por defecto modo estudio activado
let currentMode = 'short';

// Registro de fallos en LocalStorage (guardado por id estable de la pregunta)
let failedQuestionsRegistry = safeGet('failedQuestions', []);
// Historial de intentos (para la pantalla de progreso)
let testHistory = safeGet('testHistory', []);

// -----------------------------------------------------
// Lógica del Tema (Claro, Oscuro, Sistema)
// -----------------------------------------------------
const themeSelector = document.getElementById('theme-selector');
const body = document.body;
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(themeValue) {
    if (themeValue === 'dark') {
        body.classList.add('dark-mode');
    } else if (themeValue === 'light') {
        body.classList.remove('dark-mode');
    } else if (themeValue === 'system') {
        if (systemPrefersDark.matches) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }
    // Sincroniza el color de la barra de navegación móvil con el tema activo
    const themeColorMeta = document.getElementById('theme-color-meta');
    if (themeColorMeta) {
        themeColorMeta.setAttribute('content', body.classList.contains('dark-mode') ? '#0f172a' : '#f1f5f9');
    }
}

// Cargar preferencia guardada o forzar light por defecto
const savedTheme = localStorage.getItem('themePref') || 'light';
themeSelector.value = savedTheme;
applyTheme(savedTheme);

themeSelector.addEventListener('change', (e) => {
    const val = e.target.value;
    try { localStorage.setItem('themePref', val); } catch (e) {}
    applyTheme(val);
});

systemPrefersDark.addEventListener('change', () => {
    if (themeSelector.value === 'system') {
        applyTheme('system');
    }
});

// -----------------------------------------------------
// Referencias del DOM y Lógica Principal
// -----------------------------------------------------
const screens = {
    menu: document.getElementById('menu-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen'),
    viewer: document.getElementById('viewer-screen'),
    supuestosMenu: document.getElementById('supuestos-menu-screen'),
    supuestoActive: document.getElementById('supuesto-active-screen'),
    historial: document.getElementById('historial-screen')
};

const blockSelect = document.getElementById('block-select');
const themeSelect = document.getElementById('theme-select');
const btnThemeTest = document.getElementById('btn-theme-test');
const btnErrores = document.getElementById('btn-errores');
const fallosDesc = document.getElementById('fallos-desc');
const learningModeToggle = document.getElementById('learning-mode-toggle');
const nextBtn = document.getElementById('next-btn');
const insituFeedback = document.getElementById('insitu-feedback');

const BLOQUE_LABELS = {
    I: 'Bloque I — Organización del Estado',
    II: 'Bloque II — Tecnología básica',
    III: 'Bloque III — Desarrollo de sistemas',
    IV: 'Bloque IV — Sistemas y comunicaciones'
};

// Inicializar el texto de los fallos
function updateFallosUI() {
    failedQuestionsRegistry = safeGet('failedQuestions', []);
    if (failedQuestionsRegistry.length > 0) {
        fallosDesc.textContent = `Tienes ${failedQuestionsRegistry.length} preguntas falladas registradas.`;
        btnErrores.disabled = false;
    } else {
        fallosDesc.textContent = `¡Felicidades! No tienes preguntas falladas pendientes.`;
        btnErrores.disabled = true;
    }
}
updateFallosUI();

// Guardar/quitar fallo en LocalStorage, indexado por id estable (no por texto)
function saveFailedQuestion(questionObj) {
    const exists = failedQuestionsRegistry.some(q => q.id === questionObj.id);
    if (!exists) {
        failedQuestionsRegistry.push(questionObj);
        safeSet('failedQuestions', failedQuestionsRegistry);
    }
}

function removeFailedQuestion(questionObj) {
    failedQuestionsRegistry = failedQuestionsRegistry.filter(q => q.id !== questionObj.id);
    safeSet('failedQuestions', failedQuestionsRegistry);
}

// Lógica de los Selectores de Temas
function updateThemeOptions() {
    const block = blockSelect.value;
    themeSelect.innerHTML = '<option value="">-- Selecciona un Tema --</option>';

    if (block) {
        // Solo se listan preguntas con un tema numérico concreto asignado.
        const temas = [...new Set(
            baseDeDatos.filter(p => p.bloque === block && p.tema !== null && p.tema !== undefined).map(p => p.tema)
        )].sort((a, b) => a - b);
        temas.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t;
            opt.textContent = `Tema ${t}`;
            themeSelect.appendChild(opt);
        });
        themeSelect.disabled = false;
    } else {
        themeSelect.disabled = true;
    }
    checkThemeTestButton();
}

themeSelect.addEventListener('change', checkThemeTestButton);

function checkThemeTestButton() {
    btnThemeTest.disabled = !(blockSelect.value && themeSelect.value);
}

// Navegación de Pantallas
function switchScreen(screenName) {
    Object.values(screens).forEach(s => { if (s) { s.classList.remove('active'); s.classList.add('hidden'); } });
    screens[screenName].classList.remove('hidden');
    setTimeout(() => screens[screenName].classList.add('active'), 10);
}

// Lógica Principal del Test
function startTest(mode) {
    let pool = [...baseDeDatos];
    currentMode = mode;

    // Filtro por oposiciones seleccionadas
    const checkboxes = document.querySelectorAll('#opo-checkboxes input[type="checkbox"]:checked');
    const selectedOpos = Array.from(checkboxes).map(cb => cb.value);

    if (selectedOpos.length === 0 && mode !== 'fallos') {
        alert("Por favor, selecciona al menos una oposición en el menú.");
        return;
    }

    if (mode !== 'fallos') {
        pool = pool.filter(q => {
            if (!q.oposiciones) return true; // null/ausente = pregunta genérica válida para todas
            return selectedOpos.some(opo => q.oposiciones.includes(opo));
        });
    }

    isLearningMode = learningModeToggle.checked;

    if (mode === 'theme') {
        const blk = blockSelect.value;
        const tma = parseInt(themeSelect.value, 10);
        pool = pool.filter(p => p.bloque === blk && p.tema === tma);
    }

    if (mode === 'oficiales') {
        pool = pool.filter(p => p.origen === 'oficial');
    }

    if (mode === 'fallos') {
        pool = [...failedQuestionsRegistry];
    }

    pool = pool.sort(() => 0.5 - Math.random());

    let numQuestions = 10;
    isCountdown = false;

    if (mode === 'short') numQuestions = 10;
    if (mode === 'global') numQuestions = 30;
    if (mode === 'oficiales') numQuestions = Math.min(25, pool.length);
    if (mode === 'fallos') numQuestions = pool.length;
    if (mode === 'simulacro') {
        numQuestions = 80;
        isCountdown = true;
        timeLimitSeconds = 120 * 60; // 120 minutos
        isLearningMode = false; // Fuerza modo examen
        learningModeToggle.checked = false; // Visual update
    }
    if (mode === 'theme') numQuestions = 10;

    currentExam = pool.slice(0, Math.min(numQuestions, pool.length));
    currentQuestionIndex = 0;
    userAnswers = [];
    secondsElapsed = 0;

    if (currentExam.length === 0) {
        alert("No hay preguntas disponibles para esta configuración.");
        return;
    }

    document.getElementById('status-bar').classList.remove('hidden');
    startTimer();
    renderQuestion();
    switchScreen('quiz');
}

function startTimer() {
    clearInterval(timerInterval);
    const timerDisplay = document.getElementById('timer');

    timerInterval = setInterval(() => {
        if (isCountdown) {
            timeLimitSeconds--;
            if (timeLimitSeconds <= 0) {
                clearInterval(timerInterval);
                alert("¡Tiempo agotado!");
                showResults();
                return;
            }
            formatTime(timeLimitSeconds, timerDisplay);
        } else {
            secondsElapsed++;
            formatTime(secondsElapsed, timerDisplay);
        }
    }, 1000);
}

function formatTime(totalSeconds, element) {
    const m = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    element.textContent = `${m}:${s}`;
}

function stopTimer() {
    clearInterval(timerInterval);
}

function questionBadgeText(q) {
    if (q.origen === 'oficial') {
        return `${BLOQUE_LABELS[q.bloque] || ('Bloque ' + q.bloque)} · 📜 Examen Oficial`;
    }
    return `${BLOQUE_LABELS[q.bloque] || ('Bloque ' + q.bloque)} · Tema ${q.tema}`;
}

function renderQuestion() {
    const q = currentExam[currentQuestionIndex];

    document.getElementById('question-counter').textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentExam.length}`;
    const progressPct = (currentQuestionIndex / currentExam.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPct}%`;

    document.getElementById('question-badge').textContent = questionBadgeText(q);
    document.getElementById('question-text').textContent = q.pregunta;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    insituFeedback.classList.add('hidden');
    nextBtn.classList.add('hidden');

    // Barajamos las opciones conservando la referencia al índice original
    // (que es el que determina cuál es la correcta: q.respuestaIndex).
    currentOptionOrder = q.opciones.map((text, originalIndex) => ({ text, originalIndex }));
    currentOptionOrder.sort(() => 0.5 - Math.random());

    const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
    currentOptionOrder.forEach((opt, displayIndex) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="opt-letter">${LETTERS[displayIndex] || ''}</span> ${opt.text}`;
        btn.onclick = () => selectOption(opt.originalIndex, btn, optionsContainer);
        btn.dataset.originalIndex = opt.originalIndex;
        optionsContainer.appendChild(btn);
    });
}

function selectOption(originalIndex, clickedBtn, container) {
    userAnswers.push(originalIndex);
    const currentQ = currentExam[currentQuestionIndex];
    const isCorrect = originalIndex === currentQ.respuestaIndex;

    if (isLearningMode) {
        const allBtns = container.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.disabled = true);

        insituFeedback.classList.remove('hidden');
        insituFeedback.classList.remove('success-bg', 'error-bg');
        nextBtn.classList.remove('hidden');

        if (isCorrect) {
            clickedBtn.classList.add('correct-insitu');
            insituFeedback.classList.add('success-bg');
            insituFeedback.textContent = "✅ ¡Correcto!";
            removeFailedQuestion(currentQ);
        } else {
            clickedBtn.classList.add('wrong-insitu');
            insituFeedback.classList.add('error-bg');
            insituFeedback.textContent = "❌ Incorrecto.";
            saveFailedQuestion(currentQ);

            allBtns.forEach(b => {
                if (parseInt(b.dataset.originalIndex, 10) === currentQ.respuestaIndex) {
                    b.classList.add('correct-insitu');
                }
            });
        }
    } else {
        if (!isCorrect) {
            saveFailedQuestion(currentQ);
        } else {
            removeFailedQuestion(currentQ);
        }
        advanceOrFinish();
    }
}

function nextQuestion() {
    advanceOrFinish();
}

function advanceOrFinish() {
    currentQuestionIndex++;

    if (currentQuestionIndex < currentExam.length) {
        document.querySelector('.question-container').style.opacity = '0';
        document.getElementById('options-container').style.opacity = '0';
        insituFeedback.style.opacity = '0';
        nextBtn.style.opacity = '0';

        setTimeout(() => {
            renderQuestion();
            document.querySelector('.question-container').style.opacity = '1';
            document.getElementById('options-container').style.opacity = '1';
            insituFeedback.style.opacity = '1';
            nextBtn.style.opacity = '1';
        }, 200);
    } else {
        document.getElementById('progress-bar').style.width = `100%`;
        updateFallosUI();
        setTimeout(showResults, 300);
    }
}

function showResults() {
    stopTimer();
    document.getElementById('status-bar').classList.add('hidden');

    let aciertos = 0;
    let fallos = 0;
    const errorsContainer = document.getElementById('errors-container');
    errorsContainer.innerHTML = '<h3>Repaso de fallos en este Test:</h3>';
    let hasErrors = false;

    currentExam.forEach((q, index) => {
        const marcadaIndex = userAnswers[index];

        if (marcadaIndex === q.respuestaIndex) {
            aciertos++;
        } else {
            fallos++;
            hasErrors = true;
            const div = document.createElement('div');
            div.className = 'error-item';
            const tuTexto = (marcadaIndex !== undefined && q.opciones[marcadaIndex] !== undefined)
                ? q.opciones[marcadaIndex] : 'En blanco';
            div.innerHTML = `
                <div class="q">${index + 1}. ${q.pregunta}</div>
                <div class="wrong-ans">❌ Tu respuesta: ${tuTexto}</div>
                <div class="right-ans">✅ Correcta: ${q.opciones[q.respuestaIndex]}</div>
            `;
            errorsContainer.appendChild(div);
        }
    });

    if (!hasErrors) {
        errorsContainer.innerHTML = '<h3 style="color:var(--success);">¡Simulacro perfecto! Ningún fallo registrado en este intento.</h3>';
    }

    let notaNeta = aciertos - (fallos / 3);
    if (notaNeta < 0) notaNeta = 0;
    const notaSobre10 = currentExam.length > 0 ? (notaNeta / currentExam.length) * 10 : 0;

    const scoreCircle = document.querySelector('.score-circle');
    const pct = (notaSobre10 / 10) * 100;
    let color = 'var(--success)';
    if (notaSobre10 < 5) color = 'var(--danger)';

    scoreCircle.style.background = `conic-gradient(${color} ${pct}%, var(--card-bg) ${pct}%)`;

    document.getElementById('score-text').textContent = notaSobre10.toFixed(2);
    document.getElementById('stat-correct').textContent = aciertos;
    document.getElementById('stat-wrong').textContent = fallos;

    let timeUsed;
    if (isCountdown) {
        timeUsed = (120 * 60) - timeLimitSeconds;
        formatTime(timeUsed, document.getElementById('stat-time'));
    } else {
        timeUsed = secondsElapsed;
        formatTime(secondsElapsed, document.getElementById('stat-time'));
    }

    const feedback = document.getElementById('feedback-message');
    feedback.style.color = color;
    if (notaSobre10 >= 8) feedback.textContent = "¡Plaza asegurada! Nivel excelente.";
    else if (notaSobre10 >= 5) feedback.textContent = "¡Aprobado! (Aplicada la penalización de -0.33 por fallo).";
    else feedback.textContent = "Suspenso. Estos fallos ya están guardados en tu registro.";

    // Guardamos el intento en el historial de progreso
    testHistory.push({
        fecha: new Date().toISOString(),
        modo: currentMode,
        nota: Number(notaSobre10.toFixed(2)),
        aciertos,
        fallos,
        total: currentExam.length,
        tiempoSegundos: timeUsed
    });
    if (testHistory.length > 100) testHistory = testHistory.slice(-100);
    safeSet('testHistory', testHistory);

    switchScreen('results');
}

function returnToMenu() {
    stopTimer();
    switchScreen('menu');
}

function openViewer() {
    switchScreen('viewer');
    const viewerList = document.getElementById('viewer-list');
    viewerList.innerHTML = '';

    baseDeDatos.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'viewer-item';

        let optionsHTML = '';
        q.opciones.forEach((opt, i) => {
            const isCorrect = i === q.respuestaIndex;
            optionsHTML += `<li class="${isCorrect ? 'correct-option' : ''}">${opt}</li>`;
        });

        const origenBadge = q.origen === 'oficial'
            ? `<span class="badge oficial-badge">📜 Oficial</span>`
            : `<span class="badge">Tema ${q.tema}</span>`;

        item.innerHTML = `
            <div class="viewer-question-header">
                <span class="badge">#${index + 1}</span>
                <span class="badge" style="background: var(--accent); color:white;">Bloque ${q.bloque}</span>
                ${origenBadge}
            </div>
            <h4 style="margin-top: 10px;">${q.pregunta}</h4>
            <ul class="viewer-options">
                ${optionsHTML}
            </ul>
        `;
        viewerList.appendChild(item);
    });
}

// -----------------------------------------------------
// Historial de progreso
// -----------------------------------------------------
function openHistorial() {
    switchScreen('historial');
    const container = document.getElementById('historial-list');
    const summary = document.getElementById('historial-summary');
    container.innerHTML = '';

    testHistory = safeGet('testHistory', []);

    if (testHistory.length === 0) {
        summary.innerHTML = '<p class="hint">Todavía no has completado ningún test. Cuando termines uno, aparecerá aquí.</p>';
        return;
    }

    const notaMedia = testHistory.reduce((a, h) => a + h.nota, 0) / testHistory.length;
    const mejorNota = Math.max(...testHistory.map(h => h.nota));
    const totalTests = testHistory.length;

    summary.innerHTML = `
        <div class="stats-grid">
            <div class="stat-box"><span class="stat-value">${totalTests}</span><span class="stat-label">Tests realizados</span></div>
            <div class="stat-box neutral"><span class="stat-value">${notaMedia.toFixed(2)}</span><span class="stat-label">Nota media</span></div>
            <div class="stat-box"><span class="stat-value">${mejorNota.toFixed(2)}</span><span class="stat-label">Mejor nota</span></div>
        </div>
    `;

    const modeLabels = { short: 'Test Corto', global: 'Test Global', simulacro: 'Simulacro Real', theme: 'Por Tema', fallos: 'Repaso de Fallos', oficiales: 'Exámenes Oficiales' };

    [...testHistory].reverse().slice(0, 25).forEach(h => {
        const div = document.createElement('div');
        div.className = 'historial-item';
        const fecha = new Date(h.fecha);
        const fechaStr = isNaN(fecha) ? '' : fecha.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
        const modoLabel = (h.modo || '').startsWith('supuesto:') ? 'Supuesto Práctico' : (modeLabels[h.modo] || h.modo);
        const notaClass = h.nota >= 5 ? 'nota-ok' : 'nota-fail';
        div.innerHTML = `
            <div class="historial-fecha">${fechaStr}</div>
            <div class="historial-modo">${modoLabel}</div>
            <div class="historial-detalle">${h.aciertos} ✅ &nbsp; ${h.fallos} ❌ &nbsp; / ${h.total}</div>
            <div class="historial-nota ${notaClass}">${h.nota.toFixed(2)}</div>
        `;
        container.appendChild(div);
    });
}

function clearHistorial() {
    if (!confirm('¿Seguro que quieres borrar todo tu historial de resultados? Esta acción no se puede deshacer.')) return;
    testHistory = [];
    safeSet('testHistory', []);
    openHistorial();
}

// -----------------------------------------------------
// Lógica de Supuestos Prácticos
// -----------------------------------------------------

let currentSupuesto = null;
let currentSupuestoQIndex = 0;
let supuestoUserAnswers = [];
let supuestoAciertos = 0;
let supuestoFallos = 0;

function openSupuestosMenu() {
    switchScreen('supuestosMenu');
    const container = document.getElementById('supuestos-list');
    container.innerHTML = '';

    if (typeof baseDeSupuestos === 'undefined' || baseDeSupuestos.length === 0) {
        container.innerHTML = '<p>No hay supuestos cargados en la base de datos.</p>';
        return;
    }

    baseDeSupuestos.forEach((s) => {
        const btn = document.createElement('button');
        btn.className = 'btn-card';
        btn.innerHTML = `<h3>${s.titulo}</h3><p>${s.preguntas.length} preguntas basadas en el caso práctico.</p>`;
        btn.onclick = () => startSupuesto(s.id);
        container.appendChild(btn);
    });
}

function startSupuesto(id) {
    currentSupuesto = baseDeSupuestos.find(s => s.id === id);
    if (!currentSupuesto) return;

    currentSupuestoQIndex = 0;
    supuestoUserAnswers = [];
    supuestoAciertos = 0;
    supuestoFallos = 0;

    document.getElementById('supuesto-context-panel').innerHTML = currentSupuesto.contextoHTML;
    renderSupuestoQuestion();
    switchScreen('supuestoActive');
}

function renderSupuestoQuestion() {
    const q = currentSupuesto.preguntas[currentSupuestoQIndex];

    const progressPct = (currentSupuestoQIndex / currentSupuesto.preguntas.length) * 100;
    document.getElementById('supuesto-progress-bar').style.width = `${progressPct}%`;
    document.getElementById('supuesto-question-badge').textContent = `Pregunta ${currentSupuestoQIndex + 1} de ${currentSupuesto.preguntas.length}`;
    document.getElementById('supuesto-question-text').textContent = q.pregunta;

    const optionsContainer = document.getElementById('supuesto-options-container');
    optionsContainer.innerHTML = '';

    document.getElementById('supuesto-feedback').classList.add('hidden');
    document.getElementById('supuesto-next-btn').classList.add('hidden');

    q.opciones.forEach((opcion, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opcion;
        btn.onclick = () => selectSupuestoOption(index, btn, optionsContainer);
        optionsContainer.appendChild(btn);
    });

    if (currentSupuestoQIndex === currentSupuesto.preguntas.length - 1) {
        document.getElementById('supuesto-finish-btn').classList.remove('hidden');
    } else {
        document.getElementById('supuesto-finish-btn').classList.add('hidden');
    }
}

function selectSupuestoOption(selectedIndex, clickedBtn, container) {
    const currentQ = currentSupuesto.preguntas[currentSupuestoQIndex];
    supuestoUserAnswers.push(selectedIndex);

    const allBtns = container.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    const feedback = document.getElementById('supuesto-feedback');
    feedback.classList.remove('hidden', 'success-bg', 'error-bg');

    if (selectedIndex === currentQ.respuestaCorrecta) {
        clickedBtn.classList.add('correct-insitu');
        feedback.classList.add('success-bg');
        feedback.textContent = "✅ ¡Correcto!";
        supuestoAciertos++;
    } else {
        clickedBtn.classList.add('wrong-insitu');
        feedback.classList.add('error-bg');
        feedback.textContent = "❌ Incorrecto.";
        supuestoFallos++;
        allBtns[currentQ.respuestaCorrecta].classList.add('correct-insitu');
    }

    if (currentSupuestoQIndex < currentSupuesto.preguntas.length - 1) {
        document.getElementById('supuesto-next-btn').classList.remove('hidden');
    }
}

function nextSupuestoQuestion() {
    currentSupuestoQIndex++;
    if (currentSupuestoQIndex < currentSupuesto.preguntas.length) {
        renderSupuestoQuestion();
    }
}

function finishSupuestoEarly() {
    let notaNeta = supuestoAciertos - (supuestoFallos / 3);
    if (notaNeta < 0) notaNeta = 0;
    const notaSobre10 = (notaNeta / currentSupuesto.preguntas.length) * 10;

    testHistory.push({
        fecha: new Date().toISOString(),
        modo: 'supuesto:' + currentSupuesto.id,
        nota: Number(notaSobre10.toFixed(2)),
        aciertos: supuestoAciertos,
        fallos: supuestoFallos,
        total: currentSupuesto.preguntas.length,
        tiempoSegundos: null
    });
    if (testHistory.length > 100) testHistory = testHistory.slice(-100);
    safeSet('testHistory', testHistory);

    alert(`Supuesto Finalizado.\nAciertos: ${supuestoAciertos}\nFallos: ${supuestoFallos}\nNota: ${notaSobre10.toFixed(2)} sobre 10`);
    openSupuestosMenu();
}
