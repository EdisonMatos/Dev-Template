export default function HowItWorksCard({ number, title, description }) {
  return (
    <div className="flex flex-col justify-center items-center phone3:items-start w-full phone3:w-[45%] font-mainFont desktop1:hover:scale-110 transition">
      <div className="bg-buttonColor mb-[32px] p-[25px] flex justify-center items-center rounded-full h-[48px] w-[48px] text-secondary text-title1 font-semibold">
        {number}
      </div>
      <h1 className="text-[20px] text-lighter font-bold mb-[24px]">{title}</h1>
      <p className="text-[16px] text-lighter text-center phone3:text-left opacity-60">
        {description}
      </p>
    </div>
  );
}
