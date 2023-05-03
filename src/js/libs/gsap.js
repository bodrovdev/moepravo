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

// --- Следяющий за курсором элемент
// let circle = document.getElementById('circle_follow');
// function moveCircle(e) {
//   gsap.to(circle, { css: { left: e.clientX, top: e.clientY }, duration: 0.1, });
// }

// window.addEventListener('mousemove', moveCircle);