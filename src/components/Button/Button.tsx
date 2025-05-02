import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";

type ButtonPropsType = {
    backgroundColor?: string,
    color?: string,
    fontFamily?: string
    borderRadius?: string
    gap?: string
    padding?: string
    fontWeight?: string
    fontSize?: string
    border?: string
    clicked?: boolean
}

export const Button = styled.button<ButtonPropsType>`
    background-color: ${props => props.backgroundColor || undefined};
    color: ${props => props.color || undefined};
    //font-family: ${props => props.fontFamily}, undefined;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.borderRadius || undefined};
    gap: ${props => props.gap || undefined};
    padding: ${props => props.padding || undefined};
    font-weight: ${props => props.fontWeight || undefined};
    font-size: ${props => props.fontSize || undefined};
    border: ${props => props.border || undefined};

    transition: background-color 0.3s ease, border 0.3s ease;

    ${props => props.clicked && css`
        background-color: ${theme.colors.primaryBg};
        border: none;
    `}
    
    // &:hover {
    //     background-color: ${theme.colors.primaryBg};
    //     border: none;
    // }
`