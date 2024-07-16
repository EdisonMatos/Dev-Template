import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import PropTypes from "prop-types";
import SectionTitles from "./SectionTitles";
import SectionSubtitles from "./SectionSubtitles";

export default function SectionHeader(props) {
  const sectionHeaderTitle = props.sectionHeaderTitle;
  const sectionHeaderSubtitle = props.sectionHeaderSubtitle;
  const className = props.className;
  const titleColor = props.titleColor;
  const subtitleColor = props.subtitleColor;
  const miniTitle = props.miniTitle;

  SectionHeader.propTypes = {
    sectionHeaderTitle: PropTypes.any,
    sectionHeaderSubtitle: PropTypes.any,
    className: PropTypes.any,
  };

  return (
    <div
      className={`w-[90%] tablet1:w-[80%] desktop1:w-[60%] max-w-[920px] ${className}`}
    >
      <button className="py-[4px] font-semibold px-[8px] text-paragraph2 rounded-2xl bg-[#682121] bg-opacity-10 mb-[16px]">
        {miniTitle}
      </button>
      <h1
        className={`${titleColor} text-black text-title4 leading-[34px] tablet1:leading-[42px] tablet1:text-title5 font-mainFont font-bold mb-[16px]`}
      >
        {sectionHeaderTitle}
      </h1>
      <p
        className={`text-quaternary mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px] text-title1 font-secondFont ${subtitleColor}`}
      >
        {sectionHeaderSubtitle}
      </p>
    </div>
  );
}
