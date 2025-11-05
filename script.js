document.getElementById("form-contato").addEventListener("submit", async function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const dados = { nome, email, mensagem };

  try {
    const response = await fetch("http://localhost:8080/api/contato", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dados)
    });

    if (response.ok) {
      alert("Mensagem enviada com sucesso! Entrarei em contato em breve.");
      document.getElementById("form-contato").reset();
    } else {
      alert("Erro ao enviar a mensagem. Tente novamente mais tarde");
    }
  } catch (erro) {
    console.error("Erro ao enviar: ", erro);
    alert("Falha de conexão com o servidor");
  }

  /*const texto = await response.text();
  document.getElementById("mensagem-sucesso").textContent = texto;
  this.reset();*/

  /*if (response.ok) {
    document.getElementById("mensagem-sucesso").textContent = "mensagem enviada com sucesso";
    this.reset();
  } else {
    document.getElementById("mensagem-sucesso").textContent = "Erro ao enviar mensagem. Tente novamente";
  }*/

  /*document.getElementById("mensagem-sucesso").textContent =
    "Mensagem enviada com sucesso! Entrarei em contato em breve.";
  this.reset();*/
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


