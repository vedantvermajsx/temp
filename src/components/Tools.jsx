import { tools } from "./data";
import PropTypes from 'prop-types';
import { motion,useAnimation } from "motion/react"


function Tools() {
  return (
    <>
      <div className="slider relative flex-nowrap scrollbar flex gap-8 items-center place-items-center">
        {tools.map((tool, index) => (
          <Tool key={index} tool={tool} />
        ))}
      </div>
      <div className="slider2 relative flex-nowrap flex gap-8 items-center place-items-center mt-8">
        {tools.map((tool, index) => (
          <Tool key={index} tool={tool} />
        ))}
      </div>
    </>
  );
}

function Tool({ tool }) {
    const controls = useAnimation();

    return (
        <motion.div
            drag
            whileDrag={{ scale: 0.85 }}
            dragConstraints={{ left: -500, right: 500, top: -100, bottom: 100 }}
            style={box}
            animate={controls}
            onDragEnd={() => {
                setTimeout(() => {
                    controls.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } });
                }, 5000);
            }}
        >
            <img
                className="tool min-w-[8vw] min-h-[8vw] w-1/12 max-sm:w-2/12 place-items-center pointer-events-none"
                alt={tool[0]}
                src={tool[1]}
            />
        </motion.div>
    );
}


const box = {
    width: '100%',
    height:'100%',
    backgroundColor: "transparent",
    borderRadius: 10,
    zIndex:10,
    cursor:'grab',
}

Tool.propTypes = {
  tool: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tools;
