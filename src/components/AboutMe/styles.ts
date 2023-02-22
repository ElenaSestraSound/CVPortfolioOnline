import { css } from "@emotion/react";

export const aboutMeContainer = css`
    padding: 150px 0px;

    @media screen and (max-width: 900px) {
        display: block
    }
`
export const imageBox = css`
    img {
        border-radius: 9999px;
    }

    @media screen and (max-width: 900px) {
        display: block;
        width: 300px;
        height: 300px;
        margin: 0 auto
    }
`
export const detailsBox = css`
    width: 130%;
    margin-right: 70px; 
    h2 {
        margin-bottom: 30px;
        padding: 5px;
    }
    p {
        padding: 5px;
    }

    @media screen and (max-width: 900px) {
        display: block;
        width: 100%;
        margin-bottom: 30px
    }
`