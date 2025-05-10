// import React from 'react';

import styled, {css} from "styled-components";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {HoverableIcon} from "../../../components/icon/HoverableIcon.tsx";


export const AboutMe = () => {
    return (
        <AboutMeStyled>
            <Container>
                <WrapperBcg>
                    <StyledImage variant="map" src="../../../../public/map.png" alt="map"/>
                    <StyledImage variant="me" src="../../../../public/me.png" alt="me"/>
                    <InfoAboutMe>
                        <Icons>
                            <HoverableIcon iconId="whatsappWhite" viewBox="0 0 33 33" width="26px" height="26px"/>
                            <HoverableIcon iconId="instagramWhite" viewBox="0 0 33 33" width="26px" height="26px"/>
                            <HoverableIcon iconId="upArrow" viewBox="0 0 33 33" width="26px" height="26px"/>
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

const StyledImage = styled.img<{ variant: "map" | "me" }>`
    position: absolute;
    max-width: 100%;
    height: auto;

    ${({variant}) =>
            variant === "me" && css`
                bottom: 0;
                left: 40px;

                @media screen and ${theme.media.tabletBig} {
                    height: 51.44%;
                }

            `}

    ${({variant}) =>
            variant === "map" && css`
                bottom: 0;
                right: 0;
                height: 100%;
                object-fit: contain;
                @media screen and ${theme.media.tabletBig} {
                    height: 80%;
                }

            `}
`

const AboutMeStyled = styled.section`
    min-height: 946px;
    background-color: ${theme.colors.secondaryFont};
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const InfoAboutMe = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    top: 20px;
    right: 20%;
    max-width: 536px;
    padding: 30px 20px 65px 50px;
    margin-right: 20px;

    color: #393939;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 100px 0 100px 0;
    
    @media screen and ${theme.media.tabletBig}{
        top: 70px;
    }
`
const Icons = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    gap: 16px;
    padding-bottom: 18px;
`
const WrapperBcg = styled.div`
    position: relative;
    padding: 46px 42px 0 42px;
    min-height: 115vh;
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


