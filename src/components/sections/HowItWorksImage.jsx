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
import imgHowItWorks from "../../assets/imgs/about/howItWorks.jpg";
import imgPoints from "../../assets/imgs/about/points.png";
import HowItWorksCard from "../cards/HowItWorksCard";

export default function HowItWorksImage() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  return (
    <SectionArea id="about" className="bg-bgSectionDark">
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop1:gap-x-[60px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] ">
          <div
            style={{
              backgroundImage: `url(${imgHowItWorks})`,
            }}
            className="relative desktop1:bg-center bg-no-repeat bg-cover h-[450px] tablet1:h-[800px] desktop1:h-[467px] rounded-2xl"
          >
            <img
              alt="Imagem de efeito pontilhado"
              src={imgPoints}
              className="absolute opacity-75 right-[-40px] top-[40px] phone1:right-[-10px] phone1:top-[20px] desktop1:right-[-40px] desktop1:top-[40px]"
            ></img>
          </div>
        </MotionDivDownToUp>
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <MotionDivDownToUp>
            <SectionHeader
              className="text-center"
              miniTitle="PASSO A PASSO"
              sectionHeaderTitle="Como funciona o processo de assessoria conosco?"
              color=""
              type="article"
            />
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <div className="flex flex-wrap w-full justify-between gap-[32px]">
              <HowItWorksCard
                number="1"
                title="Consulta inicial"
                description="Agendamos uma consulta para entender seu caso e avaliar suas necessidades legais."
              />
              <HowItWorksCard
                number="2"
                title="Análise do caso"
                description="Examinamos todos os detalhes e evidências para compreender a situação completa."
              />
              <HowItWorksCard
                number="3"
                title="Estratégia"
                description="Desenvolvemos um plano personalizado para melhor defender seus interesses."
              />
              <HowItWorksCard
                number="4"
                title="Ação Judicial"
                description="Iniciamos e conduzimos o processo legal para buscar a justiça que você merece."
              />
            </div>
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
