// import React from 'react';
import iconsSprite from "../../image/icons-sprite.svg";
// import spriteMyStack from "../../image/sprite-my-stack.svg";
// import styled, {css} from "styled-components";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg
            width={props.width || "36"}
            height={props.height || "36"}
            viewBox={props.viewBox || "0 0 36 36"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // needToTransform
        >
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

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

