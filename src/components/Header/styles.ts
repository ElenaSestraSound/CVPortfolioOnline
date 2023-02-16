import { css } from "@emotion/react";

export const headerTitle = css`
    h1 {
        font-family: 'Poppins';
    }
    @media screen and (max-width: 800px) {
        h1 {
            display: none
        }
    }
`

export const spacer = css`
    @media screen and (max-width: 800px) {
        display: none
    }
`

export const menuBar = css`
    position: sticky;
    top: 0
`