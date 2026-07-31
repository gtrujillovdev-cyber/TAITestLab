// =====================================================================
// TAI.ui.modal — diálogos de confirmación/información (sustituye a
// confirm()/alert()), accesibles (focus trap, Esc, aria-modal).
// =====================================================================
(function (global) {
    'use strict';
    const TAI = (global.TAI = global.TAI || {});
    TAI.ui = TAI.ui || {};

    let overlay = null;
    let lastFocused = null;

    function ensureOverlay() {
        if (overlay) return overlay;
        overlay = document.createElement('div');
        overlay.className = 'modal-overlay hidden';
        overlay.innerHTML = `
            <div class="modal-box" role="dialog" aria-modal="true" tabindex="-1">
                <h2 class="modal-title"></h2>
                <p class="modal-message"></p>
                <div class="modal-actions"></div>
            </div>`;
        document.body.appendChild(overlay);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) close(null);
        });
        return overlay;
    }

    function close(result, resolve) {
        if (!overlay) return;
        overlay.classList.add('hidden');
        document.removeEventListener('keydown', trapKeydown);
        if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
        if (resolve) resolve(result);
    }

    let activeReject = null;
    function trapKeydown(e) {
        if (!overlay || overlay.classList.contains('hidden')) return;
        if (e.key === 'Escape') {
            e.preventDefault();
            close(false, activeReject);
            return;
        }
        if (e.key === 'Tab') {
            const focusables = overlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (!focusables.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }

    // opts: { title, message, confirmText, cancelText, danger }
    // Devuelve una Promise<boolean>.
    function confirmDialog(opts) {
        opts = opts || {};
        const el = ensureOverlay();
        lastFocused = document.activeElement;

        el.querySelector('.modal-title').textContent = opts.title || 'Confirmar';
        el.querySelector('.modal-message').textContent = opts.message || '';
        const actions = el.querySelector('.modal-actions');
        actions.innerHTML = '';

        return new Promise((resolve) => {
            activeReject = resolve;
            const cancelBtn = document.createElement('button');
            cancelBtn.type = 'button';
            cancelBtn.className = 'btn-secondary';
            cancelBtn.textContent = opts.cancelText || 'Cancelar';
            cancelBtn.addEventListener('click', () => close(false, resolve));

            const confirmBtn = document.createElement('button');
            confirmBtn.type = 'button';
            confirmBtn.className = opts.danger ? 'btn-primary danger-card' : 'btn-primary';
            confirmBtn.textContent = opts.confirmText || 'Aceptar';
            confirmBtn.addEventListener('click', () => close(true, resolve));

            actions.appendChild(cancelBtn);
            actions.appendChild(confirmBtn);

            el.classList.remove('hidden');
            document.addEventListener('keydown', trapKeydown);
            setTimeout(() => confirmBtn.focus(), 20);
        });
    }

    // opts: { title, message, okText }. Devuelve Promise<void>.
    function infoDialog(opts) {
        opts = opts || {};
        const el = ensureOverlay();
        lastFocused = document.activeElement;

        el.querySelector('.modal-title').textContent = opts.title || 'Aviso';
        el.querySelector('.modal-message').textContent = opts.message || '';
        const actions = el.querySelector('.modal-actions');
        actions.innerHTML = '';

        return new Promise((resolve) => {
            activeReject = resolve;
            const okBtn = document.createElement('button');
            okBtn.type = 'button';
            okBtn.className = 'btn-primary';
            okBtn.textContent = opts.okText || 'Entendido';
            okBtn.addEventListener('click', () => close(true, resolve));
            actions.appendChild(okBtn);

            el.classList.remove('hidden');
            document.addEventListener('keydown', trapKeydown);
            setTimeout(() => okBtn.focus(), 20);
        });
    }

    TAI.ui.modal = { confirm: confirmDialog, info: infoDialog };
})(window);
