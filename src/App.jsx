import styled, { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayFlex, displayFlexCenter, displayFlexColumn } from "css/styles";
import { theme } from "css/theme";
import { Header, Navbar } from "components";
import { Overview, Assets, Users, Units } from "view";
import { loadUsers } from "redux/users";
import { loadUnits } from "redux/units";
import { loadAssets } from "redux/assets";

function App() {
  const [units, setUnits] = useState([]);
  const dispatch = useDispatch();
  const [unitAssets, setUnitAssets] = useState([]);
  const [unitUsers, setUnitUsers] = useState([]);

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadUnits());
    dispatch(loadAssets());
  }, [dispatch]);
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
            <Route path="units" element={<Units units={units} />} />
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
