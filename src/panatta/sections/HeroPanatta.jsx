import Logo from "../../assets/imgs/logo/Logotipo1.png";
import ImgHero from "../../assets/imgs/hero/Hero.png";
import Ball from "../../assets/imgs/hero/Ball.png";
import EffectBg from "../../assets/imgs/hero/EfeitoLuz.png";

export default function HeroPanatta() {
  return (
    <div className="relative w-full">
      <img
        className="absolute inset-0 m-auto -mt-0"
        src={EffectBg}
        alt="Efeito Iluminação de fundo"
      />
      <img
        className="absolute top-0 transform -translate-x-1/2 left-1/2"
        src={Ball}
        alt="Bola girando"
      />
      <div className="w-full h-[138px] absolute top-0 bg-[#2FFF76]">
        <div className="h-[117px] flex items-center justify-center relative top-[18px] bg-[#112313]">
          <img
            className="relative z-10"
            src={Logo}
            alt="Logotipo Panatta Cassino"
          />
        </div>
      </div>
      <div className="mb-[112px] flex flex-col justify-center items-center">
        <img
          className="mb-4 mt-[399px] w-[1085.58px] h-[415.65px]"
          src={ImgHero}
          alt="Hero Panatta Cassino"
        />
        <div className="border-2 border-[#ABFFC8] hover:scale-110 transition p-1">
          <button className="px-4 py-2 font-bold text-[#112313] bg-gradient-to-r from-[#2FFF76] to-[#0F652C] w-[558px] h-[120px] text-[63px] font-[Antonio] border-2 border-[#ABFFC8]">
            RESGATE SEU BÔNUS
          </button>
        </div>
      </div>
    </div>
  );
}
