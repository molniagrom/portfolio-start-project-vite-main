// import React from 'react';

import styled from "styled-components";
import {RatingStar} from 'react-ts-rating-star'
import {theme} from "../../styles/Theme.ts";
import {Icon} from "../icon/Icon.tsx";


export const Slider = () => {
    return (
        <SliderStyled>
            <Icon top={"10%"} left={"10%"} width={"110px"} height={"86px"} position={"absolute"} iconId={"quote"}/>
            <Slide>
                <ImageCard
                    src="https://www.mckinsey.com/it/~/media/mckinsey/our%20people/alessandro%20agosta/alessandro-agosta_fc_mask_profile_1536x1152.jpg?cq=50&mw=480&car=1:1&cpy=Center"
                    alt="person"/>
                <SliderTitle>Adams Ademola</SliderTitle>
                <SliderSubTitle>Happy Client</SliderSubTitle>
                <Testimonial>“Everyone working in the office is very knowledgeable about all types of dental work and
                    options for your individual needs.”</Testimonial>
                <RatingStar numberOfStars={5}/>
            </Slide>
        </SliderStyled>
    );
};

const SliderStyled = styled.div`
    background-color: ${theme.colors.tertiaryBg};
    width: 60%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    backdrop-filter: blur(10px);
    border-radius: 150px 0;
    border: 2px solid #474747;
`

const Slide = styled.div`
    text-align: center;
    padding: 52px 57px 52px 57px;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    h3 {
        margin: 0;
    }

    p {
        margin: 0;
    }
`

const ImageCard = styled.img`
    max-width: 104px;
    border-radius: 50px;
    object-fit: cover;
    margin-bottom: 20px;
`

export const SliderTitle = styled.h3`
    color: ${theme.colors.primaryFont};
    font-weight: 600;
    font-size: 24px;
    line-height: 108%;
    padding-bottom: 4px;
`
export const SliderSubTitle = styled.p`
    color: ${theme.colors.HappyClient};
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    padding-bottom: 20px;
`
export const Testimonial = styled(SliderSubTitle)`
    color: ${theme.colors.secondaryFont};
    padding-bottom: 12px;
`



