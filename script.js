let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  }


const animeApi = fetch('');
console.log(animeApi)












/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // breakpoints:{
  //   600: {
  //     slidesPerView: 2,
  //   },
  //   968: {
  //     slidesPerView: 3,
  //   },
  // },
});