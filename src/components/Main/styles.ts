import { css } from "@emotion/react";

export const profile = css`
    margin: 0 auto;
    padding: 100px 0;

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column-reverse
    }
`

export const profileDetails = css`
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 40px 30px;
    div {
        margin-top: 10px;
    }
    
    b p {
        display: inline;
    }

    @media screen and (max-width: 991px) {
        >b {
            font-size: 20px;
        }
        i {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 480px) {
        >b {
            font-size: 16px;
        }
        i {
            font-size: 24px;
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

    @media screen and (max-width: 800px) {
        margin-left: 0
    }

`