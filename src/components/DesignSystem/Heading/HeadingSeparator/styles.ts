import { css } from "@emotion/react";

export const headingSeparator = css`
    display: flex;
    align-items: center;
    position: relative;
    width: 180px;
    margin: 10px 0 0 0;
`
export const separatorLine = css`
    width: 100%;
    height: 2px;
`
export const separatorBlob = css`
    height: 10px;
    width: 100%;
    position: absolute;
    top:-4px;
    display: flex;
    justify-content: center;

    div {
        width: 35px;
        border-radius: 10px;
        background-color: #FA8C0F;
    }
`