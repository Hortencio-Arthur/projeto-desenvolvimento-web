const CHAVE_TEMA = 'tema';

function aplicarTema(tema) {
    document.documentElement.setAttribute('data-tema', tema);
    localStorage.setItem(CHAVE_TEMA, tema);

    const botao = document.getElementById('toggle-tema');
    botao.setAttribute('aria-pressed', tema === 'escuro');

    botao.textContent = tema === 'escuro' ? '☀️' : '🌙';
}

function inicializarTema() {
    const temaSalvo = localStorage.getItem(CHAVE_TEMA);
    if (temaSalvo) {
        aplicarTema(temaSalvo);
    }
}

function alternarTema() {
    const temaAtual = document.documentElement.getAttribute('data-tema');

    const estaEscuro = temaAtual
    ? temaAtual === 'escuro'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;

    aplicarTema(estaEscuro ? 'claro' : 'escuro');
}

document.getElementById('toggle-tema').addEventListener('click', alternarTema);
inicializarTema();