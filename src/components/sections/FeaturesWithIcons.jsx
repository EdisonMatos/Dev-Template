import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Icon1 from "../../assets/imgs/icons/icon1.png";
import Icon2 from "../../assets/imgs/icons/icon2.png";
import Icon3 from "../../assets/imgs/icons/icon3.png";
import Icon4 from "../../assets/imgs/icons/icon4.png";

export default function FeaturesWithIcons() {
  return (
    <SectionArea id="service" className="squares">
      <SectionHeader
        className="text-center"
        miniTitle={content.texts.features.miniTag}
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        color="dark"
      />
      <SectionWrapper>
        <div className="flex flex-col items-center justify-evenly w-full tablet1:flex-row">
          <div className=" col1 desktop1:w-[28%]">
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
                    class="lucide lucide-gavel"
                  >
                    <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
                    <path d="m16 16 6-6" />
                    <path d="m8 8 6-6" />
                    <path d="m9 7 8 8" />
                    <path d="m21 11-8-8" />
                  </svg>
                }
                title={content.texts.features.card1.title}
                paragraph={content.texts.features.card1.subtitle}
                className="tablet1:mb-[46px] desktop1:mb-0 desktop2:mb-[46px]"
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
                    class="lucide lucide-siren"
                  >
                    <path d="M7 18v-6a5 5 0 1 1 10 0v6" />
                    <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
                    <path d="M21 12h1" />
                    <path d="M18.5 4.5 18 5" />
                    <path d="M2 12h1" />
                    <path d="M12 2v1" />
                    <path d="m4.929 4.929.707.707" />
                    <path d="M12 12v6" />
                  </svg>
                }
                title={content.texts.features.card2.title}
                paragraph={content.texts.features.card2.subtitle}
              />
            </MotionDivDownToUp>
          </div>

          <MotionDivDownToUp className="flex justify-center w-[32%]">
            <div
              className="hidden h-[640px] w-full desktop1:flex col2 rounded-2xl bg-top bg-cover"
              style={{
                backgroundImage: `url(${content.texts.features.imgFeatures})`,
              }}
            >
              {/* <img
              src={content.texts.features.imgFeatures}
              alt="Imagem ilustrativa da seção"
              className="rounded-2xl"
            /> */}
            </div>
          </MotionDivDownToUp>
          <div className=" col3 desktop1:w-[28%]">
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
                    class="lucide lucide-handshake"
                  >
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                    <path d="m21 3 1 11h-2" />
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                    <path d="M3 4h8" />
                  </svg>
                }
                title={content.texts.features.card3.title}
                paragraph={content.texts.features.card3.subtitle}
                className="tablet1:mb-[46px] desktop1:mb-0 desktop2:mb-[46px]"
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
                    class="lucide lucide-lightbulb"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
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
