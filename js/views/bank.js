// =====================================================================
// Vista: Banco de Preguntas — buscador de texto + filtros por bloque,
// tema y origen (oficial/temario).
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});
    TAI.views = TAI.views || {};
    const { utils } = TAI;

    let filters = { text: '', bloque: '', tema: '', origen: '' };
    let debounceTimer = null;

    function getAllData() {
        return (typeof baseDeDatos !== 'undefined' && Array.isArray(baseDeDatos)) ? baseDeDatos : [];
    }

    function matchesFilters(q) {
        if (filters.bloque && q.bloque !== filters.bloque) return false;
        if (filters.origen && q.origen !== filters.origen) return false;
        if (filters.tema && String(q.tema) !== filters.tema) return false;
        if (filters.text) {
            const haystack = (q.pregunta + ' ' + q.opciones.join(' ')).toLowerCase();
            if (!haystack.includes(filters.text.toLowerCase())) return false;
        }
        return true;
    }

    function populateThemeOptions(themeSelect, bloque) {
        themeSelect.innerHTML = '<option value="">Todos los temas</option>';
        if (!bloque) {
            themeSelect.disabled = true;
            return;
        }
        const temas = [...new Set(getAllData()
            .filter(p => p.bloque === bloque && p.tema !== null && p.tema !== undefined)
            .map(p => p.tema))].sort((a, b) => a - b);
        temas.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t;
            opt.textContent = `Tema ${t}`;
            themeSelect.appendChild(opt);
        });
        themeSelect.disabled = false;
    }

    function renderList(listEl, countEl) {
        const data = getAllData().filter(matchesFilters);
        countEl.textContent = `${data.length} de ${getAllData().length} preguntas`;
        listEl.innerHTML = '';

        if (data.length === 0) {
            listEl.innerHTML = '<p class="hint">No hay preguntas que coincidan con estos filtros.</p>';
            return;
        }

        const frag = document.createDocumentFragment();
        data.forEach((q) => {
            const item = document.createElement('div');
            item.className = 'viewer-item';
            const origenBadge = q.origen === 'oficial'
                ? '<span class="badge oficial-badge">📜 Oficial</span>'
                : `<span class="badge">Tema ${q.tema}</span>`;
            const optionsHTML = q.opciones.map((opt, i) =>
                `<li class="${i === q.respuestaIndex ? 'correct-option' : ''}">${utils.escapeHtml(opt)}</li>`).join('');
            item.innerHTML = `
                <div class="viewer-question-header">
                    <span class="badge">#${q.id}</span>
                    <span class="badge" style="background: var(--accent); color:white;">Bloque ${q.bloque}</span>
                    ${origenBadge}
                </div>
                <h3 style="margin-top: 10px;">${utils.escapeHtml(q.pregunta)}</h3>
                <ul class="viewer-options">${optionsHTML}</ul>
            `;
            frag.appendChild(item);
        });
        listEl.appendChild(frag);
    }

    function render(container) {
        const wrap = document.createElement('div');
        wrap.className = 'view-bank';
        wrap.innerHTML = `
            <h1>Banco de Preguntas</h1>
            <p class="hint">Explora las ${getAllData().length} preguntas de la base de datos. Busca por texto o filtra por bloque, tema y origen.</p>

            <div class="bank-filters">
                <input type="search" id="bank-search" class="custom-select bank-search-input" placeholder="Buscar por texto…" aria-label="Buscar preguntas por texto">
                <select id="bank-bloque" class="custom-select" aria-label="Filtrar por bloque">
                    <option value="">Todos los bloques</option>
                    <option value="I">Bloque I</option>
                    <option value="II">Bloque II</option>
                    <option value="III">Bloque III</option>
                    <option value="IV">Bloque IV</option>
                </select>
                <select id="bank-tema" class="custom-select" aria-label="Filtrar por tema" disabled>
                    <option value="">Todos los temas</option>
                </select>
                <select id="bank-origen" class="custom-select" aria-label="Filtrar por origen">
                    <option value="">Todos los orígenes</option>
                    <option value="temario">Temario</option>
                    <option value="oficial">Examen oficial</option>
                </select>
            </div>
            <p class="hint" id="bank-count"></p>
            <div id="bank-list" class="viewer-list"></div>
        `;
        container.appendChild(wrap);

        const searchInput = wrap.querySelector('#bank-search');
        const bloqueSelect = wrap.querySelector('#bank-bloque');
        const temaSelect = wrap.querySelector('#bank-tema');
        const origenSelect = wrap.querySelector('#bank-origen');
        const listEl = wrap.querySelector('#bank-list');
        const countEl = wrap.querySelector('#bank-count');

        searchInput.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                filters.text = searchInput.value.trim();
                renderList(listEl, countEl);
            }, 180);
        });

        bloqueSelect.addEventListener('change', () => {
            filters.bloque = bloqueSelect.value;
            filters.tema = '';
            populateThemeOptions(temaSelect, filters.bloque);
            renderList(listEl, countEl);
        });

        temaSelect.addEventListener('change', () => {
            filters.tema = temaSelect.value;
            renderList(listEl, countEl);
        });

        origenSelect.addEventListener('change', () => {
            filters.origen = origenSelect.value;
            renderList(listEl, countEl);
        });

        renderList(listEl, countEl);
    }

    TAI.views.bank = { render };
})(window);
