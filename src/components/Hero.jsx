import { motion } from "framer-motion";
import { SplineSceneBasic } from "@/components/SplineSceneBasic";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden"
    >
      <div
        className="
          max-w-[1200px]
          mx-auto
          px-5 sm:px-8
          pt-[96px] sm:pt-[120px] lg:pt-[140px]
          pb-[72px] sm:pb-[100px] lg:pb-[120px]
          grid grid-cols-1 lg:grid-cols-2
          gap-12 lg:gap-20
          items-center
        "
      >
        {/* LEFT — PRIMARY CONTENT */}
        <header className="text-center lg:text-left">
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="
              font-['Poppins']
              font-bold
              leading-[1.1]
              text-[32px]
              sm:text-[40px]
              md:text-[48px]
              lg:text-[56px]
            "
          >
            Innovate.
            <br />
            Elevate. Succeed.
          </motion.h1>

          {/* SEO-friendly supporting text */}
          <p className="text-[#9CA3AF] mt-5 max-w-[440px] mx-auto lg:mx-0">
            Velryon is a digital agency delivering modern web design, branding,
            and scalable technology solutions to help businesses grow online.
          </p>

          {/* PRIMARY CTA — DESKTOP ONLY */}
          <div className="mt-8 hidden md:flex justify-center lg:justify-start">
            <a
              href="#contact"
              aria-label="Contact Velryon for digital services"
              className="
                px-6 py-3
                rounded-md
                text-sm font-medium
                bg-gradient-to-r from-[#6A3FF2] to-[#1F7CFF]
                shadow-[0_0_40px_rgba(106,63,242,0.45)]
                hover:scale-[1.03]
                active:scale-[0.98]
                transition
              "
            >
              Get Started
            </a>
          </div>
        </header>

        {/* RIGHT — VISUAL / 3D (DECORATIVE) */}
        <div
          className="relative w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-[600px] flex items-center justify-center"
          aria-hidden="true"
        >
          {/* GRADIENT GLOW */}
          <div
            className="
              absolute inset-0
              -z-10
              bg-gradient-to-br
              from-[#1F7CFF]/30
              via-[#6A3FF2]/20
              to-[#E94FFF]/30
              blur-[120px]
            "
          />

          {/* 3D SCENE */}
          <div className="w-full h-full max-w-[560px]">
            <SplineSceneBasic />
          </div>
        </div>
      </div>
    </section>
  );
}
