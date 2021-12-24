import { AssetsInfo, GeneralChart, UsersInfo } from "components";
import ViewContainer from "containers/ViewContainer";
import { filterListByUnitId } from "util";

const Overview = () => {
  // const unitId = useSelector((state) => state.current.unitSelected);
  // const listAssets = useSelector((state) => state.assets.listAssets);
  // const listUsers = useSelector((state) => state.users.listUsers);

  return (
    <ViewContainer>
      {/* <AssetsInfo assets={filterListByUnitId(listAssets, unitId)} /> */}
      {/* <UsersInfo users={filterListByUnitId(listUsers, unitId)} /> */}
      {/* <UnitsInfo units={units} /> */}
      <GeneralChart />
    </ViewContainer>
  );
};

export default Overview;
