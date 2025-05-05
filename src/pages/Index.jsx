import { useState } from "react";
import "../styles/shapeDivs.css";
import Cta from "../components/sections/Cta";
import Faq from "../components/sections/Faq";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Steps from "../components/sections/Steps";
import Features from "../components/sections/Features";
import Navbar from "../components/sections/NavbarSocial";
import FooterSocial from "../components/sections/FooterSocial";
import AboutInstagram from "../components/sections/AboutInstagram";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import Maps from "../components/sections/Maps";

export default function Index() {
  const [LightMode, setLightMode] = useState(true);

  const toggleLightMode = () => {
    setLightMode((prevMode) => !prevMode);
  };

  const lightModeToggle = toggleLightMode;

  return (
    <>
      <Navbar LightMode={LightMode} />
      <Hero
        LightMode={LightMode}
        appDownloadButtons={false}
        defaultHero={true}
        influencer={false}
        mesclado={false}
      />
      <Features
        defaultFeature={true}
        button={false}
        modalWithCards={false}
        paragraphs={false}
        sixCards={false}
        paragraphsModal={false}
      />
      <About modal={true} showGallery={false} LightMode={LightMode} />
      <AboutInstagram
        LightMode={LightMode}
        socialPrint={true}
        instagram={true}
        facebook={true}
        linkedin={false}
        x={false}
      />
      <Cta />
      <Steps />
      <Maps />
      <Faq />
      <FooterSocial
        LightMode={LightMode} // Passando o LightMode também para FooterSocial
        addres={false}
        phoneSecundario={false}
        phoneTerciario={false}
        emailSecundario={false}
        addresSecundario={false}
        instagram={true}
        facebook={true}
      />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </>
  );
}
