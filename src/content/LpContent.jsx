import bgImg from "../assets/imgs/hero/bgHero.jpg";
import logo from "../assets/imgs/logo/logo.png";

const currentYear = new Date().getFullYear();

const infos = {
  name: "Ernest Bertola",
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
    paragraph: (
      <p>
        A definir <br />
        <br /> A definir
      </p>
    ),
    buttonLabel: "A definir buton about",
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A definir minitag whyus",
      title: "A definir title whyus",
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
        title:
          "Consultoria personalizada para entender todos os aspectos do seu caso",
        description:
          "Cada situação é única e merece uma abordagem sob medida. Nossa equipe analisa minuciosamente todos os aspectos de seu caso para desenvolver a melhor estratégia.",
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
            class="lucide lucide-users"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
        title: "Atendimento Personalizado",
        description:
          "Entendemos que cada caso é único. Por isso, dedicamos atenção exclusiva a cada cliente, desenvolvendo planos de ação personalizados.",
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
            class="lucide lucide-chart-no-axes-combined"
          >
            <path d="M12 16v5" />
            <path d="M16 14v7" />
            <path d="M20 10v11" />
            <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
            <path d="M4 18v3" />
            <path d="M8 14v7" />
          </svg>
        ),
        title: "Dedicação e Persistência",
        description:
          "O nosso atendimento trata cada caso com a sua devida peculiaridade, almejando resolver o litígio da melhor forma possível para o nosso cliente.",
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
            class="lucide lucide-badge-check"
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        ),
        title: "Tranquilidade e confiança ao lidar com seu caso",
        description:
          "O Extravio ocorre quando sua bagagem é extraviada temporariamente, permanentemente ou é danificada. Existe a possibilidade de ressarcimento de caráter material, tanto dos valores gastos para suprir a ausência da mesma, como em substituição aos itens que estavam dentro das malas. O extravio enseja também indenização por dano moral.",
      },
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "Não perca mais tempo",
      title:
        "Seja ressarcido agora mesmo por prejuízos causados por companhias aéreas",
      subtitle: `O escritório ${infos.name} está aqui para te ajudar. Nossa equipe especializada em direitos do consumidor pode orientar você no processo de busca por indenização. Não deixe que o cancelamento de voo estrague sua experiência de viagem.`,
    },
    buttonLabel: "Quero falar com um especialista",
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
