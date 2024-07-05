import Faq from "../components/sections/Faq";
import About from "../components/sections/About";
import Numbers from "../components/sections/Numbers";
import Services from "../components/sections/Services";
import Features from "../components/sections/Features";
import TrustedBy from "../components/sections/TrustedBy";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import HeroBgLeft from "../components/sections/HeroBgLeft";
import FooterSocial from "../components/sections/FooterSocial";
import AboutMockUpSocial from "../components/sections/AboutMockUpSocial";
import TesteCarouselDivsV1 from "../components/sections/TesteCarouselDivsV1";
import NavbarSocial from "../components/sections/NavbarSocial";
import CtaParalaxeCenter from "../components/sections/CtaParalaxeCenter";

export default function Index() {
  return (
    <div>
      <NavbarSocial />
      <HeroBgLeft />
      {/* <TesteCarouselDivsV1 /> */}
      <Features />
      <Services />
      <Numbers />
      <About />
      <AboutMockUpSocial />
      <CtaParalaxeCenter />
      <TrustedBy />
      <Faq />
      <FooterSocial />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
