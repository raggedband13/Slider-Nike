const sneakersSwiper = new Swiper('.sneakers_swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  speed: 1500,
  loopedSlides: 4,
  

  // If we need pagination
   // Точки (pagination)
   pagination: {
    el: '.swiper-pagination',
    clickable: true, // делает точки кликабельными
  }
  });

  const swiperGallery = new Swiper('.gallery_slide', {
  direction: 'horizontal',
  loop: true,
  speed: 1500,
  slidesPerView: 4,

pagination: {
  el: '.gallery_left_block .swiper-pagination',
  clickable: true, 
},

navigation: {
  nextEl: '.gallery_left_block .swiper-button-next',
},

});

// объединяют слайды
sneakersSwiper.controller.control = swiperGallery
swiperGallery.controller.control = sneakersSwiper




