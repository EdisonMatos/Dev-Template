import Faq from "../components/sections/Faq";
import About from "../components/sections/About";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import HeroBgLeft from "../components/sections/HeroBgLeft";
import FooterSocial from "../components/sections/FooterSocial";
import NavbarSocial from "../components/sections/NavbarSocial";

export default function Index() {
  return (
    <div>
      <NavbarSocial />
      <HeroBgLeft />
      <About />
      <Faq />
      <FooterSocial />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
