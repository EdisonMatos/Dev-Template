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
                  class="lucide lucide-plane"
                >
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
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
                  class="lucide lucide-ban"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m4.9 4.9 14.2 14.2" />
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
                  class="lucide lucide-book-x"
                >
                  <path d="m14.5 7-5 5" />
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                  <path d="m9.5 7 5 5" />
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
                  class="lucide lucide-baggage-claim"
                >
                  <path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" />
                  <path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" />
                  <rect width="13" height="8" x="8" y="6" rx="1" />
                  <circle cx="18" cy="20" r="2" />
                  <circle cx="9" cy="20" r="2" />
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
