import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    alignItems?: string;
    gap?: string;
    flexGrow?: string;
    padding?: string;
    position?: string;
    adaptive?: boolean;
    adaptMain?: boolean;
    adaptiveHighlights?: boolean;
    adaptiveMyStack?: boolean;
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || undefined};
    justify-content: ${props => props.justify || undefined};
    align-items: ${props => props.alignItems || undefined};
    gap: ${props => props.gap || undefined};
    flex-grow: ${props => props.flexGrow || undefined};
    padding: ${props => props.padding || undefined};
    position: ${props => props.position || undefined};

     ${props => props.adaptiveHighlights && css`
         @media screen and ${theme.media.mobileVerySmall} {
             flex-direction: column;
         }
     `}
     
     ${props => props.adaptiveMyStack && css`
         @media screen and ${theme.media.tablet} {
             gap: 60px;
         }
     `}
   


        @media screen and ${theme.media.tablet} {
        flex-wrap: ${props => props.adaptive ? "wrap" : "no-wrap"};
        ${props => props.adaptMain && css`
            gap: 20px;
        `}
    }

    @media screen and ${theme.media.mobileBig} {
        ${props => props.adaptive && css`
            gap: 17px;
        `}
    }


    @media screen and ${theme.media.mobileSmall} {
        ${props => props.adaptive && css`
            justify-content: center;
        `}
    }

`;
