// import React from 'react';

import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {HoverableIcon} from "../../../components/icon/HoverableIcon.tsx";


export const AboutMe = () => {
    return (
        <AboutMeStyled>
            <Container>
                <WrapperBcg>
                    <StyledImage id="map" src="../../../../public/map.png" alt="map" />
                    <StyledImage id="me" src="../../../../public/me.png" alt="me" />
                    <InfoAboutMe>
                        <Icons>
                            <HoverableIcon iconId="whatsappWhite" viewBox="0 0 33 33" width="26px" height="26px" />
                            <HoverableIcon iconId="instagramWhite" viewBox="0 0 33 33" width="26px" height="26px" />
                            <HoverableIcon iconId="upArrow" viewBox="0 0 33 33" width="26px" height="26px" />

                            {/*<Icon width={"26px"} height={"26px"} iconId={"whatsappWhite"}/>*/}
                            {/*<Icon width={"26px"} height={"26px"} iconId={"instagramWhite"}/>*/}
                            {/*<Icon width={"26px"} height={"26px"} iconId={"upArrow"}/>*/}
                        </Icons>
                        <NameAboutMe>I'm <span>Alina</span> Groza</NameAboutMe>
                        <UlStyled>
                            <LiStyled>I was born in Tiraspol</LiStyled>
                            <LiStyled>I’m 17 years old</LiStyled>
                            <LiStyled>I have started my interest in this field from 2023</LiStyled>
                            <LiStyled>I’m Frontend-developer WED</LiStyled>
                            <LiStyled>My phone number in Moldova ... </LiStyled>
                        </UlStyled>
                    </InfoAboutMe>
                </WrapperBcg>


            </Container>

        </AboutMeStyled>

    );
};

const StyledImage = styled.img`
    max-width: 100%;
    height: auto;
    //max-height: 750px;
    //flex-shrink: 1;
    //object-fit: contain;
    
    @media (max-width: 768px) {
        max-height: 400px;
    }

    @media (max-width: 480px) {
        max-height: 250px;
    }
`

const AboutMeStyled = styled.section`
    min-height: 946px;
    background-color: #A6BCFA;
    //position: relative;
`;

const InfoAboutMe = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    top: 5vw;
    right: 0;
    max-width: 536px;
    padding: 30px 20px 65px 50px;

    color: #393939;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 100px 0 100px 0;
`
const Icons = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    gap: 16px;
    padding-bottom: 18px;
`
const WrapperBcg = styled.div`
    //background-image: url("../../../../public/me.png"), url("../../../../public/map.png");
    //background-repeat: no-repeat, no-repeat;
    //background-position: right bottom, left top;
    //background-size: auto, contain;
    //height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 46px 42px 0px 42px;
    
    #me {
        align-self: flex-end;
    }
    
    #map{
        
    }
`

const NameAboutMe = styled.h2`
    font-weight: 700;
    font-size: 60px;
    line-height: 136%;
    color: ${theme.colors.tertiaryBg};
    padding-bottom: 22px;

    span {
        color: ${theme.colors.accent};
    }
`

const UlStyled = styled.ul`
    list-style: none;
    
    li + li {
        padding-top: 6px;
    }
`
const LiStyled = styled.li`
    //marker: url('$_{IconName}'); "_" Чтобы не ругался 

    padding-left: 13px;
    &::before {
        content: "";
        display: inline-block;
        width: 18px;
        height: 18px;
        background: linear-gradient(90deg, rgba(166, 188, 250, 1) 50%, rgba(33, 87, 242, 1) 100%);
        border-radius: 50%;
        transform: rotate(90deg) translateY(13px);
    }
`


