import lawService1 from "../assets/imgs/services/lawService1.jpg";
import lawService2 from "../assets/imgs/services/lawService2.jpg";
import lawService3 from "../assets/imgs/services/lawService3.jpg";
import lawService4 from "../assets/imgs/services/lawService4.jpg";
import lawService5 from "../assets/imgs/services/lawService5.jpg";
import lawService6 from "../assets/imgs/services/lawService6.jpg";
import lawService7 from "../assets/imgs/services/lawService7.jpg";
import lawService8 from "../assets/imgs/services/lawService8.jpg";
import lawService9 from "../assets/imgs/services/lawService9.jpg";

import content from "./content";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

const services = {
  main: {},
  moreServices: {
    arrowIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-corner-down-right"
      >
        <polyline points="15 10 20 15 15 20" />
        <path d="M4 4v7a4 4 0 0 0 4 4h12" />
      </svg>
    ),
    ctaButtons: {
      buttonLabel: "Agendar consulta gratuita",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-corner-down-right"
        >
          <polyline points="15 10 20 15 15 20" />
          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
        </svg>
      ),
    },
    demaisAreas: {
      label: "Demais áreas",
      service1: {
        name: "Direito de Família e Sucessões",
        img: {
          img: lawService1,
        },
        cardSubtitle: "Sobre o que se trata:",
        cardDescription:
          "Resolução de divórcios, pensões e disputas sucessórias com foco em empatia e eficiência.",
        buttonLink: whatsappContactLink,
      },
    },
  },
};

export default services;
