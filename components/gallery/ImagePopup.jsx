import React from "react";
import styled from "styled-components";

export default function ImagePopup({ src, alt, visible, close }) {
  return (
    <Popup
      display={visible}
      onClick={() => {
        close();
      }}
    >
      <Image src={src} alt={alt} />
    </Popup>
  );
}

const Popup = styled.div`
  display: ${({ display }) => (display ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
  :after {
    content: "Click anywhere to close";
    color: ${({ theme: { colors } }) => colors.honeydew};
    margin-top: 1em;
  }
`;

const Image = styled.img`
  max-width: 75vw;
  max-height: 80vh;
`;
