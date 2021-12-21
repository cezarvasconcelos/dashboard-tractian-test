import { displayFlexCenter, displayFlexColumn } from "css/styles";
import styled from "styled-components";

const InfoTotal = ({ title, total }) => {
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
  max-height: 100px;
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
  @media (min-width: ${(props) => props.theme.sizes.breakPointMedium}) {
    max-width: 200px;
  }
`;

export default InfoTotal;
