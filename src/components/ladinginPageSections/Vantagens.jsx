import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";

export default function Vantagens() {
  return (
    <SectionArea className="relative z-10 bg-white bg-opacity-100 ">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Vantagens"
        sectionHeaderSubtitle="Vantagens"
        textColor=""
      />
      <div className="text-black h-[800px]">
        Objetivo: Responder a pergunta: Porque fazer um site?
      </div>
    </SectionArea>
  );
}
