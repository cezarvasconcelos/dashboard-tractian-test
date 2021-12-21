import styled from "styled-components";
import Bell from "./components/icon/Bell";
import Search from "./components/icon/Search";
import ArrowDown from "./components/icon/ArrowDown";
import api from "./services/api";
import db from "./database.json";
import Header from "./components/Header";
import { displayFlex, displayFlexCenter, displayFlexColumn } from "./css/styles";
import { useState } from "react";
import { useSelector } from "react-redux";
import AssetsInfo from "./components/AssetsInfo";

const logoTractian = process.env.PUBLIC_URL + "/assets/images/tractianLogo.png";

function App() {
  const [units, setUnits] = useState(db.units);
  // const [users, setUsers] = useState(db.users);
  const [assets, setAssets] = useState(db.assets);
  // const [companies, setCompanies] = useState(db.companies);
  const unitSelected = useSelector((state) => state.unit.unitId);

  return (
    <PageContainer>
      <LeftContainer>
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
      </LeftContainer>
      <RightContainer>
        <Header units={units} />

        <AssetsInfo />

        <UsersInfoContainer />

        <UnitsInfoContainer>
          <span>Units</span>
          <span>2</span>
        </UnitsInfoContainer>

        <ChartContainer>
          <span>this could be a chart {unitSelected}</span>
        </ChartContainer>
      </RightContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  ${displayFlex};
  justify-content: space-between;
  width: 100%;
  min-width: 280px;
  height: 100vh;
`;

const LeftContainer = styled.div`
  ${displayFlexColumn};
  min-width: 60px;
  max-width: 300px;
  border-right: 1px solid blue;
`;

const RightContainer = styled.div`
  ${displayFlexCenter};
  ${displayFlexColumn};
  flex-grow: 2;
  background-color: red;
`;
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

const ChartContainer = styled.div`
  ${displayFlexCenter};
  width: 90%;
  height: 100px;
  flex-grow: 1;
  outline: 1px solid black;
`;
export default App;
