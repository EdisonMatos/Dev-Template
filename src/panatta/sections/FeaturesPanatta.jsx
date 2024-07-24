import imgcard1 from "../img/features/Card1.png";
import imgcard2 from "../img/features/Card2.png";
import imgcard3 from "../img/features/Card3.png";
import imgcard4 from "../img/features/Card4.png";

export default function FeaturesPanatta() {
  return (
    <div className="w-[90%] max-w-[1198px] flex flex-col items-start">
      <div className=" flex flex-col gap-[14px] py-[36px]">
        <div className="flex flex-col text-right h-[121px] w-[1036px]">
          <h6 className=" text-left text-[25px] text-white">Por que</h6>
          <h1 className=" text-left text-[60px] h-[97px] font-bold text-white">
            ESCOLHER O PANATTA CASINO?
          </h1>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-row gap-[40px]">
            <div className="flex flex-col">
              <h2 className="font-bold text-[25px] text-white">
                SAQUES{" "}
                <span className="text-[35px] text-[#2FFF76]">RAPIDOS</span>
              </h2>
              <img className="w-[415px]" src={imgcard1} alt="" />
              <h6 className="w-[400px] h-[48px] text-[20px] text-white">
                Receba seus ganhos em poucos minutos com nossos saques
                instantâneos
              </h6>
            </div>

            <div>
              <h2 className="font-bold text-[25px] ml-[7px] text-white">
                SEM{" "}
                <span className="text-[#2FFF76] text-[35px]">BUROCRACIAS</span>
              </h2>{" "}
              <img className="w-[415px]" src={imgcard2} alt="" />
              <h6 className="w-[400px] h-[48px] text-[20px] text-white ml-[5px]">
                Jogue e saque sem complicações
              </h6>
            </div>
          </div>
          <div className="flex flex-row gap-[30px]">
            <div>
              <h2 className="font-bold text-[25px] text-white">
                BÔNUS{" "}
                <span className="text-[#2FFF76] text-[35px]">EXCLUSIVOS</span>
              </h2>{" "}
              <img className="w-[370px]" src={imgcard3} alt="" />
              <h6 className="w-[400px] h-[48px] text-[20px] text-white">
                Aproveite ofertas únicas e aumente suas chances de ganhars
              </h6>
            </div>

            <div>
              <h2 className="font-bold text-[25px] ml-[35px] text-white">
                SORTEIOS{" "}
                <span className="text-[#2FFF76] text-[35px]">MENSAIS</span>
              </h2>{" "}
              <img className="w-[415px]" src={imgcard4} alt="" />
              <h6 className="w-[400px] h-[48px] text-[20px] ml-[35px] text-white">
                Participe dos sorteios mensais e concorra a prêmios incríveis
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
