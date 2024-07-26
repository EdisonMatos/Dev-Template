import React from 'react';
import Ball from '../img/hero/Bola.png'; 

const SpinningImage = () => {
  return (
    <img className="h-auto w-[50%] spin" src={Ball} alt="Bola girando" />
  );
};

export default SpinningImage;
