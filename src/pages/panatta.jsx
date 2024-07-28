import FeaturesPanatta from "../panatta/sections/FeaturesPanatta";
import FooterPanatta from "../panatta/sections/FooterPanatta";
import HeroPanatta from "../panatta/sections/HeroPanatta";
import HowItWorksPanatta from "../panatta/sections/HowItWorksPanatta";
import TermsPanatta from "../panatta/sections/TermsPanatta";
import "../styles/radialBg.css";
import bgImg from "../panatta/img/bg/bg.jpg";

export default function Panatta() {
  return (
    // <div className="flex flex-col items-center text-white bg-gradient-radial">
      <div
        className="flex flex-col items-center text-white bg-center"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <HeroPanatta />
        <HowItWorksPanatta />
        <FeaturesPanatta />
        <TermsPanatta />
        <FooterPanatta />
      </div>
  );
}
