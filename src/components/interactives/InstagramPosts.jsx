import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";

function InstagramPosts() {
  return (
    <SectionArea>
      <SectionWrapper>
        <div className="w-full">
          <script
            src="https://static.elfsight.com/platform/platform.js"
            async
          ></script>
          <div
            class="elfsight-app-e7ec97a1-e19e-4a5f-a2aa-fc41a08de188"
            data-elfsight-app-lazy
          ></div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default InstagramPosts;
