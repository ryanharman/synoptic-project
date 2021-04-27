import React from "react";
import { ImageRow } from "./Styled";

export default function TechImages({ onImageClick }) {
  return (
    <>
      <ImageRow>
        <div
          onClick={() => {
            onImageClick(
              "/tech/group-tech.jpg",
              "People using their tech together"
            );
          }}
        >
          <img
            src="/tech/group-tech.jpg"
            alt="People using their tech together"
          />
        </div>
        <div
          onClick={() => {
            onImageClick("/tech/iphone.jpg", "A colourful iPhone");
          }}
        >
          <img src="/tech/iphone.jpg" alt="A colourful iPhone" />
        </div>
        <div
          onClick={() => {
            onImageClick("/tech/macbook.jpg", "A MacBook Pro");
          }}
        >
          <img src="/tech/macbook.jpg" alt="A MacBook Pro" />
        </div>
      </ImageRow>
      <ImageRow>
        <div
          onClick={() => {
            onImageClick("/tech/retro-tech.jpg", "Some retro tech");
          }}
        >
          <img src="/tech/retro-tech.jpg" alt="Some retro tech" />
        </div>
        <div
          onClick={() => {
            onImageClick("/tech/typing.jpg", "Someone typing");
          }}
        >
          <img src="/tech/typing.jpg" alt="Someone typing" />
        </div>
      </ImageRow>
    </>
  );
}
