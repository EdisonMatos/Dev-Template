import "../../styles/shapeDivs.css";
import Quadrada from "../../components/sectionElements/hero/Quadrada";
import Panoramica from "../../components/sectionElements/hero/Panoramica";
import Influencer from "../../components/sectionElements/hero/Influencer";

export default function Hero({ quadrada, influencer, panoramica }) {
  return (
    <>
      {panoramica ? (
        <Panoramica />
      ) : influencer ? (
        <Influencer />
      ) : (
        quadrada &&<Quadrada />
        
      )}
    </>
  );
}
