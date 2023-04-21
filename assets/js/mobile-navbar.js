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
    .type("eu sou o gil")
    .pause(1000)
    .delete(3)
    .pause(1000)
    .type("Nonato!")
    .go();

