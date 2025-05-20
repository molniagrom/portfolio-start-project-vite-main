// import React from 'react';
import IconLogo from "../iconLogo/IconLogo.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
        <LogoLink onClick={() => {scroll.scrollToTop()}}>
                <IconLogo />
        </LogoLink>
    );
};

const LogoLink = styled.a`
    //width: 100%;
    //height: 100%;
    background-color: ${theme.colors.secondaryFont};
    border-radius: 50%;
    display: inline-block;
    align-self: flex-start;
`