// import React from 'react';
import iconsSprite from "../../image/icons-sprite.svg";
import styled from "styled-components";
// import spriteMyStack from "../../image/sprite-my-stack.svg";
// import styled, {css} from "styled-components";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    position?: string
    cursor?: string
    top?: string
    left?: string
    zIndex?: string
}
export const Icon = (props: IconPropsType) => {
    return (
        <Svg
            width={props.width || "36"}
            height={props.height || "36"}
            viewBox={props.viewBox || "0 0 36 36"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            // needToTransform
        >
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </Svg>
    );
};

type SvgProps = {
    position?: string
    top?: string
    left?: string
    cursor?: string
    zIndex?: string
}

const Svg = styled.svg<SvgProps>`
    cursor: ${props => (props.cursor || undefined)};
    position: ${props => props.position || undefined};
    top: ${props => props.top || undefined};
    left: ${props => props.left || undefined};
    z-index: ${props => props.zIndex || undefined};
    transition: transform 0.5s ease;
`

// type SvgPropsType = {
//     width?: string
//     height?: string
//     needToTransform?: boolean
// }
//
// const Svg = styled.svg<SvgPropsType>`
//
//     width: ${(props) => (props.width || "36")};
//     height: ${(props) => (props.height || "36")};
//
//     ${props => props.needToTransform && css`
//         transform: translateY(10%);
//     `
// }
// `

