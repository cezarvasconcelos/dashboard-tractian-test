import { useEffect, useState } from "react";
import styled from "styled-components";
import { displayFlex, displayFlexCenter } from "../css/styles";

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
    <AssetsInfoContainer>
      <AssetsTotal>
        <span> Assets </span>
        <span>{totalAssets}</span>
      </AssetsTotal>
      <AssetsStatus>
        <AssetsStatusTotal>alert {alertAssets}</AssetsStatusTotal>
        <AssetsStatusTotal>operation {operationAssets}</AssetsStatusTotal>
        <AssetsStatusTotal>downtime {downTimeAssets}</AssetsStatusTotal>
      </AssetsStatus>
    </AssetsInfoContainer>
  );
};

const AssetsInfoContainer = styled.div`
  ${displayFlexCenter};
  outline: 1px solid black;
  width: 90%;
  height: 100px;
  flex-grow: 1;
`;

const AssetsTotal = styled.div`
  ${displayFlexCenter};
`;

const AssetsStatus = styled.div`
  ${displayFlexCenter};
`;

const AssetsStatusTotal = styled.div`
  ${displayFlexCenter};
`;

export default AssetsInfo;
