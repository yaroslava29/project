function showTargetForm() {
   document.getElementsByClassName("target__form")[0].classList.add("act");
    
}
function closeTargetForm() {
    document.getElementsByClassName("target__form")[0].classList.remove("act"); 
}

var like_items = document.getElementsByClassName("item__svg");
for (i = 0; i < like_items.length; i++) {
    like_items[i].onclick = function () { 
        var c = this.parentElement.getElementsByClassName("item__likecounter");
        if (c.length) {
            c[0].remove();
        } else {
            var span = document.createElement("span");
            var txt = document.createTextNode("1");
            span.appendChild(txt);
            span.className = "item__likecounter";
            this.parentElement.appendChild(span);
        }
    }
}



toggle.onclick = () => {
    navigation.classList.toggle("nav_expand");
};
      
function closeBurgerForm() {
    navigation.classList.toggle("nav_expand"); 
}


