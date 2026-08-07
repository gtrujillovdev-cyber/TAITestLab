// =====================================================================
// Vista: Minijuego Asociación
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});
    TAI.views = TAI.views || {};
    const { utils, router } = TAI;

    const gameData = [
        { left: 'Puerto 22', right: 'SSH' },
        { left: 'Puerto 80', right: 'HTTP' },
        { left: 'Puerto 443', right: 'HTTPS' },
        { left: 'Puerto 21', right: 'FTP' },
        { left: 'Error 404', right: 'Not Found' },
        { left: 'Error 500', right: 'Internal Server Error' },
    ];

    function render(container) {
        const wrap = document.createElement('div');
        wrap.className = 'view-minigame';
        wrap.innerHTML = `
            <div style="padding: 20px;">
                <h1>🧩 Asociación Rápida</h1>
                <p class="hint">Empareja cada concepto con su definición.</p>
                <div class="minigame-grid" style="display: flex; gap: 20px; margin-top: 20px;">
                    <div class="col-left" style="flex:1; display:flex; flex-direction:column; gap:10px;"></div>
                    <div class="col-right" style="flex:1; display:flex; flex-direction:column; gap:10px;"></div>
                </div>
                <button class="btn-primary" style="margin-top: 20px;" onclick="TAI.router.navigate('dashboard')">Volver al Inicio</button>
            </div>
        `;

        const colLeft = wrap.querySelector('.col-left');
        const colRight = wrap.querySelector('.col-right');

        const leftItems = utils.shuffle(gameData.map(d => ({ text: d.left, match: d.right })));
        const rightItems = utils.shuffle(gameData.map(d => ({ text: d.right, match: d.left })));

        let selectedLeft = null;
        let selectedRight = null;

        function checkMatch() {
            if (selectedLeft && selectedRight) {
                const isMatch = selectedLeft.dataset.match === selectedRight.dataset.text;
                if (isMatch) {
                    selectedLeft.style.backgroundColor = 'var(--success)';
                    selectedRight.style.backgroundColor = 'var(--success)';
                    selectedLeft.disabled = true;
                    selectedRight.disabled = true;
                } else {
                    selectedLeft.style.backgroundColor = 'var(--error)';
                    selectedRight.style.backgroundColor = 'var(--error)';
                    setTimeout(() => {
                        selectedLeft.style.backgroundColor = '';
                        selectedRight.style.backgroundColor = '';
                        selectedLeft = null;
                        selectedRight = null;
                    }, 500);
                    return;
                }
                selectedLeft = null;
                selectedRight = null;
            }
        }

        leftItems.forEach(item => {
            const btn = document.createElement('button');
            btn.className = 'btn-card';
            btn.textContent = item.text;
            btn.dataset.text = item.text;
            btn.dataset.match = item.match;
            btn.onclick = () => {
                if (selectedLeft) selectedLeft.style.backgroundColor = '';
                selectedLeft = btn;
                btn.style.backgroundColor = 'var(--primary)';
                checkMatch();
            };
            colLeft.appendChild(btn);
        });

        rightItems.forEach(item => {
            const btn = document.createElement('button');
            btn.className = 'btn-card';
            btn.textContent = item.text;
            btn.dataset.text = item.text;
            btn.dataset.match = item.match;
            btn.onclick = () => {
                if (selectedRight) selectedRight.style.backgroundColor = '';
                selectedRight = btn;
                btn.style.backgroundColor = 'var(--primary)';
                checkMatch();
            };
            colRight.appendChild(btn);
        });

        container.appendChild(wrap);
    }

    TAI.views.minigame = { render };
})(window);
