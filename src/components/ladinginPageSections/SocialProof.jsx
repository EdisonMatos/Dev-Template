import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";

export default function SocialProof() {
  return (
    <div>
      <SectionArea className="bg-white bg-opacity-100">
        <SectionHeader
          className="text-center "
          sectionHeaderTitle="Social Proof"
          sectionHeaderSubtitle="Social Proof"
          textColor=""
        />
        <SectionWrapper>
          <div className="text-black">
            Objetivo: Mostrar depoimentos de clientes pra dar autoridade. Pedir
            vídeos a clientes e fazer prints
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
