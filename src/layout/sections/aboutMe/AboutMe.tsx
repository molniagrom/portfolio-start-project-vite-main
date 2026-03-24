import map from "/public/map.png";
import me from "../../../../public/me.png";
import styled, {css} from "styled-components";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {HoverableIcon} from "../../../components/icon/HoverableIcon.tsx";
import {getPortfolioAge} from "../../../utils/dateUtils.ts";
import {socialLinks} from "../../../data/portfolioData.ts";

export const AboutMe = () => {
    const age = getPortfolioAge();

    return (
        <AboutMeStyled id="about">
            <Container aboutMeAdaptive padding={"46px 42px 0 42px"}>
                <WrapperBcg>
                    <StyledImage variant="map" src={map} alt="Decorative map background"/>
                    <StyledImage variant="me" src={me} alt="Portrait illustration of Alina Groza"/>
                    <InfoAboutMe>
                        <Icons>
                            {socialLinks.map((link) => (
                                <HoverableIcon
                                    key={link.label}
                                    href={link.href}
                                    label={link.label}
                                    iconId={link.mobileIconId ?? link.iconId}
                                    viewBox="0 0 33 33"
                                    width="26px"
                                    height="26px"
                                />
                            ))}
                        </Icons>
                        <NameAboutMe>I'm <span>Alina</span> Groza</NameAboutMe>
                        <UlStyled>
                            <LiStyled>I was born in Tiraspol</LiStyled>
                            <LiStyled>I'm {age} years old</LiStyled>
                            <LiStyled>I have been growing in frontend since 2023</LiStyled>
                            <LiStyled>I build React and TypeScript interfaces</LiStyled>
                            <LiStyled>I care about clean UI, logic, and accessibility</LiStyled>
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
                height: 750px;

                @media screen and ${theme.media.tablet} {
                    height: 50%;
                    object-fit: cover;
                }
            `}

    ${({variant}) =>
            variant === "map" && css`
                bottom: 0;
                right: 50px;
                height: 100%;
                object-fit: contain;

                @media screen and ${theme.media.tablet} {
                    top: -50px;
                    right: -30px;
                }

                @media screen and ${theme.media.mobile} {
                    bottom: 0;
                    right: -20px;
                    top: 0;
                }
            `}
`

const AboutMeStyled = styled.section`
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
    top: 40px;
    right: 0;
    max-width: 536px;
    padding: 30px 20px 65px 50px;
    margin-right: 20px;
    color: ${theme.colors.colorForAboutMe};
    backdrop-filter: blur(20px);
    background: ${theme.colors.aboutGradient};
    border-radius: 100px 0 100px 0;
    border: 2px solid ${theme.colors.aboutBorder};

    @media screen and ${theme.media.tablet} {
        position: relative;
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
    }

    @media screen and ${theme.media.mobile} {
        max-width: 303px;
        padding: 40px 10px 34px 35px;
    }
`

const Icons = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    gap: 16px;
    padding-bottom: 18px;

    @media screen and ${theme.media.mobile} {
        display: none;
    }
`

const WrapperBcg = styled.div`
    position: relative;
    min-height: 115vh;

    @media screen and ${theme.media.tablet} {
        padding: 70px 40px 0 40px;
    }

    @media screen and ${theme.media.mobile} {
        padding: 46px 0 0 0;
        min-height: 65vh;
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

    @media screen and ${theme.media.mobile} {
        font-weight: 700;
        font-size: 32px;
        padding-bottom: 12px;
    }
`

const UlStyled = styled.ul`
    list-style: none;

    li + li {
        padding-top: 6px;
    }

    @media screen and ${theme.media.mobile} {
        li + li {
            padding-top: 2px;
        }
    }
`

const LiStyled = styled.li`
    padding-left: 13px;

    @media screen and ${theme.media.mobile} {
        font-weight: 400;
        font-size: 10px;
    }

    &::before {
        content: "";
        display: inline-block;
        width: 18px;
        height: 18px;
        background: ${theme.colors.bulletGradient};
        border-radius: 50%;
        transform: rotate(90deg) translateY(13px);

        @media screen and ${theme.media.mobile} {
            width: 9px;
            height: 9px;
        }
    }
`
