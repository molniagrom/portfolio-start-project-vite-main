import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Header = styled.header`
    backdrop-filter: blur(10px);
    background: ${theme.colors.allBgOpacity};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`

export const S = {
    Header,

}