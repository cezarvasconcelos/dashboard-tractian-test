import { UserCard } from "components";
import ViewContainer from "containers/ViewContainer";
import { useSelector } from "react-redux";
import { filterListByUnitId } from "util";

const Users = ({ users }) => {
  const unitId = useSelector((state) => state.current.unitSelected);
  const listUsers = useSelector((state) => state.users.listUsers);

  console.log(users);
  return (
    <ViewContainer>
      {filterListByUnitId(listUsers, unitId).map((user) => {
        return <UserCard user={user} key={user.id} />;
      })}
    </ViewContainer>
  );
};

export default Users;
