import React from "react";
import styled from "styled-components";
import { Button } from "./ui/Styled";

export default function HomeTitle() {
  return (
    <TitleWrapper>
      <div>
        <h1>Artist, Designer and Creative</h1>
        <ButtonWrapper>
          <Button>MY WORK</Button>
          <Button primary>CONTACT US</Button>
        </ButtonWrapper>
      </div>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.main`
  height: calc(100vh - 210px); // viewport height - header + footer
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
  font-family: ${({ theme: { fonts } }) => fonts[0]};
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 2em;
  gap: 1em;
`;
