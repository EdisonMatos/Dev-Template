import jogueEGanhe from "../img/footer/jogueEGanhe.png";
import logoPanatta from "../img/footer/logoFooter.png";
import ButtonsFooter from "../components/ButtonsFooter";

export default function FooterPanatta() {
  return (
    <div className="w-[90%] max-w-[1198px] flex flex-col items-center">
      <div className="flex">
        <div className="w-[352px] flex flex-col justify-end ">
          <img
            src={logoPanatta}
            alt="Logo Panatta Casino"
            className="mb-[57px]"
          ></img>
          <h1 className="text-[45.5px] font-bold mb-[23px]">REDES SOCIAIS</h1>
          <div className="flex gap-[21.2px] mb-[61px]">
            <ButtonsFooter label="Instagram" />
            <ButtonsFooter label="Whatsapp" />
          </div>
        </div>
        <div className=" relative">
          <img
            src={jogueEGanhe}
            alt="Imagem ilustrativa de jogue e ganhe"
            className="relative left-[102px] w-[1008px] h-[auto]"
          ></img>
        </div>
      </div>
      <div className=" italic text-[15px] h-[86px] flex items-center w-full justify-center">
        Copyright © 2024 - Todos os direitos reservados.
      </div>
    </div>
  );
}

// Paddings dos botões escolhidos pra serem simétricos
