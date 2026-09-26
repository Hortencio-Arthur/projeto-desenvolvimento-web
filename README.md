# ONG [Nome da ONG]

## Descrição
Aplicação web SPA (Single Page Application) desenvolvida para uma ONG fictícia, com o objetivo de centralizar informações institucionais, projetos sociais e cadastro de voluntários e doadores.

## Tecnologias Utilizadas
- HTML5 semântico
- CSS3 (Grid, variáveis customizadas, design tokens semânticos, dark mode, design responsivo mobile-first)
- JavaScript (Vanilla JS, ES6+)
- IMask.js (máscaras de input)
- Vite (bundler e build de produção)
- Git/GitHub (fluxo GitFlow)
- Netlify (hospedagem e deploy contínuo)

## Estrutura do Projeto

- `index.html`
- `css/`
  - `style.css`
- `public/`
  - `html/`
    - `inicio.html`
    - `projetos.html`
    - `cadastro.html`
  - `imagens/`
    - `doacao-480.webp`, `doacao-800.webp`, `doacao-1200.webp`
    - `voluntariado-480.webp`, `voluntariado-800.webp`, `voluntariado-1200.webp`
  - `js/`
    - `main.js`
    - `router.js`
    - `templete.js`
    - `formulario.js`
    - `validacao.js`
    - `mascaras.js`
    - `armazenamento.js`
    - `menu.js`
    - `modal.js`
    - `tema.js`
- `package.json`
- `vite.config` (configuração padrão do Vite)

## Funcionalidades
- Navegação SPA via JavaScript (fetch de páginas HTML parciais, sem recarregar a página)
- Formulário de cadastro com validação em tempo real e máscaras de input (telefone, CPF, CEP)
- Persistência de dados no localStorage, com restauração automática do formulário
- Renderização dinâmica de cards de projetos via template literals
- Navegação por teclado completa: skip link, menu mobile e modal com focus trap e fechamento via Esc
- Modo escuro com detecção automática da preferência do sistema e alternância manual persistente
- Imagens responsivas via `srcset`, servidas em múltiplas resoluções no formato WebP

## Acessibilidade
O projeto segue as diretrizes WCAG 2.1 Nível AA, incluindo:
- HTML semântico e landmarks (`<nav>`, `<header>`, `<main>`, `<footer>`)
- Atributos WAI-ARIA em elementos interativos (menu, dropdown, modal, mensagens de erro)
- Contraste de cores validado com WebAIM Contrast Checker (mínimo 4.5:1)
- Navegação completa por teclado, com foco visível (`:focus-visible`) e gestão de foco no modal

## Instalação e Execução
Este projeto utiliza o Vite como servidor de desenvolvimento e ferramenta de build.

1. Clone o repositório:
```bash
   git clone https://github.com/Hortencio-Arthur/projeto-desenvolvimento-front-end.git
```
2. Instale as dependências:
```bash
   npm install
```
3. Inicie o servidor de desenvolvimento:
```bash
   npm run dev
```
4. Acesse `http://localhost:5173` no navegador

### Gerar build de produção
```bash
npm run build
```
Os arquivos otimizados são gerados na pasta `dist/`. Para testar a build localmente:
```bash
npm run preview
```

## Deploy
Aplicação publicada via Netlify, com deploy contínuo a partir da branch `main`:
🔗 https://thunderous-queijadas-72aace.netlify.app

## Desenvolvimento e uso de IA
Este projeto foi desenvolvido com apoio técnico de inteligência artificial (Claude, Anthropic) para explicações conceituais, orientação sobre boas práticas e revisão de código. Todo o código foi digitado, testado e compreendido manualmente.

## Contribuição
Projeto acadêmico individual — não aberto a contribuições externas no momento.

## Licença
Projeto desenvolvido para fins educacionais (Universidade Positivo).
