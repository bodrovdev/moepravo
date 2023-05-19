import { lock, unlock } from 'tua-body-scroll-lock'

// --- Мобильное меню
let burger = document.getElementById('burger');
let page_header = document.querySelector('.page-header');

// - Открытие по по клику на бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('main-nav__burger--active');
  page_header.classList.toggle('page-header--active');
  document.body.classList.toggle('scrollbar-hidden');

  burger.classList.contains('main-nav__burger--active') ?
    (function () {
      lock(document.querySelector('.page-header__main-nav'));
    }()) :
    (function () {
      unlock(document.querySelector('.page-header__main-nav'));
    }())
})

// --- Модальное окно
window.addEventListener('load', () => {
  if (document.querySelector('#feedback') === null) {
    return;
  }
  else {
    let modal_form = document.getElementById('feedback_form');
    let modal = document.getElementById('modal');
    let modal_close = document.getElementById('modal_close');

    modal_form.addEventListener('submit', (e) => {
      e.preventDefault();
      modal.classList.add('modal--active');
      lock(modal);
    })

    modal_close.addEventListener('click', () => {
      modal.classList.remove('modal--active');
      unlock(modal);
    })

    modal.addEventListener('click', (e) => {
      if (e.target !== e.currentTarget) {
        return;
      }
      else {
        modal.classList.remove('modal--active');
        unlock(modal);
      }
    })
  }
})

// --- Кнопка "консультация"
window.addEventListener('load', () => {
  let feedback_links = document.querySelectorAll('#feedback_link');

  if (document.querySelector('.feedback') === null) {

    feedback_links.forEach((link) => {
      // link.setAttribute('href', '<?php echo get_home_url(); ?>#feedback');
      link.setAttribute('href', `${window.location.origin}/moepravo#feedback`);
    })
  }
  else {
    feedback_links.forEach((link) => {
      link.setAttribute('href', '#feedback');
      link.addEventListener('click', () => {
        document.querySelector('.page-header').classList.contains('page-header--active') ?
          (function () {
            document.getElementById('burger').classList.remove('main-nav__burger--active');
            document.querySelector('.page-header').classList.remove('page-header--active')
            unlock(document.querySelector('.page-header__main-nav'));
          }()) :
          console.log('');
      })
    })
  }
})

// --- Бегущая строка
window.addEventListener('load', () => {
  if (document.querySelector('.marquee') === null) {
    return;
  }
  else {
    $(function () {
      $('.marquee').marquee({
        delayBeforeStart: -5000,
        duration: 90000,
        startVisible: true,
        duplicated: true
      });
    });
  }
})

// --- Скругление текста вокруг ссылки
window.addEventListener('load', () => {
  if (document.querySelectorAll('.round-link') === null) {
    return;
  }
  else {
    let round_links = document.querySelectorAll('.round-link');

    round_links.forEach((link) => {
      new CircleType(link.querySelector('.round-link__text'));
    })
  }
})

// --- Анимация в блоке последних дел
window.addEventListener('load', () => {
  if (document.querySelector('.cases') === null) {
    return;
  }
  else {
    let featured_cases = document.querySelectorAll('.cases__featured-item');
    featured_cases[0].classList.add('cases__featured-item--active');

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

// --- Селект
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
        document.querySelector('.feedback__select-arrow').classList.remove('feedback__select-arrow--active');
      }
    })
  }
});

// --- Анимации на странице услуги
window.addEventListener('load', () => {
  if (document.querySelector('.single-services__features-item') === null) {
    return;
  }
  else {

    document.querySelector('.single-services__heading-img-container').classList.add('single-services__heading-img-container--active');

    let services_items = document.querySelectorAll('.single-services__features-item');

    services_items.forEach((item) => {
      item.addEventListener('mouseover', (e) => {
        services_items.forEach((value) => { value.classList.remove('single-services__features-item--active') });
        item.classList.add('single-services__features-item--active');
      })
    })
  }
})

// --- Табы на страницах услуг
function singleTabs() {
  if (document.querySelector('.single-services__tabs') === null) {
    return;
  }
  else {
    // - Анимация появления кнопок табов
    let tabs_buttons = document.querySelectorAll('.single-services__tabs-button');

    tabs_buttons.forEach((button_value) => {
      button_value.setAttribute('data-aos', 'zoom-in');
      button_value.setAttribute('data-aos-delay', `${Math.floor(Math.random() * (8 - 1 + 1) + 1)}00`);
    })

    // - Функционал табов
    let tabs_content_items = document.querySelectorAll('.single-services__tabs-content-item');

    tabs_buttons.forEach((button) => {
      button.addEventListener('click', () => {
        tabs_buttons.forEach((button_item) => { button_item.classList.remove('single-services__tabs-button--active') })
        button.classList.add('single-services__tabs-button--active');

        tabs_content_items.forEach((item) => {
          if (button.dataset.tabs_button === item.dataset.tabs_content) {
            tabs_content_items.forEach((value) => { value.classList.remove('single-services__tabs-content-item--active') });
            item.classList.add('single-services__tabs-content-item--active');
          }
        })
      })
    })
  }
}

singleTabs();