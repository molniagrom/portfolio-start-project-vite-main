import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";
import {useRef} from "react";
import {motion} from "framer-motion";
import {useParallax} from "../../../hooks/useParallax";
import {useTranslation} from "react-i18next";

type ExistingTech = {
    type: "sprite";
    name: string;
    iconId: string;
    viewBox?: string;
    svgProps?: {
        viewBox?: string;
        width?: string;
        height?: string;
    };
};

type NewTech = {
    type: "image";
    name: string;
    src: string;
    color?: string;
};

type TechItem = ExistingTech | NewTech;

const techItems: TechItem[] = [
    {type: "sprite", name: "GitHub", iconId: "github", viewBox: "0 0 25 25"},
    {type: "sprite", name: "HTML", iconId: "html", viewBox: "0 0 150 150"},
    {type: "sprite", name: "CSS", iconId: "css", viewBox: "0 0 150 150"},
    {type: "sprite", name: "SCSS", iconId: "scss", viewBox: "0 0 32 32"},
    {type: "sprite", name: "WebStorm", iconId: "vebStorm", viewBox: "0 0 290 290"},
    {type: "sprite", name: "VS Code", iconId: "vsCode", viewBox: "0 0 150 150"},
    {type: "sprite", name: "React", iconId: "react", viewBox: "0 0 300 300"},
    {type: "sprite", name: "JavaScript", iconId: "js", viewBox: "0 0 140 140"},
    {type: "sprite", name: "Git", iconId: "git", viewBox: "0 0 150 150"},
    {type: "sprite", name: "Styled Components", iconId: "styledComponent", viewBox: "0 0 150 150"},
    {type: "image", name: "TypeScript", src: "/tech/typescript.svg"},
    {type: "image", name: "Redux Toolkit", src: "/tech/redux-toolkit.svg"},
    {type: "image", name: "Next.js", src: "/tech/nextjs.svg", color: "var(--color-primaryFont)"},
    {type: "image", name: "React Query", src: "/tech/react-query.svg", color: "var(--color-primaryFont)"},
    {type: "image", name: "Storybook", src: "/tech/storybook.svg", color: "#FF4785"},
    {type: "image", name: "Material UI", src: "/tech/mui.svg", color: "#007FFF"},
    {type: "image", name: "React Router", src: "/tech/reactrouter.svg", color: "#CA4245"},
    {type: "image", name: "pnpm", src: "/tech/pnpm.svg", color: "#F69220"},
    {type: "image", name: "npm", src: "/tech/npm.svg", color: "#CB3837"},
    {type: "image", name: "Socket", src: "/tech/socket.svg", color: "#C93CD7"},
    {type: "image", name: "Socket.IO", src: "/tech/socketdotio.svg", color: "#010101"},
    {type: "image", name: "Jira", src: "/tech/jira.svg", color: "#0052CC"},
    {type: "image", name: "ClickUp", src: "/tech/clickup.svg", color: "#7B68EE"},
    {type: "image", name: "Figma", src: "/tech/figma.svg", color: "#F24E1E"},
];

const technologyLinks: Record<string, string> = {
    "GitHub": "https://github.com/",
    "HTML": "https://developer.mozilla.org/en-US/docs/Web/HTML",
    "CSS": "https://developer.mozilla.org/en-US/docs/Web/CSS",
    "SCSS": "https://sass-lang.com/",
    "WebStorm": "https://www.jetbrains.com/webstorm/",
    "VS Code": "https://code.visualstudio.com/",
    "React": "https://react.dev/",
    "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "Git": "https://git-scm.com/",
    "Styled Components": "https://styled-components.com/",
    "TypeScript": "https://www.typescriptlang.org/",
    "Redux Toolkit": "https://redux-toolkit.js.org/",
    "Next.js": "https://nextjs.org/",
    "React Query": "https://tanstack.com/query/latest",
    "Storybook": "https://storybook.js.org/",
    "Material UI": "https://mui.com/",
    "React Router": "https://reactrouter.com/",
    "pnpm": "https://pnpm.io/",
    "npm": "https://www.npmjs.com/",
    "Socket": "https://socket.dev/",
    "Socket.IO": "https://socket.io/",
    "Jira": "https://www.atlassian.com/software/jira",
    "ClickUp": "https://clickup.com/",
    "Figma": "https://www.figma.com/",
};

