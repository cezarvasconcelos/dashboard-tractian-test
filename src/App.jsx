import styled, { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import db from "services/database.json";
import { displayFlex, displayFlexCenter, displayFlexColumn } from "css/styles";
import { theme } from "css/theme";
import { Header, Navbar } from "components";
import { Overview, Assets, Users, Units } from "view";

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
  }, [unitSelected]);

  return (
    <PageContainer>
      <ThemeProvider theme={theme}>
        <LeftContainer>
          <Navbar />
        </LeftContainer>
        <RightContainer>
          <Header units={units} />
          {/* <Overview assets={unitAssets} users={unitUsers} units={units} info={unitSelected} /> */}

          <Routes>
            <Route
              path={"/"}
              element={
                <Overview
                  assets={unitAssets}
                  users={unitUsers}
                  units={units}
                  //  info={unitSelected}
                />
              }
            />
            <Route path="assets" element={<Assets assets={unitAssets} />} />
            <Route path="users" element={<Users users={unitUsers} />} />
            <Route path="units" element={<Units />} />
          </Routes>
        </RightContainer>
      </ThemeProvider>
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
  max-width: 300px;
`;

const RightContainer = styled.div`
  ${displayFlexColumn};
  align-items: center;
  flex-grow: 2;
  position: relative;
`;

export default App;
