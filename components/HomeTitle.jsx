import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Button } from "./ui/Styled";

export default function HomeTitle() {
  return (
    <TitleWrapper>
      <div>
        <h1>Artist, Designer and Creative</h1>
        <ButtonWrapper>
          <Link href="/gallery">
            <Button>MY WORK</Button>
          </Link>
          <Link href="/contact">
            <Button primary>CONTACT ME</Button>
          </Link>
        </ButtonWrapper>
      </div>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.main`
  height: calc(100vh - 185px); // viewport height - header + footer
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 10em;

  @media screen and (max-width: 992px) {
    padding: 16px;
    justify-content: center;
    align-items: center;
  }

  // theme styling
  color: ${({ theme: { colors } }) => colors.honeydew};
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 2em;
  gap: 1em;
`;
