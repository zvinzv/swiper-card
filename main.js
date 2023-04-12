var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 71,
  loop: false,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    1250:{
      slidesPerView: 2,
    },
    2250:{
      slidesPerView: 3,
    },
  }
});