import "../../styles/shapeDivs.css";
import HeroDefault from "../../components/sectionElements/hero/HeroDefault";
import HeroFundoImage from "../../components/sectionElements/hero/HeroFundoImage";
import HeroPersonImg from "../../components/sectionElements/hero/HeroPersonImg";

export default function Hero({ influencer, personImg }) {
  return (
    <>
      {influencer ? (
        <HeroFundoImage />
      ) : personImg ? (
        <HeroPersonImg />
      ) : (
        <HeroDefault />
      )}
    </>
  );
}
