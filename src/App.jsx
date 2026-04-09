import { lazy, useState, Suspense, useEffect } from "react";
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
const ScrollWatcher = lazy(() => import("./components/ScrollWatcher"));
const Hero = lazy(() => import("./components/Hero"));

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    import("./utils/script.js");
    import("./utils/Robot.js");
    import("./utils/RobotCanvas.js");

    const lenis = new Lenis({ duration: 0.5, smoothWheel: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        setShowLoader(false);
        setShowContent(true);
        HandleContentLoaded();
      }
    };

  }, []);

  function HandleContentLoaded() {
    setTimeout(() => {
      setShowContent(false);
    }, 3000);
  }

  return (
    <>
      <Loader showContent={showContent} showLoader={showLoader} />

      <Suspense fallback={null}>
        <main className="page overflow-x-hidden scroll-smooth">
          <ScrollWatcher />

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
