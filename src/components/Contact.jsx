import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Thank you! We will contact you shortly.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="xl:mt-10 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
    >
      {/* CONTACT FORM */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#11162A] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Get in touch with Velryon
        </p>

        <h2
          id="contact-heading"
          className={styles.sectionHeadText}
        >
          Contact Us
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-6"
          aria-label="Contact form"
        >
          {/* NAME */}
          <label className="sr-only" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="bg-[#0B0F1A] py-4 px-6 text-white rounded-lg outline-none
                       focus:ring-2 focus:ring-[#6A3FF2]"
          />

          {/* EMAIL */}
          <label className="sr-only" htmlFor="email">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="bg-[#0B0F1A] py-4 px-6 text-white rounded-lg outline-none
                       focus:ring-2 focus:ring-[#6A3FF2]"
          />

          {/* MESSAGE */}
          <label className="sr-only" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project"
            required
            className="bg-[#0B0F1A] py-4 px-6 text-white rounded-lg outline-none
                       resize-none focus:ring-2 focus:ring-[#6A3FF2]"
          />

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="
              bg-gradient-to-r from-[#6A3FF2] to-[#1F7CFF]
              py-3 px-8 rounded-xl w-fit
              text-white font-bold
              shadow-lg
              hover:shadow-[0_0_40px_rgba(106,63,242,0.8)]
              disabled:opacity-60 disabled:cursor-not-allowed
              transition
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      {/* 3D EARTH VISUAL */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        aria-hidden="true"
      >
        <EarthCanvas />
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
