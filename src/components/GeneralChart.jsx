import styled from "styled-components";
import { displayFlexCenter } from "css/styles";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "line",
  },
  title: {
    text: "Fruit Consumption",
  },
  xAxis: {
    categories: ["Apples", "Bananas", "Oranges"],
  },
  yAxis: {
    title: {
      text: "Fruit eaten",
    },
  },
  series: [
    {
      name: "Jane",
      data: [1, 0, 4],
    },
    {
      name: "John",
      data: [5, 7, 3],
    },
  ],
};

const GeneralChart = () => (
  <TestComponent>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </TestComponent>
);

const TestComponent = styled.div`
  ${displayFlexCenter};
  /* outline: 1px solid red; */

  width: 100%;
`;

export default GeneralChart;
