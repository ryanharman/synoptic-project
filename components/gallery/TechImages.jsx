import React from "react";
import { ImageRow } from "./Styled";

export default function TechImages() {
  return (
    <>
      <ImageRow>
        <div>
          <img
            src="/tech/group-tech.jpg"
            alt="People using their tech together"
          />
        </div>
        <div>
          <img src="/tech/iphone.jpg" alt="A colourful iPhone" />
        </div>
        <div>
          <img src="/tech/macbook.jpg" alt="A MacBook Pro" />
        </div>
      </ImageRow>
      <ImageRow>
        <div>
          <img src="/tech/retro-tech.jpg" alt="Some retro tech" />
        </div>
        <div>
          <img src="/tech/typing.jpg" alt="Someone typing" />
        </div>
      </ImageRow>
    </>
  );
}
