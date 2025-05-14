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
    width?: string;
    adaptiveProj?: boolean;
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
    width: ${props => props.width || undefined};


    @media screen and ${theme.media.tablet} {
        flex-wrap: ${props => props.adaptive ? "wrap" : "nowrap"};

        ${props => props.adaptMain && css`
            gap: 20px;
        `}

        ${props => props.adaptiveMyStack && css`
            gap: 60px;
        `}
    }


    @media screen and ${theme.media.mobile} {
        ${props => props.adaptive && css`
            justify-content: center;
        `}

        ${props => props.adaptiveProj && css`
            padding: 10px 20px 13px 20px;
        `}

        ${props => props.adaptive && css`
            gap: 17px;
        `}

        ${props => props.adaptiveHighlights && css`
            flex-direction: column;
        `}
    }

`;
