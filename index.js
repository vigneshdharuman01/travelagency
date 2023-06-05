let searchBtn=document.querySelector("#search-btn");
let visibleBar=document.querySelector("#search-bar-container");
let formBtn=document.querySelector('#login-btn');

let loginForm=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');
// responsive nav bar 
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

// video change button
let videoBtn=document.querySelectorAll('.vid-btn')



window.onscroll=()=>{
    searchBtn.classList.remove('fa-xmark');
    visibleBar.classList.remove('active');
    //navbar remove
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    
}
 searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-xmark');
    visibleBar.classList.toggle('active');
});

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',()=>{
 loginForm.classList.remove('active');
});
 
//ham navbar

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
});

//home video change button
videoBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        //video Change
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src; 
    });
});
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  vicky=()=>{
    alert("message send sccessfully")
  }

  function vicky(){
    alert('message send successfully')
  }