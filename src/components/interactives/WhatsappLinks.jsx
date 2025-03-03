import contentLp01 from "../../content/contentLp01";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import WhatsappForm from "./WhatsappForm";

export default function WhatsAppLinks() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-scroll bg-black bg-center bg-cover bg-opacity-70 desktop1:bg-fixed"
      style={{
        backgroundImage: `url(${contentLp01.cta.bgImg})`,
        backgroundRepeat: "",
      }}
    >
      <div className="flex items-center justify-center w-full h-screen bg-black bg-opacity-70">
        <div className="flex flex-col items-center p-4">
          <MotionDivDownToUp className="flex justify-center desktop1:justify-start">
            <img
              src={contentLp01.hero.logo.logoImg}
              alt={contentLp01.hero.logo.alt}
              className="mb-[60px] max-w-[280px] phone2:max-w-[320px] phone3:max-w-[270px]"
            />
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <h1 className="mb-6 text-xl font-semibold text-center text-white">
              Preencha o Formulário:
            </h1>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <WhatsappForm/>
          </MotionDivDownToUp>
          <footer className="">
            <MotionDivDownToUp>
              <button
                className="mt-12 bg-white text-[#000] font-bold px-8 py-2 rounded transition hover:scale-110"
                onClick={() => (window.location.href = "/")}
              >
                Voltar
              </button>
            </MotionDivDownToUp>
          </footer>
        </div>
      </div>
    </div>
  );
}