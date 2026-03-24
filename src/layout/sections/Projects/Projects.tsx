import {useState} from "react";
import styled from "styled-components";
import {Card} from "./card/Card";
import {Button} from "../../../components/Button/Button";
import {AStyled} from "../../../components/AStyled/AStyled";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import dots from "../../../image/Dots.svg";
import {circle} from "../../../image/svgDataFormat.ts";
import {AnimatePresence, motion} from "framer-motion";
import {projectFilters, projects, ProjectType} from "../../../data/portfolioData.ts";

export const Projects = (): JSX.Element => {
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const [currentFilterStatus, setCurrentFilterStatus] = useState<ProjectType | null>(null);

    const changeFilterStatus = (value: ProjectType): void => {
        setCurrentFilterStatus(value);
    };

    const onClick = (index: number): void => {
        setClickedIndex(index);
    };

    const clearFilters = (): void => {
        setClickedIndex(null);
        setCurrentFilterStatus(null);
    };

    const filteredWorks = currentFilterStatus
        ? projects.filter((project) => project.type === currentFilterStatus)
        : projects;

    return (
        <StyledProjects id="projects">
            <Container maxWidth={"1240px"} padding={"0 15px"}>
                <TitleProject>Projects</TitleProject>
                <List className="category-tabs">
                    {projectFilters.map((item, index) => (
                        <ListItem key={item}>
                            <Button
                                adaptiveProject
                                isClicked={clickedIndex === index}
                                onClick={(): void => {
                                    onClick(index);
                                    changeFilterStatus(item);
                                }}
                                border={`${theme.colors.border} 3px solid`}
                                borderRadius={"67px"}
                                padding={"7px 40px"}
                            >
                                <AStyled
                                    adaptiveProject
                                    lineHeight={"136%"}
                                    fontWeight={"400"}
                                    fontSize={"20px"}
                                >
                                    {item}
                                </AStyled>
                            </Button>
                        </ListItem>
                    ))}
                    <ListItem>
                        <Button
                            adaptiveProject
                            isClicked={currentFilterStatus === null}
                            onClick={clearFilters}
                            border={`${theme.colors.border} 3px solid`}
                            borderRadius={"67px"}
                            padding={"7px 40px"}
                        >
                            <AStyled
                                adaptiveProject
                                lineHeight={"136%"}
                                fontWeight={"400"}
                                fontSize={"20px"}
                            >
                                Clear filters
                            </AStyled>
                        </Button>
                    </ListItem>
                </List>
                <ScrollWrapper>
                    <GreedWrapper>
                        <AnimatePresence>
                            {filteredWorks.map((item) => (
                                <motion.div
                                    layout={true}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    key={item.id}
                                >
                                    <Card
                                        title={item.title}
                                        image={item.image}
                                        imageAlt={item.imageAlt}
                                        demoUrl={item.demoUrl}
                                        codeUrl={item.codeUrl}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </GreedWrapper>
                </ScrollWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 154px;

    @media screen and ${theme.media.tablet} {
        padding-bottom: 82px;
    }
`;

const TitleProject = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 136%;
    padding-bottom: 5px;
    text-align: center;
    position: relative;

    &::after {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: url("data:image/svg+xml;utf8,${circle}");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, minmax(120px, 1fr));
    grid-auto-rows: minmax(42px, auto);
    row-gap: 30px;
    column-gap: 2vw;
    list-style: none;
    padding-top: 34px;
    justify-content: center;
    width: 100%;
    padding-bottom: 55px;

    @media screen and ${theme.media.tablet} {
        padding: 64px 0 62px 0;
    }

    @media screen and ${theme.media.mobile} {
        gap: 24px 18px;
        padding: 42px 0 38px 0;
        grid-template-columns: repeat(2, minmax(120px, 1fr));
    }

    li button {
        width: 100%;
        color: ${theme.colors.primaryFont};
    }
`;

const ListItem = styled.li``;

const ScrollWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    position: relative;

    @media screen and ${theme.media.mobile} {
        max-width: 353px;
    }

    @media screen and ${theme.media.tablet} {
        margin: 0 auto;
    }

    &::before {
        @media screen and ${theme.media.tablet} {
            display: none;
        }
        content: "";
        position: absolute;
        top: -150px;
        left: 25px;
        width: 413px;
        height: 505px;
        background: url(${dots}) no-repeat;
        background-size: contain;
        z-index: -1;
    }
`;

const GreedWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 270px));
    grid-auto-rows: auto;
    justify-content: center;
    gap: 45px 38px;

    @media screen and ${theme.media.mobile} {
        gap: 30px 20px;
        grid-template-columns: repeat(2, minmax(160px, 1fr));
    }
`;
