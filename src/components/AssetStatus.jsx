import { displayFlexCenter } from "css/styles";
import { theme } from "css/theme";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AlertIcon, DowntimeIcon, OperationIcon } from "./icon";

const AssetStatus = ({ status, className }) => {
  const checkStatus = () => {
    switch (status) {
      case "inAlert":
        return (
          <Status status={theme.alertColor}>
            <AlertIcon />
            <span>Alerta</span>
          </Status>
        );
      case "inDowntime":
        return (
          <Status status={theme.downtimeColor}>
            <DowntimeIcon />
            <span>Interrompido</span>
          </Status>
        );
      case "inOperation":
        return (
          <Status status={theme.operationColor}>
            <OperationIcon />
            <span>Operacional</span>
          </Status>
        );
      default:
        break;
    }
  };

  return <Container className={className}>{checkStatus()}</Container>;
};

const Container = styled.div`
  ${displayFlexCenter};
  /* width: 20px; */
  /* height: 20px; */
  /* outline: 1px solid red; */
`;

const Status = styled.div.attrs((props) => ({
  status: props.status,
}))`
  ${displayFlexCenter};
  border-radius: 999px;
  border: 3px solid ${(props) => props.status};
  background: ${(props) => props.status};
  span {
    display: none;
  }
  svg {
    width: 25px;
    height: 25px;
    path {
      /* fill: red; */
    }
  }

  @media (min-width: ${(props) => props.theme.sizes.breakPointMedium}) {
    justify-content: space-between;
    width: 170px;
    height: 30px;
    border-radius: 5px;
    span {
      font-weight: 600;
      text-align: center;
      display: initial;
      text-transform: uppercase;
    }
    padding: 0 0.3rem;
  }
`;

export default AssetStatus;
