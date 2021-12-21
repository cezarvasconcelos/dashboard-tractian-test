import { displayFlexCenter, displayFlexColumn } from "css/styles";
import styled from "styled-components";

const Infototal = ({ title, total }) => {
  return (
    <TotalContainer>
      <span className="title"> {title} </span>
      <span className="totals">{total}</span>
    </TotalContainer>
  );
};

const TotalContainer = styled.div`
  ${displayFlexColumn};
  align-items: center;
  flex-grow: 1;
  justify-content: space-around;
  outline: 1px solid red;
  height: 100%;
  span {
    line-height: 1.3rem;
    letter-spacing: 0px;
  }

  .title {
    font-weight: 900;
    text-transform: uppercase;
  }

  .totals {
    ${displayFlexCenter};
    text-align: center;
    outline: 4px solid black;
    padding: 0.5rem;
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    font-size: 2rem;
  }
`;

export default Infototal;
