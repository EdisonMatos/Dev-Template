import bgImg from "../assets/imgs/hero/bgHero.jpg";
import logo from "../assets/imgs/logo/logo.png";

const currentYear = new Date().getFullYear();

const infos = {
  name: "Dr Exemplo",
};

const LpContent = {
  infos: {
    name: "A Definir",
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
          O <span className="text-primary">voo atrasou</span>, foi cancelado ou
          você teve <span className="text-primary">extravio de bagagem</span>?
        </h1>
      ),
      subtitle:
        "Você pode receber indenização por esse transtorno. Somos um escritório especializado em processos judiciais contra empresas aéreas com atuação em todo o país",
      buttonLabel: "Quero falar com um especialista",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "Direito do consumidor",
      title: "Como podemos te ajudar?",
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
            class="lucide lucide-plane"
          >
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
          </svg>
        ),
        title: "Atraso de Voo",
        description:
          "Em casos de atraso ou espera por voo superior a 4 horas, fica a Companhia Aérea obrigada a fornecer alimentação, comunicação, transporte e caso necessário, hospedagem de forma gratuita. Existe a possibilidade de indenização por dano moral, pricipalmente se houver perda de compromisso profissional / social.",
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
            class="lucide lucide-ban"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m4.9 4.9 14.2 14.2" />
          </svg>
        ),
        title: "Voo Cancelado",
        description:
          "Quem teve o Voo Cancelado tem os mesmos direitos de quem teve seu Voo Atrasado. Havendo atraso superior a 4 horas, bem como problemas de perda de conexão, pernoite não programado e/ou transporte terrestre, existe a possibilidade de indenização por dano moral.",
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
            class="lucide lucide-book-x"
          >
            <path d="m14.5 7-5 5" />
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
            <path d="m9.5 7 5 5" />
          </svg>
        ),
        title: "Overbooking",
        description:
          "Ocorre quando o embarque é negado pela falta de assentos na aeronave, sendo um passageiro preterido por outro. Muitas vezes o passageiro é realocado em outros voos, com alteração de itinerário ou com escala não programada. A prática é de uso frequente pelas linhas aéreas e enseja indenização por dano moral.",
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
            class="lucide lucide-baggage-claim"
          >
            <path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" />
            <path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" />
            <rect width="13" height="8" x="8" y="6" rx="1" />
            <circle cx="18" cy="20" r="2" />
            <circle cx="9" cy="20" r="2" />
          </svg>
        ),
        title: "Desvio de Bagagem",
        description:
          "O Extravio ocorre quando sua bagagem é extraviada temporariamente, permanentemente ou é danificada. Existe a possibilidade de ressarcimento de caráter material, tanto dos valores gastos para suprir a ausência da mesma, como em substituição aos itens que estavam dentro das malas. O extravio enseja também indenização por dano moral.",
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
      miniTag: "A definir minitag about",
      title: "A definir title about",
    },
    paragraph: "A definir paragraph about",
    buttonLabel: "A definir buton about",
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A definir minitag whyus",
      title: "A definir title whyus",
    },
    cards: {
      card1: {
        icon: {},
        title: "title 1 whyus",
        description: "description1 whyus",
      },
      card2: {
        icon: {},
        title: "title 2 whyus",
        description: "description2 whyus",
      },
      card3: {
        icon: {},
        title: "title 3 whyus",
        description: "description3 whyus",
      },
      card4: {
        icon: {},
        title: "title 4 whyus",
        description: "description4 whyus",
      },
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "A definir minitag cta",
      title: "A definir title cta",
      subtitle: "A definiri cta",
      buttonLabel: "A definir buton about",
    },
  },
  contact: {
    card1: {
      icon: {},
      title: "Instagram",
      description: "insta profile",
    },
    card2: {
      icon: {},
      title: "Email",
      description: "email@email.com",
    },
    card3: {
      icon: {},
      title: "Whatsapp",
      description: "phone number",
    },
  },
  footer: {
    copyRightLine: `© ${currentYear} ${infos.name}. Todos os direitos reservados.`,
    disclaimer: `Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. ${infos.name} oferece serviços jurídicos privativos de advogado, de acordo com a legislação vigente e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.`,
  },
};

export default LpContent;
