import React from "react";
import CustomTag from "../util/CustomTag";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import { useWhatsAppLink } from "../util/WhatsAppLinkContext"; // 👈 importa o contexto
import content from "../../content/content";
import { useNavigate } from "react-router-dom";


export default function Button({
  icon,
  label,
  className,
  textclassName,
  size,
  sizeFeatures,
  gap,
  removeTarget,
  removeAnchor,
  tagName,
  color = "bg-[#A41215]",
  animation = true,
}) {
  const whatsappLink = useWhatsAppLink();
  const navigate = useNavigate(); // 👈 hook de navegação

  // Aplica os tamanhos com base no size
  if (size === "small") {
    sizeFeatures = "rounded-[4px] px-[18px] py-[10px]";
    textclassName = "text-paragraph3 font-secondFont";
    gap = "gap-[10px]";
  } else {
    sizeFeatures = "rounded-[8px] px-[30px] py-[16px]";
    textclassName = "text-paragraph4 font-secondFont";
    gap = "gap-[20px]";
  }

  const Animation = animation ? MotionDivDownToUp : "div";
  const CustomTagName = removeAnchor ? "div" : tagName || "button";

  // 👉 handler de clique único baseado no valor
  const handleClick = () => {
    if (whatsappLink) {
      navigate("/whatsapp");
    } else {
      window.open(content.texts.links.ctaWhatsapp, "_blank");    }
  };

  return (
    <CustomTag
      tagName={CustomTagName}
      className="inline-block max-w-full w-fit"
    >
      {animation ? (
        <MotionDivDownToUp className="w-auto">
          <button
            onClick={handleClick}
            className={`flex ${className} ${sizeFeatures} flex-row items-center justify-around transition ${color} text-white desktop1:hover:scale-110`}
          >
            <div
              className={`flex items-center text-center ${gap} min-h-[24px]`}
            >
              <div>{icon}</div>
              <p className={`flex items-center ${textclassName}`}>{label}</p>
            </div>
          </button>
        </MotionDivDownToUp>
      ) : (
        <div className="w-auto">
          <button
            onClick={handleClick}
            className={`flex ${className} ${sizeFeatures} flex-row items-center justify-around transition ${color} text-white desktop1:hover:scale-110`}
          >
            <div
              className={`flex items-center text-center ${gap} min-h-[24px]`}
            >
              <div>{icon}</div>
              <p className={`flex items-center ${textclassName}`}>{label}</p>
            </div>
          </button>
        </div>
      )}
    </CustomTag>
  );
}
