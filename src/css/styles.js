import { css } from 'styled-components';

export const displayFlex = css`
  display: flex;
`;

export const displayFlexColumn = css`
  ${displayFlex};
  flex-direction: column;
`;

export const displayFlexCenter = css`
  ${displayFlex};
  justify-content: center;
  align-items: center;
`;

export const outlineInfo = css`
  outline: 1px solid #aaaaaa;
  border-radius: 5px;
`;

export const cardBorderShadow = css`
border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`