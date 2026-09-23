const botao = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

botao.addEventListener("click", function() {
    menu.classList.toggle("active");
});

const formulario = document.querySelector("#form-contato");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    if (formulario.checkValidity()) {
        mensagemSucesso.style.display = "block";
        formulario.reset();
    }
});

const conteudo = document.getElementById("conteudo");

const paginas = {
    inicio: `
        <h1>Bem-vindo à Verde Vivo</h1>
        <p>Protegendo a natureza, construindo o futuro.</p>
        <img src="arvore.jpg" alt="Uma árvore vista de baixo para cima" width="400">
    `,

    sobre: `
        <h1>Sobre nós</h1>
        <p>A Verde Vivo é uma ONG dedicada à preservação ambiental.</p>
    `,

    projetos: `
        <h1>Projetos</h1>
        <p>Conheça nossas iniciativas de preservação e sustentabilidade.</p>
    `,

    contato: `
        <h1>Contato</h1>
        <p>Entre em contato com a Verde Vivo.</p>
    `
};

function renderizarPagina() {
    const rota = window.location.hash.substring(1) || "inicio";

    conteudo.innerHTML = paginas[rota] || paginas.inicio;
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const rota = this.getAttribute("href");

        window.location.hash = rota;
        renderizarPagina();
    });
});

window.addEventListener("hashchange", renderizarPagina);

renderizarPagina();



