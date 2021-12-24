import { displayFlexCenter } from "css/styles";
import styled from "styled-components";
import { DeleteIcon } from "./icon";

const DeleteButton = ({ onRemove, className }) => {
  return (
    <ButtonDelete type="button" className={className} onClick={onRemove}>
      {" "}
      <Icon />
    </ButtonDelete>
  );
};

const Icon = styled(DeleteIcon)`
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ButtonDelete = styled.button`
  ${displayFlexCenter};
  border: none;
  cursor: pointer;
  background: none;
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
`;

export default DeleteButton;
