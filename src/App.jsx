import styled, { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import db from "./database.json";
import { displayFlex, displayFlexCenter, displayFlexColumn } from "css/styles";
import { theme } from "css/theme";
import { Header, AssetsInfo, UsersInfo, UnitsInfo, GeneralChart, Navbar } from "components";

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
          <Navbar />
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
  /* background-color: #d4d4d4; */
`;

const OverView = styled.div`
  ${displayFlexCenter};
  flex-wrap: wrap;
  height: 100vh;
  width: 90%;
`;

export default App;
