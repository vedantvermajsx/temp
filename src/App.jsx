import { lazy, useState, Suspense, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Toaster } from "react-hot-toast";

import "./index.css";
import { isMobile } from "./utils/script.js";

import BackgroundMusic from "./components/BackGroundMusic.jsx";
import Loader from "./components/Loader.jsx";
import GitHubContributions from "./components/GitHubContributions.jsx";
import ToolsHeader from "./components/ToolsHeader.jsx";

const Features = lazy(() => import("./components/Features"));
const Tools = lazy(() => import("./components/Tools"));
const Project = lazy(() => import("./components/Project"));
const Footer = lazy(() => import("./components/Footer"));
const Hero = lazy(() => import("./components/Hero"));

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [progress, setProgress] = useState(0);
  const lenisRef = useRef(null);
  const [assetsLoaded, setAssetsLoaded] = useState({
    gif: false,
    music: false,
    document: false,
  });

  useEffect(() => {
    // Preload critical assets
    const gif = new Image();
    gif.src = "./hero.gif";
    gif.onload = () => setAssetsLoaded(prev => ({ ...prev, gif: true }));

    const audio = new Audio("./music.mp3");
    audio.oncanplaythrough = () => setAssetsLoaded(prev => ({ ...prev, music: true }));

    import("./utils/script.js");
    import("./utils/Robot.js");
    import("./utils/RobotCanvas.js");

    const lenis = new Lenis({ duration: 0.5, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.stop(); // Pause scrolling immediately

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Disable scrolling initially
    document.body.style.overflow = "hidden";

    const handleLoad = () => {
      setAssetsLoaded(prev => ({ ...prev, document: true }));
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    const loadedCount = Object.values(assetsLoaded).filter(Boolean).length;
    const totalCount = Object.keys(assetsLoaded).length;
    const targetProgress = (loadedCount / totalCount) * 100;

    if (targetProgress > progress) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= targetProgress) {
            clearInterval(timer);
            return targetProgress;
          }
          return Math.min(prev + 1, targetProgress);
        });
      }, 10);
      return () => clearInterval(timer);
    }
  }, [assetsLoaded, progress]);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setShowLoader(false);
        setShowContent(true);
        HandleContentLoaded();
      }, 500);
    }
  }, [progress]);

  function HandleContentLoaded() {
    setTimeout(() => {
      setShowContent(false);
      document.body.style.overflow = "auto";
      if (lenisRef.current) lenisRef.current.start();
    }, 3000);
  }

  return (
    <>
      <Loader showContent={showContent} showLoader={showLoader} progress={progress} />

      <Suspense fallback={null}>
        <main className="page overflow-x-hidden scroll-smooth">
          <div className="page">
            <Hero />
            <BackgroundMusic />
            {!isMobile && <div className="page" />}
            {!isMobile && <div className="page" />}
            {!isMobile && <div className="page" />}
          </div>

          <div className="page">
            <Features />
          </div>

          <div className="slider-container w-screen flex flex-col justify-center py-10 px-4 mt-64">
            <ToolsHeader />
            <Tools />
          </div>

          <div className="page mt-16 sm:mt-24">
            <Project />
          </div>

          <GitHubContributions />

          <Footer />
          <Toaster />
        </main>
      </Suspense>
    </>
  );
}

export default App;
