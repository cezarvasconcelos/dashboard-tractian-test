import { useEffect, useState } from "react";
import styled from "styled-components";
import { displayFlex, displayFlexCenter } from "../css/styles";

const AssetsInfo = ({ assets }) => {
  const [totalAssets, setTotalAssets] = useState(0);
  const [alertAssets, setAlertAssets] = useState(0);
  const [downTimeAssets, setDownTimeAssets] = useState(0);
  const [operationAssets, setOperationAssets] = useState(0);

  useEffect(() => {
    setTotalAssets(assets.length);
    //percorre e seta os totalizadores dos assets por status
    assets.forEach((asset) => {
      switch (asset.status) {
        case "inAlert":
          setAlertAssets(alertAssets + 1);
          break;
        case "inDowntime":
          setDownTimeAssets(downTimeAssets + 1);
          break;
        case "inOperation":
          setOperationAssets(operationAssets + 1);
          break;
        default:
          break;
      }
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
