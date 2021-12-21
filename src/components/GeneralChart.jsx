import styled from "styled-components";
import { displayFlex, displayFlexCenter } from "../css/styles";

const GeneralChart = ({ info }) => {
  return (
    <ChartContainer>
      <span>this could be a chart {info}</span>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  ${displayFlexCenter};
  width: 90%;
  height: 100px;
  flex-grow: 1;
  outline: 1px solid black;
`;

export default GeneralChart;
