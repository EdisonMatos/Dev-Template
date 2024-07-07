import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";

export default function HowItWorks() {
  return (
    <div
      id="service"
      className="w-full flex flex-col items-center pb-[40px] tablet1:pb-[64px] desktop1:pb-[96px]"
    >
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
    </div>
  );
}
