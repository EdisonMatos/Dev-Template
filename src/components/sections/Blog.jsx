import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";


export default function Blog() {
  return (
    <div>
      <SectionArea className="squares">
        <SectionShapeDiv
          shapeDivArrow={false}
          paddingbot={false}
          shapeColor="text-bgSectionDark"
        />
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.blog.miniTag}
            sectionHeaderTitle={content.texts.blog.title}
            sectionHeaderSubtitle={content.texts.blog.subtitle}
            color="dark"
          />

          <div>
          
    <div className="w-[90%] flex m-auto" class="elfsight-app-4107558b-fd01-411d-a3c0-89373e511644" data-elfsight-app-lazy></div></div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
