import content from "../../content/content";

export default function AboutFading({ LightMode }) {
  return (
    <div
      className={`relative font-secondFont text-paragraph4 ${
        LightMode ? "text-black" : "white"
      }`}
    >
      {content.texts.about.paragraph}
      <div
        className={`bottom-0 absolute w-full h-[80px] bg-gradient-to-b from-transparent ${
          LightMode ? "to-white" : "to-bgSectionDark"
        }`}
      ></div>
    </div>
  );
}

