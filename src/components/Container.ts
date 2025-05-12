import styled, {css} from "styled-components";
import {theme} from "../styles/Theme.ts";

type ContainerPropsType = {
    padding?: string;
    maxWidth?: string;
    adaptMain?: boolean;
    adaptProj?: boolean;
}

export const Container = styled.div<ContainerPropsType>`
    max-width: ${props => props.maxWidth || '1200px'};
    width: 100%;
    min-height: 100%;
    padding: ${props => props.padding || undefined};
    margin: 0 auto;
    //border: 2px solid yellow;

    @media screen and ${theme.media.tablet} {
        ${props => props.adaptMain && css`
            padding: 0 100px;
        `} 
        ${props => props.adaptProj && css`
            padding: 0 110px;
        `}
    }

    @media screen and ${theme.media.mobileBig} {
        ${props => props.adaptMain && css`
            padding: 0 47px;
        `}
    }
`