import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function WordPressBlogCard({ img, title, subtitle, link }) {
  return (
    <div>
      <MotionDivDownToUp>
        <div
          id="cardBlog"
          className="w-[350px] flex flex-col desktop1:max-w-[500px] desktop3:max-w-[375px] desktop1:min-h-[600px] bg-green-800 rounded-2xl p-[20px]"
        >
          <div className="w-full h-[250px] tablet1:h-[300px] flex justify-center items-center overflow-hidden rounded-2xl">
            <div className="w-full">{img}</div>
          </div>
          <h1 className=" tablet1:h-[60px] mt-4 text-title2 leading-[25px] font-medium bg-yellow-800" title="blogTitle">
            {title}
          </h1>
          <h2 className="tablet1:h-[90px] mt-2 text-paragraph5 leading-[25px] bg-blue-900" title="blogSubtitle">
            {subtitle}
          </h2>
          <button
            id="botãoSaberMais"
            className="mt-[20px] bg-primary p-[20px] rounded-2xl w-full text-paragraph5 transition desktop1:hover:scale-105"
          >
            {link}
          </button>
        </div>
      </MotionDivDownToUp>
    </div>
  );
}
