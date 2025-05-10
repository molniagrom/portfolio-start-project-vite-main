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
import {HoverableIcon} from "../../../components/icon/HoverableIcon.tsx";


export const Main = () => {
    return (
        <MainSection>
            <Container adaptMain padding={"0px 25px 0px 25px"}>
                <MainSectionWrapper>
                    <FlexWrapper
                        direction="row"
                        position="relative"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Icon adaptivePlus={true} top={"-100px"} left={"25%"} width="108" height="107"
                              viewBox="0 0 108 107" zIndex={"-11111111"}
                              position={"absolute"} iconId={"plus"}/>
                        <Icon adaptiveElipse={true} bottom={"0"} right={"25px"} width="152" height="152"
                              viewBox="0 0 152 152" zIndex={"-11111111"}
                              position={"absolute"} iconId={"ElipseMiddle"}/>
                        <WrapperBlur>

                            <FlexWrapper adaptMain
                                         adaptive={true} gap={"5vw"} direction="row" alignItems={"center"}
                                         justify="space-around">
                                <Photo
                                    adaptMain
                                    src={myPhoto}
                                    width="334px"
                                    height="334px"
                                    borderRadius="50%"
                                    border="22px solid white"
                                />
                                <FlexWrapper direction="column">
                                    <MainTitle>Frontend-developer WEB</MainTitle>
                                    <Name>I'm <span>Alina Groza</span>. Bringing order to chaos — your frontend in
                                        reliable
                                        hands. Aesthetics, logic, and user care — in every pixel.</Name>
                                    <FlexWrapper alignItems={"center"} gap="32px">

                                        <AStyled
                                            adaptiveMain
                                            href={"https://www.youtube.com/watch?v=Zhq_ThHG2gA&t=8032s"}
                                            target="_blank"
                                            fontSize={"15px"}
                                            fontWeight={"600"}
                                            padding={"15px"}
                                            gap={"14px"}
                                            color={theme.colors.primaryFont}
                                            borderRadius={"20px"}
                                            fontFamily={"Roboto"}
                                            backgroundColor={"#2157F2"}

                                        >

                                            See Projects
                                            <Icon adaptiveMain iconId={"ArrowWhiteToButton"} width={"28px"} height={"28px"}
                                                  viewBox={"-3 -3 36 36"}/>

                                        </AStyled>

                                        <InputLinkStyled
                                            adaptiveMain
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
                    <BlueWhite>
                        <HoverableIcon iconId="instagramWhite" viewBox="0 0 31 31" width="36px" height="36px"/>
                        <HoverableIcon iconId="whatsappWhite" viewBox="0 0 31 31" width="36px" height="36px"/>
                        <HoverableIcon iconId="telegramWhite" viewBox="0 0 31 31" width="31px" height="31px"/>
                    </BlueWhite>
                </MainSectionWrapper>
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
    //position: relative;

    @media screen and ${theme.media.tabletBig} {
        padding: 30px 50px 100px 78px;
    }

    @media screen and ${theme.media.mobileBig} {
        padding: 16px 65px 100px 78px;

    }

`
const MainSectionWrapper = styled.div`
    position: relative;
    max-width: 1160px;
    margin: 0 auto;

`

export const MainTitle = styled.h1`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: clamp(28px, 6vw, 60px);
    line-height: clamp(1.2, 4vw, 1.36);
    padding-bottom: clamp(10px, 3vw, 20px);

    @media screen and ${theme.media.mobileBig} {
        font-weight: 700;
        font-size: 33px;
        line-height: 115%;
    }
`

type NamePropsType = {
    color?: string;
}

export const Name = styled.h2<NamePropsType>`
    font-weight: 400;
    font-size: clamp(10px, 4vw, 20px);
    line-height: clamp(1.3, 3.5vw, 1.5);
    padding-bottom: clamp(20px, 5vw, 42px);
    @media screen and ${theme.media.tabletBig} {
        padding-bottom: clamp(15px, 5vw, 50px);

    }
    @media screen and ${theme.media.mobileBig} {
        font-weight: 400;
        font-size: 15px;
        line-height: 150%;
    }


`

const BlueWhite = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: fixed;
    bottom: 100px;
    left: 0;
    gap: 17px;
    border-radius: 0 25px 25px 0;
    background-color: #24335C;
    outline: 2px solid ${theme.colors.linear};
    padding: 36px 15px;
    z-index: 5;
`




