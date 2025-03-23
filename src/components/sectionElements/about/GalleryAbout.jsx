import React from "react";
import imgAbout1 from "../../../assets/imgs/about/aboutImg1.jpg";
import imgAbout2 from "../../../assets/imgs/about/aboutImg2.jpg";
import imgAbout3 from "../../../assets/imgs/about/aboutImg3.jpg";
import imgAbout4 from "../../../assets/imgs/about/aboutImg4.jpg";
import imgAbout5 from "../../../assets/imgs/about/aboutImg5.jpg";
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
    <div className="flex bg-white justify-center w-full h-auto rounded-[20px]">
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
                      height: 300px; 
                      width: 100%;
                      object-fit: cover;
                      border-radius: 10px;
                    }

                     @media (min-width: 640px) and (max-width: 1023px) {
                        .custom-gallery .image-gallery-slide img {
                          height: 800px;
                         
                        }
                      }

                      @media (min-width: 1024px) {
                        .custom-gallery .image-gallery-slide img {
                          height: 470px;
                        }
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
