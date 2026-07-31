// =====================================================================
// smoke.js — pruebas de humo end-to-end con Node + domstub.js (sin
// navegador ni dependencias externas). Ejecutar con:
//   node test/smoke.js
// Comprueba, cargando los ficheros reales de la app en el mismo orden
// que index.html:
//   - cada modo de test (corto, global, oficiales, por tema, fallos,
//     simulacro) se puede empezar y completar sin excepciones
//   - el flujo completo de un quiz calcula bien aciertos/fallos/nota
//   - el autoguardado recupera un examen a medias tras "recargar"
//   - el Banco de Preguntas filtra por texto/bloque/tema/origen
//   - un Supuesto Práctico se puede resolver de principio a fin
//   - el historial / Mi Progreso se renderiza sin excepciones
// =====================================================================
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { createWindowSandbox } = require('./domstub');

const ROOT = path.join(__dirname, '..');

const SCRIPT_ORDER = [
    'preguntas.js',
    'supuestos.js',
    'js/store.js',
    'js/utils.js',
    'js/state.js',
    'js/theme.js',
    'js/router.js',
    'js/ui/toast.js',
    'js/ui/modal.js',
    'js/ui/nav.js',
    'js/views/dashboard.js',
    'js/views/settings.js',
    'js/views/chooseTest.js',
    'js/views/quiz.js',
    'js/views/results.js',
    'js/views/bank.js',
    'js/views/supuestos.js',
    'js/views/progress.js',
    'js/views/help.js',
    'js/main.js'
];

let passed = 0;
let failed = 0;
function assert(cond, msg) {
    if (cond) { passed++; console.log(`  \x1b[32m✓\x1b[0m ${msg}`); }
    else { failed++; console.log(`  \x1b[31m✗ FALLO\x1b[0m ${msg}`); }
}
function section(title) { console.log(`\n${title}`); }

// Nota: se concatenan todos los ficheros y se ejecutan en una única
// llamada a vm.runInContext. Esto replica el comportamiento real de un
// navegador, donde varias etiquetas <script> clásicas comparten un mismo
// entorno léxico global para las declaraciones "const"/"let" de nivel
// superior (por eso preguntas.js puede declarar "const baseDeDatos" y
// que los scripts posteriores lo usen como identificador global sin
// pasar por "window."). Ejecutar cada fichero por separado con vm no
// preserva ese entorno léxico compartido entre llamadas.
function loadAll(ctx) {
    const combined = SCRIPT_ORDER.map((rel) => {
        const code = fs.readFileSync(path.join(ROOT, rel), 'utf8');
        return `// ---- ${rel} ----\n${code}`;
    }).join('\n;\n');
    // "preguntas.js"/"supuestos.js" declaran baseDeDatos/baseDeSupuestos
    // como "const" de nivel superior: son visibles como identificadores
    // globales para el resto de scripts (igual que en un navegador real),
    // pero no como propiedades de "window". Para poder inspeccionarlos
    // cómodamente desde este script de test, se exponen explícitamente.
    const expose = '\n;\nwindow.baseDeDatos = baseDeDatos; window.baseDeSupuestos = baseDeSupuestos;\n';
    vm.runInContext(combined + expose, ctx, { filename: 'bundle.js' });
}

function text(el) { return el ? el.textContent.trim() : ''; }
function q(ctx, sel) { return ctx.document.querySelector(sel); }
function qa(ctx, sel) { return ctx.document.querySelectorAll(sel); }

function wait(ms) { return new Promise((r) => setTimeout(r, ms)); }

// Los manejadores de la app llaman a e.preventDefault()/e.target; el
// domstub no crea eventos "reales", así que este helper añade lo mínimo
// necesario al simular keydown/change/input a mano.
function fireKey(ctx, key) {
    ctx.document.dispatchEvent({ type: 'keydown', key, preventDefault() {}, stopPropagation() {} });
}
function fireEvent(el, type) {
    el.dispatchEvent({ type, target: el, preventDefault() {}, stopPropagation() {} });
}

