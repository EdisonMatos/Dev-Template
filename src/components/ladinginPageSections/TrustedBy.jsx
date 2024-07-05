import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import LogoDisplay from "../sectionElements/LogoDisplay";
import content from "../../content/content";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import TrustedByMore from "../sections/TrustedByMore";

const images = [
  {
    src: content.texts.trustedBy.images.img1.img.trustedByImg1,
    alt: content.texts.trustedBy.images.img1.alt,
  },
  {
    src: content.texts.trustedBy.images.img2.img.trustedByImg2,
    alt: content.texts.trustedBy.images.img2.alt,
  },
  {
    src: content.texts.trustedBy.images.img3.img.trustedByImg3,
    alt: content.texts.trustedBy.images.img3.alt,
  },
];

export default function TrustedBy() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle("Seguradoras que trabalhamos");
    setModalContent(
      <div>
        <TrustedByMore />
      </div>
    );
    setVisible(true);
  };

  return (
    <div className="bg-black bg-opacity-50">
      <div class="custom-shape-divider-bottom-1720015327">
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
      <SectionArea className="bg-white bg-opacity-100">
        <SectionHeader
          className="text-center"
          sectionHeaderTitle="Trusted By"
          sectionHeaderSubtitle="Trusted By"
          textColor=""
        />
        <SectionWrapper>
          <MotionDivDownToUp className="w-full">
            <LogoDisplay images={images} />
          </MotionDivDownToUp>
          <MotionDivDownToUp className="">
            {/* <Paragraphs className="text-center">
            Para ver todas seguradoras que trabalhamos,{" "}
            <span
              className="transition cursor-pointer text-tertiary hover:underline"
              onClick={onClick}
            >
              clique aqui
            </span>
          </Paragraphs> */}
          </MotionDivDownToUp>
          <div className="text-black">
            Objetivo: Mostrar logos de todos os clientes
          </div>
        </SectionWrapper>
        {/* <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <p className="m-0 ">{modalContent}</p>
      </Dialog> */}
      </SectionArea>
    </div>
  );
}
