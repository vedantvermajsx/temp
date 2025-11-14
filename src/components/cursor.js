import { isMobile } from "./script.js";
function Mouse() {
  const body = document.querySelector("body");
  const first = document.querySelector(".mouse-follower .first");
  const second = document.querySelector(".mouse-follower .second");
  const third = document.querySelector(".mouse-follower .third");

  let mouseX = -200;
  let mouseY = -100;

  let firstX = 0;
  let firstY = 0;

  let secondX = 0;
  let secondY = 0;

  let thirdX = 0;
  let thirdY = 0;

  body.addEventListener("mousemove", (e) => {
    mouseX = e.clientX - 10;
    mouseY = e.clientY - 10;
  });

  function lerp(start, end, t) {
    return start + (end - start) * t;
  }

  function animate() {
    firstX = lerp(firstX, mouseX, 0.2);
    firstY = lerp(firstY, mouseY, 0.2);
    first.style.transform = `translate(${firstX}px, ${firstY}px)`;

    secondX = lerp(secondX, mouseX, 0.3);
    secondY = lerp(secondY, mouseY, 0.3);
    second.style.transform = `translate(${secondX}px, ${secondY}px)`;

    thirdX = lerp(secondX, mouseX, 0.4);
    thirdY = lerp(secondY, mouseY, 0.4);
    third.style.transform = `translate(${thirdX}px, ${thirdY}px)`;

    requestAnimationFrame(animate);
  }

  animate();
}

if (!isMobile) Mouse();
else {
  document.querySelector(".mouse-follower").style.display = "none";
}
