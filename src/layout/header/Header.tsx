import {Logo} from "../../components/logo/Logo.tsx";
import {DesktopMenu} from "../../components/menu/DesktopMenu.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/wrappers/FlexWrapper.tsx";
import {MobileMenu} from "../../components/menu/MobileMenu.tsx";
import React, {useEffect, useState} from "react";
import {S} from "./Header_Styles.ts"
import {useThemeMode} from "../../context/ThemeModeContext.tsx";

export const Header: React.FC = () => {
    const items = [
        {title: "Home", href: "home"},
        {title: "Projects", href: "projects"},
        {title: "About", href: "about"},
        {title: "Testimony", href: "testimony"},
        {title: "Contact", href: "contact"},
    ];

    const [width, setWidth] = useState<number | null>(null);
    const breakpoint = 577;
    const {mode, toggleMode} = useThemeMode();

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    return (
        <S.Header>
            <Container padding={"15px"}>
                <FlexWrapper justify="space-between" alignItems={"center"}>
                    <Logo/>
                    <FlexWrapper gap={"clamp(10px, 10vw, 64px)"} justify="space-between" alignItems={"center"}>
                        {width !== null && width < breakpoint
                            ? <MobileMenu items={items} mode={mode} onToggleTheme={toggleMode}/>
                            : <DesktopMenu items={items} mode={mode} onToggleTheme={toggleMode}/>}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};
