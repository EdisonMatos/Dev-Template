import Navbar from "../components/sections/NavbarSocial";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import About from "../components/sections/About";
import AboutInstagram from "../components/sections/AboutInstagram";
import Cta from "../components/sections/Cta";
import Steps from "../components/sections/Steps";
import Faq from "../components/sections/Faq";
import FooterSocial from "../components/sections/FooterSocial";

import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import BackToTopButton from "../components/interactives/BackToTopButton";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <AboutInstagram />
      <Cta />
      <Steps />
      <Faq />
      <FooterSocial />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
