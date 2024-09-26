import links from "./links";
import infos from "./infos";

import logo from "../assets/imgs/logo/logo.png";
import solidLogo from "../assets/imgs/logo/solidLogo.png";
import bgHeroImg from "../assets/imgs/hero/bgHero.jpg";

import imgFeatures from "../assets/imgs/features/imgFeatures.png";
import imgDivisor from "../assets/imgs/features/imgDivisor.jpg";

import aboutImg1 from "../assets/imgs/about/aboutImg.png";
import aboutSocialImg from "../assets/imgs/about/aboutSocial.png";

import imgSteps from "../assets/imgs/steps/imgSteps.png";

import numbersImgBg from "../assets/imgs/paralaxe/bgParalaxe1.jpg";

import trustedByImg1 from "../assets/imgs/trustedBy/item1.jpg";
import trustedByImg2 from "../assets/imgs/trustedBy/item2.jpg";
import trustedByImg3 from "../assets/imgs/trustedBy/item3.jpg";

import featuresImg1 from "../assets/imgs/features/imgFeatures1.png";
import featuresImg2 from "../assets/imgs/features/imgFeatures2.png";
import featuresImg3 from "../assets/imgs/features/imgFeatures3.png";
import featuresImg4 from "../assets/imgs/features/imgFeatures4.png";

import imgFeaturesCardModal1 from "../assets/imgs/features/imgFeaturesCardModal1.png";
import imgFeaturesCardModal2 from "../assets/imgs/features/imgFeaturesCardModal2.png";
import imgFeaturesCardModal3 from "../assets/imgs/features/imgFeaturesCardModal3.png";
import imgFeaturesCardModal4 from "../assets/imgs/features/imgFeaturesCardModal4.png";

import ctaWhatsappImgBg from "../assets/imgs/paralaxe/bgParalaxe2.jpg";

import teamMemberImg1 from "../assets/imgs/team/team1.webp";
import teamMemberImg2 from "../assets/imgs/team/team2.webp";
import teamMemberImg3 from "../assets/imgs/team/team3.webp";
import teamMemberImg4 from "../assets/imgs/team/team4.webp";

