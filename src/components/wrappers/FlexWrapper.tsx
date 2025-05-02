import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    alignItems?: string;
    wrap?: string;
    gap?: string;
    flexGrow?: string;
    padding?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || undefined};
    justify-content: ${props => props.justify || undefined};
    align-items: ${props => props.alignItems || undefined};
    flex-wrap: ${props => props.wrap || undefined};
    gap: ${props => props.gap || undefined};
    flex-grow: ${props => props.flexGrow || undefined};
    //height: 100%;
    padding: ${props => props.padding || undefined};
`