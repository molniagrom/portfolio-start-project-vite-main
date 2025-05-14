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
    lineHeight?: string
    isClicked?: boolean
    adaptiveProject?: boolean
    adaptiveContact?: boolean
}

export const Button = styled.button<ButtonPropsType>`
    background-color: ${props => props.backgroundColor || undefined};
    color: ${props => props.color || undefined};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.borderRadius || undefined};
    gap: ${props => props.gap || undefined};
    padding: ${props => props.padding || undefined};
    font-weight: ${props => props.fontWeight || undefined};
    font-size: ${props => props.fontSize || undefined};
    outline: ${props => props.border || undefined};
    align-self: flex-start;
    transition: all 0.2s ease;
    cursor: pointer;
    line-height: ${props => props.lineHeight || undefined};

    ${props => props.isClicked && css`
        background-color: ${theme.colors.primaryBg};
        outline: none;
    `} 
    
    @media screen and ${theme.media.mobile} {

      ${props => props.adaptiveProject && css`
        padding: 4px 34px;
      `}
      
      ${props => props.adaptiveContact && css`
          font-size: 9px;
          padding: 6px 24px;
      `}
    
    
    }


`
