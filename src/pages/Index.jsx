import Faq from "../components/sections/Faq";
import About from "../components/sections/About";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import HeroBgLeft from "../components/sections/HeroBgLeft";
import FooterSocial from "../components/sections/FooterSocial";
import NavbarSocial from "../components/sections/NavbarSocial";
import AppFeatures1 from "../components/sections/AppFeatures1";
import AppFeatures2 from "../components/sections/AppFeatures2";

export default function Index() {
  return (
    <div>
      <NavbarSocial />
      <HeroBgLeft />
      <AppFeatures1 />
      <AppFeatures2 />
      <Faq />
      <FooterSocial />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
