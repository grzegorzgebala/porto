'use strict';

// menu header
function goToSection1() {
    document.getElementById("section1").scrollIntoView();
    for (let i=2; i<=7; i++) {
        document.getElementById(i).classList.remove("change-color");
    }
}

function goToSection2() {
    document.getElementById("section2").scrollIntoView();
    for (let i=2; i<=7; i++) {
        document.getElementById(i).classList.add("change-color");
    }
    document.getElementById(1).classList.add("change-color-logo");
}

function goToSection3() {
    document.getElementById("section3").scrollIntoView();
    for (let i=2; i<=7; i++) {
        document.getElementById(i).classList.add("change-color");
    }
    document.getElementById(1).classList.add("change-color-logo");
}

function goToSection4() {
    document.getElementById("section4").scrollIntoView();
    for (let i=2; i<=7; i++) {
        document.getElementById(i).classList.add("change-color");
    }
    document.getElementById(1).classList.add("change-color-logo");
}
function goToSection5() {
    document.getElementById("section5").scrollIntoView();
    for (let i=2; i<=7; i++) {
        document.getElementById(i).classList.add("change-color");
    }
    document.getElementById(1).classList.add("change-color-logo");
}

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= $(section1).height()) {
        for (let i=2; i<=7; i++) {
            document.getElementById(i).classList.add("change-color");
        }
        document.getElementById(1).classList.add("change-color-logo");
    } else {
        for (let i=2; i<=7; i++) {
            document.getElementById(i).classList.remove("change-color");
        }
        document.getElementById(1).classList.remove("change-color-logo");
    }
});