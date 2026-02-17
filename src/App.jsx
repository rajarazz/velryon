import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import ServicePricing from "./pages/ServicePricing";
import Background from "./components/layout/Background";

import {
  Navbar,
  Hero,
  Services,
  WhyChoose,
  Footer,
  Contact,
  StarsCanvas,
} from "./components";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChoose />

      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0F1A] z-0" />
        <div className="relative z-10">
          <Contact />
          <StarsCanvas />
        </div>
      </section>
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceName" element={<ServicePricing />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen overflow-x-hidden">
        <Background />
        <div className="relative z-10 text-white">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
