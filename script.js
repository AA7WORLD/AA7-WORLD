ScrollReveal().reveal('.hero',{

distance:'80px',

duration:1500,

origin:'bottom'

});

ScrollReveal().reveal('.card',{

interval:150

});

ScrollReveal().reveal('.project-card',{

interval:200

});

ScrollReveal().reveal('.about',{

origin:'left'

});

ScrollReveal().reveal('.stats',{

origin:'right'

});
const nav = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        nav.classList.add("active");

    }else{

        nav.classList.remove("active");

    }

});