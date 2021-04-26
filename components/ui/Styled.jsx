import styled from "styled-components";

// Common components that will be reused across multiple
// components are declared here

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  gap: ${(props) => props.gap || "0"};
  width: 100%;
`;

export const Button = styled.button`
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.75em 1.1em;
  border-radius: 3px;

  box-shadow: ${({ primary }) =>
    primary
      ? "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
      : null};

  // theme styling
  color: ${({ primary, theme: { colors } }) =>
    primary ? colors.white : colors.purple};
  background-color: ${({ primary, theme: { colors } }) =>
    primary ? colors.purple : colors.white};
  border: ${({ theme: { colors } }) => `2px solid ${colors.purple}`};

  :hover {
    background-color: blue;
    cursor: pointer;
  }
`;

export const HeaderWrapper = styled.header`
  background-color: ${({ theme: { colors } }) => colors.purpleTransparent};
  height: 110px;
  padding: 10px 32px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  align-items: center;

  // theme styling
  color: ${({ theme: { colors } }) => colors.honeydew};

  h1 {
    margin: 0;
    padding: 0;
  }
`;

export const Footer = styled.footer`
  height: 75px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;

  // theme styling
  color: ${({ white, theme: { colors } }) =>
    white ? colors.honeydew : colors.purple};
`;
