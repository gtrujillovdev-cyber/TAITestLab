// =====================================================================
// Vista: Ayuda / Onboarding
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});
    TAI.views = TAI.views || {};
    const { router } = TAI;

    const SECTIONS = [
        { icon: '🏠', title: 'Inicio', text: 'Tu resumen: nota media, mejor nota, fallos pendientes, racha de estudio y accesos rápidos a los tests más usados.' },
        { icon: '📝', title: 'Elegir Test', text: 'Todos los modos disponibles: corto, global, simulacro cronometrado, exámenes oficiales, por tema o repaso de fallos.' },
        { icon: '📚', title: 'Banco', text: 'Explora las preguntas de la base de datos con buscador de texto y filtros por bloque, tema y origen.' },
        { icon: '🗂️', title: 'Supuestos', text: 'Casos prácticos reales estilo Parte II del examen, con contexto y preguntas asociadas.' },
        { icon: '📈', title: 'Progreso', text: 'Tu histórico de tests, evolución de la nota y rendimiento por bloque.' },
        { icon: '⚙️', title: 'Ajustes', text: 'Modo estudio/examen, oposiciones seleccionadas y tema claro/oscuro/sistema.' }
    ];

    function sectionsHTML() {
        return SECTIONS.map(s => `
            <div class="help-section">
                <span class="help-icon" aria-hidden="true">${s.icon}</span>
                <div>
                    <strong>${s.title}</strong>
                    <p class="hint">${s.text}</p>
                </div>
            </div>`).join('');
    }

    function render(container) {
        const wrap = document.createElement('div');
        wrap.className = 'view-help';
        wrap.innerHTML = `
            <h1>❓ Ayuda</h1>
            <p class="hint">Guía rápida de TAI Prep. Usa la navegación (barra lateral en escritorio, barra inferior en móvil) para moverte entre secciones en cualquier momento.</p>
            <div class="help-sections">${sectionsHTML()}</div>
            <h2 class="section-title">Atajos de teclado (durante un test)</h2>
            <ul class="help-shortcuts">
                <li><kbd>1</kbd>–<kbd>4</kbd> o <kbd>A</kbd>–<kbd>D</kbd>: elegir una opción</li>
                <li><kbd>Enter</kbd> / <kbd>Espacio</kbd>: siguiente pregunta</li>
                <li><kbd>Esc</kbd>: salir del test (con confirmación)</li>
            </ul>
            <button class="btn-primary" id="help-start-btn">Empezar a estudiar</button>
        `;
        container.appendChild(wrap);
        wrap.querySelector('#help-start-btn').addEventListener('click', () => router.navigate('choose-test'));
    }

    function showOnboardingModalIfFirstVisit() {
        if (TAI.store.hasSeenOnboarding()) return;
        TAI.store.markOnboardingSeen();
        TAI.ui.modal.info({
            title: '👋 Bienvenido/a a TAI Prep',
            message: 'Usa la navegación para moverte entre Inicio, Elegir Test, Banco de Preguntas, Supuestos, Progreso y Ajustes. Puedes consultar esta guía en cualquier momento desde "Ayuda".'
        });
    }

    TAI.views.help = { render, showOnboardingModalIfFirstVisit };
})(window);
