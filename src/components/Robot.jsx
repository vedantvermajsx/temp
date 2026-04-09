import { isMobile } from "../utils/script.js"
import { createRobot } from "../utils/RobotCanvas.js";
import { memo } from 'react';

// eslint-disable-next-line react/display-name
const Robot = memo(function () {
    return (
        <>
            <canvas className="robot-canvas absolute z-[1000] pointer-events-none  left-0 bottom-0"></canvas>
            {!isMobile && createRobot()}
        </>
    )
});


export default Robot;