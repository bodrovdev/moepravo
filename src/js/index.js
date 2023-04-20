import { lock, unlock } from 'tua-body-scroll-lock'

// --- Мобильное меню
let burger = document.getElementById('burger');
let burger_caption = document.querySelector('.page-header__burger-caption');

let page_header = document.querySelector('.page-header');

// - Открытие по по клику на бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('main-nav__burger--active');
  page_header.classList.toggle('page-header--active');
  document.body.classList.toggle('scrollbar-hidden');

  burger.classList.contains('main-nav__burger--active') ?
    (function () {
      lock(document.querySelector('.page-header__main-nav'));
      burger_caption.textContent = 'Закрыть';
    }()) :
    (function () {
      unlock(document.querySelector('.page-header__main-nav'));
      burger_caption.textContent = 'Меню';
    }())
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

// --- Скругление текста вокруг ссылки
new CircleType(document.querySelector('.features__item-link'));