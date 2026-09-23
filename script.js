// ========================================
// MENU HAMBÚRGUER
// ========================================

const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

if (botaoMenu && menu) {

    botaoMenu.addEventListener("click", function () {

        menu.classList.toggle("active");

    });

}


// ========================================
// MODO CLARO E MODO NOTURNO
// ========================================

const botaoModo = document.getElementById("modo-noturno");

if (botaoModo) {

    // Recupera o modo salvo
    const modoSalvo = localStorage.getItem("modo");

    // Se o usuário tinha escolhido o modo noturno
    if (modoSalvo === "noturno") {

        document.body.classList.add("modo-noturno");

        botaoModo.textContent = "☀️ Modo claro";
    }


    // Quando o usuário clicar no botão
    botaoModo.addEventListener("click", function () {

        document.body.classList.toggle("modo-noturno");


        // Verifica qual modo está ativo
        if (document.body.classList.contains("modo-noturno")) {

            localStorage.setItem("modo", "noturno");

            botaoModo.textContent = "☀️ Modo claro";

        } else {

            localStorage.setItem("modo", "claro");

            botaoModo.textContent = "🌙 Modo noturno";
        }

    });

}


// ========================================
// ÁREA PRINCIPAL DA SPA
// ========================================

const conteudo = document.getElementById("conteudo");


// ========================================
// PÁGINAS DA APLICAÇÃO
// ========================================

const paginas = {

    // ------------------------------------
    // PÁGINA INICIAL
    // ------------------------------------

    inicio: `

        <h1>Bem-vindo à Verde Vivo</h1>

        <p>
            Protegendo a natureza, construindo o futuro.
        </p>

        <img
            src="arvore.jpg"
            alt="Uma árvore vista de baixo para cima"
            width="400"
        >


        <h2>Deixe seu comentário</h2>

        <form id="form-comentario">

            <label for="nome-comentario">
                Nome:
            </label>

            <input
                type="text"
                id="nome-comentario"
                required
                minlength="3"
                placeholder="Digite seu nome"
            >


            <label for="texto-comentario">
                Comentário:
            </label>

            <textarea
                id="texto-comentario"
                required
                minlength="5"
                placeholder="Digite seu comentário"
            ></textarea>


            <button type="submit">
                Enviar comentário
            </button>

        </form>


        <h2>Comentários</h2>

        <div id="lista-comentarios"></div>

    `,


    // ------------------------------------
    // SOBRE
    // ------------------------------------

    sobre: `

        <h1>Sobre nós</h1>

        <p>
            A Verde Vivo é uma ONG dedicada
            à preservação ambiental.
        </p>

        <p>
            Nosso objetivo é promover ações ambientais,
            incentivar o voluntariado e preservar
            áreas verdes.
        </p>

    `,


    // ------------------------------------
    // REFLORESTAMENTO
    // ------------------------------------

    reflorestamento: `

        <h1>Reflorestamento</h1>

        <span class="badge">
            Projeto ativo
        </span>

        <p>
            O projeto de reflorestamento trabalha
            com o plantio de árvores e a recuperação
            de áreas degradadas.
        </p>

        <h2>Objetivos</h2>

        <ul>

            <li>
                Recuperar áreas degradadas
            </li>

            <li>
                Plantar árvores
            </li>

            <li>
                Preservar a biodiversidade
            </li>

        </ul>

    `,


    // ------------------------------------
    // EDUCAÇÃO AMBIENTAL
    // ------------------------------------

    educacao: `

        <h1>Educação ambiental</h1>

        <span class="badge">
            Voluntariado
        </span>

        <p>
            O projeto promove campanhas para ensinar
            a importância da preservação ambiental.
        </p>

        <h2>Objetivos</h2>

        <ul>

            <li>
                Conscientizar a população
            </li>

            <li>
                Incentivar práticas sustentáveis
            </li>

            <li>
                Promover a preservação ambiental
            </li>

        </ul>

    `,


    // ------------------------------------
    // CONTATO
    // ------------------------------------

    contato: `

        <h1>Entre em contato</h1>

        <form id="form-contato">

            <label for="nome">
                Nome:
            </label>

            <input
                type="text"
                id="nome"
                name="nome"
                required
                minlength="3"
            >

            <span class="mensagem-erro">
                Digite seu nome.
            </span>


            <label for="email">
                E-mail:
            </label>

            <input
                type="email"
                id="email"
                name="email"
                required
            >

            <span class="mensagem-erro">
                Digite um e-mail válido.
            </span>


            <label for="mensagem">
                Mensagem:
            </label>

            <textarea
                id="mensagem"
                name="mensagem"
                required
                minlength="5"
            ></textarea>


            <button type="submit">
                Enviar
            </button>

        </form>


        <div
            id="mensagem-sucesso"
            class="alerta sucesso"
            style="display: none;"
        >
            Mensagem enviada com sucesso!
        </div>

    `
};


