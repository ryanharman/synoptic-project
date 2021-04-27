import styled from "styled-components";

export const ImageRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  div {
    height: 35vh;
    flex-grow: 1;

    img {
      max-height: 100%;
      min-width: 100%;
      object-fit: cover;
      transition: all 0.15s;

      :hover {
        transform: scaleY(1.02) scaleX(1.02);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
      }
    }
  }
`;
