export default function SectionHeader(props) {
  const sectionHeaderTitle = props.sectionHeaderTitle;
  const sectionHeaderSubtitle = props.sectionHeaderSubtitle;
  const className = props.className;
  const titleColor = props.titleColor;
  const subtitleColor = props.subtitleColor;
  const miniTitle = props.miniTitle;
  const color = props.color;
  const miniTitleBgColor = props.miniTitleBgColor;
  const miniTitleTextColor = props.miniTitleTextColor;

  if (color === "dark") {
    miniTitleBgColor === "bg-[#682121]";
    miniTitleTextColor === "bg-primary";
  } else {
  }

  return (
    <div
      className={`w-[90%] tablet1:w-[80%] desktop1:w-[60%] max-w-[920px] ${className}`}
    >
      <div
        className={`py-[4px] font-semibold px-[8px] text-paragraph2 rounded-2xl inline-block bg-opacity-10 mb-[16px] ${miniTitleBgColor}`}
      >
        <p className={`${miniTitleTextColor}`}>{miniTitle}</p>
      </div>
      <h1
        className={`${titleColor} text-black text-title4 leading-[34px] tablet1:leading-[42px] tablet1:text-title5 font-mainFont font-bold mb-[16px]`}
      >
        {sectionHeaderTitle}
      </h1>
      <p
        className={`text-quaternary opacity-70 mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px] text-title1 font-secondFont ${subtitleColor}`}
      >
        {sectionHeaderSubtitle}
      </p>
    </div>
  );
}
