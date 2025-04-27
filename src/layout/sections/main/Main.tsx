// import React from 'react';
import myPhoto from "../../../image/myPhoto.jpg"
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";
import {Photo} from "./Photo.tsx";
import {MainSection} from "./MainSection.tsx";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
// import {card} from "./Projects/card/card.tsx";
// import {Button} from "../../../components/Button/Button.tsx";
import Projects from "./Projects/Projects.tsx";
import {AStyled, InputLinkStyled} from "../../../components/AStyled/AStyled.tsx";
import {MyStack} from "./myStack/MyStack.tsx";
import {Contact} from "./contact/Contact.tsx";
import {IconsContact} from "./contact/iconsContact/IconsContact.tsx";

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
                    <Nane>I'm <span>Alina</span> Groza</Nane>
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
            <Projects/>
            <MyStack/>
            <Contact/>
            <IconsContact/>
        </MainSection>
    );
};

export default Main;

const MainTitle = styled.h1`

`
const
    Nane = styled.h2`

    `







