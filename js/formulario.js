function iniciarFormulario() {
    const form = document.querySelector('form');
    if (!form) return;

    restaurarCadastro(form);
    aplicarMascaras(form);
    
    const campos = form.querySelectorAll('input');
    
    campos.forEach(campo => {
        campo.addEventListener('input', () => {
            validarCampo(campo);
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (form.checkValidity())  {
            salvarCadastro(form);
            abrirModalSucesso();
            form.reset();
            limparMensagens(form);
        } else {
            campos.forEach(campo => validarCampo(campo));
        }
    });
}
