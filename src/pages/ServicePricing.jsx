import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Contact } from "../components";


export default function ServicePricing() {
  const { serviceName } = useParams();
  const [yearly, setYearly] = useState(false);

  const handleWhatsApp = (plan, service) => {
    const message = `Hi, I'm interested in the ${plan} plan for ${service}.`;
    window.open(
      `https://wa.me/919334464905?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  /* ================= COMPLETE PRICING DATA ================= */

  const pricingData = {
    "web-development": {
      title: "Web Development",
      description: "Scalable, high-performance websites built for growth.",
      plans: [
        { name: "Starter", price: 9999, features: ["5 Pages", "Responsive", "Basic SEO", "Maintenance"] },
        { name: "Growth", price: 19999, popular: true, features: ["10 Pages", "Advanced SEO", "Analytics", "Optimization"] },
        { name: "Custom Solution", custom: true, features: ["Custom Architecture", "API Integration", "Scalable Backend", "Dedicated Support"] },
      ],
    },

    "content-creation": {
      title: "Content Creation",
      description: "High-quality content designed to grow digital presence.",
      plans: [
        { name: "Starter", price: 7999, features: ["8 Posts", "Captions", "Hashtags"] },
        { name: "Growth", price: 14999, popular: true, features: ["16 Posts", "Reels", "Content Strategy"] },
        { name: "Custom Solution", custom: true, features: ["Full Campaign Strategy", "Brand Voice", "Creative Direction", "Content Calendar"] },
      ],
    },

    "digital-marketing": {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies for visibility and conversions.",
      plans: [
        { name: "Starter", price: 9999, features: ["SEO Setup", "Google Business", "Monthly Report"] },
        { name: "Growth", price: 24999, popular: true, features: ["SEO + Ads", "Conversion Tracking", "Optimization"] },
        { name: "Custom Solution", custom: true, features: ["Full Funnel Marketing", "Paid Media Strategy", "Advanced Analytics", "Dedicated Manager"] },
      ],
    },

    "ai-agent-development": {
      title: "AI Agent Development",
      description: "Intelligent automation systems to streamline operations.",
      plans: [
        { name: "Starter", price: 19999, features: ["Basic Chatbot", "Website Integration"] },
        { name: "Growth", price: 39999, popular: true, features: ["CRM Automation", "Workflow Automation"] },
        { name: "Custom Solution", custom: true, features: ["Custom AI System", "API Integrations", "Process Automation", "Ongoing Support"] },
      ],
    },

    "app-development": {
      title: "App Development",
      description: "High-performance mobile and web applications.",
      plans: [
        { name: "Starter", price: 14999, features: ["Maintenance", "Bug Fixes"] },
        { name: "Growth", price: 29999, popular: true, features: ["Feature Upgrades", "UI Improvements"] },
        { name: "Custom Solution", custom: true, features: ["Full App Development", "Backend APIs", "Scalable Architecture", "Dev Team Support"] },
      ],
    },

    "ui-ux-designing": {
      title: "UI/UX Designing",
      description: "User-centered interface and product design solutions.",
      plans: [
        { name: "Starter", price: 8999, features: ["Wireframes", "UI Improvements"] },
        { name: "Growth", price: 17999, popular: true, features: ["Full Redesign", "UX Research"] },
        { name: "Custom Solution", custom: true, features: ["Product Strategy", "User Testing", "Conversion Optimization", "Design System"] },
      ],
    },
  };

  const service = pricingData[serviceName];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Service not found.
      </div>
    );
  }

  return (
    <>
      
        <title>{service.title} | Velryon</title>
        <meta name="description" content={service.description} />
      

      <section className="min-h-screen py-24 px-6 bg-[#0f1323] text-white">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            {service.title} Plans
          </h1>

          <p className="text-center text-gray-400 mb-12">
            {service.description}
          </p>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-14">
            <div className="bg-white/10 rounded-full p-1 flex">
              <button
                onClick={() => setYearly(false)}
                className={`px-6 py-2 rounded-full transition ${
                  !yearly ? "bg-purple-600" : ""
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-6 py-2 rounded-full transition ${
                  yearly ? "bg-purple-600" : ""
                }`}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-10 items-stretch">

            {service.plans.map((plan, index) => (
              <Tilt key={index} tiltMaxAngleX={8} tiltMaxAngleY={8}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex flex-col justify-between h-full p-10 rounded-2xl transition-all duration-500
                    ${
                      plan.popular
                        ? "bg-gradient-to-b from-white/10 to-white/5 border border-purple-500 shadow-[0_25px_80px_rgba(168,85,247,0.4)] scale-[1.05] z-20"
                        : "bg-white/5 border border-white/10 hover:-translate-y-2 hover:shadow-xl"
                    }`}
                >

                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 
                      bg-gradient-to-r from-purple-600 to-blue-600 
                      px-6 py-1.5 rounded-full text-xs font-semibold shadow-md">
                      MOST POPULAR
                    </div>
                  )}

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">
                      {plan.name}
                    </h2>

                    {plan.custom ? (
                      <p className="text-3xl font-bold mb-6 text-purple-400">
                        Let’s Build Together
                      </p>
                    ) : (
                      <p className="text-3xl font-bold mb-6">
                        ₹
                        {yearly
                          ? Math.floor(plan.price * 12 * 0.8)
                          : plan.price}
                        {yearly ? "/year" : "/month"}
                      </p>
                    )}

                    <ul className="space-y-3 text-gray-300 mb-8">
                      {plan.features.map((f, i) => (
                        <li key={i}>✔ {f}</li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button with WhatsApp Icon */}
                  <button
                    onClick={() =>
                      handleWhatsApp(
                        plan.custom ? "Custom Solution" : plan.name,
                        service.title
                      )
                    }
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl 
                      bg-gradient-to-r from-purple-600 to-pink-500 
                      hover:opacity-90 transition shadow-lg"
                  >
                    <FaWhatsapp size={18} />
                    {plan.custom ? "Request Proposal" : "Get Started"}
                  </button>

                </motion.div>
              </Tilt>
            ))}

          </div>

        </div>
        <Contact />
      </section>
       
    </>
  );
}
