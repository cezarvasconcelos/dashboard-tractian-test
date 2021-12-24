import { displayFlexCenter } from "css/styles";
import React from "react";
import styled from "styled-components";
import { AddIcon } from "./icon";

const AddButton = ({ setShowModal, text, className }) => {
  return (
    <ButtonAdd type="button" className={className} onClick={() => setShowModal(true)}>
      {" "}
      <Icon />
      {text}
    </ButtonAdd>
  );
};

const Icon = styled(AddIcon)`
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ButtonAdd = styled.button`
  ${displayFlexCenter};
  flex-basis: 40%;
  min-width: 7rem;
  margin-bottom: 0.4rem;
  border: none;
  border-radius: 5px;
  height: 2rem;
  &:hover {
    background: ${(props) => props.theme.colorPrimary};
  }
  cursor: pointer;
  background: ${(props) => props.theme.colorSecondary};

  background: ${(props) => props.theme.colorSecondary};
`;

export default AddButton;
