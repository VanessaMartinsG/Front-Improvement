let nickname = document.querySelector(".nickName");
let fecharModal = document.querySelector("#closeModal");
let botaoMenu = document.querySelector(".right-header svg");
let menu = document.querySelector(".left-panel");
let returnPerfil = document.querySelector(".arrowsReturn");
let nextPerfil = document.querySelector(".arrowsNext");
let indice = 0;

nickname.addEventListener("click", () => {
    modal.style.display = "flex";
    trocarModal(indice);
})

fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
})

botaoMenu.addEventListener("click", () => {
    if (menu.style.display == "none") {
        menu.style.display = "flex";

    } else {
        menu.style.display = "none";
    }
})

const listaDePessoas = [
    {
        nome: "Bruno Pitta",
        nick: "Bad Luck For You",
        descricao:
            "Bruno Pitta, desenvolvedor Front End Pleno, atualmente trabalhando na VX Case, além de trabalhar como monitor no curso da cubos academy em parceria com o ifood. Atualmente estudando Next. Não menos importante, mas ama bastante dark souls e é jogador de mago em qualquer RPG.",
        descricaoModal:
            "Desenvolvedor Front End Pleno, atualmente trabalhando na VX Case, além de trabalhar como monitor no curso da cubos academy em parceria com o ifood. Atualmente estudando Next. Não menos importante, mas ama bastante dark souls e é jogador de mago em qualquer RPG.  Estou habituado com html, css e javascript, além de ter experiência em projetos com angular, vue e React, apesar de ter clara preferência pelo último, devido a isso que decidi escolher o next.  Possuo pouco mais de 2 anos de experiência e não estou aberto a novas propostas de trabalho no momento!",
        foto: "./img/brunoPerfil.jpg",
        atividadesFavoritas: [
            "./img/bruno1.png",
            "./img/bruno2.png",
            "./img/bruno3.png",
            "./img/bruno4.png",
        ],
    },
    {
        nome: "Vitor Manoel",
        nick: "CremosinhoBA",
        descricao:
            "Vitor Manoel, desenvolvedor em desenvolvimento, atualmente fazendo pesquisa na UNEB-ACSO. Atualmente estudando tecnologias web. Não menos importante, mas ama bastante linguagens baixo nível e é joga em emuladores de super nintendo ao sentir nostalgia.",
        descricaoModal:
            "Vitor Manoel, desenvolvedor em desenvolvimento, atualmente fazendo pesquisa na UNEB-ACSO. Atualmente estudando tecnologias web. Não menos importante, mas ama bastante linguagens baixo nível e é joga em emuladores de super nintendo ao sentir nostalgia. Abertot a propostas de trabalho, estou habituado com html e css, conhecendo também o básico de programação web utilizando PHP. Costumo escrever algoritmos de baixo nível para realização de desafios e projetos de graduação utilizando C,C++ e Python.",
        foto: "./img/vitaoPerfil.jpeg",
        atividadesFavoritas: [
            "./img/vitao1.png",
            "./img/vitao2.png",
            "./img/vitao3.png",
            "./img/vitao4.png",
        ],
    },
    {
        nome: "Vanessa Martins",
        nick: "Evil Queen",
        descricao:
            "Vanessa Martins, estudante de sistema de informação na UNEB. Atualmente estudando tecnologias web e línguas estrangeiras. No tempo livre, curte tocar violão, assistir series e jogar.",
        descricaoModal:
            "Estudante, em desenvolvimento, de programação, apaixonada por C (raiz!). Atualmente concluindo uma bolsa de 2 anos na iniciação cientifica, voltada a robótica. Teve um projeto dedicado a reconhecimento de voz voltado a robôs de serviços. Participou de competições Latino Americano e publicou 3 artigos. No momento, estou em busca de novas experiências e aberta á novas propostas",
        foto: "./img/foto.png",
        atividadesFavoritas: [
            "./img/vanessa1.png",
            "./img/vanessa2.png",
            "./img/vanessa3.jpg",
            "./img/vanessa4.jpg",
        ],
    },
];



returnPerfil.addEventListener("click", () => {
    indice++;

    if (indice >= listaDePessoas.length) {
        indice = 0;
    }

    trocarPerfil(indice);
})

nextPerfil.addEventListener("click", () => {
    indice--;

    if (indice < 0) {
        indice = listaDePessoas.length - 1;
    }

    trocarPerfil(indice);
})


function trocarPerfil(indice) {
    let descricao = document.querySelector(".description");
    let imagem = document.querySelector(".imgPart img");

    descricao.textContent = listaDePessoas[indice].descricao;
    nickname.textContent = listaDePessoas[indice].nick;
    imagem.src = listaDePessoas[indice].foto;
}

function trocarModal(indice) {
    let titulo = document.querySelector("#tituloDescricao");
    let descricao = document.querySelector(".descricaoModal");
    let imagens = document.querySelectorAll(".imgFavAtv img");

    titulo.textContent = listaDePessoas[indice].nome;
    descricao.textContent = listaDePessoas[indice].descricaoModal;
    imagens.forEach((img, indiceImg) => {
        img.src = listaDePessoas[indice].atividadesFavoritas[indiceImg];
    })

}

