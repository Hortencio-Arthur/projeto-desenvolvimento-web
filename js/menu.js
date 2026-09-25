function iniciarMenu() {
    const botao = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-principal');

    botao.addEventListener('click', () => {
        const aberto = nav.classList.toggle('nav-aberto');
        
        botao.setAttribute('aria-expanded', aberto);
    });
}

iniciarMenu();