import Faq from "../components/sections/Faq";
import About from "../components/sections/About";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import HeroBgImg from "../components/sections/HeroBgImg";
import FooterSocial from "../components/sections/FooterSocial";
import NavbarSocial from "../components/sections/NavbarSocial";
import FeaturesWithIcons from "../components/sections/FeaturesWithIcons";
import Numbers from "../components/sections/Numbers";
import AboutInstagram from "../components/sections/AboutInstagram";
import HowItWorksImage from "../components/sections/HowItWorksImage";
import CtaMinimal from "../components/sections/CtaMinimal";
import Depositions from "../components/sections/Depositions";
import Hero from "../components/sections/Hero";

export default function Index() {
  return (
    <div>
      <NavbarSocial />
      <Hero />
      <FeaturesWithIcons />

      {/* <Numbers /> */}
      <About />
      <AboutInstagram />
      <HowItWorksImage />
      <CtaMinimal />
      {/* <Depositions /> */}
      <Faq />
      <FooterSocial />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
