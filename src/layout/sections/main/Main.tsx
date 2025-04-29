// import React from 'react';
import myPhoto from "../../../image/myPhoto.jpg"
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";
import {Photo} from "./Photo.tsx";
import {MainSection} from "./MainSection.tsx";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
// import {card} from "./Projects/card/card.tsx";
// import {Button} from "../../../components/Button/Button.tsx";
import {AStyled, InputLinkStyled} from "../../../components/AStyled/AStyled.tsx";


export const Main = () => {
    return (
        <MainSection>
            <FlexWrapper gap={"5vw"} direction="row" alignItems={"center"} justify="space-around">
                <Photo
                    src={myPhoto}
                    width="400px"
                    height="400px"
                    borderRadius="50%"
                    border="2.08vw solid white"
                />
                <FlexWrapper direction="column">
                    <MainTitle>Frontend-developer WED</MainTitle>
                    <Name color={"#fff"}>I'm <span>Alina</span> Groza</Name>
                    <FlexWrapper gap="32px">

                        <AStyled
                            fontSize={"15px"}
                            fontWeight={"600"}
                            padding={"15px"}
                            gap={"14px"}
                            borderRadius={"20px"}
                            fontFamily={"Roboto"}
                            backgroundColor={"#2157F2"}>

                            See Projects
                            <Icon iconId={"ArrowWhiteToButton"} width={"28px"} height={"28px"} viewBox={"-3 -3 36 36"}/>

                        </AStyled>

                        <InputLinkStyled
                            fontSize={"15px"}
                            fontWeight={600}
                            backgroundColor={"transparent"}
                            color={"#6c92ff"}
                            value={"Download Resume"}
                            border={"none"}
                            outline={"none"}
                            appearance={"none"}
                        >
                        </InputLinkStyled>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </MainSection>
    );
};

export default Main;

const MainTitle = styled.h1`

`

type NamePropsType = {
    color?: string;
}

export const Name = styled.h2<NamePropsType>`
    color: ${props => props.color || undefined};
`






