import React from "react";

// todo: have the images in an array with their
// categories on to filter by and .map over them
// to render

export default function GalleryView() {
  return <ImageFlexbox></ImageFlexbox>;
}

const ImageFlexbox = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    height: 20vh;
    flex-grow: 1;
  }

  img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
`;
