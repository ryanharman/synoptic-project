import React from "react";
import { ImageRow } from "./Styled";

export default function NatureImages({ onImageClick }) {
  return (
    <>
      <ImageRow>
        <div
          onClick={() => {
            onImageClick(
              "/nature/forest-bridge.jpg",
              "A photo of a bridge by a forest"
            );
          }}
        >
          <img
            src="/nature/forest-bridge.jpg"
            alt="A photo of a bridge by a forest"
          />
        </div>
        <div
          onClick={() => {
            onImageClick("/nature/forest.jpg", "A beautiful forest");
          }}
        >
          <img src="/nature/forest.jpg" alt="A beautiful forest" />
        </div>
        <div
          onClick={() => {
            onImageClick("/nature/orange-lake.jpg", "An orange lake");
          }}
        >
          <img src="/nature/orange-lake.jpg" alt="An orange lake" />
        </div>
        <div
          onClick={() => {
            onImageClick("/nature/waterfall.jpg", "A waterfall");
          }}
        >
          <img src="/nature/waterfall.jpg" alt="A waterfall" />
        </div>
        <div
          onClick={() => {
            onImageClick("/nature/roses.jpg", "Some roses");
          }}
        >
          <img src="/nature/roses.jpg" alt="Some roses" />
        </div>
      </ImageRow>
    </>
  );
}
