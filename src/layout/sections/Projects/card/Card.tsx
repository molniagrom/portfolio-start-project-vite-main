import styled from "styled-components";
import {FlexWrapper} from "../../../../components/wrappers/FlexWrapper.tsx";
import {Photo} from "../../main/Photo.tsx";
import {AStyled} from "../../../../components/AStyled/AStyled.tsx";
import {theme} from "../../../../styles/Theme.ts";

type CardProps = {
    title: string
    image: string
}

export const Card = (props: CardProps) => {
    return (
        <StyledCard borderRadius={"26px"} backgroundColor={theme.colors.fourthFont}>
            <Photo
                adaptiveProj
                borderRadius={"20px 20px 0 0"}
                height={"240px"}
                width={"100%"}
                src={props.image}
                objectFit={"cover"}
            />

            <FlexWrapper
                adaptive
                adaptiveProj
                flexGrow={"1"}
                alignItems={"stretch"}
                justify={"space-between"}
                gap={"25px"}
                direction={"column"}
                padding={"17px 33px 23px 33px"}
            >
                <NameCard>{props.title}</NameCard>
                <FlexWrapper gap={"20px"} justify={"space-between"}>
                    <AStyled adaptiveProject buttonHover borderRadius={"12px"} padding={"4px 19px 4px 19px"} fontWeight={"700"}
                             lineHeight={"148%"} color={theme.colors.fourthFont} fontSize={"14px"}
                             backgroundColor={theme.colors.primaryFont}>Edit code</AStyled>
                    <AStyled adaptiveProject LinkHover color={theme.colors.secondaryFont}>View</AStyled>
                </FlexWrapper>
            </FlexWrapper>
        </StyledCard>
    );
};

const NameCard = styled.h3`
    flex-grow: 1;
    text-align: left;
    font-family: "Kalameh", sans-serif;
    font-weight: 700;
    font-size: 20px;

    @media screen and ${theme.media.mobile} {
        font-size: 12px;
    }
`;

type StyledCardPropsType = {
    padding?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderRadius?: string;
};

const StyledCard = styled.article<StyledCardPropsType>`
    display: flex;
    flex-direction: column;
    padding: ${props => props.padding || undefined};
    background-color: ${props => props.backgroundColor || undefined};
    border-radius: ${props => props.borderRadius || undefined};
    height: ${props => props.height || undefined};
    transition: all 0.3s ease;

    ${Photo} {
        filter: grayscale(10%) brightness(0.8);
        transition: filter 0.3s ease;
    }

    &:hover {
        background-color: ${theme.colors.primaryBg};

        ${Photo} {
            filter: none;
        }
    }
`;

