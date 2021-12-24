import { cardBorderShadow, displayFlexCenter } from "css/styles";
import React from "react";
import styled from "styled-components";
import { AddIcon, EditIcon } from "./icon";

const DetalhesButton = ({ setShowModal, text, className }) => {
  return (
    <ButtonDetalhes type="button" className={className} onClick={() => setShowModal(true)}>
      {" "}
      {text}
      <Icon />
    </ButtonDetalhes>
  );
};

const Icon = styled(EditIcon)`
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ButtonDetalhes = styled.button`
  ${displayFlexCenter};
  ${cardBorderShadow}
  width: 50%;
  margin-bottom: 0.4rem;
  border: none;
  border-radius: 5px;
  height: 2rem;
  &:hover {
    /* background: ${(props) => props.theme.colorPrimary}; */
  }
  cursor: pointer;
  /* background: ${(props) => props.theme.colorSecondary}; */

  /* background: ${(props) => props.theme.colorSecondary}; */
`;

export default DetalhesButton;
