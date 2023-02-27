import { css } from "@emotion/react";

export const headerTitle = css`
    h1 {
        font-family: 'Poppins';
    }
`

export const menuBar = css`
    position: sticky;
    top: 0;
    z-index: 99999;
    padding: 16px 20px;

    button {
        display: none;
    }

    @media screen and (max-width: 850px) {
        nav {
            display: none;
        }

        button {
            display: inline-flex;
        }
    }
`