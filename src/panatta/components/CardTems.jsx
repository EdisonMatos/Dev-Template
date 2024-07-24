export default function CardTerms({ title, paragraph }) {
  return (
    <div className="containerTítuloETexto w-full pl-[69px] pr-[97px] mb-[26px]">
      <h1 className="font-bold text-[30px] mb-[4px] leading-[30px]">{title}</h1>
      <p className="text-[27px]">{paragraph}</p>
    </div>
  );
}
