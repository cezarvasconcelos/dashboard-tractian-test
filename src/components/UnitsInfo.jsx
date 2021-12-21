import { useEffect, useState } from "react";
import styled from "styled-components";
import { displayFlexCenter } from "css/styles";

const UnitsInfo = ({ units }) => {
  const [totalUnits, setTotalUnits] = useState(0);

  console.log(units);
  useEffect(() => {
    setTotalUnits(units.length);
  }, [units]);
  return (
    <UnitsInfoContainer>
      <span>Units</span>
      <span>{totalUnits}</span>
    </UnitsInfoContainer>
  );
};

const UnitsInfoContainer = styled.div`
  ${displayFlexCenter};
  width: 90%;
  height: 100px;
  flex-grow: 1;
  outline: 1px solid black;
`;

export default UnitsInfo;
