import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";

export default function Princing() {
  return (
    <SectionArea className="bg-white bg-opacity-100">
      <SectionHeader
        className="text-center "
        sectionHeaderTitle="Preços"
        sectionHeaderSubtitle="Preços"
        textColor=""
      />
      <SectionWrapper>
        <div className="text-black">
          Objetivo: Mostrar pacotes (site para seu negócio, site personalizado e
          pacote grs onde o site pode sair de graça (e já vender o grs))
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
