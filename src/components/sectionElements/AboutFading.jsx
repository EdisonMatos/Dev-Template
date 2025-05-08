import content from "../../content/content";

export default function AboutFading({ colorMode }) {
  return (
    <div
      className={`relative font-secondFont text-paragraph4 ${
        colorMode ? "text-black" : "white"
      }`}
    >
      {content.texts.about.paragraph}
      <div
        className={`bottom-0 absolute w-full h-[80px] bg-gradient-to-b from-transparent ${
          colorMode ? "to-white" : "to-bgSectionDark"
        }`}
      ></div>
    </div>
  );
}
