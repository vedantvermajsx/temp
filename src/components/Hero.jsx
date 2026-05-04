import { useRef, useEffect } from "react";
import Header from "./Header";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
import { isMobile } from "../utils/script.js";
import PropTypes from "prop-types";

const Hero = () => {
  const textRef = useRef(null);
  const message = "Crafting robust and scalable Java applications";

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < message.length) {
        if (textRef.current) textRef.current.textContent += message.charAt(index);
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    if (!isMobile && "ScrollTimeline" in window) {
      const background = document.querySelector(".hero-container");
      const scrollTimeline = new ScrollTimeline({
        source: document.scrollingElement,
        axis: "block",
        scrollOffsets: ["0%", "100%"],
      });
      const backgroundKeyframes = [
        { opacity: 1, transform: "rotate3d(1,-1,0,0deg)", scale: 1, position: "fixed", zIndex: 0 },
        { transform: "rotate3d(1,-1,0,180deg)", opacity: 0, offset: 0.3, position: "fixed", scale: 0.5 },
        { transform: "rotate3d(1,-1,1,360deg)", opacity: 0, offset: 0.5, position: "fixed", scale: 0.3 },
        { transform: "rotate3d(1,-1,1,360deg)", position: "fixed", scale: 0, zIndex: -1, offset: 1 },
      ];
      new Animation(new KeyframeEffect(background, backgroundKeyframes), scrollTimeline).play();
    }
  }, []);

  return (
    <div
      id="home"
      className="hero-container relative will-change-auto bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center"
    >
      <Header />

      <div className="glass hero-content relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <BsSoundwave className="absolute inset-0 w-full h-full text-cyan-100/5 pointer-events-none sound-wave opacity-30" />

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src="./images/logo.avif"
              alt="Vedant Verma"
              className="rounded-xl shadow-2xl w-28 h-28 sm:w-36 sm:h-36 object-cover ring-2 ring-cyan-400/30"
              loading="eager"
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-center sm:text-left">
            <p className="text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase mb-1 opacity-80" style={{ fontFamily: "stylish" }}>
              Full Stack Developer
            </p>
            <h1 className="text-blue-300 text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 animate-fade-in-down leading-tight" style={{ fontFamily: "stylish" }}>
              Welcome to my Portfolio
            </h1>
            <p
              ref={textRef}
              className="text-white font-mono text-sm sm:text-base mb-2 min-h-[1.5em]"
            />
            <p className="text-slate-400 text-xs sm:text-sm mb-6 animate-fade-in leading-relaxed">
              I am a passionate developer with experience in building high-quality
              software solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <SocialButton
                href="https://github.com/vedantvermajsx"
                icon={<FaGithub className="shrink-0" />}
                text="GitHub"
              />
              <SocialButton
                href="https://www.linkedin.com/in/vedantverma7890/"
                icon={<FaLinkedin className="shrink-0" />}
                text="LinkedIn"
              />
              <SocialButton
                href="https://github.com/vedantvermajsx/vedantvermajsx/raw/master/Vedant_Verma_Resume.pdf"
                icon={<FaFilePdf className="shrink-0" />}
                text="Resume"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 overflow-hidden">
        <div className="w-px animate-scroll-down" />
      </div>
    </div>
  );
};

const SocialButton = ({ href, icon, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
      shadow-md transition-all duration-200 bg-black text-white  profile-icons`}
  >
    {icon}
    {text}
  </a>
);

SocialButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Hero;
