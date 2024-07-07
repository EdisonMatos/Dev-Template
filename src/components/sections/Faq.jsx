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
    <div className="relative bg-[#1E3254]">
      <div>
        <div class="custom-shape-divider-top-1720358016">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <SectionArea id="faq" className="">
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
    </div>
  );
}
