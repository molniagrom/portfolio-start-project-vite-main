// import React from 'react';
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import styled from "styled-components";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/wrappers/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";
import {Icon} from "../../components/icon/Icon.tsx";
import {MobileMenu} from "../../components/menu/MobileMenu.tsx";

export const Header = () => {
    const items = [
        {
            title: "Home",
            href: "home"
        },
        {
            title: "Projects",
            href: "projects"
        },
        {
            title: "About",
            href: "about"
        },
        {
            title: "Testimony",
            href: "testimony"
        },
        {
            title: "Contact",
            href: "contact"
        },
    ];

    return (
        <StyleHeader>
            <Container padding={"15px"}>
                <FlexWrapper justify="space-between" alignItems={"center"}>
                    <Logo/>
                    <FlexWrapper gap={"clamp(10px, 10vw, 64px)"} justify="space-between" alignItems={"center"}>
                        <Menu items={items}/>
                        <MobileMenu items={items}/>
                        <Icon iconId={"moon"}/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyleHeader>
    );
};

const StyleHeader = styled.header`
    // backdrop-filter: blur(10px); 
        // background: ${theme.colors.allBgOpacity};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    //border: blueviolet 2px solid;
    
`
