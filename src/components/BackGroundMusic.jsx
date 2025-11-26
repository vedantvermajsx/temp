import { useRef, useState } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
        <div  onClick={togglePlayPause} className="fixed z-[9999] w-8 h-8 flex items-center justify-center cursor-pointer bottom-10 left-6 lg:left-20">

          <audio ref={audioRef} loop>
            <source src="./des mots.mp3" type="audio/mp3" />
          </audio>

          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>

          <div
              className={`absolute w-8 h-8 rounded-full border border-blue-300 
            ${isPlaying ? "animate-ripple1" : "opacity-10"}`}
          />


          <div
              className={`absolute w-8 h-8 rounded-full border border-blue-400 
            ${isPlaying ? "animate-ripple2" : "opacity-20"}`}
          />

          <div
              className={`absolute w-8 h-8 rounded-full border border-blue-300 
            ${isPlaying ? "animate-ripple3" : "opacity-30"}`}
          />

        </div>
  );
};

export default BackgroundMusic;
