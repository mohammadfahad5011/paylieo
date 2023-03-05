// testimonial section
var testimonialSwiper = new Swiper("#testimonial_section .mySwiper", {
  // loop: true, //loop true korle bullets o bere jabe
  // bullets ar number thik korar jonno  slidesPerView: 3, slidesPerGroup: 1, agulo kom besi kore dite hobe
  Infinity: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
    // dynamicMainBullets: 3,
  },
  loopFillGroupWithBlank: true, // Add this parameter to fill the empty space when all items have finished displaying
  breakpoints: {
    // when window width is <= 576px
    576: {
      slidesPerView: 1,
    },
    // when window width is <= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is <= 992px
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // when window width is <= 1200px
    1200: {
      slidesPerView: 4,
    },
  },
});

// instagram section
var instagramSwiper = new Swiper("#instagram_section .instaSwiper", {
  loop: true,
  Infinity: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
    // when window width is <= 576px
    576: {
      slidesPerView: 2,
    },
    // when window width is <= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is <= 992px
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // when window width is <= 1200px
    1200: {
      slidesPerView: 5,
      spaceBetween: 32,
    },
  },
});

// ---------------video -----------------

(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    // -----------------VenBox---------------
    $(".venobox_custom").venobox({});
  }); //---document-ready-----
})(jQuery);
