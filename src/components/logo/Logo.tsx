// import React from 'react';

// import {Icon} from "../icon/Icon.tsx";
import IconLogo from "../iconLogo/IconLogo.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const Logo = () => {
    return (
        <a href="/">
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