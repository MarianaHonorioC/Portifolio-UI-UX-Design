const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const paginas = document.querySelectorAll(".pagina");
let currentIndex = 0;

function showPagina(index) {
  paginas.forEach((pagina, i) => {
    if (i === index) {
      pagina.classList.add("active");
    } else {
      pagina.classList.remove("active");
    }
  });
}

function nextPagina() {
  currentIndex = (currentIndex + 1) % paginas.length;
  showPagina(currentIndex);
}

function prevPagina() {
  currentIndex = (currentIndex - 1 + paginas.length) % paginas.length;
  showPagina(currentIndex);
}

nextBtn.addEventListener("click", nextPagina);
prevBtn.addEventListener("click", prevPagina);

showPagina(currentIndex);

//menu hamburguer

const menuToggle = document.getElementById("menu-toggle");
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", function () {
  menu.classList.toggle("open");
  menuIcon.classList.toggle("open");
});
