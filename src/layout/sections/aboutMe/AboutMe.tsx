// import React from 'react';

import styled from "styled-components";
// import map from "../../../../public/map.png";
// import me from "../../../../public/me.png";
import {Icon} from "../../../components/icon/Icon.tsx";
// import {Photo} from "../main/Photo.tsx";
import {Name} from "../main/Main.tsx";
// import ElipseSmallGradient from "../../../../image/icons-sprite.svg";

export const AboutMe = () => {
    return (
        <AboutMeStyled>
            {/*<Photo height={"100%"} position={"absolute"} top={"0"} left={"0"} src={map} />*/}
            {/*<Photo position={"absolute"} bottom={"0"} right={"0"} src={me} />*/}
            <InfoAboutMe>
                <Icons>
                    <Icon width={"26px"} height={"26px"} iconId={"whatsappWhite"}/>
                    <Icon width={"26px"} height={"26px"} iconId={"instagramWhite"}/>
                    <Icon width={"26px"} height={"26px"} iconId={"upArrow"}/>
                </Icons>
                <Name color={"#393939"}>I'm <span>Alina</span> Groza</Name>
                <UlStyled>
                    <LiStyled>I was born in Tiraspol</LiStyled>
                    <LiStyled>I’m 17 years old</LiStyled>
                    <LiStyled>I have started my interest in this field from 2023</LiStyled>
                    <LiStyled>I’m Frontend-developer WED</LiStyled>
                    <LiStyled>My phone number in Moldova ... </LiStyled>
                </UlStyled>
            </InfoAboutMe>
        </AboutMeStyled>
    );
};

const AboutMeStyled = styled.section`
    min-height: 946px;
    background-color: #A6BCFA;
    background-image: url("../../../../public/me.png"), url("../../../../public/map.png");
    background-repeat: no-repeat, no-repeat;
    background-position: right bottom, left top;
    background-size: auto, contain;
    position: relative;
`;

const InfoAboutMe = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 5vw;
    left: 50%;
    max-width: 536px;

    z-index: 1;
    color: #393939;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 100px 0 100px 0;
`
const Icons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`

const UlStyled = styled.ul`
    list-style: none;
`
const LiStyled = styled.li`
    //marker: url('$_{IconName}'); "_" Чтобы не ругался 

    &::before {
        content: "";
        display: inline-block;
        width: 18px;
        height: 18px;
        background: linear-gradient(90deg, rgba(166, 188, 250, 1) 50%, rgba(33, 87, 242, 1) 100%);
        border-radius: 50%;
        transform: rotate(90deg);
    }
`


