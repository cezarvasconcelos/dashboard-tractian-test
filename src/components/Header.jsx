import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { displayFlexCenter } from "css/styles";
import ArrowDown from "./icon/ArrowDown";
import { selectUnit } from "redux/features/unitSlice";

const Header = ({ units }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  //coloca um objeto fictício para representar o All
  const [options] = useState([{ id: 0, name: "Todos", companyId: 0 }, ...units]);
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
        <h1>Unidades</h1>
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
`;

const DropDownListContainer = styled.div`
  position: relative;
`;

const DropDownList = styled.ul`
  background: #ffffff;
  position: absolute;
  right: 0;
  font-size: 1rem;
  font-weight:500;
  @media (min-width: ${(props) => props.theme.sizes.breakPointSmall}) {
    font-size: 1.3rem;
  @media (min-width: ${(props) => props.theme.sizes.breakPointMedium}) {
   font-size: 1.5rem;
  }
`;

const ListItem = styled.li`
  margin-bottom: 0.3rem;
`;

export default Header;
