import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
// import {Icon} from "../../../components/icon/Icon.tsx";

export const MainSection = styled.section`
    display: flex;
    position: relative;
    padding: 190px 0;


    @media screen and ${theme.media.tabletBig} {
        padding: 168px 0;
    }

    background: linear-gradient(
            to right,
            #24335C 26.39%,
            transparent 26.39%
    );

    @media screen and ${theme.media.tabletBig} {
        background: linear-gradient(
                to right,
                #24335C clamp(26vw, 50vw, 50vw),
                transparent clamp(26vw, 50vw, 50vw)
        );
    }
    
    div h2 span {
        color: ${theme.colors.accent};
    }

  
`