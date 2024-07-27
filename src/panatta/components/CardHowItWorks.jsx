export default function CardHowItWorks({ number, title, description }) {
  return (
    <div className="rounded-[25px] bg-transparent hover:bg-[#091D0B] transition border-solid border-[3px] border-[#2FFF76] px-[16px] py-[12px] w-full">
      <div className="flex items-center mb-[7px]">
        <h1 className="bg-[#2FFF76] px-[18px] py-[6px] rounded-[10px] text-[22px] phone3:text-[40px] font-black mr-[14px] leading-none text-[#112313] font-[Inter]">
          {number}
        </h1>
        <h1 className="text-[32px] phone3:text-[50px] leading-none font-league">
          {title}
        </h1>
      </div>
      <p className="font-[Inter] text-[16px] phone3:text-[20px]">
        {description}
      </p>
    </div>
  );
}
