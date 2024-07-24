import imgcard1 from "../img/features/Card1.png";
import imgcard2 from "../img/features/Card2.png";
import imgcard3 from "../img/features/Card3.png";
import imgcard4 from "../img/features/Card4.png";
import SectionHeader from "../components/SectionHeader";

export default function FeaturesPanatta() {
  return (
    <div className="w-[90%] max-w-[1198px] flex flex-col items-start">
      <div className=" flex flex-col gap-[14px] py-[36px]">
        <div className="flex flex-col text-right h-[121px] w-[1036px]">
          <SectionHeader tag="Por que" title="ESCOLHER O PANATTA CASINO?" />
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-row gap-[40px]">
            <div className="flex flex-col transition hover:scale-105">
              <h2 className="font-bold text-[40px] font-barlow">
                SAQUES{" "}
                <span className="text-[50px] text-[#2FFF76]">RAPIDOS</span>
              </h2>
              <img className="w-[415px]" src={imgcard1} alt="" />
              <h6 className="w-[400px] h-[48px] text-[20px] font-[Inter] font-bold mt-[11px]">
                Receba seus ganhos em poucos minutos com nossos saques
                instantâneos
              </h6>
            </div>

            <div className="transition hover:scale-105">
              <h2 className="font-bold text-[40px] font-barlow ml-[7px] ">
                SEM{" "}
                <span className="text-[#2FFF76] text-[50px]">BUROCRACIAS</span>
              </h2>{" "}
              <img className="w-[415px]" src={imgcard2} alt="" />
              <h6 className="w-[400px] h-[48px] text-[20px]  ml-[5px] font-[Inter] font-bold mt-[11px]">
                Jogue e saque sem complicações
              </h6>
            </div>
          </div>
          <div className="flex flex-row gap-[30px]">
            <div className="transition hover:scale-105">
              <h2 className="font-bold text-[40px] font-barlow ">
                BÔNUS{" "}
                <span className="text-[#2FFF76] text-[50px]">EXCLUSIVOS</span>
              </h2>{" "}
              <img className="w-[370px]" src={imgcard3} alt="" />
              <h6 className="w-[400px] h-[48px] text-[20px] font-[Inter] font-bold mt-[11px]">
                Aproveite ofertas únicas e aumente suas chances de ganhars
              </h6>
            </div>

            <div className="transition hover:scale-105">
              <h2 className="font-bold text-[40px] font-barlow ml-[35px] ">
                SORTEIOS{" "}
                <span className="text-[#2FFF76] text-[50px]">MENSAIS</span>
              </h2>{" "}
              <img className="w-[415px]" src={imgcard4} alt="" />
              <h6 className="w-[400px] h-[48px] text-[20px] ml-[35px] font-[Inter] font-bold mt-[11px] ">
                Participe dos sorteios mensais e concorra a prêmios incríveis
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
