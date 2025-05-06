// import React from 'react';

import styled from "styled-components";
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import quote from "../../../image/quote.svg"
//todo: в icons-sprite svg нужно отрисовать скорее всего в псевдо-элементах

export const Quote = () => {
    console.log(quote)
    return (
        <QuoteStyled>
            <Container>
                <FlexWrapper gap={"max(20px, 7px)"} direction="column" justify="center" alignItems="center">
                    <PStyled id={"text"}>'For whatever a person is sowing, this he will also reap'</PStyled>
                    <PStyled id={"verse"}>(Galatians 6:7)</PStyled>
                </FlexWrapper>
            </Container>
        </QuoteStyled>
    );
};

//width: max(800px, 300px);

const QuoteStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 40px 0;

    //todo: Опять не могу псевдо элементом создать кавычки 
    
    #text {
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 30px;
            left: 30px;
            display: inline-block;
            width: 40px;
            height: 40px;
            background: url(${quote}) no-repeat;
            background-size: contain;
            //background-color: darkmagenta;
        }
    }

    #verse {
        font-style: italic;
        transform: translateX(70%);
    }

`

const PStyled = styled.p`
    color: #A6BCFA;
    line-height: 144%;
    font-family: "Kalameh", sans-serif;
    font-weight: 700;
    font-size: 20px;
`
