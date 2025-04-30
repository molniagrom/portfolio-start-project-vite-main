// import React from 'react';

import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Slider />
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: rgba(175, 226, 244, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 593px;
`
