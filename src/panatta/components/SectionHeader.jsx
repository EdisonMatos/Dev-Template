export default function SectionHeader({ tag, title }) {
  return (
    <div className="flex flex-col">
      <h6 className="text-left text-[18px] phone3:text-[25px] text-white font-[Inter] leading-none">
        {tag}
      </h6>
      <h1 className="text-left font-[Inter] text-[40px] leading-[45px] phone3:text-[60px] font-black text-white phone3:leading-[65px]">
        {title}
      </h1>
    </div>
  );
}

// Feito leading médio
