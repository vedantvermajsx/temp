import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import PropTypes from "prop-types";
import MyToaster from "../utils/MyToaster.js";
import MailSender from "../utils/MailSender.js";
import Robot from "./Robot.jsx";

const SOCIAL_LINKS = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/vedantvermajsx" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vedantverma7890/" },
  { icon: SiLeetcode, label: "LeetCode", href: "https://leetcode.com/u/vedant_verma786/" },
  { icon: FaEnvelope, label: "Email", href: "mailto:vedantverma303@gmail.com" },
];

const NAV_LINKS = ["Home", "Projects", "About", "Contact"];

const Footer = function () {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    MailSender.init();

    MailSender.sendMessage(userName, email, message)
      .then(
        () => {
          setIsLoading(false);
          MyToaster("Thank you! I'll get back to you soon.", 5000, true);
        },
        () => {
          setIsLoading(false);
          MyToaster("Something went wrong — please try again!", 5000, false);
        }
      );

    setUserName("");
    setEmail("");
    setMessage("");
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-gray-800"
      style={{ background: "#07040f" }}
    >

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/30">
        <Robot />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <SectionTitle>About Me</SectionTitle>
            <p className="text-sm text-gray-500 leading-relaxed">
              I&apos;m a passionate developer creating elegant solutions to complex
              problems. Always learning, always growing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <SectionTitle>Quick Links</SectionTitle>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-500 hover:text-gray-200 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Robot */}
          <div>
            <SectionTitle>Connect</SectionTitle>
            <div className="flex flex-wrap gap-4 mb-4">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-500 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>



          {/* Contact Form */}
          <div>
            <SectionTitle>Contact Me</SectionTitle>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                id="userName"
                type="text"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                className="footer-input"
              />
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="footer-input"
              />
              <textarea
                id="message"
                placeholder="Your message…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={3}
                className="footer-input resize-none"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 px-4 rounded-lg bg-teal-700 hover:bg-teal-600 disabled:opacity-60
                  text-white text-sm font-medium transition-colors duration-200 flex items-center justify-center"
              >
                {isLoading ? <MiniLoader /> : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800/80 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Vedant●JSX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

/* ── Small reusable pieces ───────────────────────────────── */

function SectionTitle({ children }) {
  return (
    <h3 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">
      {children}
    </h3>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

const MiniLoader = () => (
  <div className="mini-loader">
    <div /><div /><div />
  </div>
);

export default Footer;
