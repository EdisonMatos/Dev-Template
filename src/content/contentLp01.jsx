import bgImg from "../assets/imgs/hero/bgHeroLp01.jpg";
import logo from "../assets/imgs/logo/logoLp.png";
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
      "Gagliardi Advogados. Isenção e Restituição do Imposto de Renda para Aposentados e Pensionistas | São Vicente - SP",
    description:
      "Aposentados, pensionistas e militares da reserva com doenças graves podem ter direito à isenção e restituição do Imposto de Renda. Gagliardi Advogados, em São Vicente - SP, oferece suporte jurídico especializado para garantir seus direitos de forma segura e eficiente.",
    keywords:
      "Isenção de Imposto de Renda, Restituição de Imposto de Renda, Isenção para Aposentados, Isenção para Pensionistas, Isenção para Militares da Reserva, Restituição para Servidores Aposentados, Direito Tributário para Aposentados, Imposto de Renda Doença Grave, Advogado Especialista em IR, Gagliardi Advogados, Gagliardi Advogados São Vicente, Isenção de IR São Vicente, Restituição de IR São Vicente, Advogado Tributário São Vicente, Imposto de Renda para Doença Grave, Restituição de IR para Pensionistas, Isenção de IR para Militares, Direito Tributário Aposentados SP, Isenção de IR com Laudo Médico, Advocacia Especializada em IR.",
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
          Militares da reserva, pensionistas e servidores aposentados que
          possuem doença grave{" "}
          <span className="text-lpTitle">
            {" "}
            podem ter isenção de imposto de renda
          </span>{" "}
          <span className="text-lpTitle">
            {" "}
            e recuperar até os últimos 5 anos dos valores pagos
          </span>
        </h1>
      ),
      subtitle: "Descubra se você tem direito e recupere o que é seu!",
      buttonLabel: "Solicite sua isenção agora!",
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
        text: "A análise é gratuita e sem compromisso",
      },
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "ISENÇÃO DE IMPOSTO",
      title:
        "Você pode ter direito à isenção e restituição do Imposto de Renda! Confira agora.",
    },
    cards: {
      card1: {
        icon: <Shield width={32} height={32} color="#4A1215" />,
        title: "Militar, Servidor Público Aposentado ou Pensionista",
        description:
          "Possui alguma das seguintes condições médicas (previstas no Art. 6º da Lei 7.713/88)",
        modal1: {
          title: <p></p>,
          subtitle: (
            <p>
              - AIDS (Síndrome da Imunodeficiência Adquirida) <br />
              - Alienação mental <br />
              - Cardiopatia grave <br />
              - Cegueira (inclusive monocular)
              <br />
              - Contaminação por radiação <br />
              - Doença de Paget em estágio avançado <br />
              - Doença de Parkinson <br />
              - Esclerose múltipla <br />
              - Espondiloartrose anquilosante <br />
              - Fibrose cística <br />
              - Hanseníase <br />
              - Nefropatia grave
              <br />
              - Hepatopatia grave <br />
              - Neoplasia maligna (câncer) <br />
              - Paralisia irreversível e incapacitante <br />- Tuberculose ativa
            </p>
          ),
        },
      },
      card2: {
        icon: <File width={32} height={32} color="#4A1215" />,
        title: "Requisitos para isenção e restituição",
        description:
          "Comprovação com laudo e exames, sendo aposentado, pensionista, servidor, militar ou beneficiário de previdência privada.",
        modal2: {
          title: <p>Requisitos para isenção e restituição</p>,
          subtitle: <p></p>,
        },
      },
      card3: {
        icon: <Banknote width={32} height={32} color="#4A1215" />,
        title: "Restituição de valores pagos",
        description:
          "Se você pagou imposto indevidamente, também é possível recuperar esses valores.",
        modal3: {
          title: <p></p>,
          subtitle: <p></p>,
        },
      },
      card4: {
        icon: <Scale width={32} height={32} color="#4A1215" />,
        title: "Suporte jurídico especializado",
        description:
          "Conte com um advogado especializado para assegurar sua isenção e restituição com segurança e eficiência.",
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
      miniTag: "ESPECIALISTA EM ISENÇÃO DE IMPOSTO DE RENDA",
      title: "Isenção e restituição com segurança e agilidade",
    },
    paragraph: (
      <p>
        Muitos aposentados e pensionistas acabam pagando imposto indevidamente
        sem saber que têm direito à isenção. Se você possui uma doença grave, ou
        já se recuperou dela, pode solicitar tanto a isenção quanto a
        restituição do Imposto de Renda pago nos últimos anos. <br />
        <br /> Com um atendimento especializado e ágil, buscamos garantir que
        seus direitos sejam respeitados. Entre em contato e veja como podemos
        ajudar!
      </p>
    ),
    buttonLabel: "Verifique seu direito à isenção",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  steps: {
    miniTag: "PASSO-A-PASSO",
    title: "Como funciona?",
    subtitle: "",
    alt: "",
    cards: {
      card1: {
        stepNumber: 1,
        cardTitle: "Análise Gratuita",
        cardDescription:
          "Envie seus documentos e nossa equipe jurídica verificará se você tem direito.",
      },
      card2: {
        stepNumber: 2,
        cardTitle: "Ação Judicial",
        cardDescription:
          "Caso tenha direito, entraremos com a ação para garantir sua isenção e a restituição do que foi pago indevidamente.",
      },
      card3: {
        stepNumber: 3,
        cardTitle: "Dinheiro na Conta",
        cardDescription:
          "Após a decisão favorável, você deixa de pagar IR e pode receber valores retroativos!",
      },
      buttonLabel: "Quero transformar minha carreira",
      ariaLabel: "Botão de contato",
    },
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A ESCOLHA CERTA",
      title: "Por que escolher a Gagliardi Advogados?",
    },
    cards: {
      card1: {
        icon: <Gavel width={32} height={32} color="#4A1215" />,
        title: "Especialistas em Direito Tributário",
        description:
          "Contamos com uma equipe qualificada e experiente em isenção e restituição do Imposto de Renda, garantindo um suporte jurídico completo e atualizado.",
      },
      card2: {
        icon: <Handshake width={32} height={32} color="#4A1215"/>,
        title: "Atendimento 100% Online, Sem Burocracia",
        description:
          "Todo o processo é realizado de forma digital, com praticidade e sem a necessidade de deslocamentos, tornando sua experiência mais ágil e eficiente.",
      },
      card3: {
        icon: <BadgeDollarSign width={32} height={32} color="#4A1215"/>,
        title:
          "Pagamento facilitado (somente após sucesso, conforme contrato!)",
        description:
          "Você não precisa se preocupar com pagamentos antecipados. Nosso compromisso é com o resultado, e a remuneração só ocorre após o êxito do processo.",
      },
      card4: {
        icon: <ChartNoAxesCombined width={32} height={32} color="#4A1215"/>,
        title: "Alta taxa de sucesso nas ações",
        description:
          "Com ampla experiência na área, nosso escritório já ajudou diversos clientes a conquistarem a isenção e restituição do Imposto de Renda com eficiência e assertividade.",
      },
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "A_Definir",
      title: "A_Definir",
      subtitle: `A_Definir`,
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

export default contentLp01;
