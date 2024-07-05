import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";

export default function TecnicalInfo() {
  return (
    <SectionArea className="bg-black bg-opacity-50">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Infos Técnicas"
        sectionHeaderSubtitle="Infos Técnicas"
        textColor="text-white [text-shadow:_2px_3px_0_rgb(0_0_0_/_50%)]"
      />
      <SectionWrapper>
        <div>
          Objetivo: Mostrar perfomance e outros parâmetros com nota alta pelo
          Google, e, responder a pergunta: Por que fazer um site com a paper,
          especificamente, e não outros?
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
