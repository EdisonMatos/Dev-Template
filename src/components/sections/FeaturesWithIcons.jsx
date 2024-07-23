import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import lawImg from "../../assets/imgs/features/law.png";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function FeaturesWithIcons() {
  return (
    <SectionArea id="service" className="squares">
      <SectionHeader
        className="text-center"
        miniTitle="ESPECIALIDADES"
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        color="dark"
      />
      <SectionWrapper>
        <div className="flex flex-col items-center justify-between w-full tablet1:flex-row">
          <div className="col1">
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-users"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                }
                title={content.texts.features.card1.title}
                paragraph={content.texts.features.card1.subtitle}
                className="tablet1:mb-[46px]"
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-house"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                }
                title={content.texts.features.card2.title}
                paragraph={content.texts.features.card2.subtitle}
              />
            </MotionDivDownToUp>
          </div>
          <div className="hidden desktop1:flex col2">
            <img src={lawImg} alt="Imagem da estátua do direito" />
          </div>
          <div className="col3 ">
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-tag"
                  >
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                  </svg>
                }
                title={content.texts.features.card3.title}
                paragraph={content.texts.features.card3.subtitle}
                className="tablet1:mb-[46px]"
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-scroll-text"
                  >
                    <path d="M15 12h-5" />
                    <path d="M15 8h-5" />
                    <path d="M19 17V5a2 2 0 0 0-2-2H4" />
                    <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
                  </svg>
                }
                title={content.texts.features.card4.title}
                paragraph={content.texts.features.card4.subtitle}
              />
            </MotionDivDownToUp>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
