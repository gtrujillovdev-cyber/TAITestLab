// =====================================================================
// Vista: Mi Progreso — historial + gráfico ligero de evolución (canvas
// nativo, sin librerías) + desglose agregado por bloque.
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});
    TAI.views = TAI.views || {};
    const { store, utils } = TAI;

    function drawChart(canvas, history) {
        const ctx = canvas.getContext('2d');
        const dpr = global.devicePixelRatio || 1;
        const w = canvas.clientWidth || 600;
        const h = canvas.clientHeight || 180;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, w, h);

        const styles = getComputedStyle(document.body);
        const gridColor = styles.getPropertyValue('--panel-border').trim() || '#ccc';
        const lineColor = styles.getPropertyValue('--primary').trim() || '#2563eb';
        const textColor = styles.getPropertyValue('--text-muted').trim() || '#64748b';

        const padding = { top: 12, right: 12, bottom: 22, left: 30 };
        const plotW = w - padding.left - padding.right;
        const plotH = h - padding.top - padding.bottom;

        // Rejilla horizontal (0, 5, 10)
        ctx.strokeStyle = gridColor;
        ctx.fillStyle = textColor;
        ctx.font = '11px Inter, sans-serif';
        ctx.lineWidth = 1;
        [0, 5, 10].forEach(val => {
            const y = padding.top + plotH - (val / 10) * plotH;
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(w - padding.right, y);
            ctx.stroke();
            ctx.fillText(String(val), 4, y + 3);
        });

        if (history.length < 2) {
            ctx.fillText('Completa al menos 2 tests para ver tu evolución aquí.', padding.left, padding.top + plotH / 2);
            return;
        }

        const points = history.map((h, i) => ({
            x: padding.left + (i / (history.length - 1)) * plotW,
            y: padding.top + plotH - (h.nota / 10) * plotH
        }));

        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
        ctx.stroke();

        ctx.fillStyle = lineColor;
        points.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3.2, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    function render(container) {
        const history = store.getHistory();
        const wrap = document.createElement('div');
        wrap.className = 'view-progress';

        wrap.innerHTML = `
            <h1>📈 Mi Progreso</h1>
            <p class="hint">Histórico de tus tests completados en este navegador.</p>
            <div id="progress-summary"></div>
            <div id="progress-chart-wrap" class="progress-chart-wrap hidden">
                <h2 class="section-title">Evolución de la nota</h2>
                <canvas id="progress-chart" class="progress-chart" role="img" aria-label="Gráfico de evolución de tu nota a lo largo del tiempo"></canvas>
            </div>
            <div id="progress-blocks"></div>
            <div id="historial-list" class="historial-list"></div>
            <div class="results-actions">
                <button class="btn-card danger-card" id="clear-historial-btn" style="text-align:center;">🗑️ Borrar historial</button>
            </div>
        `;
        container.appendChild(wrap);

        const summary = wrap.querySelector('#progress-summary');
        const listEl = wrap.querySelector('#historial-list');
        const blocksEl = wrap.querySelector('#progress-blocks');
        const chartWrap = wrap.querySelector('#progress-chart-wrap');

        if (history.length === 0) {
            summary.innerHTML = '<p class="hint">Todavía no has completado ningún test. Cuando termines uno, aparecerá aquí.</p>';
        } else {
            const notaMedia = history.reduce((a, h) => a + h.nota, 0) / history.length;
            const mejorNota = Math.max(...history.map(h => h.nota));

            summary.innerHTML = `
                <div class="stats-grid">
                    <div class="stat-box"><span class="stat-value">${history.length}</span><span class="stat-label">Tests realizados</span></div>
                    <div class="stat-box neutral"><span class="stat-value">${notaMedia.toFixed(2)}</span><span class="stat-label">Nota media</span></div>
                    <div class="stat-box"><span class="stat-value">${mejorNota.toFixed(2)}</span><span class="stat-label">Mejor nota</span></div>
                </div>`;

            chartWrap.classList.remove('hidden');
            const canvas = wrap.querySelector('#progress-chart');
            requestAnimationFrame(() => drawChart(canvas, history));

            // Desglose agregado por bloque (solo entradas que ya incluyen "bloques").
            const agg = {};
            history.forEach(h => {
                if (!h.bloques) return;
                Object.keys(h.bloques).forEach(b => {
                    if (!agg[b]) agg[b] = { aciertos: 0, total: 0 };
                    agg[b].aciertos += h.bloques[b].aciertos;
                    agg[b].total += h.bloques[b].total;
                });
            });
            const bloqueKeys = Object.keys(agg).sort();
            if (bloqueKeys.length) {
                blocksEl.innerHTML = `<h2 class="section-title">Rendimiento por bloque</h2>` +
                    bloqueKeys.map(b => {
                        const s = agg[b];
                        const pct = s.total ? Math.round((s.aciertos / s.total) * 100) : 0;
                        const label = utils.BLOQUE_LABELS[b] || `Bloque ${b}`;
                        return `<div class="block-breakdown-row">
                            <span class="block-breakdown-label">${label}</span>
                            <span class="block-breakdown-bar"><span style="width:${pct}%"></span></span>
                            <span class="block-breakdown-count">${s.aciertos}/${s.total}</span>
                        </div>`;
                    }).join('') +
                    `<p class="hint" style="margin-top:8px;">Solo se incluyen los tests realizados con esta versión de la app (que registra el bloque de cada pregunta).</p>`;
            } else {
                blocksEl.innerHTML = '<p class="hint">Todavía no hay tests con desglose por bloque disponible.</p>';
            }

            [...history].reverse().slice(0, 25).forEach(h => {
                const div = document.createElement('div');
                div.className = 'historial-item';
                const fecha = new Date(h.fecha);
                const fechaStr = isNaN(fecha) ? '' : fecha.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
                const notaClass = h.nota >= 5 ? 'nota-ok' : 'nota-fail';
                div.innerHTML = `
                    <div class="historial-fecha">${fechaStr}</div>
                    <div class="historial-modo">${utils.modeLabel(h.modo)}</div>
                    <div class="historial-detalle">${h.aciertos} ✅ &nbsp; ${h.fallos} ❌ &nbsp; / ${h.total}</div>
                    <div class="historial-nota ${notaClass}">${h.nota.toFixed(2)}</div>
                `;
                listEl.appendChild(div);
            });
        }

        wrap.querySelector('#clear-historial-btn').addEventListener('click', async () => {
            const ok = await TAI.ui.modal.confirm({
                title: 'Borrar historial',
                message: '¿Seguro que quieres borrar todo tu historial de resultados? Esta acción no se puede deshacer.',
                confirmText: 'Borrar',
                danger: true
            });
            if (ok) {
                store.setHistory([]);
                TAI.ui.toast.info('Historial borrado.');
                container.innerHTML = '';
                render(container);
            }
        });
    }

    TAI.views.progress = { render };
})(window);
