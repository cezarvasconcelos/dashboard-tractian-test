import { displayFlexCenter } from "css/styles";
import React from "react";
import styled from "styled-components";

const logoTractian = process.env.PUBLIC_URL + "/assets/images/tractianLogo.png";

const Navbar = () => {
  return (
    <div className="navBar">
      <NavLogo>
        <img src={logoTractian} alt="logo" />
        <h3>Tractian Dashboard</h3>
      </NavLogo>
      <div className="menu">
        <ul>
          <li>Overview</li>
          <li>Assets</li>
          <li>Users</li>
          <li>Units</li>
        </ul>
      </div>
    </div>
  );
};

const NavLogo = styled.div`
  ${displayFlexCenter}
  padding-top: 1.3em;
  img {
    border: 5px solid #185ef6;
    outline: 2px solid #3875faa7;
    border-radius: 5px;
    width: 50px;
    height: 50px;
  }
  h3 {
    display: none;
  }
`;

export default Navbar;
