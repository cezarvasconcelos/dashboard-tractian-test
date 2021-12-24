import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  position: relative;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #cecdcd;
  height: 25px;
  padding: 0.4em;
  font-weight: 500;
  &:placeholder {
    color: ${(props) => props.theme.secondTextColor};
    position: absolute;
    letter-spacing: 0.2px;
  }
`;
