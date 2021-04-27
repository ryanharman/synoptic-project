import styled from "styled-components";

export const TextInput = styled.input`
  padding: 0.5em 1em;
`;

export const Form = styled.form`
  max-width: 1250px;
  background-color: ${({ theme: { colors } }) => colors.honeydew};
  display: flex;
  flex-direction: column;
  padding: 2em;
  margin: 2em;

  div {
    display: flex;
    flex-direction: column;
    margin: 1em 0;
  }

  && h1 {
    margin-bottom: 1em;
  }

  && button {
    margin-top: 1em;
  }
`;
