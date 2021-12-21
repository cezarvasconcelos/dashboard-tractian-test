import { useEffect, useState } from "react";
import styled from "styled-components";
import { displayFlex, displayFlexCenter } from "../css/styles";

const UsersInfo = ({ users }) => {
  const [totalUsers, setTotalUsers] = useState(0);

  console.log(users);
  useEffect(() => {
    setTotalUsers(users.length);
  }, [users]);
  return (
    <UsersInfoContainer>
      <span>Users</span>
      <span>{totalUsers}</span>
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

export default UsersInfo;
