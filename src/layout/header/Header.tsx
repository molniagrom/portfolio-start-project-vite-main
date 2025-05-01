// import React from 'react';
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import styled from "styled-components";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/wrappers/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";

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
    background-color: ${theme.colors.allBg};
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    border: 2px solid red;
    margin-bottom: 77px;
`
