import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import CarouselDivisV1 from "../../components/interactives/CarouselDivsV1";
import deposition1 from "../../assets/imgs/depositions/deposition1.png";
import deposition2 from "../../assets/imgs/depositions/deposition2.png";
import deposition3 from "../../assets/imgs/depositions/deposition3.png";
import deposition4 from "../../assets/imgs/depositions/deposition4.png";
import deposition5 from "../../assets/imgs/depositions/deposition5.png";
import deposition6 from "../../assets/imgs/depositions/deposition6.png";
import deposition7 from "../../assets/imgs/depositions/deposition7.png";
import deposition8 from "../../assets/imgs/depositions/deposition8.png";

export default function Depositions() {
  return (
    <div className="relative bg-bgSectionDark">
      <SectionArea className="" paddingbot={false}>
        <SectionHeader
          className="text-center"
          miniTitle="TIRE SUAS DÚVIDAS"
          sectionHeaderTitle={content.texts.depositions.title}
          sectionHeaderSubtitle={content.texts.depositions.subtitle}
          titleColor="text-white"
          subtitleColor="text-white opacity-70"
        />

        <SectionWrapper className="flex justify-center">
          <MotionDivDownToUp className="flex justify-center w-full">
            <CarouselDivisV1>
              <div className="flex justify-center">
                <div>
                  <img src={deposition1} alt="depoimento 1" />
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <img src={deposition2} alt="depoimento 2" />
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <img src={deposition3} alt="depoimento 3" />
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <img src={deposition4} alt="depoimento 4" />
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <img src={deposition5} alt="depoimento 5" />
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <img src={deposition6} alt="depoimento 6" />
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <img src={deposition7} alt="depoimento 7" />
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <img src={deposition8} alt="depoimento 8" />
                </div>
              </div>
            </CarouselDivisV1>
          </MotionDivDownToUp>
          <MotionDivDownToUp></MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
