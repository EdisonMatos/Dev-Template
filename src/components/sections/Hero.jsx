import "../../styles/shapeDivs.css";
import Quadrada from "../../components/sectionElements/hero/Quadrada";
import Panoramica from "../../components/sectionElements/hero/Panoramica";
import Influencer from "../../components/sectionElements/hero/Influencer";

export default function Hero({ defaultHero, influencer, mesclado, LightMode }) {
  return (
    <>
      {mesclado ? (
        <Panoramica />
      ) : influencer ? (
        <Influencer />
      ) : (
        defaultHero &&<Quadrada LightMode={LightMode}/>
        
      )}
    </>
  );
}