// ========================================
// COMENTÁRIOS
// ========================================

function mostrarComentarios() {

    const lista =
        document.getElementById("lista-comentarios");


    // Se a página não possui comentários,
    // encerra a função
    if (!lista) {
        return;
    }


    // Recupera os comentários salvos
    const comentariosSalvos =
        JSON.parse(
            localStorage.getItem("comentarios")
        ) || [];


    // Limpa a área
    lista.innerHTML = "";


    // Percorre todos os comentários
    comentariosSalvos.forEach(function (comentario) {

        lista.innerHTML += `

            <div class="comentario">

                <strong>
                    ${comentario.nome}
                </strong>

                <p>
                    ${comentario.texto}
                </p>

            </div>

        `;

    });

}


// ========================================
// FORMULÁRIO DE COMENTÁRIOS
// ========================================

function configurarComentarios() {

    const formulario =
        document.getElementById("form-comentario");


    if (!formulario) {
        return;
    }


    formulario.addEventListener(
        "submit",
        function (event) {

            // Impede o navegador
            // de recarregar a página
            event.preventDefault();


            // Verifica se os campos são válidos
            if (!formulario.checkValidity()) {

                formulario.reportValidity();

                return;
            }


            // Captura os dados
            const nome =
                document.getElementById(
                    "nome-comentario"
                ).value;

            const texto =
                document.getElementById(
                    "texto-comentario"
                ).value;


            // Cria um objeto
            const novoComentario = {

                nome: nome,

                texto: texto

            };


            // Recupera comentários existentes
            const comentarios =
                JSON.parse(
                    localStorage.getItem(
                        "comentarios"
                    )
                ) || [];


            // Adiciona o novo comentário
            comentarios.push(novoComentario);


            // Salva novamente
            localStorage.setItem(
                "comentarios",
                JSON.stringify(comentarios)
            );


            // Limpa o formulário
            formulario.reset();


            // Atualiza a lista
            mostrarComentarios();

        }
    );

}


// ========================================
// FORMULÁRIO DE CONTATO
// ========================================

function configurarContato() {

    const formulario =
        document.getElementById("form-contato");


    const mensagemSucesso =
        document.getElementById(
            "mensagem-sucesso"
        );


    if (!formulario) {
        return;
    }


    formulario.addEventListener(
        "submit",
        function (event) {

            // Impede o envio tradicional
            event.preventDefault();


            // Verifica os campos
            if (!formulario.checkValidity()) {

                formulario.reportValidity();

                return;
            }


            // Mostra mensagem de sucesso
            mensagemSucesso.style.display =
                "block";


            // Limpa os campos
            formulario.reset();

        }
    );

}


// ========================================
// RENDERIZAÇÃO DA SPA
// ========================================

function renderizarPagina() {

    // Obtém a rota da URL
    const rota =
        window.location.hash.substring(1)
        || "inicio";


    // Mostra a página correspondente
    conteudo.innerHTML =
        paginas[rota] || paginas.inicio;


    // Configura os comentários
    configurarComentarios();


    // Mostra os comentários salvos
    mostrarComentarios();


    // Configura o formulário de contato
    configurarContato();

}


// ========================================
// NAVEGAÇÃO
// ========================================

document.querySelectorAll("nav a").forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                // Impede navegação tradicional
                event.preventDefault();


                // Obtém o endereço do link
                const rota =
                    this.getAttribute("href");


                // Altera a rota
                window.location.hash = rota;


                // Atualiza o conteúdo
                renderizarPagina();


                // Fecha o menu mobile
                if (menu) {

                    menu.classList.remove(
                        "active"
                    );

                }

            }
        );

    }
);


// ========================================
// ALTERAÇÃO DA ROTA
// ========================================

window.addEventListener(
    "hashchange",
    renderizarPagina
);


// ========================================
// CARREGAMENTO INICIAL
// ========================================

renderizarPagina();

