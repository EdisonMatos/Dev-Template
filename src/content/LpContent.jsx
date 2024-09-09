import bgImg from "../assets/imgs/hero/bgHero.jpg";
import logo from "../assets/imgs/logo/logo.png";

const currentYear = new Date().getFullYear();

const infos = {
  name: "Ernest Bertola",
  phone: {
    ddd: "61",
    firstPart: "99278", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "1077", // Apenas os 4 últimos números
  },
  email: "contato", // Email desejado pelo cliente
  domain: "paperstreet.com.br", // Sem "www"
  instagramProfile: "paperstreetsoftwares", // Sem o @
  whatsappDefaultMessage:
    "Olá! Vim através do site de vocês e gostaria de tirar umas dúvidas.",
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
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
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
      miniTag: "TRADIÇÃO EM DIREITO DO CONSUMIDOR",
      title: "Sobre nós",
    },
    paragraph: (
      <p>
        Na Ernest Bertola Advocacia, sabemos que o tempo é essencial para nossos
        clientes. Por isso, priorizamos uma atuação ágil e eficiente, sem abrir
        mão da qualidade dos nossos serviços. Nosso objetivo é garantir as
        melhores soluções jurídicas de forma tempestiva e eficaz. <br />
        <br /> Seja qual for o seu desafio jurídico, estamos aqui para ajudar.
        Entre em contato com a Ernest Bertola Advocacia e descubra como podemos
        fazer a diferença no seu caso.
      </p>
    ),
    buttonLabel: "Falar com um especialista",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
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
          "Você pode confiar em nossa experiência e expertise para resolver sua situação de forma eficiente e satisfatória. Nossos especialistas estão preparados para trabalhar em seu processo, para garantir a segurança de seus direitos, buscando as melhores alternativas de acordo com a complexidade de cada realidade.",
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
      description: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
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

export default LpContent;
