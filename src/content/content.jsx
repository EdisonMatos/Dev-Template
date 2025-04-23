import logo from "../assets/imgs/logo/logo.png";
import heroImg from "../assets/imgs/hero/lawHero.jpg";
import heroImgPhone from "../assets/imgs/hero/lawHeroPhone.jpg";
// import HeroEdvaldo from "../assets/imgs/hero/HeroEdvaldo.png";
import bgHeroImg from "../assets/imgs/hero/bgHero.webp";
import heroImgPerson from "../assets/imgs/hero/bgHero.jpg";

import imgFeatures from "../assets/imgs/features/imgServices.jpg";
import imgDivisor from "../assets/imgs/features/imgDivisor.jpg";

import aboutImg1 from "../assets/imgs/about/aboutImg.jpg";
import imgAbout1 from "../assets/imgs/about/aboutImg1.jpg";
import imgAbout2 from "../assets/imgs/about/aboutImg2.jpg";
import imgAbout3 from "../assets/imgs/about/aboutImg3.jpg";
import imgAbout4 from "../assets/imgs/about/aboutImg4.jpg";
import imgAbout5 from "../assets/imgs/about/aboutImg5.jpg";
import aboutSocialImg from "../assets/imgs/about/aboutSocial.png";
import aboutInstagram from "../assets/imgs/about/imgAboutInstagram.jpg";

import imgSteps from "../assets/imgs/steps/imgSteps.jpg";
// import personImg from "../assets/imgs/hero/edvaldo.png";
// import personImgPhone from "../assets/imgs/hero/edvaldo.png";

import numbersImgBg from "../assets/imgs/paralaxe/bgParalaxe1.jpg";

import trustedByImg1 from "../assets/imgs/trustedBy/item1.jpg";
import trustedByImg2 from "../assets/imgs/trustedBy/item2.jpg";
import trustedByImg3 from "../assets/imgs/trustedBy/item3.jpg";

import featuresImg1 from "../assets/imgs/features/imgFeatures1.jpg";
import featuresImg2 from "../assets/imgs/features/imgFeatures2.jpg";
import featuresImg3 from "../assets/imgs/features/imgFeatures3.jpg";
import featuresImg4 from "../assets/imgs/features/imgFeatures4.jpg";

import imgFeaturesCardModal1 from "../assets/imgs/features/imgFeaturesCardModal1.jpg";
import imgFeaturesCardModal2 from "../assets/imgs/features/imgFeaturesCardModal2.jpg";
import imgFeaturesCardModal3 from "../assets/imgs/features/imgFeaturesCardModal3.jpg";
import imgFeaturesCardModal4 from "../assets/imgs/features/imgFeaturesCardModal4.jpg";

import ctaWhatsappImgBg from "../assets/imgs/paralaxe/bgParalaxe2.jpg";

import teamMemberImg1 from "../assets/imgs/team/team1.webp";
import teamMemberImg2 from "../assets/imgs/team/team2.webp";
import teamMemberImg3 from "../assets/imgs/team/team3.webp";
import teamMemberImg4 from "../assets/imgs/team/team4.webp";

import imgTestimonial1 from "../assets/imgs/testimonials/deposition1.png";
import imgTestimonial2 from "../assets/imgs/testimonials/deposition2.png";
import imgTestimonial3 from "../assets/imgs/testimonials/deposition3.png";
import imgTestimonial4 from "../assets/imgs/testimonials/deposition4.png";

const currentYear = new Date().getFullYear();

