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
  const [colorMode, setColorMode] = useState();

  const toggleColorMode = () => {
    setColorMode((prevMode) => {
      if (prevMode === "default") return "light";
      if (prevMode === "light") return "dark";
      return "default";
    });
  };

  const setToDefault = () => setColorMode("default");
  const setToLight = () => setColorMode("light");
  const setToDark = () => setColorMode("dark");

  return (
    <>
      {/* Botões para trocar o modo de cor */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={setToDefault}
          className="px-2 py-1 bg-gray-400 text-white rounded"
        >
          Default
        </button>
        <button
          onClick={setToLight}
          className="px-2 py-1 bg-white text-black border rounded"
        >
          Light
        </button>
        <button
          onClick={setToDark}
          className="px-2 py-1 bg-black text-white rounded"
        >
          Dark
        </button>
      </div>

      <Navbar colorMode={colorMode} />
      <Hero
        colorMode={colorMode}
        appDownloadButtons={false}
        defaultHero={true}
        influencer={false}
        mesclado={false}
      />
      <Features
        colorMode={colorMode}
        defaultFeature={true}
        button={false}
        modalWithCards={false}
        paragraphs={false}
        sixCards={false}
        paragraphsModal={false}
      />
      <About modal={true} showGallery={false} colorMode={colorMode} />
      <AboutInstagram
        colorMode={colorMode}
        socialPrint={true}
        instagram={true}
        facebook={true}
        linkedin={false}
        x={false}
      />
      <Cta colorMode={colorMode} />
      <Steps colorMode={colorMode} />
      <Maps colorMode={colorMode} />
      <Faq colorMode={colorMode} />
      <FooterSocial
        colorMode={colorMode}
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
