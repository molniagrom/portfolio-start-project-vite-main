// import React from 'react';

import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import quote from "../../../../public/quote.svg"
import {theme} from "../../../styles/Theme.ts";

export const Quote = () => {
    console.log(quote)
    return (
        <QuoteStyled>
            <Container>
                <QuoteWrapper>
                    <PStyled id={"text"}>For whatever a person is sowing, this he will also reap</PStyled>
                    <PStyled id={"verse"}>(Galatians 6:7)</PStyled>
                </QuoteWrapper>
            </Container>
        </QuoteStyled>
    );
};

//width: max(800px, 300px);

const QuoteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: max(20px, 7px);
    padding: 20px 0;
`

const QuoteStyled = styled.section`
    background-color: ${theme.colors.secondaryFont};

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 20px 30px 20px;

    position: relative;
    overflow: hidden;
    text-align: center;

    #text {
        position: relative;
        padding-left: 60px;
        padding-right: 40px;

        &::before {
            content: '';
            position: absolute;
            top: -20px;
            left: 0;
            width: 50px;
            height: 50px;
            background: url('./quote.svg') no-repeat center;
            background-size: contain;
            opacity: 0.7;
        }

        &::after {
            content: '';
            position: absolute;
            bottom: -20px;
            right: -20px;
            width: 50px;
            height: 50px;
            background: url('./quote.svg') no-repeat center;
            background-size: contain;
            opacity: 0.7;
            transform: rotate(180deg);
        }
    }

    #verse {
        font-style: italic;
        transform: translateX(70%);
        margin-top: 10px;
        font-size: 18px;
        color: #6C92FF; // третий цвет шрифта
    }
`


const PStyled = styled.p`
    color: #242b34;
    line-height: 1.6;
    font-family: "Kalameh", sans-serif;
    font-weight: 700;
    font-size: 22px;
    max-width: 700px;
    margin: 0 auto;
`

