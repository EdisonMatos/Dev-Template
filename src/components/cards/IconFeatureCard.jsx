export default function IconFeatureCard(props) {
  const { icon, title, paragraph, className } = props;

  return (
    <div
      className={`componenteCard bg-white w-[360px] flex flex-col items-center p-[18px] ${className}`}
    >
      <div className="h-[64px] w-[64px] mb-[24px] bg-primary rounded-lg flex justify-center items-center text-white">
        {icon}
      </div>
      <h1 className="font-bold font-mainFont text-title3 mb-[16px]">{title}</h1>
      <p className="text-center text-black opacity-70 font-mainFont w-[90%]">
        {paragraph}
      </p>
    </div>
  );
}