import { NewUserForm, UserCard } from "components";
import Modal from "components/Modal";
import ViewContainer from "containers/ViewContainer";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { filterListByUnitId } from "util";

const Users = ({ users }) => {
  const unitId = useSelector((state) => state.current.unitSelected);
  const listUsers = useSelector((state) => state.users.listUsers);
  const [showModal, setShowModal] = useState(false);
  console.log(users);
  return (
    <ViewContainer>
      <ButtonAdd onClick={() => setShowModal(true)}>Add Usuário</ButtonAdd>
      <Modal active={showModal} hideModal={() => setShowModal(false)} title="Adicionar Usuário">
        <NewUserForm setShowModalParent={setShowModal} />
      </Modal>
      {filterListByUnitId(listUsers, unitId).map((user) => {
        return <UserCard user={user} key={user.id} />;
      })}
    </ViewContainer>
  );
};

const ButtonAdd = styled.button`
  flex-basis: 30%;
  margin-bottom: 0.4rem;
  border: none;
  border-radius: 5px;
  &:hover {
    background: #4e7bdb81;
  }
`;

export default Users;
