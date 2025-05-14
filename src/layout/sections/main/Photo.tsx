import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";

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
    adaptMain?: boolean;
    adaptiveProj?: boolean;
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

    ${props => props.adaptiveProj && css`
        @media screen and ${theme.media.mobile} {
            height: 145px;
        }
    `}
    
    
    ${props => props.adaptMain && css`
       
        @media screen and (max-width: 1020px) {
            width: 44%;
            height: 44%;
        }

        @media screen and ${theme.media.tablet} {
            width: 334px;
            height: 334px;
            border: 16px solid white;
        }
        
        @media screen and ${theme.media.mobile} {
            width: 60%;
            height: 60%;
            min-width: 187px;
            min-height: 187px;
            border: 10px solid white;
        }

    `}
    
`;
