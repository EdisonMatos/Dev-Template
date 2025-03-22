import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import content, { abstractions } from "../../content/content";
import SectionHeader from "../sectionElements/SectionHeader";
import "react-image-gallery/styles/css/image-gallery.css";
import ParagraphWithFading from "../sectionElements/about/ParagraphWithFading";
import ParagraphSemFading from "../sectionElements/about/ParagraphSemFading";
import GalleryAbout from "../sectionElements/about/GalleryAbout";
import AboutModal from "../sectionElements/about/AboutModal";

export default function About({ modal, showGallery }) {
  return (
    <SectionArea id="about" className="bg-bgSectionDark">
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className=" w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
          <div
            style={{
              backgroundImage: !showGallery
                ? `url(${content.texts.about.imagem.img})`
                : "none",
            }}
            className="shadow-custom-opacity shadow-black/40 relative bg-center bg-no-repeat bg-cover h-[350px] w-[90%] tablet1:w-full tablet1:h-[800px] desktop1:h-[467px] rounded-xl"
          >
            {showGallery && <GalleryAbout />}
          </div>
        </MotionDivDownToUp>

        <div className="desktop1:w-[550px] desktop2:w-[570px] ">
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.about.miniTag}
            sectionHeaderTitle={content.texts.about.title}
            sectionHeaderSubtitle={content.texts.about.subtitle}
            color=""
            type="article"
            titleColorSet="text-white"
            subtitleColorSet="text-white"
          />
          <MotionDivDownToUp>
            {modal ? <ParagraphWithFading /> : <ParagraphSemFading />}
            {modal && <AboutModal />}
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
