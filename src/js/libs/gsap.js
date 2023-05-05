import { gsap } from "gsap";
import { lock, unlock } from 'tua-body-scroll-lock'

window.addEventListener('load', () => {
  if (document.querySelector('.features') === null) {
    return;
  }
  else {
    let features_items = document.querySelectorAll('.features__item');

    features_items.forEach((item) => {

      let features_tl = gsap.timeline({ repeat: -1, paused: true });
      features_tl.add(gsap.to(item.querySelector('.round-link__text div'), { rotate: 360, duration: 6, ease: "none" }))

      item.addEventListener('mouseover', () => {
        features_tl.play();
      })

      item.addEventListener('mouseleave', () => {
        features_tl.pause();
      })
    })
  }
})

window.addEventListener('load', () => {
  if (document.querySelector('.single-services__features') === null) {
    return;
  }
  else {
    // 3
    let img_3_1 = document.getElementById('serv-img-3-1');
    let img_3_2 = document.getElementById('serv-img-3-2');
    let img_3_3 = document.getElementById('serv-img-3-3');

    // 3-1
    // let img_3_1_tl = gsap.timeline({ repeat: -1 });
    // img_3_1_tl.add(gsap.to(img_3_1, { y: -50, rotate: 90, duration: 5, ease: "power3" }))
    // img_3_1_tl.add(gsap.to(img_3_1, { y: 0, rotate: 0, duration: 5, ease: "power3" }))

    let img_3_1_tl = gsap.timeline({ repeat: -1 });
    img_3_1_tl.add(gsap.to(img_3_1, { x: 101, duration: 0.5, ease: "none" }))
    img_3_1_tl.add(gsap.to(img_3_1, { x: 101, duration: 0.5, ease: "none" }))

    // 3-2
    // let img_3_2_tl = gsap.timeline({ repeat: -1 });
    // img_3_2_tl.add(gsap.to(img_3_2, { x: -50, rotate: -30, duration: 5, ease: "power3" }))
    // img_3_2_tl.add(gsap.to(img_3_2, { x: 0, rotate: 0, duration: 5, ease: "power3" }))

    // 3-3
    // let img_3_3_tl = gsap.timeline({ repeat: -1 });
    // img_3_3_tl.add(gsap.to(img_3_3, { x: 50, rotate: -30, duration: 5, ease: "power3" }))
    // img_3_3_tl.add(gsap.to(img_3_3, { x: 0, rotate: 0, duration: 5, ease: "power3" }))

    // 4
    let img_4 = document.getElementById('serv-img-4');
    let img_4_tl = gsap.timeline({ repeat: -1 });
    img_4_tl.add(gsap.to(img_4, { rotate: 30, duration: 4, ease: "power2" }))
    img_4_tl.add(gsap.to(img_4, { rotate: 0, duration: 4, ease: "power2" }))
  }
});

// --- Следяющий за курсором элемент
// let circle = document.getElementById('circle_follow');
// function moveCircle(e) {
//   gsap.to(circle, { css: { left: e.clientX, top: e.clientY }, duration: 0.1, });
// }

// window.addEventListener('mousemove', moveCircle);