import styled from "styled-components";
import Bell from "./components/icon/Bell";
import Search from "./components/icon/Search";
import ArrowDown from "./components/icon/ArrowDown";
import api from "./services/api";
import db from "./database.json";
import Header from "./components/Header";
import { displayFlex, displayFlexCenter, displayFlexColumn } from "./css/styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AssetsInfo from "./components/AssetsInfo";
import UsersInfo from "./components/UsersInfo";
import UnitsInfo from "./components/UnitsInfo";
import GeneralChart from "./components/GeneralChart";

const logoTractian = process.env.PUBLIC_URL + "/assets/images/tractianLogo.png";

function App() {
  const [units, setUnits] = useState(db.units);
  const [users, setUsers] = useState(db.users);
  const [assets, setAssets] = useState(db.assets);
  const [companies, setCompanies] = useState(db.companies);
  const [unitAssets, setUnitAssets] = useState([]);
  const [unitUsers, setUnitUsers] = useState([]);
  const unitSelected = useSelector((state) => state.unit.unitId);

  useEffect(() => {
    let assetsFiltered = [];
    assetsFiltered = db.assets.filter((asset) => {
      return asset.unitId === unitSelected;
    });
    setUnitAssets(assetsFiltered);

    let usersFiltered = [];
    usersFiltered = db.users.filter((user) => {
      return user.unitId === unitSelected;
    });
    setUnitUsers(usersFiltered);
    console.log(assetsFiltered);
    console.log(usersFiltered);
  }, [unitSelected]);
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
        <AssetsInfo assets={unitAssets} />
        <UsersInfo users={unitUsers} />
        <UnitsInfo units={units} />
        <GeneralChart info={unitSelected} />
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

export default App;
