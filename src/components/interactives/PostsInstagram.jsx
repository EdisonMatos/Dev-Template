import React, { useEffect } from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import "../../../src/index.css";

function InstagramPosts() {
  useEffect(() => {
    // Adicionando o script dinamicamente quando o componente for montado
    const script = document.createElement("script");
    script.src = "https://widget.taggbox.com/embed-lite.min.js";
    script.type = "text/javascript";
    script.async = true;

    // Adicionando o script ao DOM
    document.body.appendChild(script);

    return () => {
      // Remover o script quando o componente for desmontado
      document.body.removeChild(script);
    };
  }, []);

  return (
    <SectionArea>
      <SectionWrapper>
        <div className="w-full">
          <div
            className="taggbox"
            style={{ width: "100%", height: "100%" }}
            data-widget-id="2136697"
            data-tags="false"
          ></div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default InstagramPosts;
