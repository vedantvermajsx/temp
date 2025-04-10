import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "March 2024",
    logo: "/assets/aws.png",
  },
  {
    title: "Google Cloud Engineer",
    issuer: "Google",
    date: "January 2024",
    logo: "/assets/gcp.png",
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    date: "December 2023",
    logo: "/assets/azure.png",
  },
  {
    title: "Scrum Master",
    issuer: "Scrum.org",
    date: "August 2023",
    logo: "/assets/scrum.png",
  },
];

export default function CertificationShowcase() {
  const containerRef = useRef();

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".cert-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="p-10 bg-gradient-to-br from-[#05030f] to-[#06030f] min-h-screen text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        My Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="cert-card bg-slate-700/60 border border-slate-500 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 backdrop-blur"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={cert.logo}
                alt={cert.issuer}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-sm text-slate-300">{cert.issuer}</p>
              </div>
            </div>
            <p className="text-sm text-slate-400">Issued: {cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
