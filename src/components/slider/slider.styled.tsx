import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {quote} from "../../image/svgDataFormat.ts";

export const SliderStyled = styled.div`
    background-color: ${theme.colors.allBg};
    width: 60%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    backdrop-filter: blur(10px);
    border-radius: 150px 0;
    border: 2px solid #4C546C;
    box-shadow: 8px 8px 16px 1px rgba(34, 60, 80, 0.2);


    @media screen and ${theme.media.mobile} {
        width: 90%;
    }
   //}
`
export const Slide = styled.div`
    text-align: center;
    padding: 52px 57px 40px 57px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        width: 110px;
        height: 86px;
        background-image: url("data:image/svg+xml;utf8,${quote}");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        transform: scale(0.7);
        top: 40px;
        left: 40px;

        @media screen and ${theme.media.tablet} {
            top: -8px;
            left: -10px;
        }
    }

    h3 {
        margin: 0;
    }

    p {
        margin: 0;
    }
`
export const ImageCard = styled.img`
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



