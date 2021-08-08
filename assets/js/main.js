/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/* CONNECTING TO ZILPAY*/
let btn = document.createElement("button");
btn.name = "zilpay-btn"
btn.innerHTML = "Connect to Zilpay";
btn.addEventListener("click", function () {
    if (typeof window.zilPay !== 'undefined') { 
        console.log("Zilpay detected!"); 

        const zilliqa = window.zilPay;
        const utils = zilPay.utils;

        zilliqa.wallet.connect();
    }
});
document.body.appendChild(btn);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.home__data',{delay: 200})
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

// /*SCROLL GALLERY*/
// sr.reveal('.gallery__carousel',{}); 
// sr.reveal('.gallery__text',{}); 
// sr.reveal('.gallery__data',{interval: 200}); 
// sr.reveal('.gallery__img',{delay: 600});

/*SCROLL MY PIECES*/
sr.reveal('.mypieces__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 




