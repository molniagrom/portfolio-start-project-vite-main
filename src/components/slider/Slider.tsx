// import React from 'react';

import styled from "styled-components";
import {FlexWrapper} from "../wrappers/FlexWrapper.tsx";
import {Pagination} from "./pagination/Pagination.tsx";
import { RatingStar } from 'react-ts-rating-star'


export const Slider = () => {
    return (
        <SliderStyled>
            <FlexWrapper justify={"center"} alignItems={"center"}>
                <Slide>
                    <Wrapper direction="column" alignItems='center' justify="center">
                        <SliderCard>
                            <img
                                src="https://www.mckinsey.com/it/~/media/mckinsey/our%20people/alessandro%20agosta/alessandro-agosta_fc_mask_profile_1536x1152.jpg?cq=50&mw=480&car=1:1&cpy=Center"
                                alt="person"/>
                        </SliderCard>
                        <SliderTitle>Adams Ademola</SliderTitle>
                        <SliderSubTitle>Happy Client</SliderSubTitle>
                        <Testimonial>“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</Testimonial>
                        <RatingStar numberOfStars={5}/>

                    </Wrapper>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </SliderStyled>
    );
};

const SliderStyled = styled.div`
    border: 2px solid forestgreen;
    max-width: 726px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    text-align: center;
    border: 2px solid brown;
`

export const SliderCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        max-width: 104px;
        border-radius: 50px;
        object-fit: cover;
    }

`
export const SliderTitle = styled.h3`
    color: #393939;
    font-weight: 600;
    font-size: 24px;
    line-height: 108%;
    text-align: center;
`
export const SliderSubTitle = styled.p`
    color: #2157F2;
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    text-align: center;
`
export const Testimonial = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    text-align: center;
    color: #5d616f;
`

export const Wrapper = styled(FlexWrapper)`
    min-width: 726px;

    h3 {
        margin: 0;
    }

    p {
        margin: 0;
    }
`


