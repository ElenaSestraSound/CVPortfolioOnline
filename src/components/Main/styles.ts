import { css } from "@emotion/react";

export const profile = css`
    margin: 0 auto;
    padding: 100px 0;

    @media screen and (max-width: 990px) {
        display: flex;
        flex-direction: column-reverse
    }
`

export const profileDetails = css`
    display: inline-block;
    width: 500px;
    text-align: center;
    vertical-align: middle;
    padding: 40px 30px;
    div {
        margin-top: 10px;
    }
    
    b p {
        display: inline;
    }

    >p {
        color: #fff;
        font-size: 40px;
        font-style: italic;
    }

    @media screen and (max-width: 990px) {
        >p {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 520px) {
            width: auto;

            >p {
                font-size: 26px;
            }
    }
`

export const profileLogo = css`
    display: inline-block;
    margin-left: 100px;
    padding: 20px;
    vertical-align: middle;
    border-radius: 9999px;
    background-color: #070707;
    
    svg {
        margin: 0 auto;
    }

    @media screen and (max-width: 990px) {
        margin-left: 0
    }

`