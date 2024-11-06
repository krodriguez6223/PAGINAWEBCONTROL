document.addEventListener("DOMContentLoaded", function() {
  var carouselContainer = document.querySelector(".carousel-container");
  var carouselContainer = document.querySelector(".carousel-container2");
  var logos = Array.from(document.querySelectorAll(".carousel-container img"));
  var logos = Array.from(document.querySelectorAll(".carousel-container2 img"));
  var totalLogos = logos.length;
  var logoIndex = 0;
  var randomOrder = shuffleArray(logos);
  var randomOrder = shuffleArray2(logos);

  function slideLogos() {
    logoIndex++;
    if (logoIndex >= totalLogos + 1) {
      logoIndex = 1;
      carouselContainer.style.transition = "none";
      carouselContainer.style.transform = "translateX(0)";
      setTimeout(function() {
        carouselContainer.style.transition = "";
        carouselContainer.style.transform = "translateX(-" + logoWidth + "px)";
      }, 10);
    } else {
      carouselContainer.style.transform = "translateX(-" + (logoWidth * logoIndex) + "px)";
    }
  }
  function slideLogos2() {
    logoIndex++;
    if (logoIndex >= totalLogos + 1) {
      logoIndex = 1;
      carouselContainer.style.transition = "none";
      carouselContainer.style.transform = "translateX(0)";
      setTimeout(function() {
        carouselContainer.style.transition = "";
        carouselContainer.style.transform = "translateX(-" + logoWidth + "px)";
      }, 10);
    } else {
      carouselContainer.style.transform = "translateX(-" + (logoWidth * logoIndex) + "px)";
    }
  }

  function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  function shuffleArray2(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  carouselContainer.innerHTML = "";
  randomOrder.forEach(function(logo) {
    carouselContainer.appendChild(logo);
  });

  setInterval(slideLogos, 2000); // Cambia la velocidad aquí (2000 ms)
  setInterval(slideLogos2, 2000); // Cambia la velocidad aquí (2000 ms)
});