// Responde el quiz activo hasta que termina (o se alcanza un límite de
// seguridad), haciendo clic siempre en la primera opción disponible.
async function answerQuizToCompletion(ctx, maxSteps) {
    let steps = 0;
    while (ctx.TAI.router.getCurrentName() === 'quiz' && steps < maxSteps) {
        const options = qa(ctx, '#options-container .option-btn').filter((b) => !b.disabled);
        if (options.length === 0) {
            // Puede que ya esté mostrando feedback con next-btn visible,
            // o que quiz.js esté a punto de navegar a #/results tras el
            // setTimeout(finishExam, 200) de la última pregunta.
            const nextBtn = q(ctx, '#next-btn');
            if (nextBtn && !nextBtn.classList.contains('hidden')) {
                nextBtn.click();
                steps++;
                continue;
            }
            break;
        }
        options[0].click();
        const nextBtn = q(ctx, '#next-btn');
        if (nextBtn && !nextBtn.classList.contains('hidden')) {
            nextBtn.click();
        }
        steps++;
    }
    // Da margen a los setTimeout internos (avance con fade, cierre de
    // examen) para que terminen de navegar a #/results.
    for (let i = 0; i < 10 && ctx.TAI.router.getCurrentName() === 'quiz'; i++) {
        await wait(60);
    }
}

