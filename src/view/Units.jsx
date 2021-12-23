import { AssetsInfo, GeneralChart, UnitsInfo, UsersInfo } from "components";
import ViewContainer from "components/containers/ViewContainer";
import { displayFlexCenter } from "css/styles";
import styled from "styled-components";

const Units = ({ units }) => {
  return (
    <ViewContainer>
      {units.map((unit) => {
        return (
          <>
            <UnitCard>
              <UnitId>{unit.id}</UnitId>
              <UnitName>{unit.name}</UnitName>
            </UnitCard>
          </>
        );
      })}
    </ViewContainer>
  );
};
const UnitCard = styled.div`
  ${displayFlexCenter};
  flex-wrap: wrap;
  width: 200px;
  heigth: 200px;
  outline: 1px solid blue;
  padding: 0.5rem 0;
`;

const UnitId = styled.h3``;
const UnitName = styled.h2``;
export default Units;
