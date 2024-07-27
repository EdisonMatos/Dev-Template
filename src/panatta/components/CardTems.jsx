export default function CardTerms({ title, paragraph }) {
  return (
    <div className=" w-full pl-[30px] tablet1:pl-[69px] pr-[30px] tablet1:pr-[97px] mb-[26px]">
      <h1 className="font-bold text-[20px] tablet1:text-[30px] mb-[4px] leading-[30px]">
        {title}
      </h1>
      <p className="text-[16px] tablet1:text-[27px]">{paragraph}</p>
    </div>
  );
}
