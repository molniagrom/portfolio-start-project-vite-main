import styled, {css} from "styled-components";
import {theme} from "../styles/Theme.ts";

type ContainerPropsType = {
    padding?: string;
    maxWidth?: string;
    adaptMain?: boolean;
    adaptProj?: boolean;
    aboutMeAdaptive?: boolean;
    adaptFooter?: boolean;
}

export const Container = styled.div<ContainerPropsType>`
    max-width: ${props => props.maxWidth || '1200px'};
    width: 100%;
    min-height: 100%;
    padding: ${props => props.padding || "0 20px"};
    margin: 0 auto;
    //border: 2px solid yellow;

    @media screen and ${theme.media.tablet} {
        ${props => props.adaptMain && css`
            padding: 0 10vw;
        `}

        ${props => props.adaptFooter && css`
            padding: 55px 0 43px 0;
        `}
    }
    
    @media screen and ${theme.media.mobile} {

        ${props => props.adaptMain && css`
            padding: 0 25px;
        `}
        
        ${props => props.aboutMeAdaptive && css`
            padding: 26px 22px 0 22px;
        `} 
        
        ${props => props.adaptProj && css`
            padding: 0 35px;
        `}
        ${props => props.adaptFooter && css`
            padding: 55px 0 36px 0;
        `}
        
    }
`