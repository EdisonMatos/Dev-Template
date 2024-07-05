import links from "../../content/links";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import content from "../../content/content";
import bgHeroImg from "../../landingPage/hero/bgHero.webp";
import Button from "../interactives/Button";
import ScrollDownIndicator from "../sectionElements/ScrollDownIndicator";
import "../../styles/divShapeWavesOpacity.css";
import mascoteImg from "../../landingPage/hero/mascote.png";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

export default function HeroBgCenter() {
  return (
    <div
      className="w-full bg-center bg-no-repeat bg-cover font-mainFont"
      // style={{ backgroundImage: `url(${bgHeroImg})` }}
      id="home"
    >
      <div className="flex items-center w-full bg-black bg-opacity-0">
        <div className="w-full text-secondary justify-evenly ">
          <div className="" />
          <div className="flex h-[1000px] desktop1:h-auto phone1:flex-col desktop1:flex-row mx-auto pt-[80px] tablet1:pt-[64px] desktop1:ptq-[96px] w-[90%] max-w-[1215px] items-center gap-[20px] tablet2:gap-14 desktop3:gap-20">
            <div className="flex flex-wrap items-center justify-center w-full desktop1:flex-nowrap desktop1:justify-between">
              <div className="desktop1:w-[100%] ">
                <MotionDivLeftToRight>
                  <div className="text-secondary flex justify-center desktop1:text-left font-bold leading-[46px] phone3:leading-[46px] tablet1:leading-[60px] desktop1:leading-[110px] text-center text-title6 desktop1:text-[72px]">
                    <h1 className="pb-[16px]">
                      {/* <h1 className="leading-[0px] opacity-10">SITES</h1> */}
                      <h2 className="leading-[55px] desktop1:leading-[80px] ">
                        Em pleno 2024 e seu negócio ainda não tem um
                        {/* <br className="hidden tablet1:block desktop1:hidden" /> */}
                        <span className="text-yellow-400"> site</span>?
                      </h2>
                    </h1>
                  </div>
                </MotionDivLeftToRight>
                <MotionDivLeftToRight>
                  <div className="flex justify-center text-center desktop1:text-left phone1:w-full font-secondFont text-paragraph4 phone3:text-paragraph5">
                    <p className="text-secondary pb-[54px] w-full">
                      Empresas que têm site vendem 23% mais, segundo a revista
                      Forbes. <br />
                      Você está literalmente deixando de ganhar dinheiro.
                    </p>
                  </div>
                </MotionDivLeftToRight>
                <div className="mb-[20px]">
                  <ScrollDownIndicator />
                </div>
                {/* <div className="w-auto">
                  <MotionDivLeftToRight>
                    <div className="flex justify-center w-full desktop1:justify-start mb-[40px] desktop1:mb-[0px]">
                      <Button
                        label="Fale com a gente agora mesmo"
                        buttonLink={whatsappContactLink}
                        textclassName="text-black"
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="black"
                            className="bi bi-whatsapp"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                          </svg>
                        }
                      />
                    </div>
                  </MotionDivLeftToRight>
                </div> */}
              </div>
              <MotionDivLeftToRight className=" desktop1:w-[40%] flex justify-start">
                <img
                  src={mascoteImg}
                  alt="Mascote Paper Street"
                  className="w-[100%] desktop1:w-auto desktop1:max-h-[450px] "
                ></img>
                {/* <div className="mb-[0px] desktop1:mb-0 flex justify-center">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/FXqX7oof0I4?si=HRw-YMrG3i8weUnx"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div> */}
              </MotionDivLeftToRight>
            </div>
          </div>
          <div className="">
            <div class="custom-shape-divider-bottom-1720015327">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
