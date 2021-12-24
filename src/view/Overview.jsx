import { AssetsInfo, GeneralChart, UsersInfo } from "components";
import ViewContainer from "containers/ViewContainer";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { filterListByUnitId } from "util";

const Overview = () => {
  const unitId = useSelector((state) => state.current.unitSelected);
  const listAssets = useSelector((state) => state.assets.listAssets);
  return (
    <CustomContainer>
      {/* <AssetsInfo assets={filterListByUnitId(listAssets, unitId)} /> */}
      {/* <UnitsInfo units={units} /> */}
      <GeneralChart listAssets={listAssets} unitId={unitId} />
      {/* <UsersInfo users={filterListByUnitId(listAssets, unitId)} /> */}
    </CustomContainer>
  );
};

const CustomContainer = styled(ViewContainer)`
  flex-direction: column;
`;

export default Overview;
