const projetos = {
  filmes: {
    titulo: "Projeto Filmes",
    descricao: [
      "Apresenta o design para visualizar a imagem de fundo.",
      "Altera os filmes após selecioná-lo e adicionando o trailer para assistir.",
      "Sou apaixonado de assistir os filmes, inclusive filmes antigos são sensacionais."],
    funcionalidade: [
      "Escolha o seu filme preferido",
      "Clique no botão Trailer para assistir",
    ],
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagem: "projects/images/filme.png",
    github: "https://github.com/LeoGratti/movies",
    linkedin: "https://www.linkedin.com/in/leonardograttivolf/"
  },

  tour: {
    titulo: "Projeto Tour",
    descricao: "Este projeto apresenta um carrossel interativo com imagens e informações sobre diversos países",
    funcionalidade: ["Exibe imagens de fundo com efeito de transição suave", 
      "Mostra informações detalhadas sobre cada país",
      "Botões para navegar entre os países",
      "Design responsivo e estlizando com animações"
    ],
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagem: "projects/images/brasil.png",
    github: "https://github.com/LeoGratti/countries-tour",
    linkedin: "https://www.linkedin.com/in/leonardograttivolf/"
  },

  starbucks: {
    titulo: "Projeto Starbucks",
    descricao: "Apresenta a visualização da imagem em diversos sabores",
    funcionalidade: ["Clica avançar para ver outros sabores"],
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagem: "projects/images/starbucks.png"
  }

};

const popup = document.getElementById("popup");
const img = document.getElementById("popup-img");
const titulo = document.getElementById("popup-titulo");
const descricao = document.getElementById("popup-descricao");
const funcionalidade = document.getElementById("popup-funcionalidades");
const tecnologias = document.getElementById("popup-tecnologias");
const fechar = document.querySelector(".fechar");

const linkGithub = document.getElementById("link-github");
const linkLinkedin = document.getElementById("link-linkedin");

document.querySelectorAll(".btn-vermais").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-projeto");
    const projeto = projetos[id];

    img.src = projeto.imagem;
    titulo.textContent = projeto.titulo;

    if (Array.isArray(projeto.descricao)) {
      descricao.innerHTML = projeto.descricao.map(p => `<p>${p}</p>`).join("");
    } else {
      descricao.textContent = projeto.descricao;
    }

    funcionalidade.innerHTML = projeto.funcionalidade
      .map(f => `<li>${f}</li>`)
      .join("");

    tecnologias.innerHTML = projeto.tecnologias
      .map(t => `<li>${t}</li>`)
      .join('');

    linkGithub.href = projeto.github;
    linkLinkedin.href = projeto.linkedin;

    popup.style.display = "flex";
  });
});

fechar.addEventListener("click", () => popup.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === popup) popup.style.display = "none";
});


