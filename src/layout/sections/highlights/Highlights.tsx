import styled from 'styled-components';
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import {useRef} from "react";
import {motion} from "framer-motion";
import {useParallax} from "../../../hooks/useParallax";

export const Highlights = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentParallax = useParallax(sectionRef, {speed: 0.03});

    return (
        <HighlightsStyled ref={sectionRef}>
            <Container>
                <motion.div style={contentParallax.style}>
                    <FlexWrapper $adaptiveHighlights gap={"25px"} justify={"space-around"} $alignItems={"center"}>
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
                </motion.div>
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
