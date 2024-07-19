import PropTypes from "prop-types";
import { Children } from "react";

export default function SectionArea({ children, className, id, topSectionArea = true, botSectionArea = true, paddingTopAndBottom }) {
  SectionArea.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    id: PropTypes.string,
    topSectionArea: PropTypes.bool,
    botSectionArea: PropTypes.bool,
    paddingTopAndBottom: PropTypes.bool,
  };

  if (paddingTopAndBottom === false) {
    topSectionArea = paddingTopAndBottom;
    botSectionArea = paddingTopAndBottom;
  }


  const childrenArray = Children.toArray(children); 
  const paddingTop = topSectionArea ? 'pt-[40px] tablet1:pt-[64px] desktop1:pt-[96px]' : ''; 
  const paddingBottom = botSectionArea ? 'pb-[40px] tablet1:pb-[64px] desktop1:pb-[96px]' : ''; 

  return (
    <div
      id={id}
      className={`w-full flex flex-col items-center ${paddingTop} ${paddingBottom} ${paddingTopAndBottom} ${className}`}
    >
      {childrenArray}
    </div>
  );
}
