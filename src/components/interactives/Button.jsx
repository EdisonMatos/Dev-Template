import React from "react";
import CustomTag from "../util/CustomTag";

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
}) {
  if (size === "small") {
    sizeFeatures = "rounded-[10px] px-[18px] py-[10px]";
    textclassName = "text-paragraph4 font-secondFont";
    gap = "gap-[10px]";
  } else {
    sizeFeatures = "rounded-[15px] px-[30px] py-[16px]";
    textclassName = "text-paragraph4 font-secondFont";
    gap = "gap-[20px]";
  }

  return (
    <CustomTag
      tagName={tagName}
      {...(removeTarget ? {} : { target: "_blank" })}
      {...(removeAnchor ? {} : { href: buttonLink })}
      className=""
    >
      <button
        onClick={onClick}
        className={`flex ${className} ${sizeFeatures} flex-row items-center justify-around transition bg-primary hover:bg-secondary hover:text-primary text-secondary hover:border-solid border-[1px] border-primary hover:border-primary`}
      >
        <div className={`flex items-center text-center ${gap}`}>
          <div className="">{icon}</div>
          <p className={`flex items-center ${textclassName}`}>{label}</p>
        </div>
      </button>
    </CustomTag>
  );
}
