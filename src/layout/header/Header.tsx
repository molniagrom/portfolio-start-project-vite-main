// import React from 'react';
import {Logo} from "../../components/logo/Logo.tsx";
import {DesktopMenu} from "../../components/menu/DesktopMenu.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/wrappers/FlexWrapper.tsx";
import {MobileMenu} from "../../components/menu/MobileMenu.tsx";
import React, {useEffect, useState} from "react";
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

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 577;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    return (
        <S.Header>
            <Container padding={"15px"}>
                <FlexWrapper justify="space-between" alignItems={"center"}>
                    <Logo/>
                    <FlexWrapper gap={"clamp(10px, 10vw, 64px)"} justify="space-between" alignItems={"center"}>
                        {
                            width < breakpoint
                                ? <MobileMenu items={items}/>
                                : <DesktopMenu items={items}/>
                        }
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};
