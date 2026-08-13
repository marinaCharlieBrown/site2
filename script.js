// ===============================
// BOTÕES DE MÚSICA
// ===============================

const botoes = document.querySelectorAll(".play");

botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        if (botao.textContent === "▶") {
            botao.textContent = "Ⅱ";
        } else {
            botao.textContent = "▶";
        }

    });

});


// ===============================
// MENU AO ROLAR
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#000";

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.7)";

    } else {

        header.style.background =
            "rgba(0, 0, 0, 0.95)";

        header.style.boxShadow = "none";
    }

});


// ===============================
// ANIMAÇÃO DOS CARDS
// ===============================

const elementos =
    document.querySelectorAll(".card, .album, .musica");

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";

                entrada.target.style.transform =
                    "translateY(0)";
            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(30px)";

    elemento.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observador.observe(elemento);

});
