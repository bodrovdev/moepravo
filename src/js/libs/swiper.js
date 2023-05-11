import Swiper from 'swiper/bundle';

// --- Слайдер в блоке features на главной странице
var index_features_init = false;

function index_features_slider() {
  if (window.innerWidth <= 1279) {
    if (!index_features_init) {
      index_features_init = true;
      var index_features_slider = new Swiper(".features__slider", {
        direction: "horizontal",
        spaceBetween: 10,

        breakpoints: {
          320: {
            slidesPerView: 1
          },
          767: {
            slidesPerView: "auto"
          }
        },

        pagination: {
          el: ".features__slider-pagination",
          clickable: true,
        },
      });
    }
  } else if (index_features_init) {
    index_features_slider.destroy();
    index_features_init = false;
  }
}
index_features_slider();
window.addEventListener("resize", index_features_slider);

// --- Слайдер в блоке about на главной странице
var index_about_init = false;

function index_about_slider() {
  if (window.innerWidth <= 1279) {
    if (!index_about_init) {
      index_about_init = true;
      var index_about_slider = new Swiper(".about__slider", {
        direction: "horizontal",
        spaceBetween: 10,

        pagination: {
          el: ".about__slider-pagination",
          clickable: true,
        },

        breakpoints: {
          320: {
            slidesPerView: 1
          },
          767: {
            slidesPerView: "auto"
          }
        },
      });
    }
  } else if (index_about_init) {
    index_about_slider.destroy();
    index_about_init = false;
  }
}
index_about_slider();
window.addEventListener("resize", index_about_slider);