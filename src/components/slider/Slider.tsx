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
        testimonial: `Everyone working in the office is very knowledgeable about all types of dental work and
options for your individual needs.`,
        ratingStar: 5,
    },
    {
        src: "https://randomuser.me/api/portraits/women/44.jpg",
        alt: "Jessica Liu",
        name: "Jessica Liu",
        testimonial: `I was nervous at first, but the staff made me feel so comfortable. 
They explained everything clearly and treated me with such kindness.`,
        ratingStar: 4,
    },
    {
        src: "https://randomuser.me/api/portraits/men/32.jpg",
        alt: "Carlos Méndez",
        name: "Carlos Méndez",
        testimonial: `The clinic is modern and clean, and they use the latest technology. 
I highly recommend their services to anyone who wants professional care.`,
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
                return <Icon iconId={"arrow"}/>
            }}
            renderNextButton={() => {
                return <Icon iconId={"arrow"}/>
            }}
        />
    </SliderStyled>
);
