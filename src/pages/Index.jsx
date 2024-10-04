import Faq from "../components/sections/Faq";
import About from "../components/sections/About";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FooterSocial from "../components/sections/FooterSocial";
import NavbarSocial from "../components/sections/NavbarSocial";
import FeaturesWithIcons from "../components/sections/FeaturesWithIcons";
import AboutInstagram from "../components/sections/AboutInstagram";
import HowItWorksImage from "../components/sections/HowItWorksImage";
import CtaMinimal from "../components/sections/CtaMinimal";
import Hero from "../components/sections/Hero";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";

export default function Index() {
  return (
    <div>
      <NavbarSocial />
      <Hero />
      <FeaturesWithIcons />
      <About />
      <AboutInstagram />
      <CtaMinimal />
      <HowItWorksImage />
      <Faq />
      <FooterSocial />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
