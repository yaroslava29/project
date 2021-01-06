var slideChange = 0;
showSlide();

function showSlide() {
    var i;
    var slides = document.getElementsByClassName("mySlidestwo");
    var restarts = document.getElementsByClassName("restart");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideChange++;
    if (slideChange > slides.length) { slideChange = 1 }
    for (i = 0; i < restarts.length; i++) {
        restarts[i].className = restarts[i].className.replace(" active", "");
    }
    slides[slideChange - 1].style.display = "block";
    restarts[slideChange - 1].className += " active";
    setTimeout(showSlide, 3000); 
}

window.addEventListener('scroll', function () {
    document.getElementById('showScroll').style.top = -(document.documentElement.scrollTop/4) + 'px';
});