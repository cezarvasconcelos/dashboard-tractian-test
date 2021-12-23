import { AssetsInfo, GeneralChart, UnitsInfo, UserCard, UsersInfo } from "components";
import ViewContainer from "components/containers/ViewContainer";
import { UserIcon } from "components/icon";
import { displayFlexCenter } from "css/styles";
import { useState } from "react";
import styled from "styled-components";

const Users = ({ users }) => {
  // const [currentUser, setCurrentUser] = useState(users);
  console.log(users);
  return (
    <ViewContainer>
      {users.map((user) => {
        return <UserCard user={user} key={user.id} />;
      })}
    </ViewContainer>
  );
};

export default Users;
