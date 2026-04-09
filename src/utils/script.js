const ROBOT_IMAGES = [];
for (let i = 0; i <= 15; i++) {
  const img = new Image();
  img.src = `./robotball/skeleton-animation_0${i}.png`;
  ROBOT_IMAGES.push(img);
}

export const isMobile = window.innerWidth < 768;
export const ROBOT = ROBOT_IMAGES;
