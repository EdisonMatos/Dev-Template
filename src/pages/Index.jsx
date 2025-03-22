import Navbar from "../components/sections/NavbarSocial";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import About from "../components/sections/About";
import AboutInstagram from "../components/sections/AboutInstagram";
import Cta from "../components/sections/Cta";
import Steps from "../components/sections/Steps";
// import Maps from "../components/sections/Maps";
import Faq from "../components/sections/Faq";
import FooterSocial from "../components/sections/FooterSocial";

import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import BackToTopButton from "../components/interactives/BackToTopButton";
import BlogPosts from "../components/sections/BlogPosts";
import "../styles/shapeDivs.css";

export default function Index() {
  return (
    <div>
      <Navbar LightMode={false} />
      <Hero appDownloadButtons={false} fundoImage={true} />

      <Features
        defaultFeature={false}
        featureIcons={true}
        button={false}
        modalWithCards={false}
        paragraphs={false}
        sixCards={false}
        paragraphsModal={false}
      />
      <About modal={true} showGallery={false} />
      <AboutInstagram
        socialPrint={true}
        instagram={true}
        facebook={false}
        linkedin={false}
        x={false}
      />
      {/* ShapeDiv */}
      <div class="custom-shape-divider-bottom-1742562382">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgSectionDark"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            class="shape-fill fill-white"
          ></path>
        </svg>
      </div>
      {/* fim da ShapeDiv */}
      <Cta />
      {/* ShapeDiv */}
      <div class="custom-shape-divider-bottom-1742562382">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-white"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            class="shape-fill fill-bgSectionDark"
          ></path>
        </svg>
      </div>
      {/* fim da ShapeDiv */}
      <Steps />
      {/* <BlogPosts /> */}
      <Faq />
      <FooterSocial LightMode={false} addres={true}  phoneSecundario={true} emailSecundario={true}  addresSecundario={true} />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
