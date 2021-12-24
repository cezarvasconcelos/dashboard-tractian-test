import { AddButton, NewUserForm, UserCard } from "components";
import Modal from "components/Modal";
import ViewContainer from "containers/ViewContainer";
import { displayFlexCenter } from "css/styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteUser, userDeleteFromList } from "redux/users";
import styled from "styled-components";
import { filterListByUnitId } from "util";

const Users = ({ users }) => {
  const dispatch = useDispatch();
  const unitId = useSelector((state) => state.current.unitSelected);
  const listUsers = useSelector((state) => state.users.listUsers);
  const [showModal, setShowModal] = useState(false);

  const onRemove = (idUser) => {
    dispatch(deleteUser(idUser));
    dispatch(userDeleteFromList(idUser));
  };

  // console.log(users);
  return (
    <ViewContainer>
      <ContainerButton>
        <AddButton setShowModal={setShowModal} text={"Add Usuário"} />
        <Modal active={showModal} hideModal={() => setShowModal(false)} title="Adicionar Usuário">
          <NewUserForm setShowModalParent={setShowModal} />
        </Modal>
      </ContainerButton>

      {filterListByUnitId(listUsers, unitId).map((user) => {
        return <UserCard user={user} key={user.id} onRemove={onRemove} />;
      })}
    </ViewContainer>
  );
};

const ContainerButton = styled.div`
  ${displayFlexCenter};
  width: 90%;
`;

export default Users;
