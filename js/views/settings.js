// =====================================================================
// Vista: Configuración
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});
    TAI.views = TAI.views || {};
    const { state, store } = TAI;

    const ALL_OPOS = ['AGE', 'SAS', 'Junta de Andalucía', 'Diputación de Sevilla', 'Universidad de Sevilla'];

    function render(container) {
        const wrap = document.createElement('div');
        wrap.className = 'view-settings';

        wrap.innerHTML = `
            <h1>Configuración</h1>
            <p class="hint">Ajustes que se aplican a todos tus tests.</p>

            <div class="toggle-container">
                <label class="switch">
                    <input type="checkbox" id="learning-mode-toggle" ${state.settings.learningMode ? 'checked' : ''}>
                    <span class="slider round"></span>
                </label>
                <div class="toggle-text">
                    <strong>Modo Estudio (Corrección al instante)</strong>
                    <span class="hint">Te dice si aciertas y marca la correcta. Desactívalo para Modo Examen.</span>
                </div>
            </div>

            <div class="filter-section opo-filters">
                <h3>¿A qué oposición te presentas?</h3>
                <p class="hint">Selecciona las administraciones que estés preparando. Las preguntas se filtrarán para tu examen.</p>
                <div class="checkbox-group" id="opo-checkboxes">
                    ${ALL_OPOS.map(op => `
                        <label class="custom-checkbox">
                            <input type="checkbox" value="${op}" ${state.settings.selectedOpos.includes(op) ? 'checked' : ''}>
                            <span class="checkmark"></span> ${op === 'AGE' ? 'AGE (Estado)' : op === 'SAS' ? 'SAS (Salud)' : op}
                        </label>`).join('')}
                </div>
            </div>

            <div class="filter-section">
                <h3>Tema de la interfaz</h3>
                <select id="theme-selector-settings" class="custom-select theme-select" aria-label="Selector de tema de la interfaz">
                    <option value="light">☀️ Claro</option>
                    <option value="dark">🌙 Oscuro</option>
                    <option value="system">🖥️ Sistema</option>
                </select>
            </div>
        `;

        container.appendChild(wrap);

        wrap.querySelector('#learning-mode-toggle').addEventListener('change', (e) => {
            state.settings.learningMode = e.target.checked;
            state.saveSettings();
        });

        wrap.querySelectorAll('#opo-checkboxes input[type="checkbox"]').forEach(cb => {
            cb.addEventListener('change', () => {
                const checked = Array.from(wrap.querySelectorAll('#opo-checkboxes input[type="checkbox"]:checked')).map(c => c.value);
                state.settings.selectedOpos = checked;
                state.saveSettings();
            });
        });

        const themeSel = wrap.querySelector('#theme-selector-settings');
        themeSel.value = store.getThemePref();
        themeSel.addEventListener('change', (e) => {
            TAI.theme.apply(e.target.value);
        });
    }

    TAI.views.settings = { render };
})(window);
