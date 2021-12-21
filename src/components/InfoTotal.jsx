import { displayFlexCenter, displayFlexColumn, outlineInfo } from "css/styles";
import styled from "styled-components";

//o className é passado aqui para que esse InfoTotal possa ser
//extendido em outro styled-component
const InfoTotal = ({ title, total, className }) => {
  return (
    <TotalContainer className={className}>
      <span className="title"> {title} </span>
      <span className="totals">{total}</span>
    </TotalContainer>
  );
};

const TotalContainer = styled.div`
  ${displayFlexColumn};
  ${outlineInfo};
  align-items: center;
  flex-grow: 1;
  justify-content: space-around;
  height: 100%;
  max-height: 100px;
  margin-bottom: 1em;

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

    margin: 0.4rem;
  }
`;

export default InfoTotal;
