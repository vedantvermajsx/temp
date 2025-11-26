import { useState} from "react";
import { FaGithub, FaLinkedin,FaEnvelope } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { createRobot } from "./RobotCanvas.js";
import { isMobile } from "./script.js";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const TEMPLATE_ID = "template_lr17rp1";
  const PUBLICKEY = "jMx5bzPWmlYNaSvaO";
  const SERVICE_ID = "service_iinsw15";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    var templateParams = {
      from_name: userName,
      from_email: email,
      message: message,
    };

    emailjs.init({
      publicKey: PUBLICKEY,
      limitRate: {
        id: "app",
        throttle: 10000,
      },
    });

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsLoading(false);
        toast.success(
          "Thank you for your message. I'll get back to you soon.",
          {
            duration: 5000,
            position: "bottom-center",
          }
        );
      },
      () => {
        setIsLoading(false);
        toast.error("some error occured!, dont give up!", {
          duration: 5000,
          position: "bottom-center",
        });
      }
    );
    setuserName("");
    setEmail("");
    setMessage("");
  };

  return (
    <footer
      id="contact"
      className="bg-gray-900 text-gray-300 border-t border-gray-700 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              About Me
            </h3>
            <p className="text-base text-gray-500">
              I&apos;m a passionate developer creating elegant solutions to complex
              problems. Always learning, always growing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Projects", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-base text-gray-500 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Connect
            </h3>

<div className="flex space-x-6">
  {[
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/vedantvermajsx",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vedantverma7890/",
    },
    {
      icon: SiLeetcode,
      label: "LeetCode",
      href: "https://leetcode.com/u/vedant_verma786/",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      href: "mailto:vedantverma303@gmail.com",
    },
  ].map(({ icon: Icon, label, href }) => (
    <a
      key={label}
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{label}</span>
      <Icon className="h-6 w-6" />
    </a>
  ))}
</div>

            <canvas className="robot-canvas absolute z-[1000] left-0 top-0  pointer-events-none"></canvas>
            {!isMobile && createRobot()}
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Contact Me
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="userName"
                  type="text"
                  placeholder="Your Name"
                  value={userName}
                  onChange={(e) => setuserName(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#22918c] text-white rounded-md hover:bg-[#287e7a] focus:outline-none  grid place-content-center"
              >
                {isLoading ? <MiniLoader/>: "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Vedant●JSX. All rights reserved.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
        <div className="sparkles"></div>
      </div>
      <Toaster />

      <div className='absolute bottom-10 w-[200px] h-[60px] bg-transparent z-[9999]'>
        <img className='w-[100%] h-[100%]' src='https://counter1.optistats.ovh/private/freecounterstat.php?c=wkbd7qc5e2baecql5a5gpc8q9ataj16p' alt='counter'></img>
      </div>

    </footer>
  );
};

const MiniLoader = () => {
  return (
    <div className="mini-loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Footer;
