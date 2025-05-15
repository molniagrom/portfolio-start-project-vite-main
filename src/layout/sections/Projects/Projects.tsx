import { useState } from "react";
import styled from "styled-components";
import { Card } from "./card/Card";
import { Button } from "../../../components/Button/Button";
import { AStyled } from "../../../components/AStyled/AStyled";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import dots from "../../../image/Dots.svg";
import {circle} from "../../../image/svgDataFormat.ts";

interface Project {
    id: number;
    title: string;
    image: string;
    type: ProjectType;
}

type ProjectType = "Story" | "Post" | "Banner" | "Trailer" | "Desighn" | "More";

export const Projects = (): JSX.Element => {
    const projects: Project[] = [
        {
            id: 1,
            title: "Portfolio Website",
            image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
            type: "Banner",
        },
        {
            id: 2,
            title: "E-commerce Store",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
            type: "Post",
        },
        {
            id: 3,
            title: "Aunt May's coffee shop",
            image:
                "https://images.unsplash.com/photo-1584428885051-d80a38d86b39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "Desighn",
        },
        {
            id: 4,
            title: "'Backer-Family-Contractions'",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
            type: "More",
        },
        {
            id: 5,
            title: "Recipe Finder",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
            type: "Story",
        },
        {
            id: 6,
            title: "Travel Blog",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            type: "Story",
        },
        {
            id: 7,
            title: "Once and for all",
            image:
                "https://images.unsplash.com/photo-1745946596837-0393d87a1706?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "Desighn",
        },
        {
            id: 8,
            title: "Movie Explorer",
            image: "https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "Trailer",
        },
    ];

    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const [currentFilterStatus, setCurrentFilterStatus] = useState<ProjectType | null>(null);

    const tabsItems: ProjectType[] = ["Story", "Post", "Banner", "Trailer", "Desighn", "More"];

    const changeFilterStatus = (value: ProjectType): void => {
        setCurrentFilterStatus(value);
    };

    const onClick = (index: number): void => {
        setClickedIndex(index);
    };

    const filteredWorks: Project[] = currentFilterStatus
        ? projects.filter((p) => p.type === currentFilterStatus)
        : projects;

    return (
        <StyledProjects>
            <Container maxWidth={"1240px"} padding={"0 15px"}>
                <TitleProject>Projects</TitleProject>
                <List className="category-tabs">
                    {tabsItems.map((item, index) => (
                        <ListItem key={index}>
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
                </List>
                <ScrollWrapper>
                    <GreedWrapper>
                        {filteredWorks.map((item: Project) => (
                            <Card key={item.id} title={item.title} image={item.image} />
                        ))}
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
    grid-template-columns: repeat(6, 1fr);
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

    @media screen and (max-width: 940px) {
        grid-template-columns: repeat(3, 160px);
        column-gap: 40px;
    }
    @media screen and ${theme.media.mobile} {
        grid-template-columns: repeat(3, 96px);
        grid-auto-rows: minmax(20px, auto);
        gap: 24px 18px;
        padding: 42px 0 38px 0;
    }

    li button {
        width: 100%;
        color: #fff;
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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: auto;
    gap: 45px 38px;
    place-items: center;

    @media screen and ${theme.media.mobile} {
        gap: 30px 20px;
        grid-template-columns: repeat(2, minmax(160px, 1fr));
    }
`;
