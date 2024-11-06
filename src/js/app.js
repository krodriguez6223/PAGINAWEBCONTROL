//animaciones de entrada

AOS.init();


AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 500, // values from 0 to 3000, with step 50ms
  duration: 1200, // values from 0 to 3000, with step 50ms
});

//MENU HAMBURGUESA

document.querySelector(".bars__menu").addEventListener("click", animateBars);

var linea1__bars = document.querySelector(".linea1__bars-menu");
var linea2__bars = document.querySelector(".linea2__bars-menu");
var linea3__bars = document.querySelector(".linea3__bars-menu");

function animateBars(){
  linea1__bars.classList.toggle("activelinea1__bars-menu")
  linea2__bars.classList.toggle("activelinea2__bars-menu")
  linea3__bars.classList.toggle("activelinea3__bars-menu")
  
}

//desplegue de menu de navegacion en mobiles
const navToggle = document.querySelector(".toggle__menu");
const navMenu = document.querySelector(".navegacion");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("visible");
});




