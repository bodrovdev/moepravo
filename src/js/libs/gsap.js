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

    // - Первый элемент
    let img_1 = document.getElementById('serv-img-1');
    let img_2 = document.getElementById('serv-img-2');

    let img_1_tl = gsap.timeline({ repeat: -1 });
    let img_2_tl = gsap.timeline({ repeat: -1 });

    img_1_tl.add(gsap.to(img_1, { y: -30, rotate: -10, duration: 6, ease: "power1" }));
    img_1_tl.add(gsap.to(img_1, { y: 0, rotate: 0, duration: 6, delay: -1, ease: "power1" }));

    img_2_tl.add(gsap.to(img_2, { y: 30, rotate: 20, duration: 6, ease: "power1" }));
    img_2_tl.add(gsap.to(img_2, { y: 0, rotate: 0, duration: 6, delay: -1, ease: "power1" }));

    // - Второй элемент
    let img_3_1 = document.getElementById('serv-img-3-1');
    let img_3_2 = document.getElementById('serv-img-3-2');
    let img_3_3 = document.getElementById('serv-img-3-3');

    // - Второй элемент - 1
    let img_3_1_tl = gsap.timeline({ repeat: -1 });
    img_3_1_tl.add(gsap.to(img_3_1, { x: 290, duration: 10, ease: "power1", delay: -1, }));
    img_3_1_tl.add(gsap.to(img_3_1, { zIndex: 4, duration: 0, delay: -2, }));
    img_3_1_tl.add(gsap.to(img_3_1, { x: 0, duration: 10, ease: "power1", delay: -2, }));

    // - Второй элемент - 2
    let img_3_2_tl = gsap.timeline({ repeat: -1 });
    img_3_2_tl.add(gsap.to(img_3_2, { y: -20, duration: 10, ease: "power1" }))
    img_3_2_tl.add(gsap.to(img_3_2, { y: 0, duration: 10, ease: "power1" }))

    // - Второй элемент - 3
    let img_3_3_tl = gsap.timeline({ repeat: -1 });
    img_3_3_tl.add(gsap.to(img_3_3, { zIndex: 4, duration: 0, }));
    img_3_3_tl.add(gsap.to(img_3_3, { x: -230, duration: 6, ease: "power1", }));
    img_3_3_tl.add(gsap.to(img_3_3, { zIndex: 1, duration: 0, }));
    img_3_3_tl.add(gsap.to(img_3_3, { x: 0, duration: 6, ease: "power1" }));

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