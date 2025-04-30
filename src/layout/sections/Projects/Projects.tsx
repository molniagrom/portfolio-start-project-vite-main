// import React from 'react';

import styled from "styled-components";
import {Card} from "./card/Card.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Projects = () => {
    return (
        <StyledProjects>
            <h3>Projects</h3>
            <Icon iconId={"ElipseSmallGradient"}/>
            <Tab>
                <UlStyled className="category-tabs">
                    <li>
                        <button>Story</button>
                    </li>
                    <li>
                        <button>Post</button>
                    </li>
                    <li>
                        <button>Banner</button>
                    </li>
                    <li>
                        <button>Trailer</button>
                    </li>
                    <li>
                        <button>Desighn</button>
                    </li>
                    <li>
                        <button>More</button>
                    </li>
                </UlStyled>
            </Tab>
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
        </StyledProjects>
    );
};

export default Projects;

const StyledProjects = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #222222;
    h3 {
        color: ${theme.colors.primaryFont};
    }
`

const UlStyled = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 41px;
    list-style: none;
    padding: 0;
    margin: 0;
    
    li button {
        color: #fff;
    }
`

const Tab = styled.div`
`

const GreedWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows: repeat(2, auto);   
    gap: 38px 45px;
`






















