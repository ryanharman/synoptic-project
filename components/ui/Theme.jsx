import React from "react";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    honeydew: "#E5F4E3",
    lightBlue: "#5DA9E9",
    darkBlue: "#003F91",
    white: "#FFFFFF",
    purple: "#6D326D",
    purpleTransparent: "rgba(109, 50, 109, 0.75)",
  },
  fonts: ["Roboto", "sans-serif"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeReset>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </ThemeReset>
);

export default Theme;

const ThemeReset = styled.div`
  font-family: Roboto;

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  input,
  textarea,
  select {
    font: inherit;
  }
`;
