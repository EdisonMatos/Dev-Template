import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import AboutParalaxeLP from "../components/sections/ladingPage/AboutParalaxeLP";
import CtaLP from "../components/sections/ladingPage/CtaLP";
import FeaturesLP from "../components/sections/ladingPage/FeaturesLP";
import FooterLP from "../components/sections/ladingPage/FooterLP";
import HeroLP from "../components/sections/ladingPage/HeroLP";
import WhyUs from "../components/sections/ladingPage/WhyUs";

export default function LandingPage() {
  return (
    <div>
      <HeroLP />
      <FeaturesLP />
      <AboutParalaxeLP />
      <WhyUs />
      <CtaLP />
      <FooterLP />
      <FloatingWhatsappButton />
    </div>
  );
}
