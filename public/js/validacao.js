function validarCampo(campo) {
    const container = campo.closest('.campo');
    let mensagem = container.querySelector('.mensagem-erro');

    if (!mensagem) {
        mensagem = document.createElement('span');
        mensagem.classList.add('mensagem-erro');
        mensagem.id = `${campo.id}-erro`;
        mensagem.setAttribute('role', 'alert');
        container.appendChild(mensagem);
    }

    campo.setAttribute('aria-describedby', mensagem.id);

    if (campo.checkValidity()) {
        campo.classList.remove('campo-invalido');
        campo.classList.add('campo-valido');
        mensagem.textContent = '';
    } else{
        campo.classList.remove('campo-valido');
        campo.classList.add('campo-invalido');
        mensagem.textContent = campo.validationMessage;
    }
}

function limparMensagens(form) {
    form.querySelectorAll('.mensagem-erro').forEach(m => m.textContent = '');
    form.querySelectorAll('input').forEach(c => {
        c.classList.remove('campo-valido', 'campo-invalido');
    });
}