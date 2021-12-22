import { displayFlexCenter } from "css/styles";
import styled from "styled-components";
const ViewContainer = styled.div`
  ${displayFlexCenter};
  flex-wrap: wrap;
  height: 100vh;
  width: 90%;
  overflow: scroll;
`;

export default ViewContainer;
