export default function SectionHeader({ tag, title }) {
  return (
    <div className="flex flex-col">
      <h6 className="text-left text-[25px] text-white font-[Inter] leading-none">
        {tag}
      </h6>
      <h1 className="text-left font-[Inter] text-[60px] font-black text-white leading-[60px]">
        {title}
      </h1>
    </div>
  );
}

// Feito leading médio
