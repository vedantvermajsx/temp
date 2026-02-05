import { useRef, useEffect } from "react";
import Header from "./Header";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
import {isMobile} from './script.js';
import PropTypes from "prop-types";
import { FaFilePdf } from "react-icons/fa";

const Hero = () => {
  const textRef = useRef(null);
  const message = "Crafting robust and scalable Java applications";

  useEffect(() => {
    const minLoaderTime = setTimeout(() => {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < message.length) {
          textRef.current.textContent += message.charAt(index);
          index++;
        } else {
          clearInterval(typeInterval);
        }
      }, 100);
      return () => clearInterval(typeInterval);
    }, 3000);

    return () => clearInterval(minLoaderTime);
  }, []);

  useEffect(() => {
    if (!isMobile && "ScrollTimeline" in window) {
      const background = document.querySelector(".hero-container");

      const scrollTimeline = new ScrollTimeline({
        source: document.scrollingElement,
        axis: "block",
        scrollOffsets: [CSS.percent(0), CSS.percent(100)],
      });

      const backgroundKeyframes = [
        {
          opacity: 1,
          transform: "rotate3d(1, -1, 0, 0deg)",
          scale: 1,
          position: "fixed",
          zIndex: 0,
        },
        {
          transform: "rotate3d(1, -1, 0, 180deg)",
          opacity: 0,
          offset: 0.3,
          position: "fixed",
          scale: 0.5,
        },
        {
          transform: "rotate3d(1, -1, 1, 360deg)",
          opacity: 0,
          offset: 0.5,
          position: "fixed",
          scale: 0.3,
        },
        {
          transform: "rotate3d(1, -1, 1, 360deg)",
          position: "fixed",
          scale: 0,
          zIndex: -1,
          offset: 1,
        },
      ];
      const backgroundAnimation = new Animation(
        new KeyframeEffect(background, backgroundKeyframes),
        scrollTimeline
      );
      backgroundAnimation.play();
    }
  }, []);

  return (
    <div
      id="home"
      className="hero-container relative will-change-auto bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center"
    >

      <Header />
      <div className="glass hero-content flex flex-col md:flex-row items-center justify-center max-w-3xl mx-auto">
        <BsSoundwave className="absolute w-64 h-64 text-cyan-100/5 pointer-events-none sound-wave"></BsSoundwave>
        <div className="place-items-center w-full md:w-1/4 mb-4 md:mb-0">
          <img
            src="./images/logo.jpg"
            alt="Hero Image"
            className="rounded-lg shadow-xl w-[50%] md:w-[80%] duration-300 h-auto" loading="eager"
          />
        </div>
        <div className="hero-text w-full md:w-2/3 mt-4 md:mt-0 md:ml-8">
          <h1 className="text-blue-300 text-2xl md:text-4xl font-bold mb-2 md:mb-4 animate-fade-in-down">
            Welcome to my Portfolio
          </h1>
          <p
            ref={textRef}
            className="text-pretty text-lg max-md:text-sm text-white font-serif"
          ></p>
          <p className="text-slate-300 text-sm md:text-md mb-4 md:mb-6 animate-fade-in">
            I am a passionate developer with experience in building high-quality
            software solutions.
          </p>
          <div className="hero-buttons place-content-center flex flex-wrap gap-4">
            <SocialButton
              href="https://github.com/vedantvermajsx"
              icon={<FaGithub className="mr-2" />}
              text="GitHub"
              className="bg-black text-white text-sm hover:bg-[#1a1818]"
            />
            <SocialButton
               href="https://www.linkedin.com/in/vedantverma7890/"
              icon={<FaLinkedin className="mr-2" />}
              text="LinkedIn"
              className="bg-blue-600 hover:bg-blue-700 text-sm"
            />
           <SocialButton
  href="https://github.com/vedantvermajsx/vedantvermajsx/raw/master/Vedant_Verma_Resume.pdf"
  icon={<FaFilePdf className="mr-2" />}
  text="CV"
  target="_blank"
  className="bg-gray-600 hover:bg-gray-700 text-sm"
/>

          </div>
        </div>
      </div>
      
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10 overflow-hidden">
            <div className="w-1 animate-scroll-down"></div>
          </div>

    </div>
  );
};

const SocialButton = ({ href, icon, text, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-lg transition duration-300 ${className}`}
  >
    {icon}
    {text}
  </a>
);

SocialButton.propTypes = {
  href: PropTypes.string.isRequired,     
  icon: PropTypes.node.isRequired,       
  text: PropTypes.node,                  
  className: PropTypes.string,           
};

export default Hero;
