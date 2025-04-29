import React from "react";
import CustomTag from "../util/CustomTag";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import { getWhatsappLink } from "../util/WhatsappLink"; // Importando a função

export default function Button({
  icon,
  label,
  onClick,
  buttonLink,
  className,
  textclassName,
  size,
  sizeFeatures,
  gap,
  removeTarget,
  removeAnchor,
  tagName,
  color,
  animation = true,
}) {
  // Define estilos com base no tamanho
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
  const CustomTagName = removeAnchor ? "div" : tagName || "a";

  // Define link final baseado na lógica global
  const shouldRedirectToWhatsapp = !buttonLink && !onClick;
  const finalButtonLink = shouldRedirectToWhatsapp
    ? getWhatsappLink() // Agora usa a função importada
    : buttonLink;

  return (
    <CustomTag
      tagName={CustomTagName}
      {...(removeTarget ? {} : { target: "_blank" })}
      {...(removeAnchor ? {} : { href: finalButtonLink })}
      className="inline-block max-w-full w-fit"
    >
      {animation ? (
        <MotionDivDownToUp className="w-auto">
          <button
            onClick={onClick}
            className={`flex ${className} ${sizeFeatures} bg-primary flex-row items-center justify-around transition ${color} text-secondary desktop1:hover:scale-110`}
          >
            <div
              className={`flex items-center text-center ${gap} min-h-[24px]`}
            >
              <div className="">{icon}</div>
              <p className={`flex items-center ${textclassName}`}>{label}</p>
            </div>
          </button>
        </MotionDivDownToUp>
      ) : (
        <div className="w-auto">
          <button
            onClick={onClick}
            className={`flex ${className} ${sizeFeatures} bg-primary flex-row items-center justify-around transition ${color} text-secondary desktop1:hover:scale-110`}
          >
            <div
              className={`flex items-center text-center ${gap} min-h-[24px]`}
            >
              <div className="">{icon}</div>
              <p className={`flex items-center ${textclassName}`}>{label}</p>
            </div>
          </button>
        </div>
      )}
    </CustomTag>
  );
}
