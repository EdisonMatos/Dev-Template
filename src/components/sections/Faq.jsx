import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import AccordionExpandDefault from "../interactives/AcordionTwo";
import links from "../../content/links";
import content from "../../content/content";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

export default function Faq() {
  return (
    <div className="relative">
      <SectionArea id="faq" className="bg-neutral-100">
        <MotionDivDownToUp>
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.faq.miniTag}
            sectionHeaderTitle={content.texts.faq.title}
            sectionHeaderSubtitle={content.texts.faq.subtitle}
            color="dark"
          />
        </MotionDivDownToUp>
        <SectionWrapper className="flex justify-center">
          <MotionDivDownToUp className="flex justify-center w-full">
            <div className="w-[90%] tablet1:w-[80%] desktop1:w-[80%] max-w-[860px] mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]">
              <AccordionExpandDefault />
            </div>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <Paragraphs className="text-center underline transition text-secondary hover:scale-110">
              {" "}
              <a href={whatsappContactLink} target="_blank" className="">
                {" "}
                Clique aqui caso tenha mais dúvidas{" "}
              </a>
            </Paragraphs>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