async function run() {
    let ctx = createWindowSandbox();
    vm.createContext(ctx);
    loadAll(ctx);
    await wait(10);

    section('Arranque');
    assert(!!ctx.TAI, 'window.TAI existe tras cargar los scripts');
    assert(ctx.TAI.router.getCurrentName() === 'dashboard', 'la ruta inicial es #/dashboard');
    assert(qa(ctx, '.view-dashboard').length === 1, 'la vista Inicio se renderiza');

    section('Navegación entre todas las vistas persistentes (sin excepciones)');
    const routes = ['dashboard', 'choose-test', 'bank', 'supuestos', 'progress', 'settings', 'help'];
    routes.forEach((r) => {
        ctx.TAI.router.navigate(r);
        assert(ctx.TAI.router.getCurrentName() === r, `navegar a #/${r} funciona`);
    });

    section('Modo de test: Test Corto (10 preguntas)');
    ctx.TAI.views.quiz.startTest('short');
    assert(ctx.TAI.router.getCurrentName() === 'quiz', 'startTest("short") navega a #/quiz');
    assert(qa(ctx, '#options-container .option-btn').length >= 2, 'se pintan opciones de la primera pregunta');
    await answerQuizToCompletion(ctx, 40);
    assert(ctx.TAI.router.getCurrentName() === 'results', 'al terminar el test corto se navega a #/results');
    assert(ctx.TAI.state.lastResult && ctx.TAI.state.lastResult.exam.length === 10, 'el resultado registra 10 preguntas');
    let history = ctx.TAI.store.getHistory();
    assert(history.length === 1 && history[0].modo === 'short', 'el intento queda guardado en testHistory');
    assert(!!history[0].bloques, 'el intento incluye desglose por bloque');

    section('Modo de test: Global, Oficiales, Por tema');
    ctx.TAI.views.quiz.startTest('global');
    await answerQuizToCompletion(ctx, 60);
    assert(ctx.TAI.state.lastResult.exam.length === 30, 'el test global tiene 30 preguntas');

    ctx.TAI.views.quiz.startTest('oficiales');
    await answerQuizToCompletion(ctx, 60);
    assert(ctx.TAI.state.lastResult.exam.every((qq) => qq.origen === 'oficial'), 'el modo Oficiales solo usa preguntas de origen "oficial"');

    ctx.TAI.views.quiz.startTest('theme', { bloque: 'I', tema: 1 });
    assert(ctx.TAI.router.getCurrentName() === 'quiz', 'el modo por tema arranca correctamente');
    await answerQuizToCompletion(ctx, 20);
    assert(ctx.TAI.state.lastResult.exam.every((qq) => qq.bloque === 'I' && qq.tema === 1), 'el modo por tema filtra por bloque y tema exactos');

    section('Modo de test: Repaso de Fallos');
    const sample = ctx.baseDeDatos.slice(0, 4);
    ctx.TAI.store.setFailedQuestions(sample);
    ctx.TAI.views.quiz.startTest('fallos');
    assert(ctx.TAI.state.lastResult === null || ctx.TAI.router.getCurrentName() === 'quiz', 'el repaso de fallos arranca con el registro guardado');
    await answerQuizToCompletion(ctx, 20);
    assert(ctx.TAI.state.lastResult.exam.length === 4, 'el repaso de fallos usa exactamente las preguntas registradas');

    section('Simulacro Real (cronometrado, fuerza modo examen)');
    ctx.TAI.views.quiz.startTest('simulacro');
    assert(ctx.TAI.router.getCurrentName() === 'quiz', 'el simulacro arranca');
    await answerQuizToCompletion(ctx, 200);
    assert(ctx.TAI.router.getCurrentName() === 'results', 'el simulacro se puede completar de principio a fin');
    assert(ctx.TAI.state.lastResult.mode === 'simulacro', 'el resultado registra el modo simulacro');

    section('Autoguardado y recuperación tras "recarga" a mitad de examen');
    ctx.TAI.views.quiz.startTest('global');
    // Responde solo 2 preguntas (sin terminar el test).
    for (let i = 0; i < 2; i++) {
        const options = qa(ctx, '#options-container .option-btn').filter((b) => !b.disabled);
        options[0].click();
        const nextBtn = q(ctx, '#next-btn');
        if (nextBtn && !nextBtn.classList.contains('hidden')) nextBtn.click();
    }
    const snapBefore = ctx.TAI.store.getExamInProgress();
    assert(snapBefore && snapBefore.currentQuestionIndex === 2, 'el autoguardado registra el progreso (pregunta 3)');
    assert(ctx.location.hash === '#/quiz', 'la URL sigue en #/quiz antes de recargar');

    // Simula una recarga completa de página: se crea un contexto JS
    // COMPLETAMENTE NUEVO (como haría un navegador real al recargar, que
    // descarta toda la memoria de la pestaña), pero reutilizando el mismo
    // localStorage y la misma URL (#/quiz), que sí sobreviven a un F5.
    const reloadedCtx = createWindowSandbox({ localStorage: ctx.localStorage, hash: ctx.location.hash });
    vm.createContext(reloadedCtx);
    loadAll(reloadedCtx);
    await wait(10);
    ctx = reloadedCtx;
    assert(ctx.TAI.router.getCurrentName() === 'quiz', 'tras la "recarga" se sigue en #/quiz');
    assert(text(q(ctx, '#question-counter')).includes('3 de 30'), 'el examen se recupera exactamente en la pregunta 3 de 30');

    // Termina el examen recuperado con normalidad.
    await answerQuizToCompletion(ctx, 60);
    assert(ctx.TAI.router.getCurrentName() === 'results', 'el examen recuperado se puede terminar con normalidad');
    assert(ctx.TAI.store.getExamInProgress() === null, 'al terminar, el autoguardado se limpia (examInProgress)');

    section('Banco de Preguntas: buscador y filtros');
    ctx.TAI.router.navigate('bank');
    const totalCount = ctx.baseDeDatos.length;
    assert(text(q(ctx, '#bank-count')).startsWith(String(totalCount)), 'sin filtros se listan todas las preguntas');

    q(ctx, '#bank-origen').value = 'oficial';
    q(ctx, '#bank-origen').dispatchEvent({ type: 'change' });
    const oficialesCount = ctx.baseDeDatos.filter((qq) => qq.origen === 'oficial').length;
    assert(text(q(ctx, '#bank-count')).startsWith(String(oficialesCount)), `el filtro "origen=oficial" reduce la lista a ${oficialesCount}`);
    assert(qa(ctx, '#bank-list .viewer-item').length === oficialesCount, 'el DOM refleja el número de preguntas filtradas');

    q(ctx, '#bank-origen').value = '';
    q(ctx, '#bank-origen').dispatchEvent({ type: 'change' });
    q(ctx, '#bank-search').value = 'Constitución';
    q(ctx, '#bank-search').dispatchEvent({ type: 'input' });
    await wait(250);
    const textMatches = ctx.baseDeDatos.filter((qq) =>
        (qq.pregunta + ' ' + qq.opciones.join(' ')).toLowerCase().includes('constitución')).length;
    assert(text(q(ctx, '#bank-count')).startsWith(String(textMatches)), 'el buscador de texto filtra correctamente');

    section('Supuestos Prácticos: resolución completa');
    ctx.TAI.router.navigate('supuestos');
    const firstSupuestoBtn = q(ctx, '#supuestos-list .btn-card');
    assert(!!firstSupuestoBtn, 'se listan los supuestos disponibles');
    firstSupuestoBtn.click();
    assert(ctx.TAI.router.getCurrentName() === 'supuesto', 'al elegir un supuesto se navega a #/supuesto/:id');

    const totalSupPreguntas = ctx.baseDeSupuestos[0].preguntas.length;
    for (let i = 0; i < totalSupPreguntas; i++) {
        const options = qa(ctx, '#supuesto-options-container .option-btn').filter((b) => !b.disabled);
        assert(options.length > 0, `supuesto: hay opciones en la pregunta ${i + 1}`);
        options[0].click();
        if (i < totalSupPreguntas - 1) {
            q(ctx, '#supuesto-next-btn').click();
        }
    }
    const finishBtn = q(ctx, '#supuesto-finish-btn');
    assert(finishBtn && !finishBtn.classList.contains('hidden'), 'el botón "Finalizar Supuesto" aparece en la última pregunta');
    finishBtn.click();
    await wait(20);
    // El modal de resultado del supuesto debe estar visible; lo cerramos.
    const modalOk = q(ctx, '.modal-actions button');
    if (modalOk) modalOk.click();
    await wait(20);
    assert(ctx.TAI.router.getCurrentName() === 'supuestos', 'al finalizar el supuesto se vuelve al listado');
    history = ctx.TAI.store.getHistory();
    assert(history.some((h) => String(h.modo).startsWith('supuesto:')), 'el supuesto queda registrado en el historial');

    section('Atajos de teclado en el quiz (1-4/A-D, Enter, Esc)');
    ctx.TAI.views.quiz.startTest('short');
    assert(ctx.TAI.router.getCurrentName() === 'quiz', 'nuevo test corto para probar atajos');
    fireKey(ctx, '2'); // el listener real está en "document", igual que en el navegador
    let selected = qa(ctx, '#options-container .option-btn').filter((b) => b.classList.contains('correct-insitu') || b.classList.contains('wrong-insitu'));
    assert(selected.length > 0, 'la tecla "2" selecciona la segunda opción');
    fireKey(ctx, 'Enter');
    assert(text(q(ctx, '#question-counter')).includes('2 de 10'), 'Enter avanza a la siguiente pregunta');

    fireKey(ctx, 'Escape');
    await wait(10);
    const modalVisible = q(ctx, '.modal-overlay') && !q(ctx, '.modal-overlay').classList.contains('hidden');
    assert(modalVisible, 'Esc abre el modal de confirmación de salida (no un confirm() nativo)');
    const cancelBtn = qa(ctx, '.modal-actions button')[0];
    cancelBtn.click();
    await wait(10);
    assert(ctx.TAI.router.getCurrentName() === 'quiz', 'cancelar en el modal de salida mantiene el examen activo');
    // Limpieza: se descarta este test para no interferir en el resto.
    ctx.TAI.store.clearExamInProgress();

    section('Selección de oposiciones vacía: aviso mediante toast (no alert nativo)');
    ctx.TAI.state.settings.selectedOpos = [];
    ctx.TAI.views.quiz.startTest('short');
    assert(qa(ctx, '.toast').length > 0, 'se muestra un toast (no un alert()) si no hay oposición seleccionada');
    ctx.TAI.state.settings.selectedOpos = ['AGE', 'SAS', 'Junta de Andalucía', 'Diputación de Sevilla'];

    section('Configuración: los ajustes se persisten en localStorage');
    ctx.TAI.router.navigate('settings');
    q(ctx, '#learning-mode-toggle').checked = false;
    fireEvent(q(ctx, '#learning-mode-toggle'), 'change');
    const savedSettings = ctx.TAI.store.getSettings(null);
    assert(savedSettings && savedSettings.learningMode === false, 'desactivar el modo estudio se guarda en appSettings');
    q(ctx, '#learning-mode-toggle').checked = true;
    fireEvent(q(ctx, '#learning-mode-toggle'), 'change');

    section('Mi Progreso: historial y gráfico');
    ctx.TAI.router.navigate('progress');
    assert(qa(ctx, '.historial-item').length > 0, 'el historial de tests se renderiza');
    assert(qa(ctx, '#progress-chart').length === 1, 'el canvas del gráfico de evolución se crea sin excepciones');

    section('Componentes propios: sin alert()/confirm() nativos');
    const appJsExists = fs.existsSync(path.join(ROOT, 'app.js'));
    const jsFiles = SCRIPT_ORDER.filter((f) => f.startsWith('js/'));
    // Ignora comentarios (donde se menciona alert()/confirm() en prosa) y
    // "TAI.ui.modal.confirm(...)", que no es un diálogo nativo.
    const usesNativeDialogs = jsFiles.some((f) => {
        const codeLines = fs.readFileSync(path.join(ROOT, f), 'utf8')
            .split('\n')
            .filter((line) => !line.trim().startsWith('//'));
        return /(?<![.\w])alert\(|(?<![.\w])confirm\(/.test(codeLines.join('\n'));
    });
    assert(!usesNativeDialogs, 'ningún fichero de js/ usa alert()/confirm() nativos');

    section('Persistencia retrocompatible');
    assert(typeof ctx.localStorage.getItem('themePref') === 'string', 'themePref se guarda como string plano (no JSON), igual que antes');
    JSON.parse(ctx.localStorage.getItem('testHistory'));
    JSON.parse(ctx.localStorage.getItem('failedQuestions'));
    assert(true, 'testHistory y failedQuestions siguen siendo JSON válido con el mismo formato');

    console.log(`\n${passed} comprobaciones OK, ${failed} fallos.\n`);
    if (failed > 0) process.exit(1);
}

run().catch((err) => {
    console.error('\nERROR INESPERADO EN LOS TESTS:\n', err);
    process.exit(1);
});
