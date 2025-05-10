import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";

type AStyledPropsType = {
    backgroundColor?: string;
    color?: string;
    fontFamily?: string;
    borderRadius?: string;
    gap?: string;
    padding?: string;
    fontWeight?: string;
    fontSize?: string;
    lineHeight?: string;
    buttonHover?: boolean;
    LinkHover?: boolean;
    adaptiveMain?: boolean;
};

export const AStyled = styled.a<AStyledPropsType>`
    background-color: ${props => props.backgroundColor || undefined};
    color: ${props => props.color || undefined};
    font-family: ${props => props.fontFamily || undefined};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.borderRadius || undefined};
    gap: ${props => props.gap || undefined};
    padding: ${props => props.padding || undefined};
    font-weight: ${props => props.fontWeight || undefined};
    font-size: ${props => props.fontSize || undefined};
    line-height: ${props => props.lineHeight || undefined};
    cursor: pointer;
    transition: all 0.5s ease;
    word-break: keep-all;
    white-space: nowrap;


    svg {
        transform: translateY(1px);
    }

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

        ${props => props.buttonHover && css`
            transition: background-color 0.2s ease, color 0.2s ease;
            background-color: ${theme.colors.accent};
            color: ${theme.colors.primaryFont};
        `}
        ${props => props.LinkHover && css`
            transition: color 0.2s ease;
            color: ${theme.colors.primaryFont};
        `}
        svg {
            transform: translateX(5px);
        }
    }

    @media screen and ${theme.media.mobileBig} {
        ${props => props.adaptiveMain && css`
            font-weight: 600;
            font-size: 8px;
            line-height: 150%;
            padding: 8px 20px;
        `}
    }

`;

type InputLinkStyledPropsType = {
    backgroundColor?: string;
    color?: string;
    fontFamily?: string;
    borderRadius?: string;
    fontWeight?: 'normal' | 'bold' | 'lighter' | 'bolder' | number;
    fontSize?: string;
    border?: string;
    outline?: string;
    appearance?: string;
    adaptiveMain?: boolean;
};

export const InputLinkStyled = styled.input<InputLinkStyledPropsType>`
    color: ${props => props.color || "inherit"};
    border: ${props => props.border || "1px solid transparent"};
    appearance: ${props => props.appearance || "none"};
    outline: ${props => props.outline || "none"};
    cursor: pointer;
    font-size: ${props => props.fontSize || "inherit"};
    font-weight: ${props => props.fontWeight || "normal"};
    background-color: ${props => props.backgroundColor || "transparent"};
    font-family: ${props => props.fontFamily || "inherit"};
    border-radius: ${props => props.borderRadius || "0"};
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.03);
    }

    @media screen and ${theme.media.tabletBig} {
        max-width: 134px;
        max-height: 24px;
    }

    @media screen and ${theme.media.mobileBig} {
        ${props => props.adaptiveMain && css`
            font-weight: 600;
            font-size: 8px;
            line-height: 150%;
            padding: 8px 20px;
        `}
    }

`;
