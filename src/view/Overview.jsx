import { AssetsInfo, GeneralChart, UnitsInfo, UsersInfo } from "components";
import ViewContainer from "components/containers/ViewContainer";

const Overview = ({ assets, users, units }) => {
  return (
    <ViewContainer>
      <AssetsInfo assets={assets} />
      <UsersInfo users={users} />
      <UnitsInfo units={units} />
      {/* <GeneralChart info={unitSelected} /> */}
    </ViewContainer>
  );
};

export default Overview;
