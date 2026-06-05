import { motion } from "motion/react";
import PropTypes from 'prop-types';

const ToolItem = ({ name, icon }) => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center px-4 sm:px-8 py-4 transition-all duration-500 "
        >
            <div className="relative group">

                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center  rounded-2xl shadow-[-5px_5px_0px_0px_rgba(6,145,255,0.4),-10px_10px_0px_0px_rgba(46,100,240,0.3)]">
                    <img
                        src={icon}
                        alt={name}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all duration-500 transform"
                        loading="lazy"
                    />
                </div>
            </div>

            <span
                className="mt-4 text-[10px] sm:text-xs font-bold text-gray-500 group-hover:text-blue-400 uppercase tracking-widest transition-colors duration-300 text-center"
                style={{ fontFamily: 'stylish' }}
            >
                {name}
            </span>
        </motion.div>
    );
};

ToolItem.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};


export default ToolItem;