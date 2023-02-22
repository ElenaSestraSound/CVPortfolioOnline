import { css } from '@emotion/react'

export const cardBox = css`
    position: relative;
    top: -280px;
    @media screen and (max-width: 900px) {
        height: 910px;
    }
`
export const card = css`
    @media screen and (max-width: 900px) {
        >div {
            display: block;
            margin-bottom: 30px;
        }
    }
`