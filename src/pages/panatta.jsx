import FeaturesPanatta from "../panatta/sections/FeaturesPanatta";
import FooterPanatta from "../panatta/sections/FooterPanatta";
import HeroPanatta from "../panatta/sections/HeroPanatta";
import HowItWorksPanatta from "../panatta/sections/HowItWorksPanatta";
import TermsPanatta from "../panatta/sections/TermsPanatta";

export default function Panatta() {
  return (
    <div className="flex flex-col items-center bg-[#13171B] text-white">
      <HeroPanatta />
      <HowItWorksPanatta />
      <FeaturesPanatta />
      <TermsPanatta />
      <FooterPanatta />
    </div>
  );
}
