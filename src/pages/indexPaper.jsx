import CtaSolidCenter from "../components/ladinginPageSections/CtaSolidCenter";
import Faq from "../components/ladinginPageSections/Faq";
import FooterSocial from "../components/ladinginPageSections/FooterSocial";
import HeroBgCenter from "../components/ladinginPageSections/HeroBgCenter";
import Princing from "../components/ladinginPageSections/Princing";
import SeoInfo from "../components/ladinginPageSections/SeoInfo";
import SocialProof from "../components/ladinginPageSections/SocialProof";
import TecnicalInfo from "../components/ladinginPageSections/TecnicalInfo";
import TrustedBy from "../components/ladinginPageSections/TrustedBy";
import Vantagens from "../components/ladinginPageSections/Vantagens";
import bgHeroImg from "../landingPage/hero/bgHero10.jpg";

export default function IndexPaper() {
  return (
    <div
      className="w-full text-center text-white bg-right-top bg-no-repeat font-mainFont"
      style={{ backgroundImage: `url(${bgHeroImg})` }}
    >
      <div className="bg-black bg-opacity-90">
        <HeroBgCenter />
        <Vantagens />
        <SocialProof />
        <SeoInfo />
        <TecnicalInfo />
        <TrustedBy />
        <Princing />
        <CtaSolidCenter />
        <Faq />
        <FooterSocial />
      </div>
    </div>
  );
}
