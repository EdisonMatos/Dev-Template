import logo from "../assets/imgs/logo/logo.png";
import heroImg from "../assets/imgs/hero/lawHero.jpg";
import imgFeatures from "../assets/imgs/features/imgServices.jpg";
import aboutImg1 from "../assets/imgs/about/aboutImg.jpg";
import aboutSocial from "../assets/imgs/about/aboutSocial.jpg";
import aboutSocialImg from "../assets/imgs/about/aboutSocial.png";
import imgSteps from "../assets/imgs/steps/imgSteps.jpg";

import bgHeroImg from "../assets/imgs/hero/bgHero.webp";
import imgAppStore from "../assets/imgs/hero/appStore.webp";
import imgGooglePlay from "../assets/imgs/hero/googlePlay.webp";

import imgDivisor from "../assets/imgs/features/imgDivisor.jpg";

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
  name: "Dra. Agnes Cristina – Advogada Trabalhista em Porto Velho - RO",
  email: "contato", // Email desejado pelo cliente
  domain: "agnescristinaadvocacia.adv.br", // Sem "www"
  phone: {
    ddd: "69",
    firstPart: "99240", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "5236", // Apenas os 4 últimos números
  },
  endereco: (
    <div>
      <p>Endereço:</p>
      <p>Av. Jatuarana</p>
      <p>nº 4699 - Nova Floresta Porto Velho - RO</p>
      <p>CEP 76807-313</p>
    </div>
  ),
  expediente: (
    <div>
      <p>Horário de expediente:</p>
      <p>Segunda à sexta-feira:</p>
      <p>8h às 18h</p>
    </div>
  ),
  obs: <span className="italic">A Definir</span>,
  instagramProfile: "agnescristina.adv", // Sem o @
  facebookProfile: "resenhadedireito3",
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
      miniTag: "ADVOGADA TRABALHISTA EM PORTO VELHO - RO",
      title: (
        <h1 className="mb-[16px]">
          Defendendo seus direitos
          <span className="text-primary"> como trabalhador!</span>
        </h1>
      ),
      subtitle:
        "Garantimos a proteção de seus direitos, enfrentando abusos e lutando por uma justiça justa e acessível.",
      heroImg: heroImg,
      ctaButtonText: "Entre em contato",
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
        text: "Atendimento em todo Brasil",
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
      app: {
        description: "Baixe nosso aplicativo para companhar seu processo:",
        imgs: {
          appStore: {
            img: imgAppStore,
            alt: "Ícone da App Store",
            link: "#",
          },
          playStore: {
            img: imgGooglePlay,
            alt: "Ícone da Play Store",
            link: "#",
          },
        },
      },
    },
    features: {
      miniTag: "ÁREAS DE ATUAÇÃO",
      title: "Defendendo seus direitos com excelência jurídica",
      subtitle:
        "Atuação especializada para garantir justiça e proteção ao trabalhador.",
      imgFeatures: imgFeatures,
      imgDivisor: imgDivisor,
      card1: {
        img: featuresImg1,
        title: "Reconhecimento de vínculo empregatício",
        subtitle:
          "Garantindo seus direitos quando o trabalho sem registro se torna injusto.",
        description: (
          <div>
            A_Definir
            <br />
            <br />
            A_Definir
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
            class="lucide lucide-car-taxi-front"
          >
            <path d="M10 2h4" />
            <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
            <path d="M7 14h.01" />
            <path d="M17 14h.01" />
            <rect width="18" height="8" x="3" y="10" rx="2" />
            <path d="M5 18v2" />
            <path d="M19 18v2" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card2: {
        img: featuresImg2,
        title: "Rescisão Indireta",
        subtitle:
          "Quando a empresa descumpre a lei, você pode rescindir o contrato com justa causa.",
        description: (
          <div>
            A_Definir
            <br />
            <br />
            A_Definir
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
            class="lucide lucide-file-text"
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
      card3: {
        img: featuresImg3,
        title: "Pagamento de Verbas Rescisórias em atraso (Rescisão)",
        subtitle:
          "Receba tudo o que lhe é devido no fim do contrato de trabalho.",
        description: (
          <div>
            A_Definir <br />
            <br />
            A_Definir
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
            class="lucide lucide-user-x"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="17" x2="22" y1="8" y2="13" />
            <line x1="22" x2="17" y1="8" y2="13" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card4: {
        img: featuresImg4,
        title: "Adicional de Insalubridade e Periculosidade",
        subtitle:
          "Compensação justa para quem trabalha exposto a riscos e agentes nocivos.",
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
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-radiation"
          >
            <path d="M12 12h.01" />
            <path d="M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z" />
            <path d="M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z" />
            <path d="M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card5: {
        img: featuresImg4,
        title: "Acidente de Trabalho",
        subtitle:
          "Reparação por danos, indenização por dano moral, estético e material.",
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
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-ambulance"
          >
            <path d="M10 10H6" />
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
            <path d="M8 8v4" />
            <path d="M9 18h6" />
            <circle cx="17" cy="18" r="2" />
            <circle cx="7" cy="18" r="2" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card6: {
        img: featuresImg4,
        title: "Demais especialidades",
        subtitle: "Entre em contato e com equipe e tire suas dúvidas",
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
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-plus"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
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
      miniTag: "QUEM É A DRA. AGNES CRISTINA",
      title: "Minha trajetória",
      subtitle: "Um caminho dedicado a garantir justiça para o trabalhador.",
      paragraph: (
        <div>
          Desde o início da minha carreira, percebi que muitos trabalhadores
          enfrentam dificuldades para fazer valer seus direitos. A insegurança,
          a falta de informação e o receio de enfrentar grandes empresas fazem
          com que muitos aceitem situações injustas, sem saber que podem lutar
          por algo melhor.
          <br />
          Foi essa realidade que me motivou a criar um escritório jurídico que
          fosse além da burocracia: um espaço onde cada trabalhador se sentisse
          acolhido, compreendido e representado.
        </div>
      ),
      buttonModalLabelAbout: "Continuar lendo",
      modal: (
        <p>
          Desde o início da minha carreira, percebi que muitos trabalhadores
          enfrentam dificuldades para fazer valer seus direitos. A insegurança,
          a falta de informação e o receio de enfrentar grandes empresas fazem
          com que muitos aceitem situações injustas, sem saber que podem lutar
          por algo melhor.
          <br />
          <br />
          Foi essa realidade que me motivou a criar um escritório jurídico que
          fosse além da burocracia: um espaço onde cada trabalhador se sentisse
          acolhido, compreendido e re
          <br />
          <br />
          Meu compromisso sempre foi oferecer um serviço acessível e humanizado,
          onde o cliente não se sentisse apenas mais um processo. Eu queria que
          cada pessoa que me procurasse tivesse a certeza de que estava sendo
          ouvida e que sua causa era importante.
          <br />
          <br />
          Ao longo dos anos, entendi que um bom advogado trabalhista não deve
          apenas conhecer as leis, mas também compreender as dores de quem está
          do outro lado, muitas vezes angustiado e sem saber por onde começar.
          <br />
          <br />
          Com a tecnologia, ampliei essa missão, oferecendo um atendimento
          online que mantém a proximidade e o acolhimento que sempre foram a
          base do meu trabalho.
          <br />
          <br />
          Dessa forma, posso ajudar trabalhadores de todo o Brasil a reivindicar
          seus direitos de maneira ágil e eficiente, sem que precisem enfrentar
          deslocamentos ou burocracias desnecessárias. Meu objetivo é tornar o
          acesso à justiça mais simples, transparente e, acima de tudo, humano.
          <br />
          <br />
          Mais do que advogar, minha missão é dar voz a quem precisa e garantir
          que nenhum trabalhador fique sem a devida proteção.
          <br />
          <br />
          Aqui, cada caso é tratado com dedicação e estratégia, porque sei que
          por trás de cada processo existe uma história, uma família e um
          direito que precisa ser respeitado.
          <br />
          <br />
        </p>
      ),
      ctaButtonAriaLabel: "Botão para entrar em contato",
      ctaButtonText: "Entre em contato",

      aboutSocial: {
        img: {
          img: aboutSocial,
          imgPrint: aboutSocialImg,
          alt: `Foto do Instagram do ${infos.name}`,
        },
        miniTag: "REDES SOCIAIS",
        title: "Conecte-se conosco",
        subtitle: "Aproveite nossas redes sociais para mantermos contato e ficar por dentro de atualizações importantes no mundo do direito.",
        labelInstagram: "Siga-me no Instagram",
        labelFacebook: "Siga-me no Facebook",
        labelLinkedin: "Siga-nos no LinkedIn",
        labelX: "Siga-nos no X",
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
            "Realizamos uma reunião para entender seu caso e identificar suas necessidades jurídicas.",
        },
        card2: {
          stepNumber: 2,
          cardTitle: "Análise detalhada",
          cardDescription:
            "Examinamos todos os aspectos do seu caso, revisando documentos e evidências para obter uma visão completa.",
        },
        card3: {
          stepNumber: 3,
          cardTitle: "Elaboração da estratégia",
          cardDescription:
            "Criamos uma estratégia jurídica personalizada para proteger seus interesses de maneira eficaz.",
        },
        card4: {
          stepNumber: 4,
          cardTitle: "Ação legal",
          cardDescription:
            "Iniciamos e conduzimos as ações judiciais necessárias, buscando a justiça e a solução de que você precisa.",
        },
      },
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
