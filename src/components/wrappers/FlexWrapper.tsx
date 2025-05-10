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


    @media screen and ${theme.media.tabletBig} {
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
`;
