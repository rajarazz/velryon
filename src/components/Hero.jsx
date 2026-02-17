import { Rocket, ArrowRight, Phone } from "lucide-react";

export default function Hero() {

  const handleGetStarted = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = "919334464905";
    const message = "Hello Velryon, I would like to discuss my project.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative mx-auto w-full max-w-5xl min-h-screen flex items-center justify-center text-white">

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center gap-6 pt-32 pb-24 text-center px-6">

        {/* Badge */}
        <a
          href="#"
          className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs backdrop-blur transition hover:bg-white/10"
        >
          <Rocket size={14} className="text-gray-400" />
          <span>Shipped new features!</span>
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </a>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Building Teams That Help
          <br />
          You Scale and Lead
        </h1>

        {/* Subheading */}
        <p className="max-w-md text-gray-400 text-base sm:text-lg md:text-xl">
          Connecting you with world-class talent
          <br />
          to scale, innovate, and lead.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition"
          >
            <Phone size={18} />
            Book a Call
          </button>

          {/* Get Started */}
          <button
            onClick={handleGetStarted}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            Get Started
            <ArrowRight size={18} />
          </button>

        </div>
      </div>
    </section>
  );
}
