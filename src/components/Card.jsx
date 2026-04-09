import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2 } from "lucide-react";
import { BiBulb } from "react-icons/bi";
import { GiPerspectiveDiceFive, GiTeamUpgrade } from "react-icons/gi";
import { ImParagraphCenter } from "react-icons/im";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

const ICONS = {
  1: <Code2 className="w-5 h-5" />,
  2: <BiBulb className="w-5 h-5" />,
  3: <GiTeamUpgrade className="w-5 h-5" />,
  4: <ImParagraphCenter className="w-5 h-5" />,
};

function Card({ title, para, id }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          scale: 1, opacity: 1, y: 0, duration: 0.9, ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 82%",
            end: "bottom 200px",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="card rounded-2xl text-slate-300 h-auto
        w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)] xl:w-[calc(25%-1.5rem)]
        max-w-sm flex flex-col"
    >
      <div className="pt-5 px-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-red-500">
            {ICONS[id] ?? <GiPerspectiveDiceFive className="w-5 h-5" />}
          </span>
          <h3 className="text-red-400 font-bold text-base leading-tight">{title}</h3>
        </div>
      </div>
      <div className="px-5 pb-5 flex-1">
        <p className="text-slate-400 text-sm leading-relaxed">{para}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
