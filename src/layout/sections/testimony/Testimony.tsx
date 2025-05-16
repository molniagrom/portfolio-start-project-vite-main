// import React from 'react';

import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container padding={"20px 0 20px 0"}>
                <Slider/>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: ${theme.colors.primaryBg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 593px;
    padding: 0 20px 0 20px;

`
