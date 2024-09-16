import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../animation/MotionDivDownToUp";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import Button from "../../interactives/Button";
import LpContent from "../../../content/LpContent";
import ImgTexto from "../../../assets/imgs/hero/CASH-FIESTA_TXT.png";
import ImgButton from "../../../assets/imgs/hero/CASH-FIESTA_botao.png";
import ImgBalao1 from "../../../assets/imgs/hero/CASH-FIESTA_BALAO.png";
import ImgBolinhaRosa from "../../../assets/imgs/hero/CASH-FIESTA_BOLINHA1.png";
import ImgBolinhaAzul from "../../../assets/imgs/hero/CASH-FIESTA_BOLINHA2.png";
import ImgBolinho from "../../../assets/imgs/hero/CASH-FIESTA_BOLINHO.png";
import ImgChapeuzinho from "../../../assets/imgs/hero/CASH-FIESTA_CHAPEU.png";
import ImgFogos from "../../../assets/imgs/hero/CASH-FIESTA_FOGOS.png";
import ImgPresente from "../../../assets/imgs/hero/CASH-FIESTA_PRESENTE.png";
import ImgMascaras from "../../../assets/imgs/hero/CASH-FIESTA_MASCARAS.png";

export default function HeroLP() {
  return (
    <div
      className="w-full bg-top bg-no-repeat bg-cover font-mainFont"
      style={{
        backgroundImage: `url(${LpContent.hero.bgImg})`,
      }}
    >
      <SectionArea paddingTopAndBottom={false} className="">
        <SectionWrapper className="flex w-full justify-center">
          <div className="flex flex-col w-full h-screen justify-center items-center">
            <div className="phone1:w-[70%] phone3:w-[75%] tablet1:w-[70%] desktop1:w-[55%] flex justify-center desktop3:w-[40%]">
              <img src={ImgTexto} alt="imagem de texto" className="flex z-10" />
            </div>

            <div className="phone1:mt-3 tablet1:mt-4 desktop1:mt-2 desktop3:mt-8 flex justify-center">
              <img
                src={ImgButton}
                alt=""
                className="phone1:w-[30%] tablet1:w-[40%] tablet2:mt-4 desktop1:w-[45%] relative top-0 desktop3:w-[50%]"
              />
            </div>
          </div>
        </SectionWrapper>
        <div>
          <img
            src={ImgBalao1}
            alt=""
            className="phone1:w-[30%] phone1:top-[295px] phone1:left-[5px] phone2:top-[281px] phone3:top-[272px] phone3:left-[2px] tablet1:w-[30%] tablet1:top-[220px] tablet1:left-[10px] tablet2:top-[188px] desktop1:w-[23%] desktop1:top-[185px] desktop1:left-[125px] desktop3:w-[17%] absolute desktop3:top-[165px] desktop3:left-[325px]"
          />
        </div>

        <div>
          <img
            src={ImgChapeuzinho}
            alt=""
            className="phone1:w-[7%] phone1:top-[288px] phone1:left-[135px] phone2:top-[275px] phone2:left-[157px] phone3:top-[258px] phone3:left-[177px] tablet1:w-[8%] tablet1:top-[200px] tablet1:left-[262px] tablet2:top-[165px] tablet2:left-[320px] desktop1:w-[7%] desktop1:top-[153px] desktop1:left-[440px] desktop1:rotate-6 desktop3:w-[5%] absolute desktop3:top-[136px] desktop3:left-[650px] z-20"
          />
        </div>

        <div>
          <img
            src={ImgBolinhaAzul}
            alt=""
            className="phone1:w-[6%] phone1:bottom-[320px] phone1:right-[60px] phone2:w-[7%] phone2:bottom-[310px] phone2:right-[70px] phone3:bottom-[295px] tablet1:w-[7%] tablet1:bottom-[240px] tablet1:right-[120px] tablet2:bottom-[220px] tablet2:right-[150px] desktop1:w-[5%] desktop1:bottom-[220px] desktop1:right-[275px] desktop3:w-[4%] absolute desktop3:bottom-[205px] desktop3:right-[460px]"
          />
        </div>

        <div>
          <img
            src={ImgBolinhaRosa}
            alt=""
            className="phone1:w-[6%] phone1:bottom-[295px] phone1:right-[80px] phone2:w-[7%] phone2:bottom-[275px] phone2:right-[90px] phone3:bottom-[255px] phone3:right-[95px] tablet1:w-[7%] tablet1:bottom-[200px] tablet1:right-[167px] tablet2:bottom-[160px] tablet2:right-[200px] desktop1:w-[5%] desktop1:bottom-[170px] desktop1:right-[330px] desktop3:w-[4%] absolute desktop3:bottom-[155px] desktop3:right-[520px]"
          />
        </div>

        <div>
          <img
            src={ImgPresente}
            alt=""
            className="phone1:w-[9%] phone1:bottom-[305px] phone1:right-[25px] phone2:w-[9%] phone2:bottom-[305px] phone3:w-[10%] phone3:bottom-[290px] phone3:right-[20px] tablet1:w-[12%] tablet1:bottom-[200px] tablet1:right-[40px] tablet2:w-[13%] tablet2:bottom-[190px] tablet2:right-[30px] desktop1:w-[9%] desktop1:bottom-[180px] desktop1:right-[160px] desktop3:w-[7%] absolute desktop3:bottom-[160px] desktop3:right-[330px]"
          />
        </div>

        <div>
          <img
            src={ImgBolinho}
            alt=""
            className="phone1:w-[10%] phone1:bottom-[290px] phone1:left-[50px] phone2:left-[60px] phone3:w-[12%] phone3:bottom-[260px] tablet1:w-[12%] tablet1:bottom-[195px] tablet1:left-[100px] tablet2:w-[14%] tablet2:bottom-[150px] tablet2:left-[115px] desktop1:w-[9%] desktop1:bottom-[170px] desktop1:left-[260px] desktop3:w-[7%] absolute desktop3:bottom-[165px] desktop3:left-[440px] -rotate-12 z-20"
          />
        </div>

        <div>
          <img
            src={ImgFogos}
            alt=""
            className="phone1:w-[13%] phone1:bottom-[300px] phone1:left-[15px] phone2:left-[20px] phone3:bottom-[280px] phone3:left-[15px] tablet1:w-[16%] tablet1:bottom-[210px] tablet1:left-[10px] tablet2:w-[15%] tablet2:bottom-[180px] tablet2:left-[15px] desktop1:w-[9%] desktop1:bottom-[200px] desktop1:left-[180px] desktop3:w-[9%] absolute desktop3:bottom-[190px] desktop3:left-[330px]"
          />
        </div>
        
        <div>
          <img src={ImgMascaras} alt="" className="z-10 phone1:w-[25%] phone1:top-[305px] phone1:right-[5px] phone2:top-[295px] phone3:top-[284px] phone3:right-[2px] tablet1:w-[25%] tablet1:top-[240px] tablet1:right-[10px] tablet2:top-[215px] desktop1:w-[23%] desktop1:top-[205px] desktop1:right-[80px] desktop3:w-[17%] absolute desktop3:top-[185px] desktop3:right-[280px]" />
        </div>
      </SectionArea>
    </div>
  );
}
