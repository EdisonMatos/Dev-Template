import "../styles/shapeDivs.css";
import Cta from "../components/sections/Cta";
import Faq from "../components/sections/Faq";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Steps from "../components/sections/Steps";
// import Maps from "../components/sections/Maps";
import Features from "../components/sections/Features";
import Navbar from "../components/sections/NavbarSocial";
import BlogPosts from "../components/sections/BlogPosts";
import FooterSocial from "../components/sections/FooterSocial";
import AboutInstagram from "../components/sections/AboutInstagram";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import Maps from "../components/sections/Maps";

export default function Index() {
  return (
    <>
      <Navbar LightMode={false} />
      <Hero
        appDownloadButtons={false}
        defaultHero={true}
        influencer={false}
        mesclado={false}
      />

      <Features
        defaultFeature={false}
        button={false}
        modalWithCards={false}
        paragraphs={false}
        sixCards={true}
        paragraphsModal={false}
      />
      <About modal={true} showGallery={false} />
      <AboutInstagram
        socialPrint={true}
        instagram={true}
        facebook={true}
        linkedin={false}
        x={false}
      />
      <Cta />
      <Steps />
      <Maps />
      {/* <BlogPosts /> */}
      <Faq />
      <FooterSocial
        obs={true}
        LightMode={false}
        addres={false}
        phoneSecundario={false}
        phoneTerciario={false}
        emailSecundario={false}
        addresSecundario={false}
        instagram={true}
        facebook={true}
      />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </>
  );
}
