// =====================================================================
// Vista: Elegir Test
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});
    TAI.views = TAI.views || {};
    const { store } = TAI;

    function render(container) {
        const failed = store.getFailedQuestions();
        const wrap = document.createElement('div');
        wrap.className = 'view-choose-test';

        wrap.innerHTML = `
            <h1>Elegir Test</h1>
            <p class="hint">Selecciona el modo de test. Los ajustes de oposición y modo estudio/examen se controlan en Configuración.</p>

            <div class="menu-grid">
                <button class="btn-card" data-start="short"><h3>⏱️ Test Corto</h3><p>10 preguntas aleatorias de cualquier bloque para repasos rápidos.</p></button>
                <button class="btn-card" data-start="global"><h3>🌍 Test Global</h3><p>30 preguntas mezcladas. Evalúa tu conocimiento general.</p></button>
                <button class="btn-card highlight" data-start="simulacro"><h3>🎓 Simulacro Real</h3><p>Condiciones de examen: 80 preguntas y 120 min. (Fuerza Modo Examen).</p></button>
                <button class="btn-card highlight" data-start="oficiales"><h3>📜 Exámenes Oficiales</h3><p>Practica solo con preguntas reales de convocatorias oficiales (OEP).</p></button>
                <button class="btn-card" id="goto-supuestos"><h3>📝 Supuestos Prácticos</h3><p>Resuelve casos prácticos reales, estilo Parte II del examen.</p></button>
                <button class="btn-card danger-card" data-start="fallos" ${failed.length ? '' : 'disabled'}><h3>🔥 Repaso de Fallos</h3><p>Tienes ${failed.length} preguntas falladas registradas.</p></button>
            </div>

            <div class="filter-section">
                <h3>Test por Tema Específico</h3>
                <div class="theme-selector-container">
                    <select id="block-select" class="custom-select">
                        <option value="">-- Selecciona un Bloque --</option>
                        <option value="I">Bloque I (Organización)</option>
                        <option value="II">Bloque II (Tecnología)</option>
                        <option value="III">Bloque III (Desarrollo)</option>
                        <option value="IV">Bloque IV (Sistemas)</option>
                    </select>
                    <select id="theme-select" class="custom-select" disabled>
                        <option value="">-- Selecciona un Tema --</option>
                    </select>
                    <button class="btn-primary small-btn" id="btn-theme-test" disabled>Empezar</button>
                </div>
            </div>
        `;

        container.appendChild(wrap);

        wrap.querySelectorAll('[data-start]').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.disabled) return;
                TAI.views.quiz.startTest(btn.dataset.start);
            });
        });

        wrap.querySelector('#goto-supuestos').addEventListener('click', () => {
            TAI.router.navigate('supuestos');
        });

        const blockSelect = wrap.querySelector('#block-select');
        const themeSelect = wrap.querySelector('#theme-select');
        const btnThemeTest = wrap.querySelector('#btn-theme-test');

        blockSelect.addEventListener('change', () => {
            const block = blockSelect.value;
            themeSelect.innerHTML = '<option value="">-- Selecciona un Tema --</option>';
            if (block) {
                const temas = [...new Set(
                    (typeof baseDeDatos !== 'undefined' ? baseDeDatos : [])
                        .filter(p => p.bloque === block && p.tema !== null && p.tema !== undefined)
                        .map(p => p.tema)
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
            btnThemeTest.disabled = !(blockSelect.value && themeSelect.value);
        });

        themeSelect.addEventListener('change', () => {
            btnThemeTest.disabled = !(blockSelect.value && themeSelect.value);
        });

        btnThemeTest.addEventListener('click', () => {
            TAI.views.quiz.startTest('theme', { bloque: blockSelect.value, tema: parseInt(themeSelect.value, 10) });
        });
    }

    TAI.views.chooseTest = { render };
})(window);
