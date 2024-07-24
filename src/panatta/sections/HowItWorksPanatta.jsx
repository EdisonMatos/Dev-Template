import CardHowItWorks from "../components/CardHowItWorks";
import SectionHeader from "../components/SectionHeader";
import bgCardEffect from "../img/howItWorks/bgCardEffect.png";

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
          <div
            className="rounded-[25px] bg-transparent hover:bg-[#091D0B] bg-no-repeat bg-right-bottom transition border-solid border-[3px] border-[#2FFF76] px-[16px] py-[12px] w-full"
            style={{
              backgroundImage: `url(${bgCardEffect})`,
            }}
          >
            <div className="flex items-center mb-[7px]">
              <h1 className="bg-[#2FFF76] px-[18px] py-[6px] rounded-[10px] text-[40px] font-black mr-[14px] leading-none text-[#112313] font-[Inter]">
                4
              </h1>
              <h1 className="text-[50px] leading-none font-bold">
                SOLICITE O BÔNUS
              </h1>
            </div>
            <p className="font-[Inter] text-[20px]">
              Envie-nos uma mensagem em nosso WhatsApp solicitando o seu bônus e
              em instantes será creditado na sua conta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Faltando mudar a font do título do card pra a Gothic
