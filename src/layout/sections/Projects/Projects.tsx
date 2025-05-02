import { useState } from 'react';
import styled from "styled-components";
import { Card } from "./card/Card.tsx";
import { Icon } from "../../../components/icon/Icon.tsx";
import { Button } from "../../../components/Button/Button.tsx";
import { AStyled } from "../../../components/AStyled/AStyled.tsx";
import { theme } from "../../../styles/Theme.ts";

export const Projects = () => {
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);

    const onClick = (index: number) => {
        setClickedIndex(index);
    }
    return (
        <StyledProjects>
            <TitleProject>Projects</TitleProject>
            <Icon position={"relative"} left={"8px"} iconId={"ElipseSmallGradient"} />
            <Tab>
                <List className="category-tabs">
                    {theme.tap.map((item, index) => (
                        <ListItem key={item}>
                            <Button
                                clicked={clickedIndex === index}
                                onClick={() => onClick(index)}
                                border={`${theme.colors.border} 3px solid`}
                                borderRadius={"67px"}
                                padding={"7px 40px"}
                            >
                                <AStyled lineHeight={"136%"} fontWeight={"400"} fontSize={"20px"}>{item}</AStyled>
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Tab>
            <GreedWrapper>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </GreedWrapper>
        </StyledProjects>
    );
};


const StyledProjects = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #222222;
`;

const TitleProject = styled.h3`
    font-weight: 600;
    font-size: 32px;
    line-height: 136%;
    padding-bottom: 5px;
`;

const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 41px;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;

    li button {
        color: #fff;
    }
`;

const ListItem = styled.li``;

const Tab = styled.div`
    width: 89%;
    margin-bottom: 55px;
`;

const GreedWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 38px 45px;
`
