var slideIndex = 1;


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("fade");
  var indexLines = document.getElementsByClassName("indexLine");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < indexLines.length; i++) {
    indexLines[i].className = indexLines[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  indexLines[slideIndex - 1].className += " active";
}
