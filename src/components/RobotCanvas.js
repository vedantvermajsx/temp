import { ROBOT } from "./script.js";
import Robot from "./Robot.js";

let robot = null;

export function createRobot() {
  const canvas = document.querySelector(".robot-canvas");
  if (canvas) {
    const footer = document.querySelector("#contact");

    canvas.width = footer.clientWidth;
    canvas.height = footer.clientHeight;

    const ctx = canvas.getContext("2d");
    const temprobot = new Robot(ctx, ROBOT, canvas.width, canvas.height);
    robot = temprobot;
    repeat();
  } else {
    setTimeout(() => {
      createRobot();
    }, 2000);
  }
}

function repeat() {
  robot.update();
  robot.draw();
  requestAnimationFrame(repeat);
}
