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
            <Container padding={"15px"} >
                <FlexWrapper justify="space-between" alignItems={"center"}>
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
            </Container>
        </StyleHeader>
    );
};

const StyleHeader = styled.header`
    backdrop-filter: blur(10px);
    background: ${theme.colors.allBgOpacity};
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    margin-bottom: 77px;
    //border: blueviolet 2px solid;
`
