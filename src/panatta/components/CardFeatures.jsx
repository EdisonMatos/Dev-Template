import bgFeatures from "../img/features/bgFeatures.png";
import features1 from "../img/features/features1.png";

export default function CardFeatures({
  title,
  img,
  alt,
  position,
  description,
}) {
  return (
    <div className="relative w-[520px]">
      <img className={`absolute ${position}`} src={img} alt={alt} />
      <h2 className="font-bold text-[40px] font-barlow ">{title}</h2>{" "}
      <img className="w-[400px]" src={bgFeatures} alt="" />
      <h6 className="text-[20px] w-[400px] font-[Inter] font-bold mt-[40px] ">
        {description}
      </h6>
    </div>
  );
}
