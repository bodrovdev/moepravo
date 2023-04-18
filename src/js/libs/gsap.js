import { gsap } from "gsap";


// --- Следяющий за курсором элемент
let circle = document.getElementById('circle_follow');
function moveCircle(e) {
  gsap.to(circle, { css: { left: e.clientX, top: e.clientY }, duration: 0.1, });
}

window.addEventListener('mousemove', moveCircle);