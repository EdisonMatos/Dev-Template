import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../content/content";
import Button from "../interactives/Button";
import links from "../../content/links";
import SectionHeader from "../sectionElements/SectionHeader";
import imgPoints from "../../assets/imgs/about/points.png";
import imgPhone from "../../assets/imgs/about/phoneMockup.png";

export default function AboutInstagram() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  return (
    <SectionArea id="about" className="bg-bgSectionDark">
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop1:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="relative w-[100%] desktop1:w-[415px] desktop2:w-[485px] ">
          <img
            src={imgPhone}
            className="desktop1:bg-center bg-no-repeat bg-cover h-[450px] tablet1:h-[800px] desktop1:h-[760px] rounded-2xl"
          ></img>
        </MotionDivDownToUp>
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <MotionDivDownToUp>
            <SectionHeader
              className="text-center"
              miniTitle="REDES SOCIAIS"
              sectionHeaderTitle="Me siga nas redes sociais"
              sectionHeaderSubtitle="Que tal ficar por dentro do mundo do direito?"
              color=""
              type="article"
            />
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <Paragraphs className="text-white text-opacity-60 mb-[48px]">
              {content.texts.about.paragraph}
            </Paragraphs>
          </MotionDivDownToUp>

          {/* Início Botões das redes sociais */}

          {/* <div className=" flex flex-col gap-[16px] w-[100%] tablet1:w-[60%] desktop1:w-[80%] desktop2:w-[60%]">
            <MotionDivDownToUp>
              <Button
                label="Me siga no Instagram"
                className="w-[75%]"
                buttonLink={links.socialMedia.instagram}
                textclassName="text-paragraph3"
                size="small"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <Button
                label="Me siga no Facebook"
                className="w-[75%]"
                buttonLink={links.socialMedia.facebook}
                textclassName="text-paragraph3"
                size="small"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <Button
                label="Me siga no Linkedin"
                className="w-[75%]"
                buttonLink={links.socialMedia.linkedin}
                textclassName="text-paragraph3"
                size="small"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
          </div> */}

          {/* Fim Botões das redes sociais */}

          {/* Início Botão de saiba mais abrindo modal */}

          <MotionDivDownToUp>
            <Button
              label="Continuar lendo"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              }
            />
          </MotionDivDownToUp>

          {/* Fim Botão de saiba mais abrindo modal */}
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
