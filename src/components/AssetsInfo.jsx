import { useEffect, useState } from "react";
import styled from "styled-components";
import { displayFlex, displayFlexCenter, displayFlexColumn } from "css/styles";
import InfoContainer from "./containers/InfoContainer";
import InfoTotal from "./InfoTotal";

const AssetsInfo = ({ assets }) => {
  const [totalAssets, setTotalAssets] = useState(0);
  const [alertAssets, setAlertAssets] = useState(0);
  const [downTimeAssets, setDownTimeAssets] = useState(0);
  const [operationAssets, setOperationAssets] = useState(0);

  useEffect(() => {
    //percorre e seta os totalizadores dos assets por status
    let [tAlert, tDown, tOperation] = [0, 0, 0];

    assets.forEach((asset) => {
      switch (asset.status) {
        case "inAlert":
          tAlert++;
          break;
        case "inDowntime":
          tDown++;
          break;
        case "inOperation":
          tOperation++;
          break;
        default:
          break;
      }
      setTotalAssets(assets.length);
      setAlertAssets(tAlert);
      setDownTimeAssets(tDown);
      setOperationAssets(tOperation);
    });
    return () => {};
  }, [assets]);

  return (
    <AssetsContainer>
      <InfoTotal title={"Ativos"} total={totalAssets} />
      <StatusContainer>
        <AssetsStatusTotal>
          <span className="alert">em alerta: {alertAssets}</span>
        </AssetsStatusTotal>
        <AssetsStatusTotal>
          <span className="operation">operando: {operationAssets}</span>
        </AssetsStatusTotal>
        <AssetsStatusTotal>
          <span className="downtime">interrompido: {downTimeAssets}</span>
        </AssetsStatusTotal>
      </StatusContainer>
    </AssetsContainer>
  );
};

const AssetsContainer = styled(InfoContainer)`
  justify-content: space-around;
  flex-basis: 100%;
  @media (min-width: ${(props) => props.theme.sizes.breakPointMedium}) {
    flex-basis: 300px;
  }
`;

const StatusContainer = styled.div`
  ${displayFlexCenter};
  flex-wrap: wrap;
  height: 100%;
  outline: 1px solid blue;
  flex-basis: 160px;
`;

const AssetsStatusTotal = styled.div`
  ${displayFlex};
  span {
    border: 5px solid;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 900;
    text-transform: uppercase;
    width: 150px;
    text-align: center;
    color: #ffffff;
  }
  .alert {
    background: ${(props) => props.theme.alertColor};
    border-color: ${(props) => props.theme.alertColor};
  }
  .operation {
    background: ${(props) => props.theme.operationColor};
    border-color: ${(props) => props.theme.operationColor};
  }
  .downtime {
    background: ${(props) => props.theme.downtimeColor};
    border-color: ${(props) => props.theme.downtimeColor};
  }
`;

export default AssetsInfo;
