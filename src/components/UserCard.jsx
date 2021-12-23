import { UserIcon } from "components/icon";
import { displayFlexCenter } from "css/styles";
import styled from "styled-components";

const UserCard = ({ user }) => {
  // const [currentUser, setCurrentUser] = useState(users);
  return (
    <CardContainer>
      <UserAvatar />
      <UserName>{user.name}</UserName>
      <UserEmail>{user.email}</UserEmail>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  ${displayFlexCenter};
  flex-wrap: wrap;
  width: 200px;
  heigth: 200px;
  outline: 1px solid blue;
  padding: 0.5rem 0;
`;

const UserAvatar = styled(UserIcon)`
  /* width: 30%; */
  border: 5px solid red;
  border-radius: 999px;
  margin-right: 0.3rem;
`;

const UserName = styled.span`
  font-weight: 900;
`;

const UserEmail = styled.span``;
export default UserCard;
