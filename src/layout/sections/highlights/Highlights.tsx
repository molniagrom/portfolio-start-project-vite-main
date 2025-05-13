// import React from 'react';

import styled from 'styled-components';
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";

export const Highlights = () => {
    return (
        <HighlightsStyled>
            <Container>
                <FlexWrapper adaptiveHighlights gap={"25px"} justify={"space-around"} alignItems={"center"}>
                    <StatBlock>
                        <Number>81</Number>
                        <Label>HAPPY CUSTOMERS</Label>
                    </StatBlock>
                    <StatBlock>
                        <Number>97+</Number>
                        <Label>COMPLETED PROJECTS</Label>
                    </StatBlock>
                    <StatBlock>
                        <Number>50</Number>
                        <Label>AWARDS WON</Label>
                    </StatBlock>
                </FlexWrapper>
            </Container>
        </HighlightsStyled>
    );
};


const HighlightsStyled = styled.section`
    padding: 40px 20px;
    background-color: #24335C;
    color: ${theme.colors.primaryFont};
`;

const StatBlock = styled.div`
    text-align: center;
`;

const Number = styled.div`
    font-size: 32px;
    font-weight: bold;
    
    @media screen and ${theme.media.mobile} {
        font-weight: 700;
        font-size: 21px;
    }
`;

const Label = styled.div`
    margin-top: 10px;
    font-size: 18px;
    letter-spacing: 1px;
    
    @media screen and ${theme.media.mobile} {
        font-weight: 700;
        font-size: 20px;
    }
`;
