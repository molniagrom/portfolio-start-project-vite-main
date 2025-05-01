// import React from 'react';
import myPhoto from "../../../image/myPhoto.jpg"
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";
import {Photo} from "./Photo.tsx";
import {MainSection} from "./MainSection.tsx";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
// import {card} from "./Projects/card/card.tsx";
// import {Button} from "../../../components/Button/Button.tsx";
import {AStyled, InputLinkStyled} from "../../../components/AStyled/AStyled.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";


export const Main = () => {
    return (
        <MainSection>
            <Icon zIndex={"-1"} top={"0"} left={"0"} position={"absolute"} iconId={"BlueBgKv"} width="380" height="936" viewBox="0 0 380 936"/>
            <Container>
                <FlexWrapper justify="space-between" alignItems={"center"}>
                    <WrapperBlur>
                        <FlexWrapper gap={"5vw"} direction="row" alignItems={"center"} justify="space-around">
                            <Photo
                                src={myPhoto}
                                width="34.62%"
                                height="34.62%"
                                borderRadius="50%"
                                border="22px solid white"
                            />
                            <FlexWrapper direction="column">
                                <MainTitle>Frontend-developer WED</MainTitle>
                                <Name color={theme.colors.primaryFont}>I'm <span>Alina</span> Groza</Name>
                                <FlexWrapper gap="32px">

                                    <AStyled
                                        fontSize={"15px"}
                                        fontWeight={"600"}
                                        padding={"15px"}
                                        gap={"14px"}
                                        borderRadius={"20px"}
                                        fontFamily={"Roboto"}
                                        backgroundColor={"#2157F2"}>

                                        See Projects
                                        <Icon hover iconId={"ArrowWhiteToButton"} width={"28px"} height={"28px"}
                                              viewBox={"-3 -3 36 36"}/>

                                    </AStyled>

                                    <InputLinkStyled
                                        fontSize={"15px"}
                                        fontWeight={600}
                                        backgroundColor={"transparent"}
                                        color={"#6c92ff"}
                                        value={"Download Resume"}
                                        border={"none"}
                                        outline={"none"}
                                        appearance={"none"}
                                    >
                                    </InputLinkStyled>
                                </FlexWrapper>
                            </FlexWrapper>
                        </FlexWrapper>
                    </WrapperBlur>
                </FlexWrapper>

                <FlexWrapper>
                    <BlueWhite>
                        <Icon width={"31px"} height={"31px"} iconId={"instagramWhite"}/>
                        <Icon width={"31px"} height={"31px"} iconId={"whatsappWhite"}/>
                        <Icon width={"29px"} height={"29px"} iconId={"telegramWhite "}/>
                    </BlueWhite>
                </FlexWrapper>
            </Container>
        </MainSection>
    );
};

export default Main;

const WrapperBlur = styled.div`
    backdrop-filter: blur(10px);
    background-color: rgba(33, 87, 242, 0.2);
    border-radius: 200px 0;
    border: 2px solid ${theme.colors.linear};
`

const MainTitle = styled.h1`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 60px;
    line-height: 136%;
    color: ${theme.colors.primaryFont};
    margin-bottom: 20px;
`

type NamePropsType = {
    color?: string;
}

export const Name = styled.h2<NamePropsType>`
    color: ${props => props.color || undefined};
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    margin-bottom: 47px;
`

const BlueWhite = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: fixed;
    top: 700px;
    gap: 17px;
    border-radius: 0 25px 25px 0;
    background-color: #24335C;
    padding: 15px 36px;
    z-index: 5;
`




