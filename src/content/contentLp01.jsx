import bgImg from "../assets/imgs/hero/bgHeroLp01.jpeg";
import logo from "../assets/imgs/logo/logo.png";
import { infos } from "./content";

const currentYear = new Date().getFullYear();

const contentLp01 = {
  infos: {
    title:
      "Advogado Jeová Miranda | Indenização por cancelamento de voo, atraso, overbooking e extravio de bagagem",
    description:
      "Se você sofreu com o cancelamento ou atraso de voo, overbooking ou extravio de bagagem, Jeová Miranda é especialista em garantir sua compensação.",
    keywords:
      "Indenização por cancelamento de voo, Advogado especialista em voo cancelado, Indenização por atraso de voo, Assistência jurídica por extravio de bagagem, Direito do passageiro aéreo, Compensação por overbooking, Como pedir indenização por voo atrasado, Como agir em caso de voo cancelado, Indenização por perda de bagagem, Atraso de voo compensação, Reclamação de overbooking, Reembolso de voo cancelado, Indenização por danos de voo, Atraso em voo compensação jurídica, Cancelamento de voo jurídico, Voo cancelado indenização, Direito a compensação de voo, Indenização por problemas com voo, Advogado para compensação de voo, Direito a assistência em voo atrasado.",
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
          Problemas com seu voo? <span className="text-lpTitle"> Conheça seus direitos como passageiro aéreo!
          </span> 
        </h1>
      ),
      subtitle: "Atrasos, cancelamentos, extravio de bagagem e mais. Saiba como garantir compensações justas com o auxílio de um advogado especializado.",
      buttonLabel: "Exija seus direitos agora!",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "RECLAME AGORA",
      title: "Você tem direito a indenização? Descubra se o seu caso se encaixa.",
    },
    cards: {
      card1: {
        icon: "A_Definir",
        title: "Voo cancelado sem aviso",
        description: "Se sua viagem foi interrompida de última hora e você não recebeu suporte da companhia aérea, pode ter direito a uma compensação.",
      },
      card2: {
        icon: "A_Definir",
        title: "Extravio de bagagem",
        description: "Se a companhia aérea perdeu sua bagagem e não tomou as devidas providências, você tem direito a ser ressarcido.",
      },
      card3: {
        icon: "A_Definir",
        title: "Vítima de Overbooking",
        description: "Se você foi barrado de embarcar devido a overbooking e não recebeu o suporte necessário, você tem direito a indenização.",
      },
      card4: {
        icon: "A_Definir",
        title: "Compensação inadequada",
        description: "Se a companhia aérea ofereceu compensações abaixo do que é devido, podemos ajudar a garantir a reparação justa para o seu caso.",
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
      miniTag: "EXCELÊNCIA NA DEFESA DE PASSAGEIROS AÉREOS",
      title: "Indenização garantida com dedicação e eficiência",
    },
    paragraph: (
      <p>
        Sabemos que imprevistos durante a viagem podem ser extremamente frustrantes. É por isso que atuo de forma rápida, eficiente e focada, para assegurar que seus direitos sejam respeitados. Se o seu voo foi cancelado, atrasado, ou se a companhia aérea não ofereceu o suporte necessário, estou aqui para buscar a compensação que você merece. <br />
        <br /> Não importa qual seja o seu caso, minha missão é fornecer a melhor solução jurídica e garantir que você receba o que tem direito. Entre em contato agora e descubra como podemos ser essenciais na defesa dos seus direitos.
      </p>
    ),
    buttonLabel: "Quero falar com um especialista",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A ESCOLHA CERTA",
      title: "Por que nos escolher para lutar por sua indenização?",
    },
    cards: {
      card1: {
        icon: "A_Definir",
        title: "Estratégia personalizada para garantir a melhor solução",
        description: "Não tratamos seu caso como um simples número. Cada detalhe do seu voo cancelado ou atrasado é analisado minuciosamente para desenvolver a melhor estratégia. Garantir sua compensação é nossa missão, e vamos até o fim para conquistar o que você merece.",
      },
      card2: {
        icon: "A_Definir",
        title: "Soluções rápidas e eficazes",
        description: "Nada de burocracia ou processos intermináveis. Criamos um plano de ação específico e direto, para que sua indenização aconteça o mais rápido possível. Seu caso será tratado com urgência para transformar sua frustração em uma vitória concreta.",
      },
      card3: {
        icon: "A_Definir",
        title: "Compromisso total com você",
        description: "Não deixamos seu caso de lado em momento algum. Nosso time está totalmente dedicado a garantir que seus direitos sejam respeitados em todas as fases do processo. Se você quer resultados, nós somos a escolha certa.",
      },
      card4: {
        icon: "A_Definir",
        title: "Experiência que garante resultados",
        description: "Com anos de experiência em casos de cancelamento e atraso de voos, sabemos exatamente como agir para garantir sua compensação. A nossa experiência é sua garantia de que o processo será tratado com segurança, eficiência e resultados concretos.",
      },
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "NÃO ESPERE MAIS",
      title: "Receba sua indenização agora mesmo!",
      subtitle: `Teve seu voo cancelado, sofreu um atraso significativo, enfrentou overbooking ou teve sua bagagem extraviada? Você pode ter direito à compensação. Nossa equipe especializada está pronta para te ajudar a garantir a indenização que você merece. Não perca tempo com a burocracia e busque agora seus direitos!`,
    },
    buttonLabel: "Falar com um especialista agora",
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

export default contentLp01;
