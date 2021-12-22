import { displayFlexCenter, displayFlexColumn } from "css/styles";
import React from "react";
import { useState } from "react";
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
          <LinkStyled to="/">
            <OverviewIcon />
            <span>Overview</span>
          </LinkStyled>
          <LinkStyled to="/assets">
            <AssetsIcon />
            <span className={"link"}>Assets</span>
          </LinkStyled>
          <LinkStyled to="/users">
            <UserIcon />
            <span className={"link"}>Users</span>
          </LinkStyled>
          <LinkStyled to="/units">
            <UnitsIcon />
            <span className={"link"}>Units</span>
          </LinkStyled>
        </MenuList>
      </Menu>
    </NavContainer>
  );
};
const LinkStyled = styled(Link)`
  ${displayFlexCenter};
  justify-content: flex-start;
  margin-bottom: 0.3rem;
  cursor: pointer;

  span {
    font-weight: 600;
    font-size: 1.2rem;
    margin-left: 1rem;
    color: ${(props) => props.theme.menuTextColor};
    @media (max-width: ${(props) => props.theme.sizes.breakPointMedium}) {
      display: none;
    }
  }
  &:hover {
    span {
      color: ${(props) => props.theme.colorSecondary};
    }
    svg {
      stroke: ${(props) => props.theme.colorSecondary};
    }
  }
`;
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

export default Navbar;
