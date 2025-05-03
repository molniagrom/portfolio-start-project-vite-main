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
            <Container>

            <Icon top={"-19%"} left={"25%"} width="108" height="107" viewBox="0 0 108 107" zIndex={"2"} position={"absolute"} iconId={"plus"}/>
            <Icon top={"70%"} right={"18%"} width="152" height="152" viewBox="0 0 152 152" zIndex={"-1"} position={"absolute"} iconId={"ElipseMiddle"}/>


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
                                <Name>I'm <span>Alina Groza</span>. Bringing order to chaos — your frontend in reliable hands. Aesthetics, logic, and user care — in every pixel.</Name>
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
                                        <Icon iconId={"ArrowWhiteToButton"} width={"28px"} height={"28px"}
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
    padding: 48px 90px 36px 106px;

`

export const MainTitle = styled.h1`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 60px;
    line-height: 136%;
    margin-bottom: 20px;
`

type NamePropsType = {
    color?: string;
}

export const Name = styled.h2<NamePropsType>`
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
    top: 600px;
    gap: 17px;
    border-radius: 0 25px 25px 0;
    background-color: #24335C;
    padding: 15px 36px;
    z-index: 5;
`




