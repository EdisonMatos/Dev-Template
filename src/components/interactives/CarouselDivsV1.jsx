import React from "react";
import { Carousel } from "primereact/carousel";

export default function CarouselDivsV1({ children }) {
  //   const responsiveOptions = [
  //     {
  //       breakpoint: "1400px",
  //       numVisible: 1,
  //       numScroll: 1,
  //     },
  //     {
  //       breakpoint: "1199px",
  //       numVisible: 1,
  //       numScroll: 1,
  //     },
  //     {
  //       breakpoint: "767px",
  //       numVisible: 1,
  //       numScroll: 1,
  //     },
  //     {
  //       breakpoint: "575px",
  //       numVisible: 1,
  //       numScroll: 1,
  //     },
  //   ];

  const itemTemplate = (item) => {
    return (
      <div className="border-1 rounded text-center py-5 px-3 h-auto w-auto">
        <div className="">{item}</div>
      </div>
    );
  };

  return (
    <div className="">
      <Carousel
        value={children}
        numVisible={1}
        numScroll={1}
        // responsiveOptions={responsiveOptions}
        className=""
        circular
        autoplayInterval={8000}
        itemTemplate={itemTemplate}
      />
    </div>
  );
}
