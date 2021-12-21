import styled from "styled-components";
import { displayFlex, displayFlexCenter } from "../css/styles";

const UnitsInfo = ({ users }) => {
  return (
    <UnitsInfoContainer>
      <span>Users</span>
      <span>20</span>
    </UnitsInfoContainer>
  );
};

const UnitsInfoContainer = styled.div`
  ${displayFlexCenter};
  width: 90%;
  height: 100px;
  flex-grow: 1;
  outline: 1px solid black;
`;

export default UnitsInfo;
