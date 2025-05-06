import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
// import {Icon} from "../../../components/icon/Icon.tsx";

export const MainSection = styled.section`
    display: flex;
    position: relative;
    padding: 80px 0;

    background: linear-gradient(
            to right,
            #24335C 26.39%,
            transparent 26.39%
    );

    div h2 span {
        color: ${theme.colors.accent};
    }

  
`