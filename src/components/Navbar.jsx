import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", href: "#home" },
  //{ name: "About", href: "#whychoose" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [blur, setBlur] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      // hide on scroll down
      if (currentY > lastScrollY.current && currentY > 120) {
        setHidden(true);
        setBlur(false);
      }
      // show + blur on scroll up
      else {
        setHidden(false);
        setBlur(currentY > 80);
      }

      lastScrollY.current = currentY;

      // active section detection
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActive(item.name.toLowerCase());
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* MAIN HEADER */}
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 bg-transparent ${
          blur ? "backdrop-blur-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

          {/* LOGO (SEO: brand signal) */}
          <a href="#home" className="flex items-center gap-3" aria-label="Velryon Home">
            <img
              src={logo}
              alt="Velryon digital agency logo"
              className="w-10 h-10"
            />
            <span className="text-lg font-semibold tracking-wide text-white">
              VELRYON
            </span>
          </a>

          {/* DESKTOP NAV */}
          <nav
            className="hidden md:flex gap-10 text-sm"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const isActive = active === item.name.toLowerCase();

              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative transition ${
                    isActive
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
                    ${isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"}`}
                  />
                </a>
              );
            })}
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

          {/* HAMBURGER (mobile) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white"
            aria-label="Open navigation menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[60] bg-[#0B0F1A]"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="text-lg font-semibold text-white">
                VELRYON
              </span>
              <button
                onClick={closeMenu}
                className="text-white"
                aria-label="Close navigation menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav
              className="flex flex-col items-center gap-8 mt-20 text-lg"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => {
                const isActive = active === item.name.toLowerCase();

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={`transition ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
