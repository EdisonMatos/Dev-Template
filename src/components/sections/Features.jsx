import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../../index.css";
import FeaturesModalWithCards from "./FeaturesModalWithCards";
import Features6cards from "./Features6cards";
import FeaturesParagraphs from "./FeaturesParagraphs";
import FeaturesButton from "./FeaturesButton";
import DefaultModals from "./DefaultModals";
import FeaturesWithIcons from "./FeaturesWithIcons";

export default function Features({
  modalWithCards,
  sixCards,
  paragraphs,
  button,
  paragraphsModal,
  defaultFeature,
}) {
  return (
    <>
      {modalWithCards && <FeaturesModalWithCards />}
      {sixCards && <Features6cards />}
      {paragraphs && <FeaturesParagraphs />}
      {button && <FeaturesButton />}
      {paragraphsModal && <DefaultModals />}
      {defaultFeature && <FeaturesWithIcons />}
    </>
  );
}
