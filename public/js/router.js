const links = document.querySelectorAll('nav a');
const app = document.getElementById('app');

function iniciarRoteador(){
    links.forEach(link => {
        link.addEventListener('click' , (event) =>{
            event.preventDefault();
            const caminho = link.getAttribute('href');
            carregarPagina(caminho);

            links.forEach(l => l.classList.remove('ativo'));
            link.classList.add('ativo');
        });
    });

    carregarPagina('html/inicio.html');
}
async function carregarPagina(caminho) {
    const resposta = await fetch(caminho);
    const html = await resposta.text();
    app.innerHTML = html;
    renderizarProjetos();
    iniciarFormulario();
    iniciarModal();
}
