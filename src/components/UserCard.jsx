import { UserIcon } from "components/icon";
import { displayFlexCenter } from "css/styles";
import styled from "styled-components";

const UserCard = ({ user, setResponsible, setShowModal, onRemove, pointer }) => {
  // const [currentUser, setCurrentUser] = useState(users);
  const handleClick = (e) => {
    e.preventDefault();
    if (setResponsible) {
      setResponsible(user);
      setShowModal(false);
    }
  };
  return (
    <CardContainer onClick={handleClick} pointer={pointer}>
      {!pointer ? (
        <DeletaButton
          onClick={() => {
            onRemove(user.id);
          }}
        >
          X
        </DeletaButton>
      ) : (
        ""
      )}
      <UserAvatar />
      <UserName>{user.name}</UserName>
      <UserEmail>{user.email}</UserEmail>{" "}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 220px;
  heigth: 200px;
  /* outline: 1px solid blue; */
  padding: 1.3rem 0.4rem;
  ${({ pointer }) =>
    pointer &&
    `
    cursor: pointer;
  `}
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 1rem;
  position: relative;
`;

const UserAvatar = styled(UserIcon)`
  border: 5px solid ${(props) => props.theme.primaryColor};
  border-radius: 999px;
  margin-right: 0.3rem;
  grid-area: 1 / 1 / 3 / 2;
`;

const UserName = styled.span`
  font-weight: 900;
  grid-area: 1 / 2 / 2 / 3;
`;

const UserEmail = styled.span`
  grid-area: 2 / 2 / 3 / 3;
`;
const DeletaButton = styled.button`
  position: absolute;
  right: 0;
`;
export default UserCard;
