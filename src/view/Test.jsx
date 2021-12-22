import { AssetsInfo, GeneralChart, UnitsInfo, UsersInfo } from "components";
import { displayFlexCenter } from "css/styles";
import styled from "styled-components";

const Test = ({ unitAssets, unitUsers, units, unitSelected }) => {
  return (
    <OverViewContainer>
      <h3>HELOOO THERE MY FRIEND</h3>
    </OverViewContainer>
  );
};

const OverViewContainer = styled.div`
  ${displayFlexCenter};
  flex-wrap: wrap;
  /* height: 100vh; */
  width: 90%;
`;
export default Test;