export const MyStack = () => {
    const {t} = useTranslation();
    const titleRef = useRef<HTMLDivElement>(null);
    const titleParallax = useParallax(titleRef, {speed: 0.05});

    return (
        <MyStackStyled>
            <Container padding={"0px 20px"}>
                <FlexWrapper $adaptiveMyStack gap={"140px"} direction="column" justify="center" $alignItems="center">
                    <motion.div style={titleParallax.style}>
                        <ContentText ref={titleRef}>
                            <h2>{t("stack.title")}</h2>
                            <p>{t("stack.subtitle")}</p>
                        </ContentText>
                    </motion.div>
                    <ContentSvg>
                        {techItems.map((tech) => (
                            <TechLink
                                key={tech.name}
                                href={technologyLinks[tech.name]}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Visit ${tech.name} official website`}
                            >
                                <TechCard>
                                    {tech.type === "sprite" ? (
                                        <Icon
                                            width={tech.svgProps?.width || "120px"}
                                            height={tech.svgProps?.height || "120px"}
                                            viewBox={tech.svgProps?.viewBox || tech.viewBox}
                                            iconId={tech.iconId}
                                        />
                                    ) : tech.color ? (
                                        <TechLogoMask $src={tech.src} $color={tech.color} role="img"
                                                       aria-label={`${tech.name} logo`} />
                                    ) : (
                                        <TechImage src={tech.src} alt={`${tech.name} logo`} />
                                    )}
                                </TechCard>
                            </TechLink>
                        ))}
                    </ContentSvg>
                </FlexWrapper>
            </Container>
        </MyStackStyled>

    );
};

const MyStackStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.allBg};
    color: ${theme.colors.primaryFont};
    gap: 140px;
    padding: 100px 0 100px 0;

    @media screen and ${theme.media.mobile} {
        padding: 60px 0 60px 0;
        gap: 60px;
    }
`

const ContentText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    @media screen and ${theme.media.tablet}{
        gap: 30px;
    }

    h2 {
        font-weight: 700;
        font-size: 48px;
        line-height: 1.2;
        text-align: center;

        @media screen and ${theme.media.tablet}{
            font-weight: 600;
            font-size: 33px;
        }
    }

    p {
        font-weight: 400;
        font-size: 32px;
        line-height: 1.2;
        text-align: center;

        @media screen and ${theme.media.tablet}{
            font-weight: 300;
            font-size: 23px;
        }
    }
`

const ContentSvg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    gap: 56px;
    flex-wrap: wrap;

    @media screen and ${theme.media.tablet}{
        gap: 36px;
    }

    @media screen and ${theme.media.mobile}{
        gap: 24px;
    }
`

const TechCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 140px;

    @media screen and ${theme.media.mobile} {
        min-width: 100px;
    }
`

const TechLink = styled.a`
    color: inherit;
    text-decoration: none;
    border-radius: 12px;
    transition: transform 180ms ease;

    &:hover {
        transform: scale(1.06);
    }

    &:focus-visible {
        outline: 2px solid ${theme.colors.accent};
        outline-offset: 6px;
    }
`

const TechImage = styled.img`
    width: 120px;
    height: 120px;
    object-fit: contain;
`

const TechLogoMask = styled.div<{$src: string; $color: string}>`
    width: 120px;
    height: 120px;
    background-color: ${({$color}) => $color};
    mask: url("${({$src}) => $src}") center / contain no-repeat;
    -webkit-mask: url("${({$src}) => $src}") center / contain no-repeat;
`
