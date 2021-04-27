import React from "react";
import NatureImages from "./NatureImages";
import TechImages from "./TechImages";

export default function GalleryView({ selected, onImageClick }) {
  if (selected === "nature") {
    return (
      <>
        <NatureImages onImageClick={onImageClick} />
      </>
    );
  }

  if (selected === "tech") {
    return (
      <>
        <TechImages onImageClick={onImageClick} />
      </>
    );
  }

  return (
    <>
      <TechImages onImageClick={onImageClick} />
      <NatureImages onImageClick={onImageClick} />
    </>
  );
}
