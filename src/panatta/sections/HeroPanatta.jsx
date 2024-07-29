import React from "react";
import Logo from "../../assets/imgs/logo/Logotipo1.png";
import ImgHero from "../../assets/imgs/hero/Hero.png";
import "../../indexPanatta.css";
import RainElement from "../components/RainElement";
import Ball from "../../assets/imgs/hero/Bola.png";
import EffectBg from "../../assets/imgs/hero/EfeitoLuz.png";
import bgEffect from "../img/bg/bgEffect.png";

export default function HeroPanatta() {
  return (
    <div className="relative w-full">
      <RainElement />
      <img
        className=" absolute phone1:w-full phone1:mt-[40%] desktop1:inset-0 desktop1:m-auto desktop1:-mt-0"
        src={EffectBg}
        alt="Efeito Iluminação de fundo"
      />
      <img
        src={bgEffect}
        className="absolute phone1:bottom-[73%] desktop1:bottom-[68%] h-auto w-full"
        alt="efeito sobreposto"
      />

      <img
        className="absolute phone1:bottom-[70%] phone1:right-[20%] phone1:w-[60%] desktop1:right-[35%] desktop1:bottom-[75%] desktop1:h-auto desktop1:w-[30%] desktop2:right-[35%] desktop2:bottom-[65%] desktop2:h-auto desktop2:w-[30%] spin"
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
          className="phone1:mt-[350px] phone1:w-[300px] phone1:h-[200px] desktop1:mb-4 desktop1:mt-[500px] desktop1:w-[1085.58px] desktop1:h-[415.65px]"
          src={ImgHero}
          alt="Hero Panatta Cassino"
        />
        <div className="phone1:mt-[5%] border-2 border-[#ABFFC8] hover:scale-110 transition p-1">
          <button className="px-4 py-2 font-bold text-[#112313] bg-gradient-to-r from-[#2FFF76] to-[#0F652C] phone1:w-full phone1:text-[35px] desktop1:w-full desktop1:h-[120px] desktop1:text-[63px] font-[Antonio] border-2 border-[#ABFFC8]">
            RESGATE SEU BÔNUS
          </button>
        </div>
      </div>
    </div>
  );
}
