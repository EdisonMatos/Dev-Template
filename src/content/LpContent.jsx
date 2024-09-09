import bgImg from "../assets/imgs/hero/bgHero.jpg";
import logo from "../assets/imgs/logo/logo.png";

const currentYear = new Date().getFullYear();

const infos = {
  name: "Dr Exemplo",
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
      miniTag: "A definir minitag features",
      title: "A definir title features",
    },
    cards: {
      card1: {
        icon: {},
        title: "title 1",
        description: "description1",
      },
      card2: {
        icon: {},
        title: "title 2",
        description: "description2",
      },
      card3: {
        icon: {},
        title: "title 3",
        description: "description3",
      },
      card4: {
        icon: {},
        title: "title 4",
        description: "description4",
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
    paragraph: "A definir paragraph about",
    buttonLabel: "A definir buton about",
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A definir minitag whyus",
      title: "A definir title whyus",
    },
    cards: {
      card1: {
        icon: {},
        title: "title 1 whyus",
        description: "description1 whyus",
      },
      card2: {
        icon: {},
        title: "title 2 whyus",
        description: "description2 whyus",
      },
      card3: {
        icon: {},
        title: "title 3 whyus",
        description: "description3 whyus",
      },
      card4: {
        icon: {},
        title: "title 4 whyus",
        description: "description4 whyus",
      },
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "A definir minitag cta",
      title: "A definir title cta",
      subtitle: "A definiri cta",
      buttonLabel: "A definir buton about",
    },
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
