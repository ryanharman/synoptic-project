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
  transition: all 0.25s;

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
    border: ${({ theme: { colors } }) => `2px solid ${colors.lightBlue}`};
    color: ${({ theme: { colors } }) => colors.purple};
    cursor: pointer;

    ${({ primary, theme: { colors } }) =>
      primary &&
      `
      color: ${colors.purple};
      border: 2px solid ${colors.lightBlue};
      background-color: transparent;
    `}

    ${({ transparent, theme: { colors } }) =>
      transparent &&
      `
    background-color: transparent;
    color: ${colors.honeydew};
    `}
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

export const ImgWrapper = styled.div`
  max-height: 100%;
  max-width: 50%;
  overflow: hidden;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
