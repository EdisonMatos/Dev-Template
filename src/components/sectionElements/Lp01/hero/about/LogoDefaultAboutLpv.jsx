import React from "react";
import content from "../../../../../content/content";
import MotionDivDownToUp from "../../../../animation/MotionDivDownToUp";

function LogoDefaultAboutLpv() {
  return (
    <MotionDivDownToUp className=" w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-start">
      <img
        src={content.texts.about.imagem.img}
        alt={content.texts.about.imagem.alt}
        className="shadow-custom-opacity shadow-secondary/25 relative bg-center bg-no-repeat bg-cover h-auto w-[90%] tablet1:w-full rounded-xl"
      />
    </MotionDivDownToUp>
  );
}

export default LogoDefaultAboutLpv;
