$(document).ready(function() {
    function parallax(){
        let prlxLyr1 = document.getElementById("prlxLyr1");
        let prlxLyr2 = document.getElementById("prlxLyr2");
        prlxLyr1.style.top = (window.pageYOffset/8) + "px";
        prlxLyr2.style.top = (window.pageYOffset/8) + "px";
    }
});

window.addEventListener("scroll", parallax, false);