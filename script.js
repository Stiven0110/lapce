function ShowHide(){
    var container = document.getElementsByClassName("imgDetails")[0];
    var container1 = document.getElementsByClassName("imgDetails1")[0];
    if(container.style.visibility == "hidden" ||  container1.style.visibility == "visible"){
        container.style.visibility = "visible";
        container1.style.visibility = "hidden";
    }else{
        container.style.visibility = "hidden";
        container1.style.visibility = "visible";
    }
}
function olaaa(){
    var container = document.getElementsByClassName("imgDetails")[0];
    var container1 = document.getElementsByClassName("imgDetails1")[0];
    if(container.style.visibility == "hidden" ||  container1.style.visibility == "visible"){
        container.style.visibility = "visible";
        container1.style.visibility = "hidden";
    }else{
        container.style.visibility = "hidden";
        container1.style.visibility = "visible";
    }
}
function tablet(){
    var container = document.getElementsByClassName("imgDetails")[0];
    var container1 = document.getElementsByClassName("imgDetails1")[0];
    if(container.style.visibility == "hidden" ||  container1.style.visibility == "visible"){
        container.style.visibility = "visible";
        container1.style.visibility = "hidden";
    }else{
        container.style.visibility = "hidden";
        container1.style.visibility = "visible";
    }
}


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:80,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



// Modal

const openModal = document.querySelector('.ingreso_btn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');



openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

// Segundo Modal
const openModal1 = document.querySelector('.ingreso_btn1');
const modal1 = document.querySelector('.modal1');
const closeModal1 = document.querySelector('.modal__close1');

openModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.add('modal1--show');
});

closeModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.remove('modal1--show');
});