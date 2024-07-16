import Faq from "../components/sections/Faq";
import About from "../components/sections/About";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import HeroBgLeft from "../components/sections/HeroBgLeft";
import FooterSocial from "../components/sections/FooterSocial";
import NavbarSocial from "../components/sections/NavbarSocial";
import HowItWorks from "../components/sections/HowItWorks";
import FeaturesWithIcons from "../components/sections/FeaturesWithIcons";
import Numbers from "../components/sections/Numbers";

export default function Index() {
  return (
    <div>
      <NavbarSocial />
      <HeroBgLeft />
      <FeaturesWithIcons />
      <Numbers />
      <Faq />
      <FooterSocial />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
