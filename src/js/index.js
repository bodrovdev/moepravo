import { lock, unlock } from 'tua-body-scroll-lock'

// --- Мобильное меню
let burger = document.getElementById('burger');
let mobile_menu = document.getElementById('mobile_menu');

// - Открытие по по клику на бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('main-nav__burger--active');
  mobile_menu.classList.toggle('main-nav__nav-menu--mobile--active');

  burger.classList.contains('main-nav__burger--active') ? lock(mobile_menu) : unlock(mobile_menu);

})

// --- Анимация печатающегося текста на главной странице
window.addEventListener('load', () => {
  if (document.getElementById('index_typing_text') === null) {
    return;
  }
  else {
    let i = 0;
    let txt = document.querySelector('#index_typing_text').dataset.typing;
    let speed = 100;

    function typeWriter() {
      if (i < txt.length) {
        document.getElementById('index_typing_text').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    setTimeout(() => {
      typeWriter();
    }, 6000)

  }
})

// --- Добавление интерактивного класса для всех ссылок на странице
window.addEventListener('load', () => {
  if (document.querySelector('a') === null) {
    return;
  }
  else {
    document.querySelectorAll('a').forEach((link) => {
      link.classList.add('follow-change');
    })
  }
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