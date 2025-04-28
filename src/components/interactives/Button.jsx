import React from "react";
import CustomTag from "../util/CustomTag";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import { useWhatsAppLink } from "../util/WhatsAppLinkContext";
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
  color,
  animation = true,
  onClick, // Função onClick personalizada
  buttonLink, // Link para abrir ao clicar
}) {
  const { whatsappLink, setWhatsAppLink } = useWhatsAppLink();
  const navigate = useNavigate(); 

  if (size === "small") {
    sizeFeatures = "rounded-[4px] px-[18px] py-[10px]";
    textclassName = "text-paragraph3 font-secondFont";
    gap = "gap-[10px]";
  } else {
    sizeFeatures = "rounded-[8px] px-[30px] py-[16px]";
    textclassName = "text-paragraph4 font-secondFont";
    gap = "gap-[20px]";
  }

  const handleClick = () => {
    if (onClick) {
      onClick(); // Se tiver onClick, executa a ação personalizada
    } else if (buttonLink) {
      window.open(buttonLink, "_blank"); // Se tiver buttonLink, abre o link
    } else {
      setWhatsAppLink((prev) => !prev); // Alterna o estado
      if (whatsappLink) {
        navigate("/whatsapp"); // Navega para /whatsapp se whatsappLink for true
      } else {
        window.open("https://wa.me/5521972613067", "_blank"); // Link direto do WhatsApp
      }
    }
  };

  const CustomTagName = removeAnchor ? "div" : tagName || "button";

  return (
    <CustomTagName className="inline-block max-w-full w-fit">
      {animation ? (
        <div className="w-auto">
          <button
            onClick={handleClick}
            className={`flex ${className} ${sizeFeatures} flex-row items-center justify-around transition bg-primary ${color} text-white desktop1:hover:scale-110`}
          >
            <div className={`flex items-center text-center ${gap} min-h-[24px]`}>
              <div>{icon}</div>
              <p className={`flex items-center ${textclassName}`}>{label}</p>
            </div>
          </button>
        </div>
      ) : (
        <div className="w-auto">
          <button
            onClick={handleClick}
            className={`flex ${className} ${sizeFeatures} flex-row items-center justify-around transition ${color} text-white desktop1:hover:scale-110`}
          >
            <div className={`flex items-center text-center ${gap} min-h-[24px]`}>
              <div>{icon}</div>
              <p className={`flex items-center ${textclassName}`}>{label}</p>
            </div>
          </button>
        </div>
      )}
    </CustomTagName>
  );
}
