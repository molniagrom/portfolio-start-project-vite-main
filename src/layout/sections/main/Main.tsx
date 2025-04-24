// import React from 'react';
import myPhoto from "../../../image/myPhoto.jpg"
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";
import {Photo} from "./Photo.tsx";
import {MainContainer} from "./MainContainer.tsx";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Main = () => {
    return (
        <MainContainer>
            <FlexWrapper gap={"5vw"} padding={"3vw"} direction="row" alignItems={"center"} justify="space-around">
                <Photo src={myPhoto} alt=""/>
                <FlexWrapper direction="column">
                    <MainTitle>Frontend-developer WED</MainTitle>
                    <Mane>I'm <span>Alina</span> Groza</Mane>
                    <FlexWrapper gap="32px">
                        <Button
                            fontSize={"15px"}
                            fontWeight={"600"}
                            padding={"15px"}
                            gap={"14px"}
                            borderRadius={"20px"}
                            fontFamily={"Roboto"}
                            backgroundColor={"#2157F2"}>

                            See Projects
                            <Icon iconId={"ArrowWhiteToButton"} width={"28px"} height={"28px"}/>

                        </Button>
                        <Button
                            fontSize={"15px"}
                            fontWeight={"600"}
                            backgroundColor={"transparent"}
                            color={"#6c92ff"}
                        >
                            Download Resume
                        </Button>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </MainContainer>
    );
};

export default Main;

type ButtonPropsType = {
    backgroundColor?: string,
    color?: string,
    fontFamily?: string
    borderRadius?: string
    gap?: string
    padding?: string
    fontWeight?: string
    fontSize?: string
}

const Button = styled.button<ButtonPropsType>`
    background-color: ${props => props.backgroundColor || "white"};
    color: ${props => props.color || "white"};
    font-family: ${props => props.fontFamily}, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.borderRadius || "none"};
    gap: ${props => props.gap || "0"};
    padding: ${props => props.padding || "0"};
    font-weight: ${props => props.fontWeight || "normal"};
    font-size: ${props => props.fontSize || "16px"};
`

const MainTitle = styled.h1`

`
const Mane = styled.h2`

`







