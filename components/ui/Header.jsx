import React, { useState } from "react";
import styled from "styled-components";
import { FlexContainer } from "./Styled";
import Link from "next/link";

// TODO: Improve aesthetic of the burger menu nav bar

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleBurgerClick() {
    setOpen(!open);
  }

  return (
    <HeaderWrapper>
      <FlexContainer justify="space-between">
        <Link href="/">
          <a>
            <h1>Ryan Harman</h1>
            <p>Photography Blog</p>
          </a>
        </Link>
        <Nav isOpen={open}>
          <ul>
            <Link href="/about">
              <a>
                <li>About</li>
              </a>
            </Link>
            <Link href="/blogs">
              <a>
                <li>Blog</li>
              </a>
            </Link>
            <Link href="/gallery">
              <a>
                <li>Gallery</li>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <li>Contact</li>
              </a>
            </Link>
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
    gap: 2em;
    list-style: none;
    padding: 0;
    margin: 0;
    list-style-type: none;

    a {
      padding: 1em;
      width: 100%;
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
      background-color: ${({ theme: { colors } }) => colors.purple};
    }

    && ${Burger} {
      display: block;
    }
  }
`;

const HeaderWrapper = styled.header`
  background-color: ${({ theme: { colors } }) => colors.purple};
  height: 110px;
  padding: 1em 2em;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  align-items: center;

  // theme styling
  color: ${({ theme: { colors } }) => colors.honeydew};

  h1 {
    margin: 0;
    padding: 0;
  }

  a {
    transition: all 0.25s;

    :hover {
      color: ${({ theme: { colors } }) => colors.lightBlue};
    }
  }
`;
