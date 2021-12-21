import styled from "styled-components";

import React from "react";

const ArrowDown = () => {
  return (
    <Arrow width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L7.95963 9" strokeWidth="3" strokeLinecap="round" />
      <path d="M14.9193 1L7.95963 9" strokeWidth="3" strokeLinecap="round" />
    </Arrow>
  );
};

const Arrow = styled.svg`
  stroke: #dfd3d3;
  /* stroke-width: 3; */
`;

export default ArrowDown;
