import { gsap } from "gsap";

// --- Анимация крутящейся ссылки в блоке features на главной странице
window.addEventListener('load', () => {
  if (document.querySelector('.features') === null) {
    return;
  }
  else {
    let features_items = document.querySelectorAll('.features__slider-slide');

    features_items.forEach((item) => {

      let features_tl = gsap.timeline({ repeat: -1, paused: true });
      features_tl.add(gsap.to(item.querySelector('.round-link__text div'), { rotate: 360, duration: 6, ease: "none" }))

      if (window.innerWidth >= 1280) {
        item.addEventListener('mouseover', () => {
          features_tl.play();
        })

        item.addEventListener('mouseleave', () => {
          features_tl.pause();
        })
      }
      else {
        setTimeout(() => {
          features_tl.play();
        }, 500)
      }
    })
  }
})

// --- Анимации в блоке features на странице услуги
window.addEventListener('load', () => {
  if (document.querySelector('.single-services__features') === null) {
    return;
  }
  else {
    // - Второй элемент
    let img_3_1 = document.getElementById('serv-img-3-1');
    let img_3_2 = document.getElementById('serv-img-3-2');
    let img_3_3 = document.getElementById('serv-img-3-3');

    // - Второй элемент - 1
    let img_3_1_tl = gsap.timeline({ repeat: -1 });
    img_3_1_tl.add(gsap.to(img_3_1, { x: 280, duration: 10, ease: "linear", }));
    img_3_1_tl.add(gsap.to(img_3_1, { zIndex: 4, duration: 0, }));
    img_3_1_tl.add(gsap.to(img_3_1, { x: 0, duration: 10, ease: "linear" }));

    // - Второй элемент - 2
    let img_3_2_tl = gsap.timeline({ repeat: -1 });
    img_3_2_tl.add(gsap.to(img_3_2, { y: -20, duration: 10, ease: "linear" }))
    img_3_2_tl.add(gsap.to(img_3_2, { y: 0, duration: 10, ease: "linear" }))

    // - Второй элемент - 3
    let img_3_3_tl = gsap.timeline({ repeat: -1 });
    img_3_3_tl.add(gsap.to(img_3_3, { zIndex: 4, duration: 0, }));
    img_3_3_tl.add(gsap.to(img_3_3, { x: -230, duration: 6, ease: "linear", }));
    img_3_3_tl.add(gsap.to(img_3_3, { zIndex: 1, duration: 0, }));
    img_3_3_tl.add(gsap.to(img_3_3, { x: 0, duration: 6, ease: "linear" }));

    // - Третий элемент
    let img_4 = document.getElementById('serv-img-4');
    let img_4_tl = gsap.timeline({ repeat: -1 });
    img_4_tl.add(gsap.to(img_4, { rotate: 360, duration: 30, ease: "none" }))
  }
});

// --- Следяющий за курсором элемент
// let circle = document.getElementById('circle_follow');
// function moveCircle(e) {
//   gsap.to(circle, { css: { left: e.clientX, top: e.clientY }, duration: 0.1, });
// }

// window.addEventListener('mousemove', moveCircle);