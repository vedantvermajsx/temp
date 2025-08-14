import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2 } from "lucide-react";
import { BiBulb } from "react-icons/bi";
import { GiPerspectiveDiceFive, GiTeamUpgrade } from "react-icons/gi";
import { ImParagraphCenter } from "react-icons/im";
import PropTypes from "prop-types"; 

gsap.registerPlugin(ScrollTrigger);

function Card({ title, para, id }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
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
      className="w-2/3 rounded-2xl text-pretty max-sm:w-11/12 md:w-5/12 lg:w-5/12 xl:w-3/12  text-slate-300 card h-auto "
    >
      <div className="head pt-4">
        <ul className="flex justify-center list-none gap-3">
          <li className="text-red-500 text-3xl  ">
            {id === 1 ? (
              <Code2 />
            ) : id === 2 ? (
              <BiBulb />
            ) : id === 3 ? (
              <GiTeamUpgrade />
            ) : id === 4 ? (
              <ImParagraphCenter />
            ) : (
              <GiPerspectiveDiceFive />
            )}
          </li>
          <li className="min-text-[0.8] text-[1.2em]  text-red-500 max-2xl:text-[0.95em]">
            <strong>{title}</strong>
          </li>
        </ul>
      </div>
      <div className="bottom p-3">
        <p  className="min-text-[0.8] text-[1em] max-2xl:text-[0.95em] ">{para}</p>
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
