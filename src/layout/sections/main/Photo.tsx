import styled from "styled-components";

type PhotoPropsType = {
    width?: string;
    height?: string;
    borderRadius?: string;
    objectFit?: string;
    border?: string;
}

export const Photo = styled.img<PhotoPropsType>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border-radius: ${props => props.borderRadius || '0px'};
  object-fit: ${props => props.objectFit || 'cover'};
  border: ${props => props.border || 'none'};
`;
