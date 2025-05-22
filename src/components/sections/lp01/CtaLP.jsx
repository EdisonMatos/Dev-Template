import contentLp01 from "../../../content/contentLp01";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import Button from "../../interactives/Button";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import { useNavigate } from "react-router-dom";

export default function AboutParalaxeLP() {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-scroll bg-center bg-cover desktop1:bg-fixed"
      style={{
        backgroundImage: `url(${contentLp01.cta.bgImg})`,
        backgroundRepeat: "no-repeat",
      }}
      id="contact"
    >
      <div className="absolute inset-0 bg-black/80 z-0 pointer-events-none" />

      <div className="relative z-10 flex justify-center w-full text-white">
        <SectionArea className="">
          <SectionWrapper>
            <SectionHeader
              className="text-center"
              miniTitle={contentLp01.cta.sectionHeader.miniTag}
              sectionHeaderTitle={contentLp01.cta.sectionHeader.title}
              sectionHeaderSubtitle={contentLp01.cta.sectionHeader.subtitle}
              color=""
              titleColorSet="text-white"
              subtitleColorSet="text-white"
            />
            <MotionDivDownToUp>
              <Button
                aria-label={contentLp01.hero.textArea.ctaButtonAriaLabel}
                label={contentLp01.cta.buttonLabel}
                animation
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="..." />
                  </svg>
                }
              />
            </MotionDivDownToUp>
          </SectionWrapper>
        </SectionArea>
      </div>
    </div>
  );
}

