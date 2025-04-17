



let slideIndex = 1;

const showSlides = function(n) {
    const slides = $(".slides");
    const thumbnails = $(".demo");
  
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
  
    slides.hide();
    thumbnails.removeClass("active");
  
    $(slides[slideIndex - 1]).show();
    $(thumbnails[slideIndex - 1]).addClass("active");
  };

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

$(document).ready(function() {
    showSlides(slideIndex);

    // Optional: Auto advance
    setInterval(function () {
        plusSlides(1);
    }, 7000);
});