'use strict';

// menu header
function goToSection1() {
    document.getElementById("section1").scrollIntoView();
    for (let i=1; i<=6; i++) {
        document.getElementById(i).classList.remove("change-color");
    }
}

function goToSection2() {
    document.getElementById("section2").scrollIntoView();
    for (let i=1; i<=6; i++) {
        document.getElementById(i).classList.add("change-color");
    }
}

function goToSection3() {
    document.getElementById("section3").scrollIntoView();
    for (let i=1; i<=6; i++) {
        document.getElementById(i).classList.add("change-color");
    }
}

function goToSection4() {
    document.getElementById("section4").scrollIntoView();
    for (let i=1; i<=6; i++) {
        document.getElementById(i).classList.add("change-color");
    }
}
function goToSection5() {
    document.getElementById("section5").scrollIntoView();
    for (let i=1; i<=6; i++) {
        document.getElementById(i).classList.add("change-color");
    }
}

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 853) {
        for (let i=1; i<=6; i++) {
            document.getElementById(i).classList.add("change-color");
        }
    } else {
        for (let i=1; i<=6; i++) {
            document.getElementById(i).classList.remove("change-color");
        }
        

    }
});