import imgTestimonial1 from "../assets/imgs/testimonials/testimonial1.jpg";
import imgTestimonial2 from "../assets/imgs/testimonials/testimonial2.jpg";
import imgTestimonial3 from "../assets/imgs/testimonials/testimonial3.jpg";
import imgTestimonial4 from "../assets/imgs/testimonials/testimonial4.jpg";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      solidLogo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      menuItems: ["Início", "Serviços", "Sobre Nós", "Perguntas Frequentes"],
      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      miniTag: "CONSULTÓRIO DENTISTA EM SÃO PAULO - SP",
      title: <h1 className="mb-[16px]">Clínica Dental Premium Care</h1>,
      subtitle: "Sorriso saudável, confiança renovada",
      ctaButtonText: "Agende sua consulta",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
      secondaryCta: "A Definir",
      images: {
        background: bgHeroImg,
        static: {
          img: {},
          alt: "",
        },
        slide1: {
          img: {},
          alt: "",
        },
        slide2: {
          img: {},
          alt: "",
        },
        slide3: {
          img: {},
          alt: "",
        },
      },
    },
    features: {
      miniTag: "ESPECIALIDADES",
      title: "Tratamentos personalizados para cada necessidade",
      subtitle:
        "Oferecemos serviços odontológicos completos, com foco em saúde bucal e bem-estar.",
      imgFeatures: imgFeatures,
      imgDivisor: imgDivisor,
      card1: {
        img: featuresImg1,
        title: "Odontologia Preventiva",
        subtitle:
          "Cuidados regulares para garantir a saúde bucal e evitar problemas futuros.",
        description: (
          <div>
            A Definir <br />
            <br />A Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal1,
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
            class="lucide lucide-clock-alert"
          >
            <path d="M12 6v6l4 2" />
            <path d="M16 21.16a10 10 0 1 1 5-13.516" />
            <path d="M20 11.5v6" />
            <path d="M20 21.5h.01" />
          </svg>
        ),
        buttonLabelModal: "A Definir",
        buttonLabel: "A Definir",
      },
      card2: {
        img: featuresImg2,
        title: "Tratamentos Restauradores",
        subtitle:
          "Reparação e proteção de dentes danificados, proporcionando funcionalidade e estética.",
        description: (
          <div>
            A Definir <br />
            A Definir <br />
            <br />A Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal2,
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
            class="lucide lucide-triangle-alert"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        ),
        buttonLabelModal: "A Definir",
        buttonLabel: "A Definir",
      },
      card3: {
        img: featuresImg3,
        title: "Ortodontia",
        subtitle:
          "Correção da posição dos dentes e mandíbulas para um sorriso alinhado e saudável.",
        description: (
          <div>
            A Definir <br />
            <br />A Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal3,
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
            class="lucide lucide-frown"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1="9" x2="9.01" y1="9" y2="9" />
            <line x1="15" x2="15.01" y1="9" y2="9" />
          </svg>
        ),
        buttonLabelModal: "A Definir",
        buttonLabel: "A Definir",
      },
      card4: {
        img: featuresImg4,
        title: "Odontologia Estética",
        subtitle:
          "Realce a beleza do seu sorriso com clareamento, facetas e outros procedimentos estéticos.",
        description: (
          <div>
            A Definir <br />
            <br />
            A Definir <br />
            A Definir <br />
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
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
            class="lucide lucide-circle-dollar-sign"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 18V6" />
          </svg>
        ),
        buttonLabelModal: "A Definir",
        buttonLabel: "A Definir",
      },
    },
    about: {
      imagem: {
        img: aboutImg1,
        alt: "Imagem ilustrativa de escritório de advocacia",
      },
      miniTag: "QUEM É DENTAL PREMIUM CARE",
      title: "Nossa trajetória",
      subtitle:
        "Na Dental Premium Care, nossa missão é transformar sorrisos e melhorar a qualidade de vida de nossos pacientes através de um atendimento odontológico de excelência.",
      paragraph: (
        <div>
          Com uma equipe altamente qualificada e tecnologia de ponta, oferecemos
          tratamentos personalizados em um ambiente confortável e acolhedor.
          <br />
          Acreditamos que um sorriso saudável vai além da estética,
          representando bem-estar, confiança e autoestima. Por isso, trabalhamos
          com dedicação para proporcionar resultados duradouros e uma
          experiência positiva em cada visita. Seja para um simples check-up ou
          para procedimentos mais complexos, estamos prontos para cuidar de você
          com todo o cuidado e atenção que você merece.
        </div>
      ),
      buttonModalLabelAbout: "A DEFINIR",
      titleModal: <strong>Minha trajetória</strong>,
      modal: (
        <p>
          <strong>A DEFINIR</strong>
          <br />
          <br />
          A DEFINIR
          <br />
          A DEFINIR
          <br />
          <br />
          <p>Quer saber mais sobre A Definir? 👇</p>
          <br />
        </p>
      ),
      ctaButtonAriaLabel: "Botão para entrar em contato",
      ctaButtonText: "Entre em contato",

      aboutSocial: {
        img: {
          img: aboutSocialImg,
          alt: `Foto do Instagram do ${infos.name}`,
        },
        miniTag: "MANTENHA-SE INFORMADO",
        title: "FIQUE POR DENTRO",
        subtitle: "🦷 Quer cuidar melhor do seu sorriso?",
        paragraph: (
          <p>
            Acompanhe nossas postagens para ficar por dentro das últimas
            novidades e dicas sobre saúde bucal. Siga a Odonto Premium Care no
            Instagram!
          </p>
        ),
      },
    },
    trustedBy: {
      title: "A Definir",
      subtitle: "A Definir",
      trustedMore: {
        title: "A Definir",
        subtitle: "A Definir",
      },
      images: {
        img1: {
          img: { trustedByImg1 },
          alt: "marca Rennova",
        },
        img2: {
          img: { trustedByImg2 },
          alt: "marca Colgate",
        },
        img3: {
          img: { trustedByImg3 },
          alt: "marca dental Cremer",
        },
      },
    },
    numbers: {
      backgroundImg: numbersImgBg,
      number1: 7,
      number1Description: "A Definir",
      number2: 500,
      number2Description: "A Definir",
      number3: 1000,
      number3Description: "A Definir",
    },
    team: {
      title: "A Definir",
      subtitle: "A Definir",
      members: {
        member1: {
          img: {
            img: teamMemberImg1,
            alt: "Edison Matos",
          },
          name: "Edison Matos",
          role: "CEO & Diretor de Desenvolvimento",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/edison-matoss/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/EdisonMatos",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            ),
            link3: "https://edisonmatos.github.io/",
          },
        },
        member2: {
          img: {
            img: teamMemberImg2,
            alt: "Gabriel Adans",
          },
          name: "Gabriel Adans",
          role: "Marketing Outsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/gabriel-adans-2bb029227/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/GabrielAdans",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
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
            link3: "https://www.instagram.com/adansgabriel/",
          },
        },
        member3: {
          img: {
            img: teamMemberImg3,
            alt: "Gabriel Souza",
          },
          name: "Gabriel Souza",
          role: "Desenvolvedor Frontend",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: " https://www.linkedin.com/in/gabriel-souza-b9945929a",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/BiellSouza",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
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
            link3: " https://www.instagram.com/biel.souza.904",
          },
        },
        member4: {
          img: {
            img: teamMemberImg4,
            alt: "Luiz Felipe",
          },
          name: "Luiz Felipe",
          role: "Designer Ourtsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/luiz-felipe-leite-95a246192/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
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
            link2: "https://www.instagram.com/luizleitedesigner/",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="#000000"
                className=" bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            ),
            link3: "https://wa.me/+556596241854",
          },
        },
      },
    },
    steps: {
      miniTag: "PASSO A PASSO",
      title: "Como funciona a sua consulta",
      subtitle: "",
      img: imgSteps,
      alt: "",
      cards: {
        card1: {
          stepNumber: 1,
          cardTitle: "Agendamento da consulta",
          cardDescription:
            "Entre em contato conosco pelo telefone ou pelo nosso site para agendar sua consulta no horário que melhor lhe convier.",
        },
        card2: {
          stepNumber: 2,
          cardTitle: "Recepção e preenchimento de documentos",
          cardDescription:
            "Ao chegar, você será recebido por nossa equipe, que solicitará o preenchimento de alguns documentos e informações sobre seu histórico de saúde bucal.",
        },
        card3: {
          stepNumber: 3,
          cardTitle: "Avaliação odontológica",
          cardDescription:
            "Um de nossos dentistas realizará uma avaliação detalhada de sua saúde bucal, incluindo exame clínico e, se necessário, radiografias.",
        },
        card4: {
          stepNumber: 4,
          cardTitle: "Plano de tratamento personalizado",
          cardDescription:
            "Após a avaliação, discutiremos as opções de tratamento mais adequadas para suas necessidades e responderemos a todas as suas perguntas antes de prosseguir.",
        },
      },
    },
    cta: {
      backgroundImg: ctaWhatsappImgBg,
      miniTag: "FALE CONOSCO",
      title: "Estamos aqui para você!",
      subtitle:
        "Entre em contato e agende sua consulta. Nossa equipe está pronta para responder suas dúvidas e cuidar do seu sorriso.",
      ctaButtonText: "Entre em contato pelo WhatsApp",
    },
    testimonials: {
      miniTag: "A Definir",
      title: "A Definir",
      subtitle: "A Definir",
      images: {
        img1: {
          img: imgTestimonial1,
          alt: "Imagem de feedback",
        },
        img2: {
          img: imgTestimonial2,
          alt: "Imagem de feedback",
        },
        img3: {
          img: imgTestimonial3,
          alt: "Imagem de feedback",
        },
        img4: {
          img: imgTestimonial4,
          alt: "Imagem de feedback",
        },
      },
    },
    faq: {
      miniTag: "TIRE SUAS DÚVIDAS",
      title: "Perguntas Frequentes",
      subtitle: "Confira as perguntas abaixo para esclarecer suas dúvidas.",
      questions: {
        question1: {
          question: "Com que frequência devo ir ao dentista?",
          answer:
            "Recomendamos visitas ao dentista a cada seis meses para check-ups e limpezas, mas a frequência pode variar conforme suas necessidades individuais. Consulte seu dentista para um plano personalizado.",
        },
        question2: {
          question: "Os tratamentos dentários são dolorosos?",
          answer:
            "Nosso objetivo é garantir seu conforto durante os tratamentos. Utilizamos anestesia local e técnicas avançadas para minimizar qualquer desconforto. Converse com sua equipe sobre suas preocupações.",
        },
        question3: {
          question: "Aceitam planos de saúde?",
          answer:
            "Sim, aceitamos diversos planos de saúde. Entre em contato conosco para verificar se o seu plano é aceito e para mais informações sobre cobertura.",
        },
        question4: {
          question: "Qual é o tempo médio de duração de uma consulta?",
          answer:
            "Uma consulta típica pode durar entre 30 a 60 minutos, dependendo do tipo de atendimento que você precisa. Durante a avaliação, seu dentista informará sobre o tempo necessário para qualquer procedimento adicional.",
        },
      },
      paragraph: (
        <p>
          <a href={whatsappContactLink} target="_blank">
            Clique aqui caso tenha mais dúvidas
          </a>
        </p>
      ),
    },
    carouselv1: {
      title: "A Definir",
      subtitle: "A Definir",
    },
  },
};

export default content;
