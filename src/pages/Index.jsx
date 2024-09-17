import bgHeroImg from "../assets/imgs/hero/bgHero.jpg";
import SectionArea from "../components/sectionElements/SectionArea";
import SectionWrapper from "../components/sectionElements/SectionWrapper";
import imgLogoFiesta from "../assets/imgs/logo/logoFiesta.png";
import imgButtonFiesta from "../assets/imgs/hero/buttonFiesta.png";

export default function Index() {
  return (
    <div
      className="bg-cover h-screen w-screen"
      style={{ backgroundImage: `url(${bgHeroImg})` }}
    >
      <SectionArea className=" h-screen flex items-center justify-center">
        <SectionWrapper className="bg-green-500 relative">
          <div className="logoAndButtonArea bg-yellow-800 w-[60%] flex-col items-center justify-center my-[40px]">
            <div className="mb-[20px]">
              <img src={imgLogoFiesta} alt="Logo Cash Fiesta" />
            </div>
            <div className="bg-green-800 flex items-center">
              <a href="#" className="bg-red-500 flex justify-center">
                <img
                  src={imgButtonFiesta}
                  alt="Logo Button Fiesta"
                  className="w-[50%] hover:scale-110 transition"
                />
              </a>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
