import { displayFlexCenter, displayFlexColumn } from "css/styles";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserIcon, AssetsIcon, UnitsIcon, OverviewIcon } from "./icon";

const logoTractian = process.env.PUBLIC_URL + "/assets/images/tractianLogo.png";

const Navbar = () => {
  return (
    <NavContainer>
      <NavLogo>
        <img src={logoTractian} alt="logo" />
        <h3>Tractian Dashboard</h3>
      </NavLogo>
      <Menu>
        <MenuList>
          <MenuListItem>
            <OverviewIcon />
            <Link className={"link"} to="/overview">
              Overview
            </Link>
          </MenuListItem>
          <MenuListItem>
            <AssetsIcon />
            <Link className={"link"} to="/assets">
              Assets
            </Link>
          </MenuListItem>
          <MenuListItem>
            <UserIcon />
            <Link className={"link"} to="/users">
              Users
            </Link>
          </MenuListItem>
          <MenuListItem>
            <UnitsIcon />
            <Link className={"link"} to="/units">
              Units
            </Link>
          </MenuListItem>
        </MenuList>
      </Menu>
    </NavContainer>
  );
};
const NavContainer = styled.div`
  ${displayFlexColumn};
  justify-content: flex-start;
  align-items: center;
  background: #b9b8b8;
  width: 100%;
  height: 100%;
  width: 70px;
  @media (min-width: ${(props) => props.theme.sizes.breakPointMedium}) {
    padding: 0 0.3rem;
    width: 250px;
  }
`;
const NavLogo = styled.div`
  ${displayFlexCenter}

  padding: 1.3em 0;

  img {
    border: 5px solid ${(props) => props.theme.colorPrimary};
    outline: 2px solid ${(props) => props.theme.colorSecondary};
    border-radius: 5px;
    width: 50px;
    height: 50px;
  }
  h3 {
    display: none;
    color: ${(props) => props.theme.menuTextColor};
    @media (min-width: ${(props) => props.theme.sizes.breakPointMedium}) {
      display: initial;
      margin-left: 0.3rem;
    }
  }
`;

const Menu = styled.div``;
const MenuList = styled.div``;
const MenuListItem = styled.div`
  ${displayFlexCenter};
  justify-content: flex-start;
  margin-bottom: 0.3rem;
  cursor: pointer;
  color: ${(props) => props.theme.menuTextColor};
  &:hover {
    color: ${(props) => props.theme.colorSecondary};
  }
  .link {
    font-weight: 600;
    font-size: 1.2rem;
    margin-left: 1rem;
    @media (max-width: ${(props) => props.theme.sizes.breakPointMedium}) {
      display: none;
    }
  }
  .link:hover {
    color: ${(props) => props.theme.colorSecondary};
  }
  .link:visited {
    color: ${(props) => props.theme.menuTextColor};
  }
`;
export default Navbar;