export const infos = {
  name: "Dra. Thaís Costa",
  email: "contato", // Email desejado pelo cliente
  domain: "advogadathaiscosta.com.br", // Sem "www"
  phone: {
    ddd: "11",
    firstPart: "91685", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "1971", // Apenas os 4 últimos números
  },
  endereco: (
    <div>
      <p>Endereço:</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
    </div>
  ),
  expediente: (
    <div>
      <p>Horário de expediente:</p>
      <p>Segunda à sexta-feira:</p>
      <p>7:30 às 18h</p>
    </div>
  ),
  obs: <span className="italic">A Definir</span>,
  instagramProfile: "advogadathaiscosta", // Sem o @
  facebookProfile: "A_Definir",
  linkeDinProfile: "A_Definir",
  x: "A_Definir",
  whatsappDefaultMessage:
    "Olá! Vim através do site de vocês e gostaria de tirar umas dúvidas.",
  whatsChatDefaultMessage:
    "Gostaria de falar conosco agora mesmo? Clque abaixo 👇",
  slogan: "",
};

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
      miniTag: "ADVOGADA CÍVEL EM SÃO PAULO - SP",
      title: (
        <h1 className="mb-[16px]">
          Exclusividade
          <span className="text-primary"> em cada detalhe jurídico</span>
        </h1>
      ),
      subtitle:
        "De dúvidas e incertezas à soluções sólidas. Uma jornada jurídica com presença e resultado.",
      heroImg: heroImg,
      ctaButtonText: "Agende sua consulta",
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
        text: "Atendimento online, com opção presencial em casos específicos.",
      },
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
      secondaryCta: "A_Definir",
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
      // app: {
      //   description: "Baixe nosso aplicativo para companhar seu processo:",
      //   imgs: {
      //     appStore: {
      //       img: imgAppStore,
      //       alt: "Ícone da App Store",
      //       link: "#",
      //     },
      //     playStore: {
      //       img: imgGooglePlay,
      //       alt: "Ícone da Play Store",
      //       link: "#",
      //     },
      //   },
      // },
    },
    features: {
      miniTag: "ÁREAS DE ATUAÇÃO",
      title: "Excelência jurídica nas causas que importam",
      subtitle:
        "Atuação precisa, estratégica e alinhada aos seus maiores interesses",
      imgFeatures: imgFeatures,
      imgDivisor: imgDivisor,
      card1: {
        img: featuresImg1,
        title: "Assessoria jurídica em leilões",
        subtitle: "Orientação completa em arremates judiciais e extrajudiciais",
        labelButton: "Saiba mais",
        description: (
          <div>
            <p>
              Assessoria desde a escolha do imóvel até a imissão na posse.
              Análise segura do edital, análise mercadológica da área,
              estratégias de flipping pós arrematação, intermediação com o
              leiloeiro,desocupação, dentre outros. Tudo isso voltado para o
              jurídico, para uma arrematação segura e rentável.
            </p>
          </div>
        ),
        imgModal: imgFeaturesCardModal1,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-house-icon lucide-house"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card2: {
        img: featuresImg2,
        title: "Direito contratual",
        subtitle: "Contratos claros, sólidos e personalizados",
        labelButton: "Saiba mais",
        description: (
          <div>
            Elaboração e revisão de contratos, tanto para prestadores de
            serviços (PF e PJ) quanto da área imobiliária (compra e venda,
            locação, Airbnb)
          </div>
        ),
        imgModal: imgFeaturesCardModal2,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-users-icon lucide-users"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card3: {
        img: featuresImg3,
        title: "Família e sucessões",
        subtitle: "Cuidado jurídico em momentos delicados",
        labelButton: "Saiba mais",
        description: (
          <div>
            - Divórcio judicial e extrajudicial ;
            <br /> - Inventário judicial e extrajudicial;
            <br /> - Holding Familiar (planejamento sucessório prévio);
            <br />
            - Testamentos;
            <br />
            - Reconhecimento e dissolução de união estável;
            <br /> - Acordo pré-nupcial.
          </div>
        ),
        imgModal: imgFeaturesCardModal3,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-file-text-icon lucide-file-text"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card4: {
        img: featuresImg4,
        title: "Direito imobiliário",
        subtitle: "Assessoria segura em negócios imobiliários",
        labelButton: "Saiba mais",
        description: (
          <div>
            - Regularização imobiliária;
            <br /> - Análise documental;
            <br /> - Due diligence (revisão de pendências imobiliárias);
            <br />
            - Usucapiao;
            <br /> - Assessoria em questões de inadimplência, registro e riscos.
            <br />
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-scale-icon lucide-scale"
          >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card5: {
        img: featuresImg4,
        title: "A_Definir",
        subtitle: "A_Definir",
        labelButton: "Saiba mais",
        description: (
          <div>
            A_Definir
            <br />
            A_Definir
            <br />
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
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
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card6: {
        img: featuresImg4,
        title: "A_Definir",
        subtitle: "A_Definir",
        description: (
          <div>
            A_Definir
            <br />
            A_Definir
            <br />
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
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
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      moreFeatures: {
        card1: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
        card2: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
        card3: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
      },
    },
    about: {
      imagem: {
        img: aboutImg1,
        alt: "Imagem profissional de escritório/advogado(a)",
      },
      miniTag: "QUEM É A DRA. THAIS COSTA",
      title: "Minha trajetória",
      subtitle:
        "Excelência com proximidade, clareza e total dedicação ao cliente",
      paragraph: (
        <div>
          Com cinco anos de experiência na advocacia, construí minha base
          atuando em escritório, e hoje me coloco pronta para exercer a
          profissão de forma autônoma, com dedicação total aos meus clientes.
          <br />
          Minha missão é oferecer clareza, traduzindo o Direito em uma linguagem
          acessível e prática. Evito o juridiquês e foco no que realmente
          importa: soluções eficazes.
        </div>
      ),
      buttonModalLabelAbout: "Continuar lendo",
      modal: (
        <p>
          Com cinco anos de experiência na advocacia, construí minha base
          atuando em escritório, e hoje me coloco pronta para exercer a
          profissão de forma autônoma, com dedicação total aos meus clientes.
          <br />
          <br />
          Minha missão é oferecer clareza, traduzindo o Direito em uma linguagem
          acessível e prática. Evito o juridiquês e foco no que realmente
          importa: soluções eficazes.
          <br />
          <br />
          Minha atuação é marcada por acompanhamento constante, com feedbacks
          semanais e contato próximo. Acredito que o acolhimento e a
          transparência são essenciais para uma advocacia de excelência.
          <br />
          <br />
          Sou pós-graduada em Direito de Família e Sucessões, com ampla vivência
          na área imobiliária — especialmente em leilões — e atualmente me
          especializo em contratos.
          <br />
          <br />
          Cada cliente é único, e cada petição que elaboro reflete essa
          individualidade. Meu compromisso é entregar não apenas um serviço
          jurídico, mas uma experiência de confiança, respeito e resultado.
          <br />
          <br />
        </p>
      ),
      ctaButtonAriaLabel: "Botão para entrar em contato",
      ctaButtonText: "Entre em contato",

      aboutSocial: {
        img: {
          img: aboutInstagram,
          imgPrint: aboutSocialImg,
          alt: `Foto do Instagram do ${infos.name}`,
        },
        miniTag: "REDES SOCIAIS",
        title: "Conecte-se conosco",
        subtitle: "Aproveite nossas redes sociais para mantermos contato e ficar por dentro de atualizações importantes no mundo do direito.",
        labelInstagram: "Siga-me no Instagram",
        labelFacebook: "Siga-me no Facebook",
        labelLinkedin: "Siga-me no LinkedIn",
        labelX: "Siga-me no X",
        paragraph: (
          <p>
            Aproveite nossas redes sociais para mantermos contato e ficar por
            dentro de atualizações importantes no mundo do direito.
          </p>
        ),
      },
    },
    cta: {
      backgroundImg: ctaWhatsappImgBg,
      miniTag: "FALE CONOSCO",
      title:
        "Enfrentando um problema jurídico? Deixe que cuidamos disso para você!",
      subtitle:
        "Converse com nossa equipe. Estamos prontos para oferecer a orientação jurídica de que você precisa.",
      ctaButtonText: "Entre em contato pelo WhatsApp",
    },
    steps: {
      miniTag: "PASSO A PASSO",
      title: "Como funciona nosso atendimento?",
      subtitle: "",
      img: imgSteps,
      alt: "",
      cards: {
        card1: {
          stepNumber: 1,
          cardTitle: "Consulta inicial",
          cardDescription:
            "Reunião para entender seu caso e identificar suas necessidades.",
        },
        card2: {
          stepNumber: 2,
          cardTitle: "Análise detalhada",
          cardDescription:
            "Análise detalhada de documentos e evidências do seu caso.",
        },
        card3: {
          stepNumber: 3,
          cardTitle: "Elaboração da estratégia",
          cardDescription:
            "Desenvolvemos uma estratégia personalizada para o seu caso.",
        },
        card4: {
          stepNumber: 4,
          cardTitle: "Ação legal",
          cardDescription:
            "Iniciamos e conduzimos as ações judiciais necessárias, buscando a justiça e a solução de que você precisa.",
        },
      },
    },
    blog: {
      miniTag: "BLOG",
      title: "Informação jurídica ao seu alcance",
      subtitle: "",
      img: imgSteps,
      blogApiEndpoint:
        "https://public-api.wordpress.com/rest/v1.1/sites/blogtestepaper.wordpress.com/posts/",
      labelCards: "Ver mais",
      label: "Clique aqui para ver todas as matérias",
      blogLink: "https://blogtestepaper.wordpress.com/",
    },
    faq: {
      miniTag: "TIRE SUAS DÚVIDAS",
      title: "Perguntas Frequentes",
      subtitle: "Confira as perguntas abaixo para esclarecer suas dúvidas. ",
      questions: {
        question1: {
          question: "Como posso contratar seus serviços?",
          answer:
            "Agende sua consulta conosco via WhatsApp e conversaremos sobre suas necessidades e avaliaremos os custos.",
        },
        question2: {
          question: "Qual é o prazo médio para resolução de um caso?",
          answer:
            "O prazo médio varia conforme a complexidade, mas discutiremos uma estimativa durante a consulta inicial.",
        },
        question3: {
          question: "Quais documentos devo levar para a consulta?",
          answer:
            "Traga os documentos relevantes ao seu caso, como contratos, correspondências e registros, além de documentos pessoais e comprovante de residência.",
        },
        question4: {
          question: "Vocês oferecem serviços de consultoria preventiva?",
          answer:
            "Sim, oferecemos consultoria preventiva para evitar problemas futuros e garantir conformidade legal.",
        },
      },
      paragraph: "Clique aqui caso tenha mais dúvidas",
    },
    footer: {
      copyrightLine: ` ${currentYear} - ${infos.name} - Todos os direitos reservados`,
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
      midSectionName: "Até mais",
      footerText:
        "Agradecemos sua visita! Esperamos que em breve você se torne nosso cliente e desfrute de todos os benefícios que oferecemos.",
      footerSocialText: "Siga a gente nas redes sociais:",
      footerNavegacaoText: "NAVEGAÇÃO",
    },
    testimonials: {
      miniTag: "A_Definir",
      title: "A_Definir",
      subtitle: "A_Definir",
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
    trustedBy: {
      title: "A_Definir",
      subtitle: "A_Definir",
      trustedMore: {
        title: "A_Definir",
        subtitle: "A_Definir",
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
      number1Description: "A_Definir",
      number2: 500,
      number2Description: "A_Definir",
      number3: 1000,
      number3Description: "A_Definir",
    },
    maps: {
      minitag: "Google Maps",
      title: "Como nos encontrar?",
      subtitle:
        "Utilize o mapa abaixo para chegar até nós com mais facilidade.",
      embedsrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5228.594742930791!2d-51.169466!3d-23.321824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb435bf9b37d8f%3A0xfb3125702df9f29d!2sMolina%20%26%20Spigarollo%20%7C%20Advogados%20Associados!5e1!3m2!1spt-BR!2sbr!4v1736876812303!5m2!1spt-BR!2sbr",
    },
    team: {
      title: "A_Definir",
      subtitle: "A_Definir",
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
    links: {
      instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
      ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
      facebook: `https://www.facebook.com/${infos.facebookProfile}`,
      x: `https://x.com/${infos.x}`,
      linkedin: `https://www.linkedin.com/in/${infos.linkeDinProfile}`,
    },
    infos: {
      phone: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
      email: `${infos.email}@${infos.domain}`,
      adress: infos.endereco,
      officeHours: infos.expediente,
      year: currentYear,
      footerexpediente: infos.expediente,
      obsFooter: infos.obs,
      footerNavegacaoText: "NAVEGAÇÃO",
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
    },
  },
};

export const abstractions = {
  titleModal: <strong>{content.texts.about.title}</strong>,
  subtitleModal: <strong>{content.texts.about.subtitle}</strong>,
};

export default content;
