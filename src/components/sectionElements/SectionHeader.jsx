export default function SectionHeader({
  sectionHeaderTitle,
  sectionHeaderSubtitle,
  className,
  titleColor,
  subtitleColor,
  miniTitle,
  color,
  miniTitleBgColor,
  miniTitleTextColor,
}) {
  if (color === "dark") {
    miniTitleBgColor = "bg-primary bg-opacity-10";
    miniTitleTextColor = "text-primary";
    titleColor = "text-secondary";
    subtitleColor = "text-darker opacity-50";
  } else {
    miniTitleBgColor = "bg-darker bg-opacity-40";
    miniTitleTextColor = "text-lighter";
    titleColor = "text-lighter";
    subtitleColor = "text-lighter text-opacity-80";
  }

  return (
    <div
      className={`w-[90%] tablet1:w-[80%] desktop1:w-[60%] max-w-[920px] ${className}`}
    >
      <div
        className={`py-[4px] font-semibold px-[12px] text-paragraph2 rounded-2xl inline-block mb-[16px] ${miniTitleBgColor}`}
      >
        <p className={`${miniTitleTextColor}`}>{miniTitle}</p>
      </div>
      <h1
        className={`${titleColor}  text-title4 leading-[34px] tablet1:leading-[42px] tablet1:text-title5 font-mainFont font-bold mb-[16px]`}
      >
        {sectionHeaderTitle}
      </h1>
      <p
        className={` mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px] text-title1 font-secondFont ${subtitleColor}`}
      >
        {sectionHeaderSubtitle}
      </p>
    </div>
  );
}
