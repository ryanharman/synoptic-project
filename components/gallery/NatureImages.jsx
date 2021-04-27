import React from "react";
import { ImageRow } from "./Styled";

export default function NatureImages() {
  return (
    <>
      <ImageRow>
        <div>
          <img
            src="/nature/forest-bridge.jpg"
            alt="A photo of a bridge by a forest"
          />
        </div>
        <div>
          <img src="/nature/forest.jpg" alt="A beautiful forest" />
        </div>
        <div>
          <img src="/nature/orange-lake.jpg" alt="An orange lake" />
        </div>
        <div>
          <img src="/nature/waterfall.jpg" alt="A waterfall" />
        </div>
        <div>
          <img src="/nature/roses.jpg" alt="Some roses" />
        </div>
      </ImageRow>
    </>
  );
}
