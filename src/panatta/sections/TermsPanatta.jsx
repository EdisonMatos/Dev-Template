import CardTerms from "../components/CardTems";

export default function TermsPanatta() {
  return (
    <div className="w-[90%] max-w-[1198px] flex flex-col items-center">
      <div className="desktop1:pt-[157px] py-[50px] desktop1:pb-[180px] flex flex-col items-center">
        <div className="flex items-center justify-center header mb-[16px] w-full">
          <div className="hidden phone3:flex flex-grow border-t border-white border-solid border-[3px]"></div>
          <h1 className="mx-[20px] tablet1:mx-[48px] text-[28px] tablet1:text-[45px] font-[Anaheim] text-center">
            Termos e condições
          </h1>
          <div className="hidden phone3:flex flex-grow border-t border-white border-solid border-[3px]"></div>
        </div>

        <div className="border-[1px] border-solid bg-[#13171B] border-[#2FFF76] rounded-[14px] pt-[32px] pb-[6px] tablet1:pt-[64px] tablet1:pb-[32px] font-[Inter]">
          <CardTerms
            title="Regras e disposições"
            paragraph="O bônus será creditado em sua conta caso você perca o valor integral do primeiro depósito. Para realizar o saque, é necessário cumprir o requisito de rollover de uma vez o valor do bônus e realizar, no mínimo, 100
jogadas em um ou mais dos jogos listados abaixo."
          />
          <CardTerms
            title="Jogos elegíveis para o bônus"
            paragraph="O valor do bônus pode ser utilizado nos seguintes jogos: Fortune Tiger, Fortune Dragon, Fortune Rabbit, Fortune Ox, Fortune Mouse, Jungle Delight, Double Fortune, Cash Mania, Bikini Paradise, Ganesha Fortune, Dragon Hatch, Wild Ape#3258 e Pinata Wins."
          />
          <CardTerms
            title="Condições de cancelamento"
            paragraph="Caso os termos e condições não sejam respeitados, o valor do bônus, bem como todos os ganhos obtidos com ele, serão anulados."
          />
        </div>
      </div>
    </div>
  );
}
