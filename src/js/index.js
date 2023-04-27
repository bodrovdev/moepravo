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
      // burger_caption.textContent = 'Закрыть';
    }()) :
    (function () {
      unlock(document.querySelector('.page-header__main-nav'));
      // burger_caption.textContent = 'Меню';
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
// new CircleType(document.querySelector('.features__item-link'));

// --- Анимация в блоке последних дел
window.addEventListener('load', () => {
  if (document.querySelector('.cases') === null) {
    return;
  }
  else {
    let featured_cases = document.querySelectorAll('.cases__featured-item');
    featured_cases.forEach((item) => {
      item.addEventListener('mouseover', () => {
        if (!item.classList.contains('cases__featured-item--active')) {
          featured_cases.forEach((value) => { value.classList.remove(('cases__featured-item--active')) })
          item.classList.add('cases__featured-item--active');
        }
      })
    })
  }
})

//Селект
window.addEventListener('load', () => {
  if (document.querySelector('#select') === null) {
    return;
  }
  else {
    const select = document.getElementById('select');
    const select_shown = document.getElementById('select_shown');
    const select_list = document.getElementById('select_list');
    let select_items = select_list.querySelectorAll('.feedback__select-item');
    const select_items_first = Array.from(select_items)[0];
    const select_input = document.getElementById('city');

    function selectItem(element, element_value) {
      select_shown.textContent = element_value;
      select_input.value = element_value;

      select_items.forEach((item) => { item.classList.remove('feedback__select-item--selected') })

      element.classList.add('feedback__select-item--selected');
    }
    selectItem(select_items_first, select_items_first.dataset.value);

    select.addEventListener('click', () => {
      document.querySelector('.feedback__select-arrow').classList.toggle('feedback__select-arrow--active');
      select_list.classList.toggle('feedback__select-list--active');
    })

    select_list.addEventListener('click', (e) => {
      switch (e.target.tagName) {
        case 'SPAN':
          selectItem(e.target.parentElement, e.target.parentElement.dataset.value);
          break;

        case 'LI':
          selectItem(e.target, e.target.dataset.value);
          break;
      }
    })

    document.addEventListener('click', (e) => {
      if (!select.contains(e.target)) {
        select_list.classList.remove('feedback__select-list--active');
      }
    })
  }
});