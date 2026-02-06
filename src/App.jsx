import { BrowserRouter } from "react-router-dom";
import Background from "./components/layout/Background";
import {
  Navbar,
  Hero,
  About,
  Services,
  WhyChoose,
  Footer,
  Contact,
  StarsCanvas,
} from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-x-hidden">

  {/* BACKGROUND (INTERACTIVE) */}
  <Background />

  {/* CONTENT ABOVE */}
  <div className="relative z-10 pointer-events-auto text-white font-['Inter']">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <WhyChoose />

    <section className="relative z-10 overflow-hidden">
  {/* BACKGROUND BLOCKER */}
  <div className="absolute inset-0 bg-[#0B0F1A] z-0" />

  {/* CONTACT CONTENT */}
  <div className="relative z-10">
    <Contact />
    <StarsCanvas />
  </div>
</section>


    <Footer />
  </div>

</div>

    </BrowserRouter>
  );
}
