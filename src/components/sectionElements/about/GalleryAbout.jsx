import React from "react";
import imgAbout1 from "../../../assets/imgs/about/aboutImg1.png";
import imgAbout2 from "../../../assets/imgs/about/aboutImg2.png";
import imgAbout3 from "../../../assets/imgs/about/aboutImg3.png";
import imgAbout4 from "../../../assets/imgs/about/aboutImg4.png";
import imgAbout5 from "../../../assets/imgs/about/aboutImg5.png";
import ImageGallery from "react-image-gallery";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";

function GalleryAbout() {
  const images = [
    {
      original: imgAbout1,
      thumbnail: imgAbout1,
    },
    {
      original: imgAbout2,
      thumbnail: imgAbout2,
    },
    {
      original: imgAbout3,
      thumbnail: imgAbout3,
    },
    {
      original: imgAbout4,
      thumbnail: imgAbout4,
    },
    {
      original: imgAbout5,
      thumbnail: imgAbout5,
    },
  ];
  return (
    <div className="flex bg-white justify-center w-full h-[350px]">
      <MotionDivDownToUp className="relative flex justify-center w-full ">
        <div className="w-full">
          <ImageGallery
            items={images}
            showNav={false} // Ativando a navegação
            showFullscreenButton={false} // Desativando botão de tela cheia
            useBrowserFullscreen={false} // Desativando o uso de tela cheia do navegador
            showBullets={false}
            showPlayButton={false} // Remove o botão de play
            showThumbnails={false} // Remove as miniaturas
            autoPlay={true}
            additionalClass="custom-gallery"
          />
          <style>
            {`
                    .custom-gallery .image-gallery-slide img {
                      height: auto; 
                      width: 100%;
                      object-fit: contain; 
                    }

                    .custom-gallery .image-gallery-thumbnails img {
                      height: 60px;  
                      width: 100px;  
                      object-fit: cover; 
                    }
                  `}
          </style>
        </div>
      </MotionDivDownToUp>
    </div>
  );
}

export default GalleryAbout;
