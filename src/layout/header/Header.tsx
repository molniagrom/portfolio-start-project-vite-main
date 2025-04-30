// import React from 'react';
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import styled from "styled-components";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/wrappers/FlexWrapper.tsx";

export const Header = () => {
    return (
        <StyleHeader>
            <Container>
                <FlexWrapper justify="space-between" alignItems={"center"}>
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
            </Container>
        </StyleHeader>
    );
};

const StyleHeader = styled.header`
    background-color: cadetblue;
`
