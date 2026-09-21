import IconLogo from "../iconLogo/IconLogo.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {useLenis} from "../../context/LenisContext.tsx";

export const Logo = () => {
    const lenis = useLenis();

    return (
        <LogoLink onClick={() => lenis?.scrollTo(0, {duration: 1.5})}>
                <IconLogo />
        </LogoLink>
    );
};

const LogoLink = styled.a`
    background-color: ${theme.colors.secondaryFont};
    border-radius: 50%;
    display: inline-block;
    align-self: flex-start;
    cursor: pointer;
`
