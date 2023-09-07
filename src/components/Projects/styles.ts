import { css } from '@emotion/react';

export const cardBox = css`
    position: relative;
    top: -780px;

    @media screen and (min-width: 900px) {
      height: 600px;
    }

    @media screen and (min-width: 1200px) {
      height: 800px;
    }

    @media screen and (min-width: 1600px) {
      height: 380px;
    }
  }
`;

export const cardBoxcontainer = css`
@media screen and (max-width: 1025px) {
  height: 1000px;
}
  @media screen and (max-width: 690px) {
    height: 1800px;
  }

`;