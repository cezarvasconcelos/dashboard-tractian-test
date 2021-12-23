import ViewContainer from "containers/ViewContainer";
import { displayFlexCenter } from "css/styles";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Units = () => {
  const units = useSelector((state) => state.units.listUnits);
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
