import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";

export default function FeaturesWithIcons() {
  return (
    <SectionArea id="service" className="squares">
      <SectionHeader
        className="text-center"
        miniTitle="ESPECIALIDADES"
        sectionHeaderTitle="Defendendo seus direitos com excelência"
        sectionHeaderSubtitle="Garantindo seus direitos através de expertise em diversas áreas de atuação."
      />
      <SectionWrapper>
        <div>Olá</div>
      </SectionWrapper>
    </SectionArea>
  );
}
