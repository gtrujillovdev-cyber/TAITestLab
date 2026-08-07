// =====================================================================
// UI: Pomodoro Widget
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});
    TAI.ui = TAI.ui || {};

    let timerInterval = null;
    let timeLeft = 25 * 60; // 25 minutes in seconds
    let isRunning = false;

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    function renderPomodoro() {
        const shell = document.querySelector('.app-shell');
        if (!shell) return;

        const widget = document.createElement('div');
        widget.className = 'pomodoro-widget';
        widget.innerHTML = `
            <div class="pomodoro-header">
                <span class="pomodoro-title">⏱️ Pomodoro</span>
                <button class="pomodoro-toggle" aria-label="Minimizar">_</button>
            </div>
            <div class="pomodoro-body">
                <div class="pomodoro-time">${formatTime(timeLeft)}</div>
                <div class="pomodoro-controls">
                    <button class="pomodoro-btn play-btn">▶</button>
                    <button class="pomodoro-btn reset-btn">↻</button>
                </div>
            </div>
        `;
        document.body.appendChild(widget);

        const timeDisplay = widget.querySelector('.pomodoro-time');
        const playBtn = widget.querySelector('.play-btn');
        const resetBtn = widget.querySelector('.reset-btn');
        const toggleBtn = widget.querySelector('.pomodoro-toggle');

        function updateDisplay() {
            timeDisplay.textContent = formatTime(timeLeft);
        }

        playBtn.addEventListener('click', () => {
            if (isRunning) {
                // Pause
                clearInterval(timerInterval);
                isRunning = false;
                playBtn.textContent = '▶';
            } else {
                // Play
                if (timeLeft === 0) timeLeft = 25 * 60;
                isRunning = true;
                playBtn.textContent = '⏸';
                timerInterval = setInterval(() => {
                    timeLeft--;
                    if (timeLeft <= 0) {
                        clearInterval(timerInterval);
                        isRunning = false;
                        timeLeft = 0;
                        playBtn.textContent = '▶';
                        if (TAI.ui.toast) TAI.ui.toast.success('¡Sesión Pomodoro completada! Tómate un descanso.');
                    }
                    updateDisplay();
                }, 1000);
            }
        });

        resetBtn.addEventListener('click', () => {
            clearInterval(timerInterval);
            isRunning = false;
            timeLeft = 25 * 60;
            playBtn.textContent = '▶';
            updateDisplay();
        });

        toggleBtn.addEventListener('click', () => {
            widget.classList.toggle('minimized');
            toggleBtn.textContent = widget.classList.contains('minimized') ? '□' : '_';
        });
    }

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(renderPomodoro, 500);
    });

})(window);
