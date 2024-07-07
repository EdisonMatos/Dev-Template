import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";

export default function HowItWorks() {
  return (
    <SectionArea id="service" className="">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Como funciona?"
        sectionHeaderSubtitle="Com apenas alguns passos, o seu problema está resolvido"
      />
      <SectionWrapper>
        <div className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]">
          Hello, world
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
