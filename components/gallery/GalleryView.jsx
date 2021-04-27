import React from "react";
import NatureImages from "./NatureImages";
import TechImages from "./TechImages";

export default function GalleryView({ selected }) {
  if (selected === "nature") {
    return (
      <>
        <NatureImages />
      </>
    );
  }

  if (selected === "tech") {
    return (
      <>
        <TechImages />
      </>
    );
  }

  return (
    <>
      <TechImages />
      <NatureImages />
    </>
  );
}
