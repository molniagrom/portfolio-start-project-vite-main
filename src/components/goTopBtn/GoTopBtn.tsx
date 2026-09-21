import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {theme} from "../../styles/Theme.ts";
import {useLenis} from "../../context/LenisContext.tsx";
import {useScroll, useTransform, motion} from "framer-motion";

export const GoTopBtn = () => {
    const lenis = useLenis();
    const {scrollY} = useScroll();
    const opacity = useTransform(scrollY, [0, 200], [0, 1]);

    return (
        <motion.div style={{
            opacity,
            position: "fixed",
            bottom: 30,
            right: 30,
            zIndex: 15,
            pointerEvents: "auto",
        }}>
            <StyledGoTopBtn onClick={() => lenis?.scrollTo(0, {duration: 1.5})}>
                <Icon width={"75px"} height={"75px"} iconId={"arrowGoTop"}/>
            </StyledGoTopBtn>
        </motion.div>
    );
};

const StyledGoTopBtn = styled.button`
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: transform 0.2s;
    backdrop-filter: blur(10px);
    background: ${theme.colors.allBgOpacity};
    border-radius: 50%;

    &:hover {
        transform: scale(1.1);
    }

    @media screen and ${theme.media.mobile} {
        width: 40px;
        height: 40px;
    }
`
