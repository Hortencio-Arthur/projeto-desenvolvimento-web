# ONG [Nome da ONG]

## Descrição
Aplicação web SPA (Single Page Application) desenvolvida para uma ONG fictícia, com o objetivo de centralizar informações institucionais, projetos sociais e cadastro de voluntários e doadores.

## Tecnologias Utilizadas
- HTML5 semântico
- CSS3 (Grid, variáveis customizadas, design responsivo mobile-first)
- JavaScript (Vanilla JS, ES6+)
- IMask.js (máscaras de input)
- Git/GitHub (fluxo GitFlow)

## Estrutura do Projeto

## Estrutura do Projeto

- `index.html`
- `css/`
  - `style.css`
- `html/`
  - `inicio.html`
  - `projetos.html`
  - `cadastro.html`
- `js/`
  - `main.js`
  - `router.js`
  - `templete.js`
  - `formulario.js`
  - `validacao.js`
  - `mascaras.js`
  - `armazenamento.js`
- `imagens/`
  - `doacao.jpg`
  - `voluntariado.jpg`


## Funcionalidades
- Navegação SPA via JavaScript (fetch de páginas HTML parciais, sem recarregar a página)
- Formulário de cadastro com validação em tempo real e máscaras de input (telefone, CPF, CEP)
- Persistência de dados no localStorage, com restauração automática do formulário
- Renderização dinâmica de cards de projetos via template literals

## Instalação e Execução
Este projeto utiliza `fetch()` para carregar páginas HTML dinamicamente, portanto **não funciona abrindo o `index.html` diretamente no navegador** (protocolo `file://`). É necessário servir os arquivos por um servidor local:

1. Clone o repositório:
```bash
   git clone <url-do-repositorio>
```
2. Abra a pasta no VS Code
3. Instale a extensão **Live Server** (se ainda não tiver)
4. Clique com o botão direito em `index.html` → **Open with Live Server**

## Deploy
_A ser preenchido na etapa de deploy._

## Desenvolvimento e uso de IA
Este projeto foi desenvolvido com apoio técnico de inteligência artificial (Claude, Anthropic) para explicações conceituais, orientação sobre boas práticas e revisão de código. Todo o código foi digitado, testado e compreendido manualmente.

## Contribuição
Projeto acadêmico individual — não aberto a contribuições externas no momento.

## Licença
Projeto desenvolvido para fins educacionais (Universidade Positivo).
