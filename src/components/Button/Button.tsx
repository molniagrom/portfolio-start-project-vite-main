import styled from "styled-components";

type ButtonPropsType = {
    backgroundColor?: string,
    color?: string,
    fontFamily?: string
    borderRadius?: string
    gap?: string
    padding?: string
    fontWeight?: string
    fontSize?: string
}

export const Button = styled.button<ButtonPropsType>`
    background-color: ${props => props.backgroundColor || "white"};
    color: ${props => props.color || "white"};
    font-family: ${props => props.fontFamily}, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.borderRadius || "none"};
    gap: ${props => props.gap || "0"};
    padding: ${props => props.padding || "0"};
    font-weight: ${props => props.fontWeight || "normal"};
    font-size: ${props => props.fontSize || "16px"};
`