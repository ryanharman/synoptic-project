import React, { useState } from "react";
import styled from "styled-components";
import { FlexContainer, HeaderWrapper } from "./Styled";

// TODO: Improve aesthetic of the burger menu nav bar

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleBurgerClick() {
    setOpen(!open);
  }

  return (
    <HeaderWrapper>
      <FlexContainer justify="space-between">
        <div>
          <h1>Ryan Harman</h1>
          <p>Photography Blog</p>
        </div>
        <Nav isOpen={open}>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
          <Burger onClick={handleBurgerClick}>BURGER</Burger>
        </Nav>
      </FlexContainer>
    </HeaderWrapper>
  );
}

const Burger = styled.div`
  display: none;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    gap: 25px;
    list-style: none;
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      padding: 16px;
    }
  }

  @media screen and (max-width: 700px) {
    ul {
      display: ${({ isOpen }) => (isOpen ? "block" : "none")};
      flex-direction: column;
      z-index: 5;
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      width: 100vw;
      margin-top: 110px;
      background-color: ${({ theme: { colors } }) => colors.purpleTransparent};
    }

    && ${Burger} {
      display: block;
    }
  }
`;
