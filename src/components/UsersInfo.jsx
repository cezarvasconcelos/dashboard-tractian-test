import { useEffect, useState } from "react";
import InfoTotal from "./InfoTotal";

const UsersInfo = ({ users }) => {
  const [totalUsers, setTotalUsers] = useState(0);

  // console.log(users);
  useEffect(() => {
    setTotalUsers(users.length);
  }, [users]);
  return <InfoTotal title={"Usuários"} total={totalUsers} />;
};

export default UsersInfo;
