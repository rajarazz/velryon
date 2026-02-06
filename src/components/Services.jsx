import { motion } from "framer-motion";
import { CodeIcon } from "./icons/CodeIcon";
import { PlayIcon } from "./icons/PlayIcon";
import { MegaphoneIcon } from "./icons/MegaphoneIcon";

const services = [
  {
    title: "Web Development",
    desc: "Custom, scalable, and responsive websites built for performance, security, and long-term growth.",
    Icon: CodeIcon,
  },
  {
    title: "Content Creation",
    desc: "High-quality visual and written content crafted to engage audiences across all digital platforms.",
    Icon: PlayIcon,
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies that increase visibility, traffic, and conversions online.",
    Icon: MegaphoneIcon,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-transparent py-16"
    >
      {/* Top glow divider */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[1px]
                   bg-gradient-to-r from-transparent via-[#1F7CFF] to-transparent
                   opacity-70"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-[28px] md:text-[32px] font-semibold"
          >
            Our Services
          </h2>

          <p className="text-[#9CA3AF] text-[14px] mt-2 max-w-2xl mx-auto">
            Velryon delivers end-to-end digital solutions including web
            development, content creation, and digital marketing to help
            businesses grow online.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl bg-[#11162A]/80 backdrop-blur
                         border border-white/5 p-8 overflow-hidden"
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100
                           transition duration-500
                           bg-gradient-to-br from-[#1F7CFF]/20
                           via-transparent to-[#E94FFF]/20 blur-xl"
              />

              {/* Icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 mb-6 h-16 w-16 mx-auto
                           flex items-center justify-center rounded-xl
                           bg-gradient-to-br from-[#1F7CFF]/20 to-[#E94FFF]/20
                           shadow-[0_0_60px_rgba(106,63,242,0.45)]"
                aria-hidden="true"
              >
                <s.Icon />
              </motion.div>

              {/* Text */}
              <div className="relative z-10 text-center">
                <h3 className="text-[16px] md:text-[18px] font-semibold">
                  {s.title}
                </h3>

                <p className="mt-3 text-[13px] md:text-[14px] text-[#9CA3AF] leading-relaxed">
                  {s.desc}
                </p>

                <span className="inline-block mt-4 text-sm text-[#1F7CFF]">
                  Learn More →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
