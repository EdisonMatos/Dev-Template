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
    <SectionArea id="faq" className="bg-[#1E3254]">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle={content.texts.faq.title}
        sectionHeaderSubtitle={content.texts.faq.subtitle}
        titleColor="text-white"
        subtitleColor="text-white opacity-70"
      />

      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp className="flex justify-center w-full">
          <div className="w-[90%] tablet1:w-[80%] desktop1:w-[80%] max-w-[860px] mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]">
            <AccordionExpandDefault />
          </div>
        </MotionDivDownToUp>
        <MotionDivDownToUp>
          <Paragraphs className="text-center text-white">
            Para demais dúvidas,{" "}
            <a
              href={whatsappContactLink}
              target="_blank"
              className="transition underline"
            >
              {" "}
              fale com nossa equipe clicando aqui
            </a>
          </Paragraphs>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
