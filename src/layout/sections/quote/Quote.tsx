// import React from 'react';

import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import quote from "../../../../public/quote.svg"
//todo: в icons-sprite svg нужно отрисовать скорее всего в псевдо-элементах

export const Quote = () => {
    console.log(quote)
    return (
        <QuoteStyled>
            <Container>
                <QuoteWrapper>
                    <PStyled id={"text"}>'For whatever a person is sowing, this he will also reap'</PStyled>
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

    background-color: rgba(44, 43, 43, 0.6); 
    border: 2px solid #4C546C; 
    border-radius: 24px;
    box-shadow: 8px 8px 16px 1px rgba(34, 60, 80, 0.2);
    backdrop-filter: blur(4px);
    padding: 20px 0;


`

const QuoteStyled = styled.section`
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
            top: -10px;
            left: -20px;
            width: 50px;
            height: 50px;
            background: url('./quote.svg') no-repeat center;
            background-size: contain;
            opacity: 0.7;
        }

        &::after {
            content: '';
            position: absolute;
            bottom: -10px;
            right: -20px;
            width: 50px;
            height: 50px;
            background: url(${quote}) no-repeat center;
            background-size: contain;
            transform: rotateY(180deg);
            opacity: 0.7;
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
    color: #A6BCFA;
    line-height: 1.6;
    font-family: "Kalameh", sans-serif;
    font-weight: 700;
    font-size: 22px;
    max-width: 700px;
    margin: 0 auto;
`

