function aplicarMascaras(form) {
    const telefone = form.querySelector('#telefone');
    const cpf = form.querySelector('#cpf');
    const cep = form.querySelector('#cep');

    IMask(telefone, { mask: '(00) 00000-0000' });
    IMask(cpf, {mask: '000.000.000-00' });
    IMask(cep, { mask: '00000-000' });
}