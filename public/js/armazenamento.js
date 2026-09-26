function salvarCadastro(form) {
    const dados = new FormData(form);
    const cadastro= Object.fromEntries(dados);
    localStorage.setItem('cadastro', JSON.stringify(cadastro));
}

function restaurarCadastro(form) {
    const dadosSalvos = localStorage.getItem('cadastro');
    if (!dadosSalvos) return;

    const cadastro = JSON.parse(dadosSalvos);

    Object.entries(cadastro).forEach(([nomeCampo, valor]) => {
        const campo = form.querySelector(`[name="${nomeCampo}"]`);
        if (campo) {
            campo.value = valor;
        }
    });
}
