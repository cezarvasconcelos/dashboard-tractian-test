import styled from "styled-components";

import React from "react";

const Search = ({ color }) => {
  return (
    <SearchIcon width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6.5" cy="6.5" r="5.75" strokeWidth="1.5" />
      <path d="M11 11L15 15" strokeWidth="1.5" strokeLinecap="round" />
    </SearchIcon>
  );
};

const SearchIcon = styled.svg`
  stroke: #dfd3d3;
`;

export default Search;