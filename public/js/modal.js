function iniciarModal() {
    const modal = document.getElementById('modal-sucesso');

    if (!modal) return;

    const btnFecharX = modal.querySelector('.modal-fechar');
    const btnFechar = document.getElementById('btn-fechar-modal');

    let elementoAnterior = null;

    function abrirModal () {
        elementoAnterior = document.activeElement;
        modal.classList.add('aberto');
        btnFecharX.focus();
        document.addEventListener('keydown', prenderFoco);
    }
    function fecharModal() {
        modal.classList.remove('aberto');
        document.removeEventListener('keydown', prenderFoco);
        if (elementoAnterior) elementoAnterior.focus();
    }

    function prenderFoco(event) {
        if (event.key == 'Escape') {
            fecharModal();
            return;
        }
        
        if (event.key !== 'Tab') return;

        const focaveis = modal.querySelectorAll('button, a[href]');
        const primeiro = focaveis[0];
        const ultimo = focaveis[focaveis.length - 1];

        if (event.shiftKey && document.activeElement === primeiro) {
            event.preventDefault();
            ultimo.focus();
        } else if (!event.shiftKey && document.activeElement === ultimo) 
            {
                event.preventDefault();
                primeiro.focus();
        }
    }
    btnFecharX.addEventListener('click', fecharModal);
    btnFechar.addEventListener('click', fecharModal);

    window.abrirModalSucesso = abrirModal;
}

iniciarModal();