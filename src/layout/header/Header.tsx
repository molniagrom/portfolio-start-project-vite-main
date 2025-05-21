// import React from 'react';
import {Logo} from "../../components/logo/Logo.tsx";
import {DesktopMenu} from "../../components/menu/DesktopMenu.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/wrappers/FlexWrapper.tsx";
import {MobileMenu} from "../../components/menu/MobileMenu.tsx";
import React from "react";
import {S} from "./Header_Styles.ts"

export const Header: React.FC = () => {
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
        <S.Header>
            <Container padding={"15px"}>
                <FlexWrapper justify="space-between" alignItems={"center"}>
                    <Logo/>
                    <FlexWrapper gap={"clamp(10px, 10vw, 64px)"} justify="space-between" alignItems={"center"}>
                        <DesktopMenu items={items}/>
                        <MobileMenu items={items}/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};
