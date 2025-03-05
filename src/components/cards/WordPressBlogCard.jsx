import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function WordPressBlogCard({ img, title, subtitle, link }) {
  return (
    <div>
      <MotionDivDownToUp>
        <div
          id="cardBlog"
          className="w-full desktop1:max-w-[500px] desktop3:max-w-[375px] bg-neutral-200 rounded-2xl p-[20px]"
        >
          <div className="w-full">{img}</div>
          <h1 title="blogTitle">{title}</h1>
          <h2 title="blogSubtitle">{subtitle}</h2>
          <button
            id="botãoSaberMais"
            className="mt-[20px] bg-primary p-[20px] rounded-2xl"
          >
            {link}
          </button>
        </div>
      </MotionDivDownToUp>
    </div>
  );
}
