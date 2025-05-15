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
                    <BlockquoteStyled cite="https://en.wikipedia.org/wiki/Paul_the_Apostle">
                        For whatever a person is sowing, this he will also reap
                    </BlockquoteStyled>
                    <QuoteSourceStyled>
                        <cite>Apostle Paul</cite>
                    </QuoteSourceStyled>
                </QuoteWrapper>
            </Container>
        </QuoteStyled>
    );
};

const QuoteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: max(20px, 7px);
    padding: 20px 0;
`

const QuoteStyled = styled.section`
    background-color: ${theme.colors.secondaryFont};
    font-style: italic;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 20px 30px 20px;

    position: relative;
    overflow: hidden;
    text-align: center;
    
`

const BlockquoteStyled = styled.blockquote`
    font-style: italic;
    position: relative;
    padding-left: 60px;
    padding-right: 40px;
    margin: 0 auto;
    max-width: 700px;
    line-height: 1.6;
    font-family: "Kalameh", serif;
    font-weight: 700;
    font-size: 22px;
    color: #242b34;

    &::before {
        content: '';
        position: absolute;
        top: -20px;
        left: 0;
        width: 50px;
        height: 50px;
        background: url('/quote.svg') no-repeat center;
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
        background: url('/quote.svg') no-repeat center;
        background-size: contain;
        opacity: 0.7;
        transform: rotate(180deg);

        @media screen and ${theme.media.mobile} {
            bottom: 0;
        }
    }
`;

//   ../../../../public/quote.svg

const QuoteSourceStyled = styled.div`
    transform: translate(130px, -15px);
    
    font-size: 18px;
    color: #6C92FF;
    margin: 0 auto;

    @media screen and ${theme.media.mobile} {
        transform: translate(80px, -10px);
    }
    
    cite {
        font-style: italic;
    }
`;



