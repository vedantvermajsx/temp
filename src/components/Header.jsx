import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = ["Home", "About", "Projects", "Contact"];

function Header() {
  const [isOpen, setMenuState] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const close = () => setMenuState(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [isOpen]);

  return (
    <nav
      className={`header fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between
        px-5 py-3 rounded-full transition-all duration-300`}
      style={{ width: "min(88vw, 780px)" }}
    >
      <div className="flex items-center gap-3 flex-shrink-0">
        <img src="./images/logo.avif" alt="Logo" className="h-8 w-8" />
        <span
          className="text-[crimson] text-lg font-bold tracking-wide"
          style={{ fontFamily: "monospace" }}
        >
          VEDANT●JSX
        </span>
      </div>

      <ul className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-red-800 hover:text-red-400 transition-colors duration-200 text-sm font-semibold tracking-wide"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden text-blue-400 hover:text-blue-300 transition-colors p-1"
        onClick={(e) => { e.stopPropagation(); setMenuState(!isOpen); }}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={`md:hidden absolute top-full right-0 mt-3 w-48 rounded-2xl overflow-hidden
          transition-all duration-300 origin-top-right
          ${isOpen ? "scale-100 opacity-100 pointer-events-auto" : "scale-95 opacity-0 pointer-events-none"}
        `}
        style={{
          background: "rgba(6, 3, 15, 0.92)",
          backdropFilter: "blur(16px)",
          boxShadow: "inset 0 0 2px 0 cyan, 0 8px 32px rgba(0,0,0,0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="py-2">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block px-5 py-3 text-red-500 hover:text-red-300 hover:bg-white/5
                  transition-all duration-200 text-sm font-semibold tracking-wide"
                onClick={() => setMenuState(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
