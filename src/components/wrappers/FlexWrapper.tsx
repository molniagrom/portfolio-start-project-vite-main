import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    alignItems?: string;
    wrap?: string;
    gap?: string;
    padding?: string;
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.alignItems || "stretch"};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || 'auto'};
    padding: ${props => props.padding || 'auto'};
`