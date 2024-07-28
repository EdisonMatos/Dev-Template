import SectionHeader from "../components/SectionHeader";
import features1 from "../img/features/features1.png";
import features2 from "../img/features/features2.png";
import features3 from "../img/features/features3.png";
import features4 from "../img/features/features4.png";
import CardFeatures from "../components/CardFeatures";

export default function FeaturesPanatta() {
  return (
    <div className="w-[90%] max-w-[1198px] flex flex-col items-start">
      <div className=" flex flex-col desktop1:gap-[14px] desktop1:py-[36px] py-[50px]">
        <div className="flex flex-col text-right">
          <SectionHeader tag="Por que" title="ESCOLHER O PANATTA CASINO?" />
        </div>
        {/* <div className="bg-red-500 flex flex-col gap-[15px]">
          <div className="flex flex-row gap-[40px]">
            <div className="flex flex-col transition hover:scale-105">
              <h2 className="font-bold text-[40px] font-barlow">
                SAQUES{" "}
                <span className="text-[50px] text-[#2FFF76]">RÁPIDOS</span>
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

            <div className="transition bg-blue-500 hover:scale-105">
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
        </div> */}
        <div className="flex flex-wrap phone3:mt-[120px] desktop1:mt-0">
          <CardFeatures
            title={
              <h2>
                SORTEIOS{" "}
                <span className="text-[#2FFF76] text-[50px]">MENSAIS</span>
              </h2>
            }
            img={features1}
            alt="Foto de vários prêmios"
            position="top-[170px]"
            description="Receba seus ganhos em poucos minutos com nossos saques instantâneos"
          />
          <CardFeatures
            title={
              <h2>
                SEM{" "}
                <span className="text-[#2FFF76] text-[50px]">BUROCRACIAS</span>
              </h2>
            }
            img={features2}
            alt="Foto Sem Burocracias"
            position="bottom-[10px] desktop1:bottom-[40px]"
            description="Jogue e saque sem complicações"
          />
          <CardFeatures
            title={
              <h2>
                BÔNUS{" "}
                <span className="text-[#2FFF76] text-[50px]">EXCLUSIVOS</span>
              </h2>
            }
            img={features3}
            alt="Foto Oferta exclusivas"
            position="bottom-[70px]"
            description="Aproveite ofertas únicas e aumente suas chances de ganhar"
          />
          <CardFeatures
            title={
              <h2>
                SORTEIOS{" "}
                <span className="text-[#2FFF76] text-[50px]">MENSAIS</span>
              </h2>
            }
            img={features4}
            alt="Foto Sorteios Mensais"
            position="bottom-[-10px] right-[70px]"
            description="Participe dos sorteios mensais e concorra a prêmios incríveis"
          />
        </div>
      </div>
    </div>
  );
}
