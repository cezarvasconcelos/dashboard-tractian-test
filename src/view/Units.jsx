import ViewContainer from "containers/ViewContainer";
import { displayFlexCenter } from "css/styles";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Units = () => {
  const units = useSelector((state) => state.units.listUnits);
  return (
    <Container>
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
    </Container>
  );
};
const Container = styled(ViewContainer)`
  padding-top: 2rem;
  align-items: flex-start;
  height: 30vh;
  overflow: hidden;
  @media (max-width: ${(props) => props.theme.sizes.breakPointMedium}) {
    height: 50vh;
  }
`;
const UnitCard = styled.div`
  ${displayFlexCenter};
  flex-wrap: wrap;
  width: 90%;
  heigth: 200px;
  padding: 0.5rem 0;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const CustomH2 = styled.h2`
  margin: 0 0.2rem;
  @media (max-width: ${(props) => props.theme.sizes.breakPointMedium}) {
    font-size: 1rem;
  }
`;
const UnitId = styled(CustomH2)``;
const UnitName = styled(CustomH2)``;
export default Units;
