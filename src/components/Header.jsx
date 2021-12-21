import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { displayFlex, displayFlexCenter } from "../css/styles";
import ArrowDown from "./icon/ArrowDown";
import Bell from "./icon/Bell";
import Search from "./icon/Search";
import { selectUnit } from "../redux/features/unitSlice";

const Header = ({ units }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  //coloca um objeto fictício para representar o All
  const [options, setOptions] = useState([{ id: 0, name: "Todos", companyId: 0 }, ...units]);
  const toggling = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  const onOptionClicked = (unit) => () => {
    setSelectedOption(unit.name);
    setIsOpen(false);

    //chamando o reducer criado no unitSlice.js(é passado nesse caso o ID)
    dispatch(selectUnit(unit.id));
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <h1>Overview</h1>
      </HeaderLeft>
      <HeaderRight>
        <HeaderUnit onClick={toggling}>
          <DropDownContainer>
            <DropDownHeader>{selectedOption || "Todos"}</DropDownHeader>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  {options.map((unit) => (
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
  padding: 1.3em 0;
  height: 60px;
`;
const HeaderLeft = styled.div`
  ${displayFlexCenter};
  h1 {
    font-size: 1.3em;
  }
`;
const HeaderRight = styled.div`
  ${displayFlexCenter};
  height: 100%;
`;

const HeaderUnit = styled.div`
  ${displayFlexCenter};
  flex-grow: 1;
  text-align: right;
`;

const DropDownContainer = styled.div`
  width: 150px;
  margin: 0 1em;
`;

const DropDownHeader = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
`;

const DropDownListContainer = styled.div`
  position: relative;
`;

const DropDownList = styled.ul`
  background: #ffff;
  position: absolute;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-weight: 500;
`;

const ListItem = styled.li`
  margin-bottom: 0.3em;
`;

export default Header;
