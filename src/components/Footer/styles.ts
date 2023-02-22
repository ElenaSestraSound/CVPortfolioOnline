import { css } from "@emotion/react";

export const footer = css`
@media screen and (max-width: 830px) {
    display: block;
    margin: 0 auto;
    width: fit-content;
    
    >div:first-child {
        width: 100%;
        svg {
            margin: 0 auto;
        }
    }
    >div{
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
    }
`