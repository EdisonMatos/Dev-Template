import bgImg from "../assets/imgs/hero/bgHeroLp01.webp";
import logo from "../assets/imgs/logo/logoLp.png";
import { infos } from "./content";

const currentYear = new Date().getFullYear();

const contentLp02 = {
  infos: {
    title:
      "Barros e Braga - Defesa em Flagrante | Escritório Criminalista em Teresina - PI",
    description:
      "O Escritório de Advocacia Barros e Braga é especializado em defesa criminal em Teresina - PI. Atuamos com rapidez e estratégia em flagrante, audiência de custódia e liberdade provisória.",
    keywords:
      "Advogado Criminalista, Defesa em Flagrante, Audiência de Custódia, Liberdade Provisória, Fiança Criminal, Advogado Penal, Defesa Penal, Criminalista em Teresina, Advogado Especialista em Flagrante, Defesa de Acusados, Advocacia Criminal, Advogado para Prisão em Flagrante, Consultoria Criminal, Recurso Criminal, Habeas Corpus, Liberdade Assistida, Direito Penal, Defesa Jurídica Criminal, Prisão Preventiva, Assessoria Jurídica Criminalista.",
  },
  hero: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    textArea: {
      title: (
        <h1>
          Defenda-se
          <span className="text-primary"> com quem entende </span>
          do assunto
        </h1>
      ),
      subtitle:
        "Tenha orientação especializada para proteger seus direitos e garantir o melhor suporte em audiências de custódia.",
      buttonLabel: "Quero falar com um especialista",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "DEFESA IMEDIATA",
      title: "Como funciona a defesa em casos de flagrante?",
    },
    cards: {
      card1: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-scale"
          >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
          </svg>
        ),
        title: "Análise da legalidade da prisão",
        description:
          "Ao ser detido em flagrante, o primeiro passo é verificar se a prisão seguiu todos os procedimentos legais. Identificamos possíveis abusos ou falhas processuais e tomamos as medidas necessárias para anular a prisão e proteger seus direitos.",
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-speech"
          >
            <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" />
            <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" />
            <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" />
          </svg>
        ),
        title: "Atuação estratégica na audiência de custódia",
        description:
          "Na audiência de custódia, buscamos a melhor solução para o seu caso, trabalhando para garantir a liberdade imediata ou medidas alternativas. Defendemos seus direitos com firmeza para assegurar um tratamento justo.",
      },
      card3: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-book-check"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
            <path d="m9 9.5 2 2 4-4" />
          </svg>
        ),
        title: "Pedido de liberdade provisória ou fiança",
        description:
          "Após a prisão, avaliamos a possibilidade de solicitar liberdade provisória ou fiança, sempre considerando as particularidades do caso. Nossa prioridade é evitar detenções desnecessárias, garantindo seus direitos legais.",
      },
      card4: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-shield-check"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        ),
        title: "Recursos e defesa contínua",
        description:
          "Se a prisão for mantida, recorremos a instâncias superiores para reverter a decisão. Atuamos para assegurar que seus direitos sejam respeitados em todas as fases do processo, buscando sempre a justiça.",
      },
    },
  },
  about: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    sectionHeader: {
      miniTag: "EXCELÊNCIA EM DEFESA PENAL",
      title: "Compromisso e defesa estratégica",
    },
    paragraph: (
      <p>
        Em situações de flagrante, agir com rapidez e precisão é fundamental
        para resguardar seus direitos. Por isso, atuo com eficiência e
        estratégia, garantindo uma defesa sólida sem comprometer a qualidade e o
        compromisso com a justiça. Cada etapa do processo é conduzida com
        determinação para assegurar o melhor resultado. <br />
        <br /> Não importa a complexidade do seu caso, estamos prontos para
        oferecer a solução jurídica mais adequada. Fale com Barros e Braga e
        veja como podemos fazer a diferença na sua defesa.
      </p>
    ),
    buttonLabel: "Quero falar com um especialista",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A DEFESA CERTA",
      title: "Por que confiar em nossa defesa em casos de flagrante?",
    },
    cards: {
      card1: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-lightbulb"
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
        ),
        title: "Defesa estratégica e personalizada",
        description:
          "Cada caso de flagrante é único, e nossa abordagem também. Analisamos todos os detalhes para construir uma defesa personalizada, garantindo proteção total aos seus direitos em cada etapa do processo.",
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-handshake"
          >
            <path d="m11 17 2 2a1 1 0 1 0 3-3" />
            <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
            <path d="m21 3 1 11h-2" />
            <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
            <path d="M3 4h8" />
          </svg>
        ),
        title: "Compromisso inabalável com sua liberdade",
        description:
          "Defendemos sua liberdade com total dedicação, assegurando que seus direitos sejam respeitados do início ao fim do processo. Cuidamos de cada detalhe para alcançar o melhor desfecho para sua situação.",
      },
      card3: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-clock-4"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        ),
        title: "Soluções ágeis e eficientes para sua defesa",
        description:
          "Montamos um plano de ação sob medida para resolver seu caso com rapidez e eficiência. Nossa prioridade é garantir uma defesa sólida que atenda às suas necessidades e ofereça o melhor caminho jurídico.",
      },
      card4: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-siren"
          >
            <path d="M7 18v-6a5 5 0 1 1 10 0v6" />
            <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
            <path d="M21 12h1" />
            <path d="M18.5 4.5 18 5" />
            <path d="M2 12h1" />
            <path d="M12 2v1" />
            <path d="m4.929 4.929.707.707" />
            <path d="M12 12v6" />
          </svg>
        ),
        title: "Experiência e excelência na defesa penal",
        description:
          "Com ampla experiência em flagrantes e audiências de custódia, garantimos que seu caso será tratado com seriedade e competência. Estaremos ao seu lado em cada fase do processo, buscando sempre o melhor resultado.",
      },
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "NÃO PERCA TEMPO",
      title: "Agir rápido faz toda a diferença!",
      subtitle: `No Barros e Braga, sua defesa é nossa prioridade. Com atuação ágil e estratégica, garantimos a melhor orientação e representação para proteger seus direitos. Não deixe que a demora comprometa sua liberdade, conte com especialistas prontos para agir!`,
    },
    buttonLabel: "Quero falar com um especialista",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  contact: {
    card1: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      title: "Instagram",
      description: `@${infos.instagramProfile}`,
    },
    card2: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Email",
      description: `${infos.email}@${infos.domain}`,
    },
    card3: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
      title: "Whatsapp",
      description: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart} | (86) 99481-9000`,
    },
  },
  footer: {
    copyrightLine: `© ${currentYear} ${infos.name}. Todos os direitos reservados.`,
    disclaimer: `Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. ${infos.name} oferece serviços jurídicos privativos de advogado, de acordo com a legislação vigente e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.`,
  },
  links: {
    instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
    ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
  },
};

export default contentLp02;
