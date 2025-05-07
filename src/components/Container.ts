import styled from "styled-components";

type ContainerPropsType = {
    padding?: string;
}

export const Container = styled.div<ContainerPropsType>`
    max-width: 1200px;
    width: 100%;
    min-height: 100%;
    padding: ${props => props.padding || undefined};
    margin: 0 auto;
    //border: 2px solid yellow;
`