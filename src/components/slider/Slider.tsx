// import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Rating} from "./pagination/Rating.tsx";
import './../../styles/slider.css';
import {ImageCard, Slide, SliderStyled, SliderSubTitle, SliderTitle, Testimonial} from "./slider.styled.tsx";
import {Icon} from "../icon/Icon.tsx";

type SlideComponentPropsType = {
    src: string,
    alt: string,
    name: string,
    testimonial: string,
    ratingStar: number,
}

const testimonials: SlideComponentPropsType[] = [
    {
        src: "https://www.mckinsey.com/it/~/media/mckinsey/our%20people/alessandro%20agosta/alessandro-agosta_fc_mask_profile_1536x1152.jpg?cq=50&mw=480&car=1:1&cpy=Center",
        alt: "Adams Ademola",
        name: "Adams Ademola",
        testimonial: `They were quick to understand what I needed and offered helpful suggestions along the way. The final product looks clean and works exactly as expected.`,
        ratingStar: 5,
    },
    {
        src: "https://randomuser.me/api/portraits/women/44.jpg",
        alt: "Jessica Liu",
        name: "Jessica Liu",
        testimonial: `Fantastic work from start to finish! The developer paid attention to every detail and made sure everything was pixel-perfect. `,
        ratingStar: 4,
    },
    {
        src: "https://randomuser.me/api/portraits/men/32.jpg",
        alt: "Carlos Méndez",
        name: "Carlos Méndez",
        testimonial: ` I felt heard and understood throughout the whole project. Everything was delivered quickly and with great quality. Will definitely come back for future projects.

`,
        ratingStar: 5,
    },
];

const SlideComponent = (props: SlideComponentPropsType) => {
    return (
        <Slide>
            <ImageCard
                src={props.src}
                alt={props.alt}/>
            <SliderTitle>{props.name}</SliderTitle>
            <SliderSubTitle>Happy Client</SliderSubTitle>
            <Testimonial>“{props.testimonial}”</Testimonial>
            <Rating total={5} active={props.ratingStar} />
        </Slide>
    )
}

const items = testimonials.map((testimonial, index) => (
    <SlideComponent
        key={index}
        {...testimonial}
    />
));

export const Slider = () => (
    <SliderStyled>
        <AliceCarousel
            mouseTracking
            items={items}
            renderPrevButton={() => {
                return <Icon viewBox={"-8 -8 34 34"} iconId={"arrowLeft"}/>
            }}
            renderNextButton={() => {
                return <Icon viewBox={"-12 -5 36 36"} iconId={"arrowRight"}/>
            }}
        />
    </SliderStyled>
);
