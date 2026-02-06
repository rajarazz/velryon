import logo from "../assets/logo.png";
import { MapPin, Phone } from "lucide-react";
import { Facebook, Instagram, Twitter, Mail as MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0F1A] text-white pt-10 pb-6 overflow-hidden">

      {/* subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#0E1224] to-[#0B0F1A] opacity-90" />

      <div className="relative max-w-7xl mx-auto px-8">

        {/* ───────────────── TOP ROW ───────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          {/* LOGO + BRAND (UPDATED TEXT STYLE) */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Velryon" className="w-9 h-9" />

            <div className="flex items-center gap-4">
              <span
                className="
                  text-white
                  text-[20px]
                  font-semibold
                  tracking-[0.18em]
                  uppercase
                "
              >
                VELRYON
              </span>
              <span className="text-white/40 text-lg">|</span>
            </div>
          </div>

         

          {/* EMAIL */}
          <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
            <MapPin size={16} className="text-[#6A3FF2]" />
            <div className="leading-tight">
              <p className="text-white">info@velryon.in</p>
            
            </div>
          </div>
        </div>

        {/* ───────────────── MIDDLE ROW ───────────────── */}
        <div className="mt-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 text-sm">

          {/* NAV LINKS */}
          <nav className="flex flex-wrap items-center gap-4 text-[#9CA3AF]">
            {[
              "About Us",
              "Our Services",
              "Portfolio",
              "Contact",
              "Brand Kit",
            ].map((item, i) => (
              <span key={item} className="flex items-center gap-4">
                <a
                  href="#"
                  className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                >
                  {item}
                </a>
                {i !== 4 && <span className="opacity-40">|</span>}
              </span>
            ))}
          </nav>

          {/* PHONE */}
          <div className="flex items-center gap-3 text-[#9CA3AF]">
            <Phone size={16} className="text-[#6A3FF2]" />
            <div className="leading-tight">
              <p className="text-white">+91 9334464905</p>
             
            </div>
          </div>
        </div>

        {/* ───────────────── BOTTOM ROW ───────────────── */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-[#6B7280]">

          {/* COPYRIGHT */}
          <p className="text-center md:text-left">
            © 2026 Velryon all rights reserved.
          </p>

          {/* SOCIAL + POLICY */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <Facebook size={24} />
            <Instagram size={24} />
            <Twitter size={24} />
            <MailIcon size={24} />
            <span className="opacity-50">|</span>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
