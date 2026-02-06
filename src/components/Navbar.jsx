import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Services", href: "#Services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [blur, setBlur] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      // Hide on scroll down
      if (currentY > lastScrollY.current && currentY > 120) {
        setHidden(true);
        setBlur(false);
      } 
      // Show + blur on scroll up
      else {
        setHidden(false);
        setBlur(currentY > 80);
      }

      lastScrollY.current = currentY;

      // Active section detection
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(item.name.toLowerCase());
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`
        fixed top-0 left-0 w-full z-50
        bg-transparent
        ${blur ? "backdrop-blur-md" : ""}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Velryon" className="w-10 h-10" />
          <span className="text-lg font-semibold tracking-wide text-white">
            VELRYON
          </span>
        </a>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-10 text-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative transition ${
                active === item.name.toLowerCase()
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}

              {/* underline */}
              <span
                className={`absolute left-0 -bottom-2 h-[2px] w-full origin-left
                  bg-gradient-to-r from-[#1F7CFF] to-[#6A3FF2]
                  transition-transform duration-300
                  ${
                    active === item.name.toLowerCase()
                      ? "scale-x-100"
                      : "scale-x-0 hover:scale-x-100"
                  }`}
              />
            </a>
          ))}
        </nav>

        {/* CTA (desktop only) */}
        <a
          href="#contact"
          className="
            hidden md:inline-block px-5 py-2.5 rounded-md text-sm font-medium
            bg-gradient-to-r from-[#6A3FF2] to-[#1F7CFF]
            shadow-[0_0_25px_rgba(106,63,242,0.6)]
            hover:shadow-[0_0_40px_rgba(106,63,242,0.9)]
            transition
          "
        >
          Get Started
        </a>
      </div>
    </motion.header>
  );
}
