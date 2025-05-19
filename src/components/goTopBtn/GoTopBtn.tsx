import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {theme} from "../../styles/Theme.ts";
import {animateScroll as scroll} from "react-scroll";
import {useEffect, useState} from "react";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        });
    }, [])

    return (
        <>
            {showBtn && <StyledGoTopBtn onClick={() => {
                scroll.scrollToTop()
            }}>
                <Icon width={"75px"} height={"75px"} iconId={"arrowGoTop"}/>
            </StyledGoTopBtn>}
        </>

    );
};

const StyledGoTopBtn = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: transform 0.2s;
    backdrop-filter: blur(10px);
    background: ${theme.colors.allBgOpacity};
    border-radius: 50%;
    z-index: 15;

    &:hover {
        transform: scale(1.1);
    }

    @media screen and ${theme.media.mobile} {
        bottom: 10px;
        right: 10px;
    }
`