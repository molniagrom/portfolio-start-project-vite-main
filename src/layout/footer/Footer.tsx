// import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/wrappers/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container adaptFooter padding={"130px 0px 73px 0px"}>
                <FlexWrapper direction="column" justify={"center"} alignItems={"center"}>
                    <Title>Coded by Alina Groza nezhad</Title>
                    <SubTittle>All Rights Reserved © 2025 - {new Date().getFullYear()}</SubTittle>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Inter", sans-serif;
    background-image: url("../../../public/MaskGroup.svg");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 243px;

    @media screen and ${theme.media.tablet} {
        min-height: 152px;
    }

        h4 {
        margin: 0;
    }
`
const Title   = styled.h4`
    font-weight: 700;
    font-size: 16px;
`
const SubTittle   = styled.h4`
    font-weight: 400;
    font-size: 11px;
`