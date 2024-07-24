export default function ButtonsFooter({ label, buttonLink }) {
  return (
    <a ref={buttonLink} target="_blank" className="transition hover:scale-110">
      <button className="bg-gradient-to-b from-[#2FFF76] to-[#1C9947] rounded-[23px] py-[7px] px-[7px]">
        <div className="rounded-[20px] border-solid border-[1px] border-[#112313] py-[10px] px-[27.5px] text-[17px] italic font-extrabold text-[#112313]">
          {label}
        </div>
      </button>
    </a>
  );
}
