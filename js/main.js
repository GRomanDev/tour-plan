var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  effect: "fade",
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button__next",
    prevEl: ".hotel-slider__button__prev",
  },
});

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
