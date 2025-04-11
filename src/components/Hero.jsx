import { useRef, useEffect } from "react";
import Header from "./Header";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import BackgroundMusic from "./BackGroundMusic";
import { BsSoundwave } from "react-icons/bs";
import { isMobile } from "./script";

const Hero = () => {
  const textRef = useRef(null);
  const videoRef = useRef(null);
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
      {/* Video Background */}

      {isMobile && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-1"
          src="../../public/hero.mp4"
          loop
          muted
          autoPlay
        ></video>
      )}

      {!isMobile && (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-1"
          src="../../public/hero.mp4"
          loop
          muted
        ></video>
      )}

      <Header />
      <div className="glass hero-content flex flex-col md:flex-row items-center justify-center max-w-3xl mx-auto">
        <BsSoundwave className="absolute w-64 h-64 text-cyan-100/5 pointer-events-none sound-wave"></BsSoundwave>
        <div className="place-items-center w-full md:w-1/4 mb-4 md:mb-0">
          <img
            src="./images/OIP.jpg"
            alt="Hero Image"
            className="rounded-lg shadow-xl w-[50%] md:w-[80%] duration-300 h-auto"
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
              href="https://github.com/creepJxvedant"
              icon={<FaGithub className="mr-2" />}
              text="GitHub"
              className="bg-black text-white text-sm hover:bg-[#1a1818]"
            />
            <SocialButton
              href="https://linkedin.com/in/_icycoldwater"
              icon={<FaLinkedin className="mr-2" />}
              text="LinkedIn"
              className="bg-blue-600 hover:bg-blue-700 text-sm"
            />
            <SocialButton
              href="https://twitter.com/_icycoldwater"
              icon={<FaTwitter className="mr-2" />}
              text="Twitter"
              className="bg-blue-400 hover:bg-blue-500 text-sm"
            />
          </div>
          <BackgroundMusic props={isMobile ? null : videoRef} />
        </div>
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

export default Hero;
