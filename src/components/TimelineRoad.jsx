import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "March 2024",
  },
  { title: "Java Programming", issuer: "Oracle", date: "January 2023" },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon",
    date: "June 2022",
  },
  {
    title: "Google Cloud Certification",
    issuer: "Google",
    date: "August 2021",
  },
  { title: "Python Development", issuer: "Udemy", date: "Dec 2020" },
];

export default function TimelineRoad() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const pathRef = useRef(null);
  const [pathD, setPathD] = useState("");

  useEffect(() => {
    const getCenterPoints = () => {
      return cardRefs.current.map((ref) => {
        const rect = ref.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const x = rect.left + rect.width / 2 - containerRect.left;
        const y = rect.top + rect.height / 2 - containerRect.top;
        return [x, y];
      });
    };

    const generateSmoothPath = (points) => {
      if (points.length < 2) return "";

      const [first, ...rest] = points;
      let d = `M ${first[0]},${first[1]}`;
      for (let i = 0; i < rest.length - 1; i++) {
        const [x1, y1] = rest[i];
        const [x2, y2] = rest[i + 1];
        const cx = (x1 + x2) / 2;
        const cy = (y1 + y2) / 2;
        d += ` Q ${x1},${y1} ${cx},${cy}`;
      }
      const [lastX, lastY] = rest[rest.length - 1];
      d += ` T ${lastX},${lastY}`;
      return d;
    };

    const animateRoadAndCards = () => {
      const points = getCenterPoints();
      const path = generateSmoothPath(points);
      setPathD(path);

      requestAnimationFrame(() => {
        const pathEl = pathRef.current;
        const totalLength = pathEl.getTotalLength();

        // Hide full path first
        gsap.set(pathEl, {
          strokeDasharray: totalLength,
          strokeDashoffset: totalLength,
          opacity: 1,
        });

        // Animate road drawing
        gsap.to(pathEl, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "20% center",
            end: "80% center",
            scrub: true,

            markers: true,
          },
        });
      });
    };

    setTimeout(() => {
      animateRoadAndCards();
    }, 300);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#06030F] py-80 w-full min-h-[2000px] overflow-hidden ml-32"
    >
      {/* Road Behind Cards */}
      <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="#4ade80"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>

      {/* Cards on Top */}
      <div className="relative z-10">
        {certifications.map((cert, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-slate-900 text-slate-200 rounded-xl shadow-xl w-72 p-6 text-center absolute opacity-60"
            style={{
              top: `${200 + index * 280}px`,
              left: index % 2 === 0 ? "10%" : "50%",
              transition: "opacity 0.3s ease-out",
            }}
          >
            <h3 className="text-white text-lg font-bold">{cert.title}</h3>
            <p className="text-sm text-green-400">{cert.issuer}</p>
            <p className="text-xs text-slate-400">{cert.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
