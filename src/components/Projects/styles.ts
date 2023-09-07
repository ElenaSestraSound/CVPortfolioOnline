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