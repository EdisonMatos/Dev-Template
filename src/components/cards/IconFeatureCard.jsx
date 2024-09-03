export default function IconFeatureCard(props) {
  const { icon, title, paragraph, className } = props;

  return (
    <div
      className={`w-full  tablet1:h-[385px] tablet1:w-[290px] desktop1:h-[320px] desktop2:h-[320px] desktop3:h-[315px] flex flex-col items-center desktop1:hover:scale-110 transition p-[18px] desktop1:p-0 desktop2:p-[18px] ${className}`}
    >
      <div className="h-[64px] w-[64px] mb-[24px] bg-primary rounded-md flex justify-center items-center text-secondary">
        {icon}
      </div>
      <h1 className="h-auto font-bold font-mainFont text-title3 text-center mb-[16px] text-secondary">
        {title}
      </h1>
      <p className="text-center text-black opacity-70 font-mainFont w-[90%]">
        {paragraph}
      </p>
    
    </div>
  );
}
