// import React from 'react';
import IconLogo from "../iconLogo/IconLogo.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
        <a onClick={() => {scroll.scrollToTop()}}>
            <Wrapper>
                <IconLogo />
            </Wrapper>
        </a>
    );
};

const Wrapper = styled.p`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.secondaryFont};
    border-radius: 50%;
`