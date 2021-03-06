import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUnit } from "redux/current";

import styled from "styled-components";
import { cardBorderShadow, displayFlexCenter } from "css/styles";
import { ArrowDown } from "./icon";

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const units = [{ id: 0, name: "Todos" }, ...useSelector((state) => state.units.listUnits)];
  const [selectedUnit, setSelectedUnit] = useState(null);
  const menuTitle = useSelector((state) => state.current.menuSelected);

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (unit) => () => {
    setSelectedUnit(unit.name);
    setIsOpen(false);
    dispatch(selectUnit(unit.id));
  };
  return (
    <HeaderContainer>
      <HeaderLeft>
        <h1>{menuTitle}</h1>
      </HeaderLeft>
      <HeaderRight>
        <HeaderUnit onClick={toggling}>
          <DropDownContainer>
            <DropDownHeader>{selectedUnit || "Todos"}</DropDownHeader>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  {units.map((unit) => (
                    <ListItem onClick={onOptionClicked(unit)} key={unit.id}>
                      {unit.name}
                    </ListItem>
                  ))}
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
          <ArrowDown />
        </HeaderUnit>
      </HeaderRight>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  ${displayFlexCenter};
  justify-content: space-between;
  width: 90%;
  padding: 2em 0;
  height: 60px;
`;
const HeaderLeft = styled.div`
  ${displayFlexCenter};
  h1 {
    font-size: 1rem;
    font-weight: 900;
  }
  @media (min-width: ${(props) => props.theme.sizes.breakPointSmall}) {
    h1 {
      font-size: 1.6rem;
    }
  }
  @media (min-width: ${(props) => props.theme.sizes.breakPointMedium}) {
    h1 {
      font-size: 2rem;
    }
  }
`;
const HeaderRight = styled.div`
  ${displayFlexCenter};
  height: 100%;
  cursor: pointer;
`;

const HeaderUnit = styled.div`
  ${displayFlexCenter};
  flex-grow: 1;
  text-align: right;
`;

const DropDownContainer = styled.div`
  width: 120px;
  margin: 0 0.4rem;
  @media (min-width: ${(props) => props.theme.sizes.breakPointSmall}) {
    width: 170px;
  @media (min-width: ${(props) => props.theme.sizes.breakPointMedium}) {
   width: 250px;
  }
`;

const DropDownHeader = styled.div`
  font-weight: 500;
  font-size: 1rem;
  @media (min-width: ${(props) => props.theme.sizes.breakPointSmall}) {
    font-size: 1.3rem;
  @media (min-width: ${(props) => props.theme.sizes.breakPointMedium}) {
   font-size: 1.5rem;
  }
  padding: 0 0.4rem;
`;

const DropDownListContainer = styled.div`
  position: relative;
`;

const DropDownList = styled.ul`
  background: ${(props) => props.theme.backgroundColorDefault};
  position: absolute;
  right: 0;
  font-size: 1rem;
  font-weight:500;
  @media (min-width: ${(props) => props.theme.sizes.breakPointSmall}) {
    font-size: 1.3rem;
  @media (min-width: ${(props) => props.theme.sizes.breakPointMedium}) {
   font-size: 1.5rem;
  }
  z-index: 200;
  padding: 0.3rem 0.4rem;
  ${cardBorderShadow}
`;

const ListItem = styled.li`
  margin-bottom: 0.3rem;
`;

export default Header;
