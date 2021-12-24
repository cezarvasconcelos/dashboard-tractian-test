import styled from "styled-components";

const MenuIcon = styled.svg`
  width: 40px;
  height: 40px;
  stroke: ${(props) => props.theme.menuTextColor};
  path {
    fill: ${(props) => props.theme.iconMenuColor};
  }
  @media (min-width: ${(props) => props.theme.sizes.breakPointSmall}) {
    width: 40px;
    height: 40px;
  }

  &:hover {
    stroke: ${(props) => props.theme.colorSecondary};
    stroke: "#51b9ff";
  }
`;

export default MenuIcon;
