import { useRef, useState, useEffect } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("./music.mp3");
    audio.loop = true;
    audio.volume = 0.6;
    audio.muted = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    a.muted = false;
    if (isPlaying) {
      a.pause();
    } else {
      a.play().catch(() => { });
    }
    setIsPlaying((v) => !v);
  };

  return (
    <button
      onClick={toggle}
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
      title={isPlaying ? "Pause music" : "Play music"}
      className="fixed bottom-10 left-5 lg:left-16 z-[9999] group
        w-10 h-10 flex items-center justify-center rounded-full
        bg-black/40 hover:bg-black/60 backdrop-blur-sm

        transition-all duration-200"
    >
      <div
        className={`absolute w-8 h-8 rounded-full border border-blue-300 ${isPlaying ? "animate-ripple1" : "opacity-0"
          }`}
      />
      <div
        className={`absolute w-8 h-8 rounded-full border border-blue-400 ${isPlaying ? "animate-ripple2" : "opacity-20"
          }`}
      />
      <div
        className={`absolute w-8 h-8 rounded-full border border-blue-300 ${isPlaying ? "animate-ripple3" : "opacity-30"
          }`}
      />

      <span
        className={`relative w-2.5 h-2.5 rounded-full transition-colors duration-200
          ${isPlaying ? "bg-blue-400" : "bg-blue-600/60"}`}
      />

      <span
        className="absolute -top-9 left-1/2 -translate-x-1/2 bg-black/80 text-white
          text-[10px] px-2 py-1 rounded-md pointer-events-none whitespace-nowrap
          opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        {isPlaying ? "Pause music" : "Play music"}
      </span>
    </button>
  );
};

export default BackgroundMusic;
