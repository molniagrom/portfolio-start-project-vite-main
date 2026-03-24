import {useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {MenuPropsType} from "./DesktopMenu.tsx";
import {Link} from "react-scroll";
import {Icon} from "../icon/Icon.tsx";

export const MobileMenu = (props: MenuPropsType) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen]);

    return (
        <StyledMobileMenu isOpen={isOpen}>
            <BurgerButton
                isOpen={isOpen}
                onClick={onClick}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
            >
                <span></span>
            </BurgerButton>
            <MobileMenuPopup id="mobile-navigation" isOpen={isOpen} onClick={() => {
                setIsOpen(false)
            }}>
                <ul>
                    {props.items.map((item) => (
                        <ListItemMobile key={item.href}>
                            <LinkMobile onClick={() => {
                                setIsOpen(false)
                            }}
                                        activeClass="active" spy={true} smooth={true}
                                        to={item.href}>{item.title}</LinkMobile>
                        </ListItemMobile>
                    ))}
                    <ListItemMobile>
                        <ThemeToggleButton type="button" onClick={props.onToggleTheme}>
                            <Icon iconId={"moon"}/>
                            {props.mode === "dark" ? "Light theme" : "Dark theme"}
                        </ThemeToggleButton>
                    </ListItemMobile>
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav<PropsType>`
    display: flex;
    align-items: center;
    justify-content: center;

    ${props => props.isOpen && css<PropsType>`
        height: 100vh;
    `}
`

type PropsType = {
    isOpen: boolean;
}

const MobileMenuPopup = styled.div<PropsType>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 15;
    background-color: ${theme.colors.allBgOpacity};
    backdrop-filter: blur(10px);
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    transform: translateY(-100%);

    ${props => props.isOpen && css<PropsType>`
        transform: translateY(0);
    `}

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`

const BurgerButton = styled.button<PropsType>`
    position: fixed;
    top: -97px;
    right: -80px;
    width: 200px;
    height: 200px;
    z-index: 20;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.primaryFont};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<PropsType>`
            background-color: ${theme.colors.menuLineTransparent};
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.primaryFont};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<PropsType>`
                background-color: ${theme.colors.menuLine};
                transform: translateY(0) rotate(-45deg);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.primaryFont};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<PropsType>`
                background-color: ${theme.colors.menuLine};
                transform: translateY(0) rotate(45deg);
            `}
        }
    }
`

const ListItemMobile = styled.li``

const ThemeToggleButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 12px;
    color: ${theme.colors.primaryFont};
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
`

const LinkMobile = styled(Link)`
    display: inline-block;
    color: ${theme.colors.primaryFont};
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 25px;
    text-align: center;
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover, &.active {
        color: ${theme.colors.secondaryFont};
        transform: scale(1.03);
    }
`;
