import {isMobile} from "./script.js"
import { createRobot } from "./RobotCanvas.js";
import {memo} from 'react';

// eslint-disable-next-line react/display-name
const Robot= memo(function(){
    return (
        <>
        <canvas className="robot-canvas absolute z-[1000] left-0 top-0  pointer-events-none"></canvas>
        {!isMobile && createRobot()}
        </>
)});


export default Robot;