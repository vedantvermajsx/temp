/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.jsx",
    "./src/components/Home/*.jsx",
  ],
  theme: {
    extend: {
        keyframes: {
          ripple1: {
            "0%": { transform: "scale(0)", opacity: "0.7" },
            "70%": { transform: "scale(0.8)", opacity: "1" },
            "100%": { opacity: "0" },
          },
          ripple2: {
            "0%": { transform: "scale(0)", opacity: "0.4" },
            "70%": { transform: "scale(0.9)", opacity: "1" },
            "100%": { opacity: "0" },
          },
          ripple3: {
            "0%": { transform: "scale(0)", opacity: "0.4" },
            "70%": { transform: "scale(1)", opacity: "1" },
            "100%": { opacity: "0" },
          },
        },
        animation: {
          ripple1: "ripple1 1s 0.3s ease-out infinite",
          ripple2: "ripple2 1s 0.1s ease-out infinite",
          ripple3: "ripple2 1s 0s ease-out infinite",
        },
    },
  },
};
