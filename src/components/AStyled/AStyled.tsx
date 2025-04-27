import styled from "styled-components";

type AStyledPropsType = {
    backgroundColor?: string,
    color?: string,
    fontFamily?: string
    borderRadius?: string
    gap?: string
    padding?: string
    fontWeight?: string
    fontSize?: string
}

export const AStyled = styled.a<AStyledPropsType>`
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
};

export const InputLinkStyled = styled.input<InputLinkStyledPropsType>`
    /* Стили как у ссылки */
    color: ${props => props.color || undefined};
    border: ${props => props.border || undefined};
    appearance: ${props => props.appearance || undefined};
    outline: ${props => props.outline || undefined};
    cursor: pointer;
    font-size: ${props => props.fontSize || undefined};
    font-weight: ${props => props.fontWeight || undefined};
    background-color: ${props => props.backgroundColor || undefined};
    list-style: none;
`;

