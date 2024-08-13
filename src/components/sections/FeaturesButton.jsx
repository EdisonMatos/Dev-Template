import { useState } from "react";
import FeatureImgOnBgCardButton from "../cards/FeatureImgOnBgCardButton";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function FeaturesButton() {
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubtitle, setModalSubtitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const onClick = (title, subtitle, content) => {
    setModalTitle(title);
    setModalSubtitle(subtitle);
    setModalContent(content);
    setVisible(true);
  };

  return (
    <div>
      <SectionArea
        id={"service"}
        className="py-[40px] tablet1:py-[64px] desktop1:py-[96px] desktop1:pb-[0px] bg-quinary squares"
      >
        <SectionHeader
          className="text-center"
          miniTitle={content.texts.features.miniTag}
          sectionHeaderTitle={content.texts.features.title}
          sectionHeaderSubtitle={content.texts.features.subtitle}
          color="dark"
        />
        <SectionWrapper>
          <div className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]">
            <FeatureImgOnBgCardButton
              bgImg={content.texts.features.card1.img}
              title={content.texts.features.card1.title}
              description={content.texts.features.card1.subtitle}
              buttonLabel={content.texts.features.card1.buttonLabel}
              onClick={() =>
                onClick(
                  <p>
                    Oferece uma formação prática e teórica sobre os princípios
                    contábeis e práticas financeiras essenciais para uma gestão
                    eficaz. Os participantes aprenderão a analisar balanços,
                    elaborar relatórios financeiros e desenvolver estratégias
                    para otimização de recursos, com foco na melhoria da saúde
                    financeira e no suporte à tomada de decisões gerenciais em
                    ambientes corporativos e empresariais.
                  </p>
                )
              }
            />
            <FeatureImgOnBgCardButton
              bgImg={content.texts.features.card2.img}
              title={content.texts.features.card2.title}
              description={content.texts.features.card2.subtitle}
              buttonLabel={content.texts.features.card2.buttonLabel}
              onClick={() =>
                onClick(
                  <p>
                    Torne-se um especialista em Recursos Humanos e Departamento
                    Pessoal! Aprenda sobre os direitos e deveres dos
                    funcionários de acordo com a CLT. Inscreva-se no nosso curso
                    para iniciantes e comece a sua jornada na área de RH e DP.
                    Venha conhecer mais sobre o nosso curso!
                  </p>
                )
              }
            />
            <FeatureImgOnBgCardButton
              bgImg={content.texts.features.card3.img}
              title={content.texts.features.card3.title}
              description={content.texts.features.card3.subtitle}
              buttonLabel={content.texts.features.card3.buttonLabel}
              onClick={() =>
                onClick(
                  <p>
                    Descubra como nossa consultoria pode ajudar você a gerenciar
                    DRE, balanço patrimonial, apuração de tributos, e muito
                    mais. Com nossa orientação, você estará pronto para otimizar
                    suas finanças e tomar decisões informadas para o crescimento
                    sustentável da sua empresa!
                  </p>
                )
              }
            />
            <FeatureImgOnBgCardButton
              bgImg={content.texts.features.card4.img}
              title={content.texts.features.card4.title}
              description={content.texts.features.card4.subtitle}
              buttonLabel={content.texts.features.card4.buttonLabel}
              onClick={() =>
                onClick(
                  <p>
                    CRONOGRAMA do curso de Demonstração do Resultado no
                    Exercício: <br />
                    - Conceito DRE <br />
                    - O que é e para que serve DRE - Conceito de Markup <br />
                    - O que é Markup? <br />
                    - O que é faturamento? <br />
                    - O que é receita? O que é lucro? <br />
                    - Planos de contas O que é plano de contas?
                    <br />
                    - Como estruturar o plano de contas? <br />
                    - Calcular DRE <br />
                    - Estrutura do DRE <br />
                    - Como fazer o DRE? <br />- Entender e calcular o DRE -
                    Saber interpretar o DRE
                  </p>
                )
              }
            />
          </div>
        </SectionWrapper>
      </SectionArea>
      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <h3>{modalSubtitle}</h3>
        <p className="m-0">{modalContent}</p>
      </Dialog>
    </div>
  );
}
