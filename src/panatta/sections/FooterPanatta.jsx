import jogueEGanhe from "../img/footer/jogueEGanhe.png";
import logoPanatta from "../img/footer/logoFooter.png";
import ButtonsFooter from "../components/ButtonsFooter";

export default function FooterPanatta() {
  return (
    <div className="relative w-[90%] max-w-[1198px] flex flex-col items-left justify-end font-[Inter] desktop1:h-[1024px]">
      <img
        src={jogueEGanhe}
        alt="Imagem ilustrativa de jogue e ganhe"
        className="relative right-[20px] desktop1:absolute desktop1:right-[-120px] desktop1:top-[0px] "
      ></img>
      <div className="flex justify-center desktop1:justify-start">
        <div className="w-[352px] flex flex-col justify-end ">
          <img
            src={logoPanatta}
            alt="Logo Panatta Casino"
            className="mb-[57px] w-[325px]"
          ></img>
          <h1 className="text-[45.5px] mb-[23px] w-[355px] font-black leading-[40px]">
            REDES SOCIAIS
          </h1>
          <div className="flex justify-between mb-[61px]">
            <ButtonsFooter label="Instagram" />
            <ButtonsFooter label="Whatsapp" />
          </div>
        </div>
      </div>
      <div className=" italic text-[15px] h-[86px] flex items-center w-full justify-center opacity-80">
        Copyright © 2024 - Todos os direitos reservados.
      </div>
    </div>
  );
}

// Paddings dos botões escolhidos pra serem simétricos
// Falta aumentar tamanho do tigre
