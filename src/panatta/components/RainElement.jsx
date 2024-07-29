import React, { useEffect } from "react";
import "../../index.css";

const RainElement = () => {
  useEffect(() => {
    makeItRain();
  }, []);

  const makeItRain = () => {
    const rainContainer = document.querySelector(".rain");
    rainContainer.innerHTML = "";

    let increment = 0;
    let drops = "";

    while (increment < 100) {
      const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
      const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
      increment += randoFiver;
      // velocidade do efeito
      drops += `<div class="drop" style="left: ${increment}%; bottom: ${
        randoFiver + randoFiver - 1 + 100
      }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.9${randoHundo}s;">
                  <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration:0.9${randoHundo}s;"></div>
                </div>`;
    }

    rainContainer.innerHTML = drops;
  };

  return <div className="rain absolute inset-0"></div>;
};

export default RainElement;
