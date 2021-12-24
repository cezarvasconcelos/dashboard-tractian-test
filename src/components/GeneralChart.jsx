import styled from "styled-components";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { filterListByUnitId } from "util";
import { theme } from "css/theme";

const PieChart = () => {
  const unitId = useSelector((state) => state.current.unitSelected);
  const listAssets = useSelector((state) => state.assets.listAssets);
  let [initialMount, setInitialMount] = useState(true);
  let initialTotalsState = {
    assets: 0,
    inOperation: 0,
    inDowntime: 0,
    inAlert: 0,
  };
  let [totals, setTotals] = useState(initialTotalsState);

  useEffect(() => {
    let newTotals = { ...totals };
    let listFiltered = filterListByUnitId(listAssets, unitId);
    newTotals.assets = listFiltered.length;
    console.log(newTotals);
    listFiltered.forEach((asset) => {
      switch (asset["status"]) {
        case "inOperation":
          newTotals.inOperation++;
          break;
        case "inDowntime":
          newTotals.inDowntime++;
          break;
        case "inAlert":
          newTotals.inAlert++;
          break;
        default:
          break;
      }
    });

    if (listFiltered.length > 0 && initialMount) {
      setInitialMount(false);
      setTotals(newTotals);
    }
    return;
  }, [totals, listAssets, initialMount]);

  useEffect(() => {
    setInitialMount(true);
    setTotals(initialTotalsState);
  }, [unitId]);

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      backgroundColor: "rgb(245, 245, 245)",
      margin: [0, 0, 0, 0],
      spacingTop: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0,
      selectionMarkerFill: "none",
    },
    title: {
      text: `Total ativos: ${totals.assets}`,
      y: window.screen.width >= 1366 ? 20 : 200,
      style: {
        fontWeight: 900,
      },
    },
    legend: {
      enabled: true,
    },
    plotOptions: {
      pie: {
        size: "70%",
        allowPointSelect: false,
        cursor: "pointer",
        showInLegend: window.screen.width >= 1366 ? false : true,
        dataLabels: {
          enabled: window.screen.width >= 1366 ? true : false,
          style: {
            fontWeight: 500,
            fontSize: 16 + "px",
          },
        },
      },
    },

    series: [
      {
        name: "Assets",
        colorByPoint: false,
        innerSize: "70%",
        slicedOffset: 0,
        data: [
          {
            name: `Funcionando (${totals.inOperation})`,
            color: theme.operationColor,
            y: totals.inOperation,
          },
          {
            name: `Em alerta (${totals.inAlert})`,
            color: theme.alertColor,
            y: totals.inAlert,
          },
          {
            name: `Paradas (${totals.inDowntime})`,
            color: theme.downtimeColor,
            y: totals.inDowntime,
          },
        ],
        point: {
          events: {
            legendItemClick: function () {
              return false;
            },
          },
        },
      },
    ],
  };

  return (
    <ContainerChart>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </ContainerChart>
  );
};

const ContainerChart = styled.div`
  width: 80%;
`;

export default PieChart;
