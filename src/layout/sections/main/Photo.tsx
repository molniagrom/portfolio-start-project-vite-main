import styled from "styled-components";

type PhotoPropsType = {
    width?: string;
    height?: string;
    borderRadius?: string;
    objectFit?: string;
    border?: string;
    position?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
}

export const Photo = styled.img<PhotoPropsType>`
    width: ${props => props.width || undefined};
    height: ${props => props.height || undefined};
    border-radius: ${props => props.borderRadius || undefined};
    object-fit: ${props => props.objectFit || undefined};
    border: ${props => props.border || undefined};
    position: ${props => props.position || undefined};
    top: ${props => props.top || undefined};
    left: ${props => props.left || undefined};
    right: ${props => props.right || undefined};
    bottom: ${props => props.bottom || undefined};
`;
