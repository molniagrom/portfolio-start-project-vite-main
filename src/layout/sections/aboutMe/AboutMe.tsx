import me from "../../../../public/new_me2.jpg";
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {HoverableIcon} from "../../../components/icon/HoverableIcon.tsx";
import {socialLinks} from "../../../data/portfolioData.ts";

export const AboutMe = () => {
    return (
        <AboutMeStyled id="about">
            <Container $aboutMeAdaptive padding={"80px 42px 80px 42px"}>
                <Layout>
                    <TextColumn>
                        <InfoCard>
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
                            <Bio>
                                Frontend-разработчик с практическим опытом создания современных веб-приложений на React, TypeScript и Redux Toolkit. Владею интеграцией REST API с использованием RTK Query, разработкой переиспользуемых компонентных архитектур и созданием адаптивных пользовательских интерфейсов. Выпускница программы Frontend Developer IT-Incubator с 6+ готовыми к деплою проектами, развернутыми на Vercel.
                            </Bio>
                            <Details>
                                <DetailsInfo>
                                    <DetailBlock>
                                        <DetailTitle>Образование</DetailTitle>
                                        <DetailText>Программа Frontend Developer, IT-Incubator, 2025</DetailText>
                                    </DetailBlock>
                                    <DetailBlock>
                                        <DetailTitle>Языки</DetailTitle>
                                        <DetailText>Русский — Родной</DetailText>
                                        <DetailText>Английский — A2 (улучшаю)</DetailText>
                                    </DetailBlock>
                                </DetailsInfo>
                                <DetailsPhoto>
                                    <DetailsMeImage
                                        src={me}
                                        alt="Portrait of Alina Groza"
                                    />
                                </DetailsPhoto>
                            </Details>
                        </InfoCard>
                    </TextColumn>
                    <PhotoColumn>
                        <StyledMeImage
                            src={me}
                            alt="Portrait of Alina Groza"
                        />
                    </PhotoColumn>
                </Layout>
            </Container>
        </AboutMeStyled>
    );
};

const AboutMeStyled = styled.section`
    background-color: ${theme.colors.secondaryFont};
`;

const Layout = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 40px;

    @media screen and ${theme.media.tablet} {
        flex-direction: column;
        align-items: center;
    }
`;

const PhotoColumn = styled.div`
    flex-shrink: 0;

    @media screen and ${theme.media.tablet} {
        display: none;
    }
`;

const StyledMeImage = styled.img`
    height: 650px;
    width: auto;
    max-width: 100%;
    object-fit: contain;
    border: 2px solid ${theme.colors.aboutBorder};
    border-radius: 24px;

    @media screen and ${theme.media.tablet} {
        height: 450px;
    }

    @media screen and ${theme.media.mobile} {
        height: 320px;
        border-radius: 16px;
    }
`;

const DetailsMeImage = styled.img`
    height: 220px;
    width: auto;
    max-width: 100%;
    object-fit: contain;
    border: 2px solid ${theme.colors.aboutBorder};
    border-radius: 16px;
`;

const TextColumn = styled.div`
    flex: 1;
    display: flex;

    @media screen and ${theme.media.tablet} {
        width: 100%;
        justify-content: center;
    }
`;

const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 536px;
    padding: 30px 30px 40px 40px;
    color: ${theme.colors.colorForAboutMe};
    backdrop-filter: blur(20px);
    background: ${theme.colors.aboutGradient};
    border-radius: 100px 0 100px 0;
    border: 2px solid ${theme.colors.aboutBorder};

    @media screen and ${theme.media.tablet} {
        max-width: 100%;
    }

    @media screen and ${theme.media.mobile} {
        max-width: 100%;
        padding: 30px 16px 30px 30px;
        border-radius: 60px 0 60px 0;
    }
`;

const Icons = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    gap: 16px;
    padding-bottom: 18px;

    @media screen and ${theme.media.mobile} {
        display: none;
    }
`;

const NameAboutMe = styled.h2`
    font-weight: 700;
    font-size: 60px;
    line-height: 136%;
    color: ${theme.colors.tertiaryBg};
    padding-bottom: 16px;

    span {
        color: ${theme.colors.accent};
    }

    @media screen and ${theme.media.mobile} {
        font-size: 32px;
        padding-bottom: 12px;
    }
`;

const Bio = styled.p`
    font-size: 18px;
    line-height: 160%;
    font-weight: 400;

    @media screen and ${theme.media.mobile} {
        font-size: 14px;
    }
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 20px;
    padding-top: 18px;
    border-top: 1px solid ${theme.colors.aboutBorder};

    @media screen and ${theme.media.tablet} {
        flex-direction: row;
        align-items: flex-start;
        gap: 24px;
    }

    @media screen and ${theme.media.mobile} {
        flex-direction: column;
        gap: 14px;
    }
`;

const DetailsInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

const DetailsPhoto = styled.div`
    display: none;

    @media screen and ${theme.media.tablet} {
        display: block;
        flex-shrink: 0;
    }

    @media screen and ${theme.media.mobile} {
        display: none;
    }
`;

const DetailBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const DetailTitle = styled.h3`
    font-weight: 700;
    font-size: 15px;
    color: ${theme.colors.tertiaryBg};
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

const DetailText = styled.p`
    font-size: 15px;
    line-height: 150%;
    font-weight: 400;
`;
