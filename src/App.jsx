import styled, { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import db from "./database.json";
import { displayFlex, displayFlexCenter, displayFlexColumn } from "css/styles";
import { theme } from "css/theme";
import { Header, AssetsInfo, UsersInfo, UnitsInfo, GeneralChart } from "components";

const logoTractian = process.env.PUBLIC_URL + "/assets/images/tractianLogo.png";

function App() {
  const [units, setUnits] = useState(db.units);
  // const [users, setUsers] = useState(db.users);
  // const [assets, setAssets] = useState(db.assets);
  // const [companies, setCompanies] = useState(db.companies);
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
      <ThemeProvider theme={theme}>
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
          <OverView>
            <AssetsInfo assets={unitAssets} />
            <UsersInfo users={unitUsers} />
            <UnitsInfo units={units} />
            <GeneralChart info={unitSelected} />
          </OverView>
        </RightContainer>
      </ThemeProvider>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  ${displayFlex};
  justify-content: space-between;
  width: 100%;
  min-width: 310px;
  height: 100vh;
`;

const LeftContainer = styled.div`
  ${displayFlexColumn};
  min-width: 60px;
  max-width: 300px;
  background: #b9b8b8;
`;

const RightContainer = styled.div`
  ${displayFlexCenter};
  ${displayFlexColumn};
  flex-grow: 2;
  background-color: #d4d4d4;
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

const OverView = styled.div`
  ${displayFlexCenter};
  flex-wrap: wrap;
  height: 100vh;
  width: 90%;
`;

export default App;
