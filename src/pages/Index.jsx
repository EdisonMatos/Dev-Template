import React, { useState, useEffect } from 'react';
import Faq from "../components/sections/Faq";
import About from "../components/sections/About";
import BackToTopButton from "../components/interactives/BackToTopButton";
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
import FeaturesButton from "../components/sections/FeaturesButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import SkeletonColor from '../components/sectionElements/Skeleton';

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula o tempo de carregamento dos componentes/dados
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 segundos de delay
  }, []);

  return (
    <div>
      {loading ? (
        // Enquanto os dados estão carregando, mostra o Skeleton
        <SkeletonColor />
      ) : (
        // Quando os dados/carregamento terminam, mostra a página completa
        <>
          <NavbarSocial />
          <Hero />
          <FeaturesWithIcons />
          {/* <FeaturesButton /> */}
          {/* <Numbers /> */}
          <About />
          <AboutInstagram />
          <CtaMinimal />
          {/* <Depositions /> */}
          <HowItWorksImage />
          <Faq />
          <FooterSocial />
          <FloatingWhatsappButton />
          <BackToTopButton />
        </>
      )}
    </div>
  );
}
