// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";

export const MyStack = () => {
    return (
        <MyStackStyled>
            <Container padding={"100px 0px 100px 0px"}>
                <FlexWrapper gap={"140px"} direction="column" justify="center" alignItems="center">
                    <ContentText>
                        <h2>My Tech Stack</h2>
                        <p> Technologies I’ve been working with recently</p>
                    </ContentText>
                    <ContentSvg>
                        <Icon width={"120px"} height={"120px"} viewBox={"0 0 25 25"} iconId={"github"}/>
                        <Icon width={"120px"} height={"120px"} viewBox={"0 0 150 150"} iconId={"html"}/>
                        <Icon width={"120px"} height={"120px"} viewBox={"0 0 150 150"} iconId={"css"}/>
                        <Icon width={"120px"} height={"120px"} iconId={"scss"}/>
                        <Icon width={"120px"} height={"120px"} viewBox={"0 0 290 290"} iconId={"vebStorm"}/>
                        <Icon width={"120px"} height={"120px"} viewBox={"0 0 150 150"} iconId={"vsCode"}/>
                        <Icon width={"120px"} height={"120px"} viewBox={"0 0 300 300"} iconId={"react"}/>
                        <Icon width={"120px"} height={"120px"} viewBox={"0 0 140 140"} iconId={"js"}/>
                        <Icon width={"120px"} height={"120px"} viewBox={"0 0 150 150"} iconId={"git"}/>
                        <Icon width={"120px"} height={"120px"} viewBox={"0 0 150 150"} iconId={"styledComponent"}/>
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
    background-color: #222222;
    color: white;
    gap: 140px;
`

const ContentText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    h2 {
        font-weight: 700;
        font-size: 48px;
        line-height: 54%;
        text-align: center;
    }

    p {
        font-weight: 400;
        font-size: 32px;
        line-height: 81%;
        text-align: center;
    }
`

const ContentSvg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 106px;
    flex-wrap: wrap;
`

