import styled from "styled-components";
import { displayFlex, displayFlexCenter } from "../css/styles";

const UsersInfo = ({ users }) => {
  return (
    <UsersInfoContainer>
      <span>Users</span>
      <span>20</span>
    </UsersInfoContainer>
  );
};

const UsersInfoContainer = styled.div`
  ${displayFlexCenter};
  width: 90%;
  height: 100px;
  flex-grow: 1;
  outline: 1px solid black;
`;
const UnitsInfoContainer = styled.div`
  ${displayFlexCenter};
  width: 90%;
  height: 100px;
  flex-grow: 1;
  outline: 1px solid black;
`;

export default UsersInfo;
