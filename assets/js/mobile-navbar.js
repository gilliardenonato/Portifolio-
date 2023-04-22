const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



new TypeIt("#text-typewriter", {
    speed: 100,
    startDelay: 500,
    cursorChar: "|",
    loop: true
  })
    .type("eu sou o Gil")
    .pause(1000)
    .delete(3)
    .pause(1000)
    .type("Nonato!")
    .go();
















    
    function alterarTecnologia(descricao) {
      let significado = document.querySelector(".tecnologia-sobre");
      significado.innerHTML = descricao;
    }

    document.querySelector(".tecnologias-icones").addEventListener("mouseout", ()=>{
      alterarTecnologia("*passe o cursor do mouse no card para ler*");
    })


    document.querySelector(".html").addEventListener("mouseover", ()=>{
      alterarTecnologia("O HTML (Hyper Text Markup Language) é uma linguagem de marcação, essencial para o funcionamento da internet. Além de conter o conteúdo do site, como os textos, imagens e links, é o HTML que pode ser interpretado pelos navegadores.");
    });
    

    document.querySelector(".css").addEventListener("mouseover", function () {
      alterarTecnologia("O CSS (Cascading Style Sheets) é uma linguagem de estilo, usada para modificar a aparência dos sites. É só graças ao CSS que design incríveis se tornam possíveis, sem ele, os sites seriam feios e complicados.");
    });
    

    
    document.querySelector(".javascript").addEventListener("mouseover", function () {
      alterarTecnologia("O JavaScript é uma linguagem de programação de alto nível. Graças a essa tecnologia, é possível fazer com que as páginas se tornem interativas. A funcionalidade que você está usando nesse momento só foi possível devido ao JavaScript");
    });
    

    
    document.querySelector(".php").addEventListener("mouseover", function () {
      alterarTecnologia("O PHP é uma linguagem de programação de uso geral, especialmente adequada para o desenvolvimento web. Com o PHP, é possível criar sites dinâmicos e interativos que podem incluir formulários, bancos de dados e muito mais.");
    });
    

    
    document.querySelector(".github").addEventListener("mouseover", function () {
      alterarTecnologia("O Git é um sistema de controle de versão distribuído, o que significa que um clone local do projeto é um repositório de controle de versão completo. Esses repositórios locais totalmente funcionais facilitam o trabalho offline ou remotamente.");
    });
    


