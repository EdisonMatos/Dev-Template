import bgImg from "../assets/imgs/hero/bgHeroInfluencer.jpg";
import logo from "../assets/imgs/logo/logo.png";
import { infos } from "./content";
import { Shield } from "lucide-react";
import { File } from "lucide-react";
import { Banknote } from "lucide-react";
import { Scale } from "lucide-react";
import { Gavel } from "lucide-react";
import { Handshake } from "lucide-react";
import { BadgeDollarSign } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";

const currentYear = new Date().getFullYear();

const contentLp01 = {
  infos: {
    title:
      "MDX CAPITAL | Antecipação de Precatórios com Segurança Jurídica no Brasil",
    description:
      "A MDX CAPITAL oferece soluções inteligentes para antecipação de precatórios no Brasil. Atuação transparente, segurança jurídica e atendimento personalizado para transformar seu direito em capital imediato.",
    keywords:
      "MDX Capital,Antecipação de Precatórios,Precatórios no Brasil,Segurança Jurídica,Investimento em Precatórios,Antecipação Financeira,Precatórios Federais,Precatórios Estaduais,Assessoria em Precatórios,Compra de Precatórios,Venda de Precatórios,Liquidez para Precatórios,Consultoria Jurídica,Soluções Financeiras,Antecipação Segura,Rentabilidade em Precatórios,Financiamento com Precatórios,MDX Capital Precatórios,Antecipação Rápida,Serviços de Precatórios.",
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
          <span className="text-primary">Você esperou anos</span> pelo
          precatório. Agora, não precisa esperar{" "}
          <span className="text-primary">nem mais um dia.</span>
        </h1>
      ),
      subtitle:
        "Antecipe seu precatório com segurança e sem burocracia. Seu dinheiro, agora.",
      buttonLabel: "Libere meu precatório!",
      obsHero: {
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
            class="lucide lucide-map-pin-check"
          >
            <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" />
            <circle cx="12" cy="10" r="3" />
            <path d="m16 18 2 2 4-4" />
          </svg>
        ),
        text: "A_Definir",
      },
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "RECEBA AGORA",
      title:
        "Você tem precatórios a receber? Descubra se pode antecipar e transformar seu direito em capital imediato.",
    },
    cards: {
      card1: {
        icon: <Shield width={32} height={32} />,
        title: "Precatório",
        description:
          "Antecipação segura, jurídica e rentável de precatórios federais e estaduais.",
        modal1: {
          title: <p></p>,
          subtitle: <p>A_Definir</p>,
        },
      },
      card2: {
        icon: <File width={32} height={32} />,
        title: "Empréstimos Consignados",
        description:
          "Crédito com taxas acessíveis, liberação rápida e atendimento personalizado.",
        modal2: {
          title: <p>A_Definir</p>,
          subtitle: <p></p>,
        },
      },
      card3: {
        icon: <Banknote width={32} height={32} />,
        title: "Plataformas Educacionais",
        description:
          "Soluções digitais para ensino moderno, acessível e de alta performance.",
        modal3: {
          title: <p></p>,
          subtitle: <p></p>,
        },
      },
      card4: {
        icon: <Scale width={32} height={32} />,
        title: "Treinamento de Vendas",
        description:
          "Capacitação estratégica focada em performance, conversão e resultados.",
        modal4: {
          title: <p></p>,
          subtitle: <p></p>,
        },
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
      miniTag: "EXCELÊNCIA EM PRECATÓRIOS",
      title:
        "Soluções inteligentes para um futuro financeiro seguro e rentável",
    },
    paragraph: (
      <p>
        Na MDX CAPITAL – Soluções Inteligentes, temos como compromisso
        proporcionar excelência, segurança jurídica e total satisfação em cada
        uma de nossas operações. Atuamos com foco na construção de experiências
        diferenciadas, fundamentadas em respeito, confiança, organização e
        rentabilidade.
        <br />
        <br />
        Com processos transparentes, métodos objetivos e estratégias eficientes,
        oferecemos uma assessoria personalizada, pensada para atender com
        precisão às necessidades exclusivas de nossos clientes e parceiros.
        <br />
        <br />
        Nossa abordagem é humanizada e estratégica, combinando iniciativa,
        criatividade e profissionalismo para impulsionar resultados superiores e
        consistentes. Mais do que soluções, entregamos valor real e duradouro,
        cultivando relacionamentos sólidos e sustentáveis.
        <br />
        <br />
        Juntos, vamos além das expectativas — construindo confiança, gerando
        resultados.
      </p>
    ),
    buttonLabel: "Rentabilize com segurança",
    ctaButtonAriaLabel: "Botão de levar pro Whatsapp",
  },
  steps: {
    miniTag: "A_Definir",
    title: "A_Definir",
    subtitle: "",
    alt: "",
    cards: {
      card1: {
        stepNumber: 1,
        cardTitle: "A_Definir",
        cardDescription: "A_Definir",
      },
      card2: {
        stepNumber: 2,
        cardTitle: "A_Definir",
        cardDescription: "A_Definir",
      },
      card3: {
        stepNumber: 3,
        cardTitle: "A_Definir",
        cardDescription: "A_Definir",
      },
      buttonLabel: "A_Definir",
      ariaLabel: "Botão de contato",
    },
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A ESCOLHA CERTA",
      title: "Por que nos escolher para lutar por seu precatório?",
    },
    cards: {
      card1: {
        icon: <Gavel width={32} height={32} />,
        title: "Segurança jurídica e confiabilidade",
        description:
          "Operações 100% legais, transparentes e com total respaldo jurídico.",
      },
      card2: {
        icon: <ChartNoAxesCombined width={32} height={32} />,
        title: "Rentabilidade com inteligência",
        description:
          "Soluções inteligentes para maximizar seus ganhos com precatórios.",
      },
      card3: {
        icon: <Handshake width={32} height={32} />,
        title: "Atendimento personalizado",
        description:
          "Suporte próximo, humanizado e focado nas suas necessidades.",
      },
      card4: {
        icon: <BadgeDollarSign width={32} height={32} />,
        title: "Experiência, eficiência e resultados",
        description:
          "Equipe experiente, processos ágeis e resultados consistentes.",
      },
    },
  },
  video: {
    sectionHeader: {
      miniTag: "EXPLICANDO",
      title: "Entenda como funciona a isenção do Imposto de Renda",
      subtitle:
        "Assista ao vídeo e veja de forma simples como garantir sua isenção e restituição sem complicações!",
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "NÃO ESPERE MAIS",
      title: "Receba o valor do seu precatório agora mesmo!",
      subtitle: (
        <p className="opacity-80">
          Você possui um precatório a receber? Antecipe seu valor com segurança,
          sem burocracia e com as melhores condições do mercado. Nossa equipe
          especializada está pronta para te ajudar a transformar seu direito em
          capital imediato.
        </p>
      ),
    },
    buttonLabel: "Fale com um especialista agora",
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
