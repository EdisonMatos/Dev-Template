import FeaturesPanatta from "../panatta/sections/FeaturesPanatta";
import FooterPanatta from "../panatta/sections/FooterPanatta";
import HeroPanatta from "../panatta/sections/HeroPanatta";
import HowItWorksPanatta from "../panatta/sections/HowItWorksPanatta";
import TermsPanatta from "../panatta/sections/TermsPanatta";
import "../styles/radialBg.css";

export default function Panatta() {
  return (
    <div className="flex flex-col items-center text-white bg-gradient-radial">
      <HeroPanatta />
      <HowItWorksPanatta />
      <FeaturesPanatta />
      <TermsPanatta />
      <FooterPanatta />
    </div>
  );
}
