// import React from 'react';

// Highlights.tsx
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";

export const Highlights = () => {
    return (
        <HighlightsStyled>
            <FlexWrapper justify={"space-around"} alignItems={"center"}>
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
        </HighlightsStyled>
    );
};


const HighlightsStyled = styled.section`
    padding: 40px 20px;
    background-color: #24335C;
    color: #fff;
`;

const StatBlock = styled.div`
    text-align: center;
`;

const Number = styled.div`
    font-size: 32px;
    font-weight: bold;
`;

const Label = styled.div`
    margin-top: 10px;
    font-size: 18px;
    letter-spacing: 1px;
`;
