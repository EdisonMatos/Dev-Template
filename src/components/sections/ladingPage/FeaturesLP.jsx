import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";

export default function FeaturesLP({ className }) {
  return (
    <>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle="Serviços"
            sectionHeaderTitle="Como podemos te ajudar?"
            sectionHeaderSubtitle="Temos várias soluções jurídicas pra você"
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
                  class="lucide lucide-chart-column-big"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                  <rect x="15" y="5" width="4" height="12" rx="1" />
                  <rect x="7" y="8" width="4" height="9" rx="1" />
                </svg>
              }
              title="Atraso de Voo"
              description="Em casos de atraso ou espera por voo superior a 4 horas, fica a Companhia Aérea obrigada a fornecer alimentação, comunicação, transporte e caso necessário, hospedagem de forma gratuita. Existe a possibilidade de indenização por dano moral, pricipalmente se houver perda de compromisso profissional / social."
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
                  class="lucide lucide-chart-column-big"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                  <rect x="15" y="5" width="4" height="12" rx="1" />
                  <rect x="7" y="8" width="4" height="9" rx="1" />
                </svg>
              }
              title="Voo Cancelado"
              description="Quem teve o Voo Cancelado tem os mesmos direitos de quem teve seu Voo Atrasado. Havendo atraso superior a 4 horas, bem como problemas de perda de conexão, pernoite não programado e/ou transporte terrestre, existe a possibilidade de indenização por dano moral."
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
                  class="lucide lucide-chart-column-big"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                  <rect x="15" y="5" width="4" height="12" rx="1" />
                  <rect x="7" y="8" width="4" height="9" rx="1" />
                </svg>
              }
              title="Overbooking"
              description="Ocorre quando o embarque é negado pela falta de assentos na aeronave, sendo um passageiro preterido por outro. Muitas vezes o passageiro é realocado em outros voos, com alteração de itinerário ou com escala não programada. A prática é de uso frequente pelas linhas aéreas e enseja indenização por dano moral."
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
                  class="lucide lucide-chart-column-big"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                  <rect x="15" y="5" width="4" height="12" rx="1" />
                  <rect x="7" y="8" width="4" height="9" rx="1" />
                </svg>
              }
              title="Desvio de Bagagem"
              description="O Extravio ocorre quando sua bagagem é extraviada temporariamente, permanentemente ou é danificada. Existe a possibilidade de ressarcimento de caráter material, tanto dos valores gastos para suprir a ausência da mesma, como em substituição aos itens que estavam dentro das malas. O extravio enseja também indenização por dano moral."
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
