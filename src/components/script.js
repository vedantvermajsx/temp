export const ROBOT = [];

export const isMobile = document.body.clientWidth < 1000;

function preload() {
  for (let i = 0; i < 16; i++) {
    const img = new Image();
    img.src = `../robotball/skeleton-animation_0${i}.png`;
    ROBOT.push(img);
  }
}

function isLoaded() {}

if (!isMobile) preload();
