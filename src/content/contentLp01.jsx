import bgImg from "../assets/imgs/hero/bgHeroInfluencer.webp";
import logo from "../assets/imgs/logo/logo.webp";
import { infos } from "./content";
import { Shield } from "lucide-react";
import { File } from "lucide-react";
import { Banknote } from "lucide-react";
import { Scale } from "lucide-react";
import { Gavel } from "lucide-react";
import { Handshake } from "lucide-react";
import { BadgeDollarSign } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import img1 from "../assets/imgs/about/image1.webp";
import img2 from "../assets/imgs/about/image2.webp";
import img3 from "../assets/imgs/about/image3.webp";

const currentYear = new Date().getFullYear();

const contentLp01 = {
  infos: {
    title: "A_Definir",
    description: "A_Definir",
    keywords: "A_Definir",
  },
  hero: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "A_Definir",
    },
    textArea: {
      title: <h1>A_Definir</h1>,
      subtitle: "A_Definir",
      buttonLabel: "A_Definir",
      obsHero: {
        icon: (
          // Ícone mantido
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-map-pin-check"
          >
            <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" />
            <circle cx="12" cy="10" r="3" />
            <path d="m16 18 2 2 4-4" />
          </svg>
        ),
        text: "A_Definir",
      },
      ctaButtonAriaLabel: "A_Definir",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "A_Definir",
      title: "A_Definir",
    },
    cards: {
      card1: {
        icon: <Shield width={32} height={32} />,
        title: "A_Definir",
        description: "A_Definir",
        modal1: {
          title: <p>A_Definir</p>,
          subtitle: <p>A_Definir</p>,
        },
      },
      card2: {
        icon: <File width={32} height={32} />,
        title: "A_Definir",
        description: "A_Definir",
        modal2: {
          title: <p>A_Definir</p>,
          subtitle: <p>A_Definir</p>,
        },
      },
      card3: {
        icon: <Banknote width={32} height={32} />,
        title: "A_Definir",
        description: "A_Definir",
        modal3: {
          title: <p>A_Definir</p>,
          subtitle: <p>A_Definir</p>,
        },
      },
      card4: {
        icon: <Scale width={32} height={32} />,
        title: "A_Definir",
        description: "A_Definir",
        modal4: {
          title: <p>A_Definir</p>,
          subtitle: <p>A_Definir</p>,
        },
      },
    },
  },
  about: {
    bgImg: bgImg,
    imagesGaleria: {
      imagem1: img1,
      imagem2: img2,
      imagem3: img3,
    },
    logo: {
      logoImg: logo,
      alt: "A_Definir",
    },
    sectionHeader: {
      miniTag: "A_Definir",
      title: "A_Definir",
    },
    paragraph: <p>A_Definir</p>,
    buttonLabel: "A_Definir",
    ctaButtonAriaLabel: "A_Definir",
  },
  steps: {
    miniTag: "A_Definir",
    title: "A_Definir",
    subtitle: "A_Definir",
    alt: "A_Definir",
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
      ariaLabel: "A_Definir",
    },
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A_Definir",
      title: "A_Definir",
    },
    cards: {
      card1: {
        icon: <Gavel width={32} height={32} />,
        title: "A_Definir",
        description: "A_Definir",
      },
      card2: {
        icon: <ChartNoAxesCombined width={32} height={32} />,
        title: "A_Definir",
        description: "A_Definir",
      },
      card3: {
        icon: <Handshake width={32} height={32} />,
        title: "A_Definir",
        description: "A_Definir",
      },
      card4: {
        icon: <BadgeDollarSign width={32} height={32} />,
        title: "A_Definir",
        description: "A_Definir",
      },
    },
  },
  video: {
    sectionHeader: {
      miniTag: "A_Definir",
      title: "A_Definir",
      subtitle: "A_Definir",
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "A_Definir",
      title: "A_Definir",
      subtitle: <p className="opacity-80">A_Definir</p>,
    },
    buttonLabel: "A_Definir",
    ctaButtonAriaLabel: "A_Definir",
  },
  contact: {
    card1: {
      icon: infos.instagramIcon,
      title: "A_Definir",
      description: "A_Definir",
    },
    card2: {
      icon: infos.emailIcon,
      title: "A_Definir",
      description: "A_Definir",
    },
    card3: {
      icon: infos.whatsappIcon,
      title: "A_Definir",
      description: "A_Definir",
    },
  },
  footer: {
    copyrightLine: "A_Definir",
    disclaimer: "A_Definir",
  },
  links: {
    instagram: "A_Definir",
    ctaWhatsapp: "A_Definir",
  },
};

export default contentLp01;
