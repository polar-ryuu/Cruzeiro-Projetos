(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),((e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports))((()=>{var e=document.querySelector(`.menu-toggle`),t=document.querySelector(`#menu-principal`);e&&t&&e.addEventListener(`click`,function(){t.classList.toggle(`active`);let n=t.classList.contains(`active`);e.setAttribute(`aria-expanded`,n),e.setAttribute(`aria-label`,n?`Fechar menu`:`Abrir menu`)});var n=document.getElementById(`modo-noturno`);n&&(localStorage.getItem(`modo`)===`noturno`&&(document.body.classList.add(`modo-noturno`),n.textContent=`☀️ Modo claro`),n.addEventListener(`click`,function(){document.body.classList.toggle(`modo-noturno`),document.body.classList.contains(`modo-noturno`)?(localStorage.setItem(`modo`,`noturno`),n.textContent=`☀️ Modo claro`):(localStorage.setItem(`modo`,`claro`),n.textContent=`🌙 Modo noturno`)}));var r=document.getElementById(`conteudo`),i={inicio:`

        <h1>Bem-vindo à Verde Vivo</h1>

        <p>
            Protegendo a natureza, construindo o futuro.
        </p>

        <img
            src="arvore2.webp"
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

    `,sobre:`

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

    `,reflorestamento:`

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

    `,educacao:`

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

    `,contato:`

        <h1>Entre em contato</h1>

        <form id="form-contato">

            <label for="nome"> Nome: </label> 
            <input 
                type="text"    
                id="nome" 
                name="nome" 
                required minlength="3" 
            > 
            <span class="mensagem-erro"> Digite seu nome. </span>


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
            role="status"
            aria-live="polite"
        >
            Mensagem enviada com sucesso!
        </div>

    `};function a(){let e=document.getElementById(`lista-comentarios`);if(!e)return;let t=JSON.parse(localStorage.getItem(`comentarios`))||[];e.innerHTML=``,t.forEach(function(t){e.innerHTML+=`

            <div class="comentario">

                <strong>
                    ${t.nome}
                </strong>

                <p>
                    ${t.texto}
                </p>

            </div>

        `})}function o(){let e=document.getElementById(`form-comentario`);e&&e.addEventListener(`submit`,function(t){if(t.preventDefault(),!e.checkValidity()){e.reportValidity();return}let n={nome:document.getElementById(`nome-comentario`).value,texto:document.getElementById(`texto-comentario`).value},r=JSON.parse(localStorage.getItem(`comentarios`))||[];r.push(n),localStorage.setItem(`comentarios`,JSON.stringify(r)),e.reset(),a()})}function s(){let e=document.getElementById(`form-contato`),t=document.getElementById(`mensagem-sucesso`);e&&e.addEventListener(`submit`,function(n){if(n.preventDefault(),!e.checkValidity()){e.reportValidity();return}t.style.display=`block`,e.reset()})}function c(){r.innerHTML=i[window.location.hash.substring(1)||`inicio`]||i.inicio,o(),a(),s()}document.querySelectorAll(`nav a`).forEach(function(e){e.addEventListener(`click`,function(e){e.preventDefault();let n=this.getAttribute(`href`);window.location.hash=n,c(),t&&t.classList.remove(`active`)})}),window.addEventListener(`hashchange`,c),c()}))();