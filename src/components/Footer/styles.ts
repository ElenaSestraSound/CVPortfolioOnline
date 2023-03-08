import { css } from "@emotion/react";

export const footer = css`
@media screen and (max-width: 860px) {
    display: block;
    margin: 0 auto;
    width: fit-content;
    
    
    >div{
        display: block;
        margin: 0 auto;
        margin-bottom: 20px;
    }
}
`

export const footerLinkBox = css`
    nav {
        display: inline-block;
        vertical-align: top;
    }
    >ul {
        display: inline-block;
        vertical-align: top;
        @media screen and (max-width: 390px) {
            li a {
                font-size: 18px !important;
            }
        }
    }
`

export const tecnologiesBox = css`
@media screen and (max-width: 860px) {
    width: 100%;
    text-align: center;
}
`