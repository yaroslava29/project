var slideIndex = 0;
showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlidesOne");
        var clicks = document.getElementsByClassName("click");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < clicks.length; i++) {
            clicks[i].className = clicks[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        clicks[slideIndex - 1].className += " active";
        setTimeout(showSlides, 3000); 
}
    

var slideModule = 0;
    showProduce();

    function showProduce() {
        var i;
        var changes = document.getElementsByClassName("myChanges");
        var starts = document.getElementsByClassName("start");
        for (i = 0; i < changes.length; i++) {
            changes[i].style.display = "none";
        }
        slideModule++;
        if (slideModule > changes.length) { slideModule = 1 }
        for (i = 0; i < starts.length; i++) {
            starts[i].className = starts[i].className.replace(" active", "");
        }
        changes[slideModule - 1].style.display = "block";
        starts[slideModule - 1].className += " active";
        setTimeout(showProduce, 3000); 
}

      