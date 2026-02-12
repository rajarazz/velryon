import { motion } from "framer-motion";

/* ================= PREMIUM ICONS ================= */

const WebIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="14" rx="2"
      stroke="currentColor" strokeWidth="1.8"/>
    <path d="M3 8H21" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="7" cy="6" r="0.8" fill="currentColor"/>
    <circle cx="10" cy="6" r="0.8" fill="currentColor"/>
    <circle cx="13" cy="6" r="0.8" fill="currentColor"/>
    <path d="M8 14L10 12L8 10M16 10L14 12L16 14"
      stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ContentIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="14" rx="2"
      stroke="currentColor" strokeWidth="1.8"/>
    <polygon points="10,9 16,12 10,15"
      stroke="currentColor" strokeWidth="1.8"
      strokeLinejoin="round"/>
  </svg>
);

const MarketingIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <path d="M3 11V13M6 9V15M9 7V17"
      stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round"/>
    <path d="M12 5L20 12L12 19"
      stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AiIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9"
      stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="3"
      stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 3V6M12 18V21M3 12H6M18 12H21"
      stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round"/>
  </svg>
);

const AppIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <rect x="6" y="2" width="12" height="20" rx="3"
      stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="12" cy="18" r="1" fill="currentColor"/>
    <path d="M9 5H15"
      stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round"/>
  </svg>
);

const DesignIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3"
      stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 2L14 7L19 9L14 11L12 16L10 11L5 9L10 7L12 2Z"
      stroke="currentColor" strokeWidth="1.5"
      strokeLinejoin="round"/>
  </svg>
);

/* ================= SERVICES ================= */

const services = [
  {
    title: "Web Development",
    desc: "Custom, scalable, and responsive websites built for performance, security, and long-term growth.",
    Icon: WebIcon,
  },
  {
    title: "Content Creation",
    desc: "High-quality visual and written content crafted to engage audiences across all digital platforms.",
    Icon: ContentIcon,
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies that increase visibility, traffic, and conversions online.",
    Icon: MarketingIcon,
  },
  {
    title: "AI Agent Development",
    desc: "Intelligent AI agents and automation systems designed to streamline operations and enhance decision-making.",
    Icon: AiIcon,
  },
  {
    title: "App Development",
    desc: "Modern, high-performance mobile and web applications built for seamless user experience.",
    Icon: AppIcon,
  },
  {
    title: "UI/UX Designing",
    desc: "Strategic and user-centered interface designs combining aesthetics with functionality.",
    Icon: DesignIcon,
  },
];

/* ================= COMPONENT ================= */

export default function Services() {
  return (
    <section id="services" className="relative py-20">

      {/* Top Glow Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[1px]
        bg-gradient-to-r from-transparent via-[#1F7CFF] to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[34px] font-semibold">
            Our Services
          </h2>

          <p className="text-[#9CA3AF] text-[14px] mt-3 max-w-2xl mx-auto">
            Velryon delivers intelligent digital solutions including web
            development, AI systems, content creation, and marketing strategies
            designed to accelerate modern business growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl bg-[#11162A]/80 backdrop-blur
              border border-white/5 p-8 overflow-hidden transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                transition duration-500
                bg-gradient-to-br from-[#1F7CFF]/20 via-transparent to-[#E94FFF]/20 blur-xl" />

              {/* Icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 mb-6 h-16 w-16 mx-auto
                flex items-center justify-center rounded-xl
                bg-gradient-to-br from-[#1F7CFF]/20 to-[#E94FFF]/20
                shadow-[0_0_60px_rgba(106,63,242,0.45)] text-white"
              >
                <service.Icon />
              </motion.div>

              {/* Text */}
              <div className="relative z-10 text-center">
                <h3 className="text-[18px] font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-[14px] text-[#9CA3AF] leading-relaxed">
                  {service.desc}
                </p>

                <span className="inline-block mt-4 text-sm text-[#1F7CFF] group-hover:underline">
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
