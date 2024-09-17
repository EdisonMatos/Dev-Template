import bgHeroImg from "../assets/imgs/hero/bgHero.jpg";
import SectionArea from "../components/sectionElements/SectionArea";
import SectionWrapper from "../components/sectionElements/SectionWrapper";

export default function Index() {
  return (
    <div
      className="bg-cover h-screen w-screen"
      style={{ backgroundImage: `url(${bgHeroImg})` }}
    >
      <SectionArea className="bg-red-500 h-screen flex items-center justify-center">
        <SectionWrapper className="bg-green-500">a</SectionWrapper>
      </SectionArea>
    </div>
  );
}
