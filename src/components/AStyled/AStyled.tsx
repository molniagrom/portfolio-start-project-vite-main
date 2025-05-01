import styled from "styled-components";

type AStyledPropsType = {
    backgroundColor?: string;
    color?: string;
    fontFamily?: string;
    borderRadius?: string;
    gap?: string;
    padding?: string;
    fontWeight?: string;
    fontSize?: string;
};

export const AStyled = styled.a<AStyledPropsType>`
    background-color: ${props => props.backgroundColor || "white"};
    color: ${props => props.color || "white"};
    font-family: ${props => props.fontFamily || "sans-serif"};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.borderRadius || "0"};
    gap: ${props => props.gap || "0"};
    padding: ${props => props.padding || "0"};
    font-weight: ${props => props.fontWeight || "normal"};
    font-size: ${props => props.fontSize || "16px"};
    cursor: pointer;
    transition: all 0.5s ease;

    svg {
        transform: translateY(1px);
    }

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        
        svg {
            transform: translateX(5px);
        }
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
    padding: 0.4em 0.8em;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.03);
    }
    
`;
