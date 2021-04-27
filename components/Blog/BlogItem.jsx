import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ImgWrapper } from "../ui/Styled";

export default function BlogItem({ img, children }) {
  return (
    <BlogWrapper>
      <ImgWrapper>
        <Image src={img} objectFit="cover" width={1920} height={2880} />
      </ImgWrapper>
      <BlogPreview>{children}</BlogPreview>
    </BlogWrapper>
  );
}

const BlogWrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.honeydew};
  display: flex;
  flex-direction: row;
  height: 350px;
  position: relative;
  width: 85vw;
  margin: 2em auto;
`;

const BlogPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em 2em;

  h3 {
    font-size: 0.9em;
    font-style: italic;
    font-weight: 400;
    margin-top: 0.25em;
  }
`;
