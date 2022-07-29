const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener('click', function (event){
    
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft += 1100;
    event.preventDefault();
})
leftbtn.addEventListener('click', function (event){
    
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft -= 1100;
    event.preventDefault();
})

const leftbtn1 = document.querySelector(".btn-1b");
const rightbtn1 = document.querySelector(".btn-1a");

rightbtn1.addEventListener('click', function (event){
    
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft += 1100;
    event.preventDefault();
})
leftbtn1.addEventListener('click', function (event){
    
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft -= 1100;
    event.preventDefault();
})

const leftbtn2 = document.querySelector(".btn-1d");
const rightbtn2 = document.querySelector(".btn-1e");

rightbtn2.addEventListener('click', function (event){
    
    const conent = document.querySelector('.product-slide-2');
    conent.scrollLeft += 1100;
    event.preventDefault();
})
leftbtn2.addEventListener('click', function (event){
    
    const conent = document.querySelector('.product-slide-2');
    conent.scrollLeft -= 1100;
    event.preventDefault();
})


const backtop = document.querySelector(".backtop");
backtop.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second-1");

sidebtn.addEventListener("click",()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");

})

cross.addEventListener("click",()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");

})

const sign = document.querySelector(".ac");
const trangle = document.querySelector(".trangle")
const signin = document.querySelector(".hiden-sign");

sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    trangle.classList.toggle("active");
})
