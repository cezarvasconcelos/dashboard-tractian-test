import styled, { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { displayFlex, displayFlexColumn } from "css/styles";
import { theme } from "css/theme";
import { Header, Navbar } from "components";
import { Overview, Assets, Users, Units } from "view";
import { loadUsers } from "redux/users";
import { loadUnits } from "redux/units";
import { loadAssets } from "redux/assets";

function App() {
  const dispatch = useDispatch();
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
          <Header />
          {/* <Overview assets={unitAssets} users={unitUsers} units={units} info={unitSelected} /> */}

          <Routes>
            <Route path={"/"} element={<Overview />} />
            <Route path="assets" element={<Assets />} />
            <Route path="users" element={<Users />} />
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
