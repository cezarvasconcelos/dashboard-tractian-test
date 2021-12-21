import styled from "styled-components";
import { displayFlex, displayFlexCenter } from "../css/styles";

const AssetsInfo = ({ assets }) => {
  return (
    <AssetsInfoContainer>
      <AssetsTotal>
        <span> Assets </span>
      </AssetsTotal>
      <AssetsStatus>
        <AssetsStatusTotal>alert 132</AssetsStatusTotal>
        <AssetsStatusTotal>operation 132</AssetsStatusTotal>
        <AssetsStatusTotal>downtime 132</AssetsStatusTotal>
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
