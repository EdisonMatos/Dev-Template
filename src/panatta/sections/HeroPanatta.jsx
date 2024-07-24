import Logo from '../../assets/imgs/logo/Logotipo1.png';
import ImgHero from '../../assets/imgs/hero/Hero.png';
import Ball from '../../assets/imgs/hero/Ball.png';

export default function HeroPanatta() {
  return (
    <div className="w-full relative">
    <img
      className="absolute top-0 left-1/2 transform -translate-x-1/2"
      src={Ball}
      alt="Bola girando"
    />
    <div className="w-full h-[138px] absolute top-0 bg-[#2FFF76]">
      <div className="h-[117px] flex items-center justify-center relative top-[18px] bg-[#112313]">
        <img className="relative z-10" src={Logo} alt="Logotipo Panatta Cassino" />
      </div>
    </div>
    <div className="flex flex-col justify-center items-center bg-[#13171B]" style={{ height: '930.19px' }}>
      <img className="mb-4 mt-96" src={ImgHero} alt="Hero Panatta Cassino" />
      <button
        className="px-4 py-2 font-bold text-[#112313] bg-gradient-to-r from-[#2FFF76] to-[#0F652C] w-[558px] h-[120px] text-[63px] font-[Antonio] border-2 border-[#ABFFC8] overflow-hidden">
        RESGATE SEU BÔNUS
      </button>
    </div>
  </div>
  );
}