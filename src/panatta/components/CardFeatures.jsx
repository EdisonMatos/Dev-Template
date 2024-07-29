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
    <div className="relative w-[300px] desktop1:w-[520px] mt-[40px] hover:scale-110 transition">
      <img className={`absolute ${position}`} src={img} alt={alt} />
      <h2 className="font-bold text-[28px] desktop1:text-[40px] font-barlow ">
        {title}
      </h2>{" "}
      <img className="w-[280px] desktop1:w-[400px]" src={bgFeatures} alt="" />
      <h6 className="text-center desktop1:text-left text-[16px] desktop1:text-[20px] w-[280px] desktop1:w-[400px] font-[Inter] font-bold mt-[40px] ">
        {description}
      </h6>
    </div>
  );
}
