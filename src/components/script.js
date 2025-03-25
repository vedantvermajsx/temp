export const ROBOT = [];

function preload() {
  for (let i = 0; i < 16; i++) {
    const img = new Image();
    img.src = `../../public/robotball/skeleton-animation_0${i}.png`;
    ROBOT.push(img);
  }
}

preload();
