import styled from "styled-components";

const StatusIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${(props) => props.theme.menuTextColor};
  path {
    fill: ${(props) => props.theme.menuTextColor};
  }
`;

export default StatusIcon;
