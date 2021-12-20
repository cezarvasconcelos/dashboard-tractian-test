import styled from "styled-components";
import Bell from "./components/icon/Bell";
import Search from "./components/icon/Search";
import ArrowDown from "./components/icon/ArrowDown";
import api from "./services/api";
import db from "./database.json";
import Header from "./components/Header";
import { displayFlex, displayFlexCenter, displayFlexColumn } from "./css/styles";

const logoTractian = process.env.PUBLIC_URL + "/assets/tractianLogo.png";

function App() {
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
        <Header />

        <AssetsInfoContainer>
          <AssetsTotal>
            <span> Assets </span> 30
          </AssetsTotal>
          <AssetsStatus>
            <AssetsStatusTotal>alert 132</AssetsStatusTotal>
            <AssetsStatusTotal>operation 132</AssetsStatusTotal>
            <AssetsStatusTotal>downtime 132</AssetsStatusTotal>
          </AssetsStatus>
        </AssetsInfoContainer>

        <UsersInfoContainer>
          <span>Users</span>
          <span>20</span>
        </UsersInfoContainer>
        <UnitsInfoContainer>
          <span>Units</span>
          <span>2</span>
        </UnitsInfoContainer>

        <ChartContainer>
          <span>this could be a chart</span>
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
  padding-top: 1.2em;
  img {
    outline: 2px solid #185ef6;
    border-radius: 5px;
    width: 40px;
    height: 40px;
  }
  h3 {
    display: none;
  }
`;

const AssetsInfoContainer = styled.div`
  ${displayFlexCenter};
  outline: 1px solid black;
  width: 90%;
  height: 100px;
  flex-grow: 1;
`;

const AssetsTotal = styled.div`
  ${displayFlexCenter};
`;

const AssetsStatus = styled.div`
  ${displayFlexCenter};
`;

const AssetsStatusTotal = styled.div`
  ${displayFlexCenter};
`;
const UsersInfoContainer = styled.div`
  ${displayFlexCenter};
  width: 90%;
  height: 100px;
  flex-grow: 1;
  outline: 1px solid black;
`;
const UnitsInfoContainer = styled.div`
  ${displayFlexCenter};
  width: 90%;
  height: 100px;
  flex-grow: 1;
  outline: 1px solid black;
`;

const ChartContainer = styled.div`
  ${displayFlexCenter};
  width: 90%;
  height: 100px;
  flex-grow: 1;
  outline: 1px solid black;
`;
export default App;
