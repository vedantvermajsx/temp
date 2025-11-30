import { useRef, useState, useEffect } from "react";

const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = new Audio("./des mots.mp3");
        audio.loop = true;
        audio.volume = 0.8;
        audio.muted = true;
        audioRef.current = audio;
    }, []);

    const togglePlayPause = () => {
        const a = audioRef.current;
        if (!a) return;

        a.muted = false;
        isPlaying ? a.pause() : a.play();
        setIsPlaying(v => !v);
    };

    return (
        <div className="fixed bottom-10 left-6 lg:left-20 z-[9999]">
            <div
                onClick={togglePlayPause}
                className="relative w-8 h-8 flex items-center justify-center cursor-pointer group"
            >
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
          {isPlaying ? "Pause music" : "Play music"}
        </span>

                {/* Center dot */}
                <div className="w-3 h-3 bg-blue-400 rounded-full" />

                {/* Ripples */}
                <div
                    className={`absolute w-8 h-8 rounded-full border border-blue-300 ${
                        isPlaying ? "animate-ripple1" : "opacity-10"
                    }`}
                />
                <div
                    className={`absolute w-8 h-8 rounded-full border border-blue-400 ${
                        isPlaying ? "animate-ripple2" : "opacity-20"
                    }`}
                />
                <div
                    className={`absolute w-8 h-8 rounded-full border border-blue-300 ${
                        isPlaying ? "animate-ripple3" : "opacity-30"
                    }`}
                />
            </div>
        </div>
    );
};

export default BackgroundMusic;
