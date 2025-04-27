// import React from 'react';

import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
            <Title>Coded by Alina Groza nezhad</Title>
            <SubTittle>All Rights Reserved © 2025 - {new Date().getFullYear()}</SubTittle>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #24335C;
    color: #fff;
    h4 {
        margin: 0;
    }
`
const Title   = styled.h4`

`
const SubTittle   = styled.h4`

`