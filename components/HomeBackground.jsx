import React from "react";
import styled from "styled-components";

export default function HomeBackground() {
  return <Background></Background>;
}

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #ffffff;
  background-image: url("https://images.unsplash.com/photo-1499686638362-6f5f635a9cf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 992px) {
    filter: blur(3px);
    filter: drop-shadow(0);
  }
`;
