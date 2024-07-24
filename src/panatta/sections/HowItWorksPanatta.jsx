import CardHowItWorks from "../components/CardHowItWorks";
import SectionHeader from "../components/SectionHeader";

export default function HowItWorksPanatta() {
  return (
    <div className="w-[90%] max-w-[1198px] flex flex-col items-start pt-[73px] pb-[125px]">
      <div className="w-[1044px] flex flex-col items-start">
        <div className="flex flex-col mb-[112px]">
          <SectionHeader tag="Tutorial" title="COMO RECEBER O BÔNUS?" />
        </div>
        <div className="containerDeCards flex flex-col w-full gap-[50px]">
          <CardHowItWorks
            title="ABRA SUA CONTA"
            number="1"
            description={
              <p>
                <span className="font-bold">Fácil, instantâneo</span> e sem{" "}
                <span className="font-bold">burocracias</span>
              </p>
            }
          />
          <CardHowItWorks
            title="ACEITE O BÔNUS"
            number="2"
            description={
              <p>
                Aproveite a <span className="font-bold">promoção</span>
              </p>
            }
          />
          <CardHowItWorks
            title="FAÇA UM DEPÓSITO"
            number="3"
            description={
              <p>
                Depósito mínimo de <span className="font-bold">R$ 10,00</span>
              </p>
            }
          />
          <CardHowItWorks
            title="SOLICITE O BÔNUS"
            number="4"
            description={
              <p>
                <span className="font-bold">
                  Envie-nos uma mensagem em nosso WhatsApp solicitando o seu
                  bônus e em instantes será creditado na sua conta.
                </span>
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
}

// Faltando mudar a font do título do card pra a Gothic
