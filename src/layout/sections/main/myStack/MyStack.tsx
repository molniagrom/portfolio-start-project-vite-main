// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";

export const MyStack = () => {
    return (
        <MyStackStyled>
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
        </MyStackStyled>
    );
};

const MyStackStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ContentText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ContentSvg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 106px;
    flex-wrap: wrap;
`

