let span=document.querySelector(".icons")

let icon=document.querySelector(".menu")

let cancel=document.getElementById("cancel")
let list=document.querySelector(".list")

icon.addEventListener("click", ()=>{
    if(span.style.display==="flex"){
    span.style.display="none"
    cancel.style.display="block";
    list.style.display="flex"
    }
    else{
        span.style.display="flex";
    cancel.style.display="none";
    list.style.display="flex"
    list.style.display="none"
    }
})

let show=document.querySelector(".hide")
var button =document.querySelector(".btn")

button.addEventListener("click",()=>{
    if(show.style.display==="none"){
        show.style.display="grid"
        button.innerText="Show Me Less";
    }
    else{
        show.style.display="none"
        button.innerText="Show Me More";
    }
})

ScrollReveal({
    rest:true,
    distance:'80px',
    duration: 2000,
    delay: 400
});
ScrollReveal().reveal('.nav', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.land-info , .land-btn', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.row', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.land-img img', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.about-img img', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.about-info', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.protfolio', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.blog-container', { delay: 500, origin: 'right' });







