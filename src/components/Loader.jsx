import PropTypes from "prop-types";

const Loader = ({ showLoader, showContent, progress }) => {
  const waveY = 200 - (progress * 0.8);
  const rectY = waveY + 10;

  return (
    <div className={`fixed inset-0 z-[99999] ${!showContent && !showLoader ? "hidden" : ""} overflow-hidden backdrop-blur-sm transition-opacity duration-700 ${showLoader || showContent ? "pointer-events-auto" : "pointer-events-none"}`}>

      {showContent && (
        <>
          <div className="absolute inset-0 bg-black animate-panelWipe" />

          <svg
            viewBox="0 0 1500 1062"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="soft">
                <feGaussianBlur stdDeviation="8" />
              </filter>

              <mask id="wipeMask" maskUnits="userSpaceOnUse">
                <rect width="100%" height="100%" fill="black" />

                <polyline
                  points="
0,154 131,0 0,348 269,0 0,562 437,0 
0,766 565,14 0,1062 719,0 289,1062 843,0 
543,1062 995,0 729,1062 1161,0 947,1062 
1307,0 1143,1062 1500,162 1299,1062 1500,830
1500,1062 1650,0 1500,900 1780,0 
1600,1062 1920,100 1700,1062 2050,0 
1850,1062 2200,200 2000,1062 2350,0 
2150,1062 2500,300 2300,1062 2700,0
"
                  stroke="white"
                  strokeWidth="260"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#soft)"
                  fill="none"
                  style={{
                    strokeDasharray: 20000,
                    strokeDashoffset: 20000,
                    animation: "wipe 2.5s ease reverse forwards",
                  }}
                />
              </mask>
            </defs>

            <rect
              width="100%"
              height="100%"
              fill="black"
              mask="url(#wipeMask)"
            />
          </svg>

          <style>
            {`
              @keyframes panelWipe {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-100%); }
              }

              .animate-panelWipe {
                animation: panelWipe 2.5s 0.5s forwards;
              }

              @keyframes wipe {
                to { stroke-dashoffset: 0; }
              }
            `}
          </style>
        </>
      )}

      {showLoader && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
          <div className="w-full max-w-2xl px-4">
            <svg
              viewBox="0 0 690 425"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <clipPath id="textClip" clipPathUnits="userSpaceOnUse">
                  <text x="340" y="210" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="110" letterSpacing="2">VedantJsx</text>
                </clipPath>

                <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#85B7EB" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#185FA5" stopOpacity="1" />
                </linearGradient>

                <linearGradient id="foamGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B5D4F4" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#85B7EB" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Ghost outline */}
              <text x="340" y="210" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="110" letterSpacing="2" fill="none" stroke="#378ADD" strokeWidth="1.5" opacity="0.2">VedantJsx</text>

              {/* Water fill clipped to text shape */}
              <g clipPath="url(#textClip)">
                <rect x="0" y={rectY} width="690" height={425 - rectY} fill="url(#waterGrad)" />

                {/* Foam layer */}
                <path
                  fill="url(#foamGrad)"
                  d="M0,8 C70,22 150,2 240,8 C330,18 420,0 510,8 C590,20 650,4 680,8 L680,90 L0,90 Z"
                  style={{
                    transform: `translate(0, ${waveY}px)`,
                    animation: "waveMove 2s ease-in-out infinite alternate"
                  }}
                />

                {/* Main wave */}
                <path
                  fill="url(#waterGrad)"
                  d="M0,14 C90,2 180,26 270,14 C360,2 450,26 540,14 C610,2 660,20 680,14 L680,90 L0,90 Z"
                  style={{
                    transform: `translate(0, ${waveY}px)`,
                    animation: "waveMove 3s ease-in-out infinite alternate-reverse"
                  }}
                />
              </g>

              {/* Crisp outline on top */}
              <text x="340" y="210" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="110" letterSpacing="2" fill="none" stroke="#185FA5" strokeWidth="1.5" opacity="0.45">VedantJsx</text>

              {/* Progress Percentage Text */}
              <text
                x="340"
                y="265"
                textAnchor="middle"
                fontFamily="stylish, monospace"
                fontSize="24"
                fill="#85B7EB"
                letterSpacing="8"
                className="animate-pulse"
                style={{ opacity: progress > 5 ? 1 : 0, transition: "opacity 0.5s" }}
              >
                {Math.round(progress)}%
              </text>
            </svg>
          </div>

          <style>
            {`
              @keyframes waveMove {
                from { transform: translate(-20px, ${waveY}px); }
                to { transform: translate(20px, ${waveY}px); }
              }
            `}
          </style>
        </div>
      )}

    </div>
  );
};

Loader.propTypes = {
  showLoader: PropTypes.bool.isRequired,
  showContent: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
};

export default Loader;