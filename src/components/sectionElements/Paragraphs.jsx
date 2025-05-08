import PropTypes from "prop-types";
import { Children } from "react";

export default function Paragraphs({ children, className = "", colorMode }) {
  const childrenArray = Children.toArray(children);

  const textColors = {
    dark: "text-white",
    light: "text-black",
    default: "text-titleColor",
  };

  const textColor = textColors[colorMode] || textColors.default;

  return (
    <div className={`font-secondFont ${textColor} ${className}`}>
      {childrenArray}
    </div>
  );
}

Paragraphs.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  colorMode: PropTypes.oneOf(["dark", "light", "default"]),
};
