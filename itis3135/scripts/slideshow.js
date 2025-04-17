



let currentSlide = 0;

function showSlide(index) {
  const totalSlides = slides.length;
  // Loop back if index is out of bounds
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    slide.classList.remove("slide-active");
  });
  slides[currentSlide].classList.add("slide-active");
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") currentSlide(1);
    if (e.key === "ArrowLeft") currentSlide(-1);
  });

function plusSlides(n) {
  showSlide(currentSlide + n);
}

function setSlide(index) {
  showSlide(index);
}

// Optional: Auto advance
$(document).ready(function() {
    showSlides(slideIndex);

    // Optional: Auto advance
setInterval(function () {
        currentSlide(1);
    }, 7000);
});