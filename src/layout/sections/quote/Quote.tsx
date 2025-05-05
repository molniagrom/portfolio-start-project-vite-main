// import React from 'react';

import styled from "styled-components";
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";
//todo: в icons-sprite svg нужно отрисовать скорее всего в псевдо-элементах

export const Quote = () => {
    return (
        <QuoteStyled>
            <FlexWrapper direction="column" alignItems={"flex-end"}>
                <PStyled>'For whatever a person is sowing, this he will also reap'</PStyled>
                <PStyled>(Galatians 6:7)</PStyled>
            </FlexWrapper>
        </QuoteStyled>
    );
};

const QuoteStyled = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #222222;
    color: #fff;
`

const PStyled = styled.p`
    text-align: right;
    transform: translateX(-50vw);
    position: relative;
    left: 10vw;
`
