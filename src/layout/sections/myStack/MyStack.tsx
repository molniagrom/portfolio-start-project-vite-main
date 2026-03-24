import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";

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
};

type TechItem = ExistingTech | NewTech;

const techItems: TechItem[] = [
    {type: "sprite", name: "GitHub", iconId: "github", viewBox: "0 0 25 25"},
    {type: "sprite", name: "HTML", iconId: "html", viewBox: "0 0 150 150"},
    {type: "sprite", name: "CSS", iconId: "css", viewBox: "0 0 150 150"},
    {type: "sprite", name: "SCSS", iconId: "scss", svgProps: {viewBox: "-16 -16 192 192", width: "140px", height: "140px"}},
    {type: "sprite", name: "WebStorm", iconId: "vebStorm", viewBox: "0 0 290 290"},
    {type: "sprite", name: "VS Code", iconId: "vsCode", viewBox: "0 0 150 150"},
    {type: "sprite", name: "React", iconId: "react", viewBox: "0 0 300 300"},
    {type: "sprite", name: "JavaScript", iconId: "js", viewBox: "0 0 140 140"},
    {type: "sprite", name: "Git", iconId: "git", viewBox: "0 0 150 150"},
    {type: "sprite", name: "Styled Components", iconId: "styledComponent", viewBox: "0 0 150 150"},
    {type: "image", name: "TypeScript", src: "/tech/typescript.svg"},
    {type: "image", name: "Redux Toolkit", src: "/tech/redux-toolkit.svg"},
    {type: "image", name: "Next.js", src: "/tech/nextjs.svg"},
    {type: "image", name: "React Query", src: "/tech/react-query.svg"},
];

export const MyStack = () => {
    return (
        <MyStackStyled>
            <Container padding={"0px 20px"}>
                <FlexWrapper adaptiveMyStack gap={"140px"} direction="column" justify="center" alignItems="center">
                    <ContentText>
                        <h2>My Tech Stack</h2>
                        <p>Technologies I've been working with recently</p>
                    </ContentText>
                    <ContentSvg>
                        {techItems.map((tech) => (
                            <TechCard key={tech.name}>
                                {tech.type === "sprite" ? (
                                    <Icon
                                        width={tech.svgProps?.width || "120px"}
                                        height={tech.svgProps?.height || "120px"}
                                        viewBox={tech.svgProps?.viewBox || tech.viewBox}
                                        iconId={tech.iconId}
                                    />
                                ) : (
                                    <TechImage src={tech.src} alt={`${tech.name} logo`} />
                                )}
                            </TechCard>
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
`

const TechCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 140px;
`

const TechImage = styled.img`
    width: 120px;
    height: 120px;
    object-fit: contain;
`
