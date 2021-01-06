window.addEventListener('scroll', function () {
    document.getElementById('showScroll').style.top = -(document.documentElement.scrollTop/4) + 'px';
});