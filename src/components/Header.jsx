import styled from "styled-components";
import { displayFlex, displayFlexCenter } from "./css/styles";
import ArrowDown from "./icon/ArrowDown";
import Bell from "./icon/Bell";
import Search from "./icon/Search";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <h1>Overview</h1>
      </HeaderLeft>
      <HeaderRight>
        <HeaderIconsContainer>
          <Search />
          <Bell />
        </HeaderIconsContainer>
        <HeaderUnit>
          <h3>All</h3>
          <ArrowDown />
        </HeaderUnit>
      </HeaderRight>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  ${displayFlex};
  justify-content: space-between;
  margin-top: 0;
`;
const HeaderLeft = styled.div`
  ${displayFlexCenter};
  h1 {
    font-size: 1.2em;
  }
`;
const HeaderRight = styled.div`
  ${displayFlexCenter};
`;

const HeaderIconsContainer = styled.div`
  flex-grow: 1;
`;

const HeaderUnit = styled.div`
  ${displayFlexCenter};
  flex-grow: 4;
  h3 {
    font-size: 1em;
  }
  img {
    border-radius: 9999px;
    width: 30px;
    height: 30px;
  }
`;

export default Header;
