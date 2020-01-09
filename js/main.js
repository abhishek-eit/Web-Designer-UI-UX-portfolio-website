
sal();


const hamMenu = document.querySelector('.ham-menu');
const sideMenu = document.querySelector('.side-menu');
const blank = document.querySelector('.blank');
let menuOpen = false;
hamMenu.addEventListener('click',()=>{
    if(menuOpen === false){
        menuOpen = true;
        hamMenu.classList.add('open');
        sideMenu.classList.add('open');
    } else {
        menuOpen = false;
        hamMenu.classList.remove('open');
        sideMenu.classList.remove('open');
    }
});
blank.addEventListener('click',()=>{
    menuOpen = false;
    hamMenu.classList.remove('open');
    sideMenu.classList.remove('open');
})




// ***************     slider working  ***********

const wrapper = document.querySelector('.wrapper');
const slides = Array.from(wrapper.children);
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let slideNum = 1;

rightArrow.addEventListener('click', ()=>{
    if(slideNum != slides.length){
        wrapper.style.left = (slideNum* -100) + '%';
        slideNum++;
    } else{
        slideNum = 1;
        wrapper.style.left = '0%';
    }
})

leftArrow.addEventListener('click', ()=>{
    if(slideNum != 1){
        wrapper.style.left = ((slideNum-2)* -100) + '%';
        slideNum--;
    } else{
        wrapper.style.left = ((slides.length-1)* -100) + '%';
        slideNum = slides.length;
    }
})

///// adding background numbers to testimonial slider
const styleElem = document.head.appendChild(document.createElement("style"));
slides.forEach((slide,index)=>{
    let num = index+1;
    styleElem.innerHTML += ".slides:nth-child("+ num +")::before {content: '0"+ num +"';}";
})



// *****************   counting numbers    ***********

const options = {
    delay: 1
}

const countUp1 = new CountUp('stat1-num', 2000, options);
const countUp2 = new CountUp('stat2-num', 16, options);
const countUp3 = new CountUp('stat3-num', 30000, options);
const countUp4 = new CountUp('stat4-num', 300, options);

const stats = document.querySelector('.stats-panel');
stats.addEventListener('sal:in', ({ detail }) => {
    countUp1.start();
    countUp2.start();
    countUp3.start();
    countUp4.start();
});