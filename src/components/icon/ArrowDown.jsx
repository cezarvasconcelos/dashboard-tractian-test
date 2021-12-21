import styled from "styled-components";

import React from "react";

const ArrowDown = () => {
  return (
    <Arrow viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L7.95963 9" strokeWidth="3" strokeLinecap="round" />
      <path d="M14.9193 1L7.95963 9" strokeWidth="3" strokeLinecap="round" />
    </Arrow>
  );
};

const Arrow = styled.svg`
  width: 16px; 
  height: 10px;
  stroke: ${(props) => props.theme.iconColor};
  @media (min-width: ${(props) => props.theme.sizes.breakPointSmall}) {
   width: 20px; 
  height: 15px;
`;

export default ArrowDown;
