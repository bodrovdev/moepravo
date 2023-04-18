import { lock, unlock } from 'tua-body-scroll-lock'

// --- Мобильное меню
let burger = document.getElementById('burger');
let menu_graphic = document.querySelector('.header__nav-graphic');
console.log(menu_graphic);

// - Открытие по по клику на бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('main-nav__burger--active');
  menu_graphic.classList.toggle('header__nav-graphic--active');
  console.log(menu_graphic);


  // burger.classList.contains('main-nav__burger--active') ? lock(mobile_menu) : unlock(mobile_menu);
})

// --- Бегущая строка
window.addEventListener('load', () => {
  if (document.querySelector('#marquee') === null) {
    return;
  }
  else {
    $(function () {
      $('.marquee-1').marquee({
        delayBeforeStart: -5000,
        duration: 20000,
        startVisible: true,
        duplicated: true
      });
    });
  }
})