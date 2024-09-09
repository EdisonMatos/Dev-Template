import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";

export default function WhyUs({ className }) {
  return (
    <>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            miniTitle="Excelência em advocacia"
            className="text-center"
            sectionHeaderTitle="Por que nos escolher pra te defender?"
            color="dark"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-scale"
                >
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="M7 21h10" />
                  <path d="M12 3v18" />
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                </svg>
              }
              title="Consultoria personalizada para entender todos os aspectos do seu caso"
              description="Cada situação é única e merece uma abordagem sob medida. Nossa equipe analisa minuciosamente todos os aspectos de seu caso para desenvolver a melhor estratégia."
            />
            <FeatureCardLP
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-users"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
              title="Atendimento Personalizado"
              description="Entendemos que cada caso é único. Por isso, dedicamos atenção exclusiva a cada cliente, desenvolvendo planos de ação personalizados."
            />
            <FeatureCardLP
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chart-no-axes-combined"
                >
                  <path d="M12 16v5" />
                  <path d="M16 14v7" />
                  <path d="M20 10v11" />
                  <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
                  <path d="M4 18v3" />
                  <path d="M8 14v7" />
                </svg>
              }
              title="Dedicação e Persistência"
              description="O nosso atendimento trata cada caso com a sua devida peculiaridade, almejando resolver o litígio da melhor forma possível para o nosso cliente."
            />
            <FeatureCardLP
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-badge-check"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              }
              title="Tranquilidade e confiança ao lidar com seu caso"
              description="O Extravio ocorre quando sua bagagem é extraviada temporariamente, permanentemente ou é danificada. Existe a possibilidade de ressarcimento de caráter material, tanto dos valores gastos para suprir a ausência da mesma, como em substituição aos itens que estavam dentro das malas. O extravio enseja também indenização por dano moral."
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
