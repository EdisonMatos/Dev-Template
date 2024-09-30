import PropTypes from "prop-types";
import { Children } from "react";

export default function SectionArea({
  children,
  className,
  id,
  paddingtop = true,
  paddingbot = true,
  paddingTopAndBottom,
  spaceShapeDiv,
}) {
  SectionArea.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    id: PropTypes.string,
    paddingtop: PropTypes.bool,
    paddingbot: PropTypes.bool,
    paddingTopAndBottom: PropTypes.bool,
    spaceShapeDiv: PropTypes.bool,
  };

  if (paddingTopAndBottom === false) {
    paddingtop = paddingTopAndBottom;
    paddingbot = paddingTopAndBottom;
  }

  const childrenArray = Children.toArray(children);
  const paddingTopp = paddingtop ? "pt-[64px] desktop1:pt-[96px]" : "";
  const paddingBottom = paddingbot ? "pb-[64px] desktop1:pb-[96px]" : "";

  // constante para renderizar espaço para shapeDiv
  const spaceShape = spaceShapeDiv
  ? "pt-[130px] phone3:pt-[120px] tablet2:pt-[120px] desktop1:pt-[125px] desktop2:pt-[130px]"
  : "";

  return (
    <div
      id={id}
      className={`w-full flex flex-col items-center ${spaceShape} ${paddingTopp} ${paddingBottom} ${paddingTopAndBottom} ${className}`}
    >
      {childrenArray}
    </div>
  );
}
