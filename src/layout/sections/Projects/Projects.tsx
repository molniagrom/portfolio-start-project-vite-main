import {useState} from 'react';
import styled from "styled-components";
import {Card} from "./card/Card.tsx";
// import {Icon} from "../../../components/icon/Icon.tsx";
import {Button} from "../../../components/Button/Button.tsx";
import {AStyled} from "../../../components/AStyled/AStyled.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import dots from "../../../image/Dots.svg"
// import elipse from "../../../../public/smallElipseGradient.svg"

export const Projects = () => {
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);

    const tap = ["Story", "Post", "Banner", "Trailer", "Desighn", "More"]

    const onClick = (index: number) => {
        setClickedIndex(index);
    };

    return (
        <StyledProjects>
            <Container maxWidth={"1240px"} padding={"0 20px"}>
                <TitleProject>Projects</TitleProject>
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
        background: url("../../../../public/smallElipseGradient.svg") no-repeat center / contain;
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
        column-gap: 20px;
        padding: 45px 0 40px 0;
    }

    li button {
        width: 100%;
        color: #fff;
    }
`;

const ListItem = styled.li`

`;


const ScrollWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    position: relative;
    overflow: visible;
    @media screen and ${theme.media.tablet} {
        max-width: 550px;
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
`;

