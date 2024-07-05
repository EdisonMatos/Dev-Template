import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";

export default function SeoInfo() {
  return (
    <div className="bg-black bg-opacity-50">
      <div class="custom-shape-divider-top-1720014813">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <SectionArea className="">
        <SectionHeader
          className="text-center "
          sectionHeaderTitle="Infos SEO"
          sectionHeaderSubtitle="Infos SEO"
          textColor="text-white [text-shadow:_2px_3px_0_rgb(0_0_0_/_50%)]"
        />
        <SectionWrapper>
          <div>
            Objetivo: Mostrar que nossos sites aparecem no google (usar Edan)
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
