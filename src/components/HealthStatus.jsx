import { displayFlexCenter } from "css/styles";
import styled from "styled-components";
import AssetStatus from "./AssetStatus";

const HealthStatus = ({ healthscore, status, className }) => {
  return (
    <ContainerHealthStatus className={className}>
      <HealthScore>Saúde {healthscore}%</HealthScore>
      <Status status={status} />
    </ContainerHealthStatus>
  );
};
const ContainerHealthStatus = styled.div`
  ${displayFlexCenter};
  justify-content: space-between;
  width: 90%;
  margin: 0.3rem 0;
`;

const HealthScore = styled.div`
  font-weight: 900;
  font-size: 1rem;
  width: 120px;
`;

const Status = styled(AssetStatus)`
  heigth: 2rem;
  margin
`;
export default HealthStatus;
