import { css } from "@emotion/react";

export const blackBakground = css`
height: 400px;
width: 100%;
max-width: 1240px;
margin: 0 auto;
padding: 0 20px;

@media screen and (max-width: 600px) {
    height: 500px
}
@media screen and (max-width: 530px) {
    height: 700px
}
@media screen and (max-width: 420px) {
    height: 800px
}
@media screen and (max-width: 375px) {
    height: 900px
}
`