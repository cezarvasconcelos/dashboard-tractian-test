import { AssetsInfo, GeneralChart, UnitsInfo, UsersInfo } from "components";
import { displayFlexCenter } from "css/styles";
import styled from "styled-components";

const Overview = ({ assets, users, units }) => {
  return (
    <OverViewContainer>
      <AssetsInfo assets={assets} />
      <UsersInfo users={users} />
      <UnitsInfo units={units} />
      {/* <GeneralChart info={unitSelected} /> */}
    </OverViewContainer>
  );
};

const OverViewContainer = styled.div`
  ${displayFlexCenter};
  flex-wrap: wrap;
  /* height: 100vh; */
  width: 90%;
`;
export default Overview;
