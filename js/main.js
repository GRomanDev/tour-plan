var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  effect: "fade",
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button__next",
    prevEl: ".slider-button__prev",
  },
});
