import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";

export default function FooterLP() {
  return (
    <div>
      <SectionArea paddingTopAndBottom={false}>
        <SectionWrapper>
          <div className="w-full text-center font-mainFont py-[36px] opacity-70">
            <p>
              © 2024 Ernest Bertola Advocacia. Todos os direitos reservados.
              <br />
              <br />
              Este site não é um produto Meta Platforms, Inc., Google LLC,
              tampouco oferece serviços públicos oficiais. Camila Crafig
              Advocacia oferece serviços jurídicos privativos de advogado, de
              acordo com a legislação vigente e o Código de Ética e Disciplina
              da Ordem dos Advogados do Brasil.
            </p>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
