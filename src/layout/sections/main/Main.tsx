import myPhoto from "../../../image/myPhoto.jpg"
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";
import {Photo} from "./Photo.tsx";
import {MainSection} from "./MainSection.tsx";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {InputLinkStyled} from "../../../components/AStyled/AStyled.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {HoverableIcon} from "../../../components/icon/HoverableIcon.tsx";
import {contactDetails, socialLinks} from "../../../data/portfolioData.ts";
import {Link} from "react-scroll";

export const Main = () => {
    return (
        <MainSection id="home">
            <Container adaptMain padding={"0px 25px 0px 25px"}>
                <MainSectionWrapper>
                    <FlexWrapper
                        direction="row"
                        position="relative"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Icon adaptivePlus={true} top={"-100px"} right={"60%"} width="108" height="107"
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
                                    alt="Portrait of Alina Groza"
                                    width="334px"
                                    height="334px"
                                    borderRadius="50%"
                                    border="22px solid white"
                                />
                                <FlexWrapper direction="column">
                                    <MainTitle>Frontend Developer</MainTitle>
                                    <Name>I'm <span>Alina Groza</span>. Bringing order to chaos - your frontend in reliable hands. Aesthetics, logic, and user care in every pixel.</Name>
                                    <FlexWrapper adaptive alignItems={"center"} gap="32px">
                                        <ProjectLink
                                            adaptiveMain
                                            smooth={true}
                                            to="projects"
                                            fontSize={"15px"}
                                            fontWeight={"600"}
                                            padding={"15px"}
                                            gap={"14px"}
                                            color={theme.colors.primaryFont}
                                            borderRadius={"20px"}
                                            fontFamily={"Roboto"}
                                            backgroundColor={theme.colors.accent}
                                        >
                                            See Projects
                                            <Icon adaptiveMain iconId={"ArrowWhiteToButton"} width={"28px"}
                                                  height={"28px"}
                                                  viewBox={"-3 -3 36 36"}/>
                                        </ProjectLink>

                                        <InputLinkStyled
                                            adaptiveMain
                                            href={contactDetails.resumeUrl}
                                            download
                                            fontSize={"15px"}
                                            fontWeight={600}
                                            backgroundColor={"transparent"}
                                            color={theme.colors.tertiaryFont}
                                            border={"none"}
                                            outline={"none"}
                                            appearance={"none"}
                                        >
                                            Download Resume
                                        </InputLinkStyled>
                                    </FlexWrapper>
                                </FlexWrapper>
                            </FlexWrapper>
                        </WrapperBlur>
                    </FlexWrapper>
                    <BlueWhite>
                        {socialLinks.map((link) => (
                            <HoverableIcon
                                key={link.label}
                                href={link.href}
                                label={link.label}
                                iconId={link.mobileIconId ?? link.iconId}
                                viewBox="0 0 31 31"
                                width={link.label === "Telegram" ? "31px" : "36px"}
                                height={link.label === "Telegram" ? "31px" : "36px"}
                            />
                        ))}
                    </BlueWhite>
                </MainSectionWrapper>
            </Container>
        </MainSection>
    );
};

export default Main;

const WrapperBlur = styled.div`
    backdrop-filter: blur(10px);
    background-color: ${theme.colors.heroGlass};
    border-radius: 200px 0;
    border: 2px solid ${theme.colors.linear};
    padding: 48px 90px 36px 106px;

    @media screen and ${theme.media.tablet} {
        padding: 30px 50px 100px 78px;
    }

    @media screen and ${theme.media.mobile} {
        padding: 20px 28px 47px 42px;
        border-radius: 112px 0;
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

    @media screen and ${theme.media.mobile} {
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

    @media screen and ${theme.media.tablet} {
        padding-bottom: clamp(15px, 5vw, 50px);
    }

    @media screen and ${theme.media.mobile} {
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
    bottom: 50px;
    left: 0;
    gap: 17px;
    border-radius: 0 25px 25px 0;
    background-color: ${theme.colors.primaryBg};
    outline: 2px solid ${theme.colors.linear};
    padding: 36px 15px;
    z-index: 5;

    @media screen and ${theme.media.mobile} {
        display: none;
    }
`

const ProjectLink = styled(Link)<{
    backgroundColor?: string;
    color?: string;
    fontFamily?: string;
    borderRadius?: string;
    gap?: string;
    padding?: string;
    fontWeight?: string;
    fontSize?: string;
    adaptiveMain?: boolean;
}>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    font-family: ${props => props.fontFamily};
    border-radius: ${props => props.borderRadius};
    gap: ${props => props.gap};
    padding: ${props => props.padding};
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.03);
    }

    @media screen and ${theme.media.mobile} {
        ${props => props.adaptiveMain && `
            font-weight: 600;
            font-size: 8px;
            line-height: 150%;
            padding: 8px 20px;
        `}
    }
`
