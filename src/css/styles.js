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