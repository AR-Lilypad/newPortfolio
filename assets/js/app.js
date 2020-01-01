$(document).ready(function() {
    function parallax(){
        let prlxLyr2 = document.getElementById("prlxLyr1");
        let prlxLyr1 = document.getElementById("prlxLyr2");
        let prlxLyr3 = document.getElementById("prlxLyr1");
        let prlxLyr4 = document.getElementById("prlxLyr2");
        prlxLyr1.style.top = (window.pageYOffset/8) + "px";
        prlxLyr2.style.top = (window.pageYOffset/10) + "px";
        prlxLyr3.style.top = (window.pageYOffset/8) + "px";
        prlxLyr4.style.top = (window.pageYOffset/10) + "px";
    }
});

window.addEventListener("scroll", parallax, false);