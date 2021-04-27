import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import GalleryView from "../components/gallery/GalleryView";
import ImagePopup from "../components/gallery/ImagePopup";
import Header from "../components/ui/Header";
import { Button, Footer } from "../components/ui/Styled";
import Theme from "../components/ui/Theme";

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  function handleFilterChange(selected) {
    setFilter(selected);
  }

  // state used to manage the individual image clicks
  const [viewImage, setViewImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedAlt, setSelectedAlt] = useState("");

  function handleImageSelection(src, alt) {
    setSelectedImage(src);
    setSelectedAlt(alt);
    setViewImage(true);
  }

  function closeImageView() {
    setViewImage(false);
  }

  return (
    <Theme>
      <Head>
        <title>Ryan's Photography Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <GalleryWrapper>
        <ButtonWrapper>
          <Button
            onClick={() => {
              handleFilterChange("all");
            }}
          >
            All Images
          </Button>
          <Button
            onClick={() => {
              handleFilterChange("tech");
            }}
          >
            Tech Images
          </Button>
          <Button
            onClick={() => {
              handleFilterChange("nature");
            }}
          >
            Nature
          </Button>
        </ButtonWrapper>
        <GalleryView selected={filter} onImageClick={handleImageSelection} />{" "}
        <ImagePopup
          src={selectedImage}
          alt={selectedAlt}
          visible={viewImage}
          close={closeImageView}
        />
      </GalleryWrapper>
    </Theme>
  );
}

const GalleryWrapper = styled.main`
  width: 100%auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 2em;
  margin-bottom: 2em;
`;
