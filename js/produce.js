
function plusSlides(n, cls) {
    var slideIndex = 0;
    var slides = document.getElementsByClassName("mySlides-" + cls);
    for (i = 0; i < slides.length; i++) {
        if (slides[i].className.indexOf("active") >= 1) {
            slideIndex = i;
        }
    }
    showSlides(slideIndex += n, cls);
}


function showSlides(n, cls) {
    var i;
    var slides = document.getElementsByClassName("mySlides-"+cls);
  
    if (n >= slides.length) { n = 0 }
    if (n < 0) { n = slides.length-1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }
    slides[n].className += " active";
}