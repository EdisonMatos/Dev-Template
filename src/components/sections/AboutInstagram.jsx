import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../content/content";
import Button from "../interactives/Button";
import SectionHeader from "../sectionElements/SectionHeader";
import SocialPrint from "../sectionElements/aboutInstagram/SocialPrint";
import DefaultInstagram from "../sectionElements/aboutInstagram/DefaultInstagram";
import InstagramAbout from "../sectionElements/aboutInstagram/InstagramAbout";
import FacebookAbout from "../sectionElements/aboutInstagram/FacebookAbout";
import XAbout from "../sectionElements/aboutInstagram/XAbout";
import LinkedInAbout from "../sectionElements/aboutInstagram/LinkedInAbout";
import ParagraphsAboutSocial from "../sectionElements/aboutInstagram/ParagraphsAboutSocial";

export default function AboutInstagram({
  instagram,
  facebook,
  x,
  linkedin,
  socialPrint,
}) {
  return (
    <SectionArea id="about" className="bg-bgSectionDark" paddingtop={false}>
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px]  desktop1:gap-x-[40px]  desktop1:justify-between">
        {socialPrint ? <SocialPrint /> : <DefaultInstagram />}
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <MotionDivDownToUp>
            <SectionHeader
              className="text-center"
              miniTitle={content.texts.about.aboutSocial.miniTag}
              sectionHeaderTitle={content.texts.about.aboutSocial.title}
              sectionHeaderSubtitle={content.texts.about.aboutSocial.subtitle}
              color=""
              type="article"
              titleColorSet="text-white"
              subtitleColorSet="text-white"
            />
          </MotionDivDownToUp>
          <ParagraphsAboutSocial />

          <div className="flex flex-col gap-4">
            {instagram && <InstagramAbout />}

            {facebook && <FacebookAbout />}

            {x && <XAbout />}

            {linkedin && <LinkedInAbout />}
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
