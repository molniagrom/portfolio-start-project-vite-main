import {useState} from 'react';
import styled from "styled-components";
import {Card} from "./card/Card.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Button} from "../../../components/Button/Button.tsx";
import {AStyled} from "../../../components/AStyled/AStyled.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";
import dots from "../../../image/Dots.svg"

export const Projects = () => {
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);

    const tap = ["Story", "Post", "Banner", "Trailer", "Desighn", "More"]

    const onClick = (index: number) => {
        setClickedIndex(index);
    };

    return (
        <StyledProjects>
            <Container adaptProj maxWidth={"1240px"} padding={"0 20px"}>
                <FlexWrapper direction={"column"} justify={"center"} alignItems={"center"}>
                    <TitleProject>Projects</TitleProject>
                    <Icon position={"relative"} left={"8px"} iconId={"ElipseSmallGradient"}/>
                    <FlexWrapper justify={"center"} alignItems={"center"}>
                        <List className="category-tabs">
                            {tap.map((item, index) => (
                                <ListItem key={item}>
                                    <Button
                                        adaptiveProject
                                        isClicked={clickedIndex === index}
                                        onClick={() => onClick(index)}
                                        border={`${theme.colors.border} 3px solid`}
                                        borderRadius={"67px"}
                                        padding={"7px 40px"}
                                    >
                                        <AStyled adaptiveProject lineHeight={"136%"} fontWeight={"400"}
                                                 fontSize={"20px"}>{item}</AStyled>
                                    </Button>
                                </ListItem>
                            ))}
                        </List>
                    </FlexWrapper>
                    <ScrollWrapper>
                        <GreedWrapper>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </GreedWrapper>
                    </ScrollWrapper>
                </FlexWrapper>
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

const TitleProject = styled.h3`
    font-weight: 600;
    font-size: 32px;
    line-height: 136%;
    padding-bottom: 5px;
`;

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, minmax(160px, auto));
    grid-auto-rows: minmax(42px, auto);
    row-gap: 30px;
    column-gap: clamp(40px, 5vw, 8px);
    list-style: none;
    padding-top: 34px;
    //margin: 0 auto;
    //width: 100%;

    padding-bottom: 55px;

    @media screen and ${theme.media.tablet} {
        padding-bottom: 62px;
    }

    @media screen and ${theme.media.tablet} {
        padding-top: 64px;
    }
    @media screen and ${theme.media.laptop} {
        grid-template-columns: repeat(6, 1fr);
        grid-auto-rows: minmax(42px, auto);
        column-gap: 2%;
    }
    @media screen and (max-width: 940px) {
        grid-template-columns: repeat(3, 160px);
        grid-auto-rows: minmax(42px, auto);
        column-gap: 40px;
    }
    @media screen and ${theme.media.tabletSmall} {
        grid-template-columns: repeat(3, 96px);
        grid-auto-rows: minmax(42px, auto);
        column-gap: 40px;
    }

    li button {
        min-width: 160px;
        @media screen and (max-width: 940px) {
            min-width: 160px;
        }

        @media screen and ${theme.media.tabletSmall} {
            max-width: 96px;
        }
        color: #fff;
    }
`;

const ListItem = styled.li`

`;


const ScrollWrapper = styled.div`
    //overflow-x: auto;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    overflow: visible;

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
`;

