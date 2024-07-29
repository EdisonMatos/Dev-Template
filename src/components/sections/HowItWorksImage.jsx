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
import imgHowItWorks from "../../assets/imgs/features/imgSteppers.jpg";
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
              miniTitle="Sem complicações"
              sectionHeaderTitle="Como funciona nosso passeio?"
              color=""
              type="article"
            />
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <div className="flex flex-wrap w-full justify-between gap-[32px] mt-[28px] desktop1:mt-0">
              <HowItWorksCard
                number="1"
                title="Horários"
                description="Passeios diários com saídas às 9h e às 14h. Recomendamos chegar com pelo menos 30 minutos de antecedência."
              />
              <HowItWorksCard
                number="2"
                title="Duração"
                description="São 4 horas intensas de puro encanto e diversão, onde você desfruta de todo conforto à bordo e da experiência única da paisagem."
              />
              <HowItWorksCard
                number="3"
                title="O que levar?"
                description="Protetor solar, chapéu ou boné, toalha, roupa de banho, e uma câmera para registrar cada momento especial."
              />
              <HowItWorksCard
                number="4"
                title="Segurança"
                description="Seguimos todos os protocolos de segurança e oferecemos coletes salva-vidas para todos os passageiros."
              />
            </div>
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
