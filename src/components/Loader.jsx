import PropTypes from "prop-types";

const Loader = ({ showLoader, showContent }) => {
  return (
    <div className={`fixed inset-0 z-[99999] ${!showContent && !showLoader ? "hidden" : ""} overflow-hidden backdrop-blur-sm transition-opacity duration-700 pointer-events-none`}>

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
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <p className="text-white text-xl tracking-widest animate-pulse">
            Loading...
          </p>
        </div>
      )}

    </div>
  );
};

Loader.propTypes = {
  showLoader: PropTypes.bool.isRequired,
  showContent: PropTypes.bool.isRequired,
};

export default Loader;