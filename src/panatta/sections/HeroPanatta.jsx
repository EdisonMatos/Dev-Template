import Logo from '../../assets/imgs/logo/Logotipo1.png';
import ImgHero from '../../assets/imgs/hero/Hero.png';
import Ball from '../../assets/imgs/hero/Ball.png';

export default function HeroPanatta() {
  return (
    <div className="w-full">
    <div style={{ backgroundColor: '#2FFF76' }} className= "w-full h-[135px] absolute">
        <div style={{ backgroundColor: '#112313' }} className="h-[117px] flex items-center justify-center relative z-30">
          <img className='absolute' style={{ zIndex: -1 }} src={Ball} alt="Bola girando" />
          <img src={Logo} alt="Logotipo Panatta Cassino" />
        </div>
      </div>
      <div style={{ backgroundColor: '#13171B', height: '930.19px' }} className='flex flex-col justify-center items-center'>
        <img className='mb-4' src={ImgHero} alt="Hero Panatta Cassino" />
        <button
          style={{
            background: 'linear-gradient(to right, #abffc8, #112313)',
            color: '#112313',
            width: '558px',
            height: '120px',
            fontSize: '63px',
            fontFamily: 'Antonio',
          }}
          className='px-4 py-2 font-bold'>
          RESGATE SEU BÔNUS
        </button>
      </div>
    </div>
  );
}