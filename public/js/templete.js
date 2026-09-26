const projetos =[
    {
        titulo: "Nossos Projetos",
        badgeTexto: "Ativo",
        badgeTipo: "badge-sucesso",
        imagem: "",
        texto: "conheça nossas iniciativas sociais...",
        coluna: "col-md-6 col-lg-4" 
    },
    {
        titulo: "Doações",
        badgeTexto: "Urgente",
        badgeTipo: "badge-urgente",
        imagem: "imagens/doacao",
        texto: "Saiba comocontribuir para nossas campanhas com doações e ajudar a transformar vidas.",
        coluna: "col-md-6 col-lg-4"
    },
    {
        titulo: "Voluntariado",
        badgeTexto: "Vagas abertas",
        badgeTipo: "badge-info",
        imagem: "",
        texto: "Conheça as nossas oportunidade de voluntariado e descubra como você pode participar das ações da ONG.",
        coluna: "col-md-12 col-lg-4"
    }
];

function criarCardProjeto(projeto) {
        const imagemHtml = projeto.imagem
    ? `<img 
        src="${projeto.imagem}-800.webp" 
        srcset="${projeto.imagem}-480.webp 480w, ${projeto.imagem}-800.webp 800w, ${projeto.imagem}-1200.webp 1200w" 
        sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, 1200px"
        alt="Imagem ilustrativa de ${projeto.titulo}">`
    : '';

    return `
    <section class="${projeto.coluna}">
    <h2>${projeto.titulo}</h2>
    <span class="badge ${projeto.badgeTipo}">${projeto.badgeTexto}</span>
    ${imagemHtml}
    <p>${projeto.texto}</p>
    </section>
    `;
}
function renderizarProjetos() {
        const container = document.getElementById('lista-projetos');
        if (!container) return;
        const html = projetos.map(criarCardProjeto).join('');
        container.innerHTML = html;
    }