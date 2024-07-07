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

  SectionHeader.propTypes = {
    sectionHeaderTitle: PropTypes.any,
    sectionHeaderSubtitle: PropTypes.any,
    className: PropTypes.any,
  };

  return (
    <div
      className={`w-[90%] tablet1:w-[80%] desktop1:w-[60%] max-w-[729px] ${className}`}
    >
      <SectionTitles className={titleColor}>
        <MotionDivDownToUp>{sectionHeaderTitle}</MotionDivDownToUp>
      </SectionTitles>
      <SectionSubtitles className={subtitleColor}>
        <MotionDivDownToUp>{sectionHeaderSubtitle}</MotionDivDownToUp>
      </SectionSubtitles>
    </div>
  );
}
