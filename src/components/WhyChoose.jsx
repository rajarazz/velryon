import { motion } from "framer-motion";
import { InnovationIcon } from "./icons/InnovationIcon";
import { GrowthIcon } from "./icons/GrowthIcon";
import { SupportIcon } from "./icons/SupportIcon";

const items = [
  {
    title: "Expertise & Innovation",
    desc: "Stay ahead with cutting-edge tech and creative solutions.",
    Icon: InnovationIcon,
  },
  {
    title: "Results-Driven Approach",
    desc: "Focused on measurable growth and tangible success.",
    Icon: GrowthIcon,
  },
  {
    title: "Dedicated Support",
    desc: "Partnering with you every step of the way.",
    Icon: SupportIcon,
  },
];

export default function WhyChoose() {
  return (
    <section className="relative bg-[#0b0f1a] py-16 md:py-16">
      {/* Top divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[1px] bg-gradient-to-r from-transparent via-[#1F7CFF] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[28px] md:text-[34px] font-semibold font-['Poppins']">
            Why Choose Velryon?
          </h2>
          <p className="mt-2 text-[14px] md:text-[15px] text-[#9CA3AF] font-['Inter']">
            Your partner in digital success
          </p>
        </div>

        {/* Items Wrapper */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-16 text-center">
          
          {/* LEFT SEPARATOR */}
          <div className="hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 h-[180px] w-[1px] bg-gradient-to-b from-transparent via-[#1F7CFF]/60 to-transparent blur-[0.5px]" />

          {/* RIGHT SEPARATOR */}
          <div className="hidden md:block absolute left-2/3 top-1/2 -translate-y-1/2 h-[180px] w-[1px] bg-gradient-to-b from-transparent via-[#1F7CFF]/60 to-transparent blur-[0.5px]" />

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group px-4"
            >
              {/* Icon + Glow */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mx-auto mb-6 h-16 w-16 flex items-center justify-center rounded-full
                           bg-gradient-to-br from-[#1F7CFF]/20 to-[#E94FFF]/20
                           shadow-[0_0_60px_rgba(106,63,242,0.45)]"
              >
                <item.Icon />
              </motion.div>

              {/* Title */}
              <h3 className="text-[16px] md:text-[18px] font-semibold font-['Poppins']">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed text-[#9CA3AF] font-['Inter'] max-w-[260px] mx-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
