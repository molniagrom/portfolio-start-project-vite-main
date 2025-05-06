import myPhoto from "../../../../image/myPhoto.jpg";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/wrappers/FlexWrapper.tsx";
import {Photo} from "../../main/Photo.tsx";
import {AStyled} from "../../../../components/AStyled/AStyled.tsx";
import {theme} from "../../../../styles/Theme.ts";

export const Card = () => {
    return (
        <StyledCard borderRadius={"26px"} backgroundColor={theme.colors.fourthFont}>
            <Photo
                borderRadius={"20px 20px 0 0"}
                height={"60.91%"}
                width={"100%"}
                src={myPhoto}
                objectFit={"cover"}
            />

            <FlexWrapper
                flexGrow={"1"}
                alignItems={"center"}
                justify={"space-between"}
                direction={"column"}
                padding={"17px 33px 23px 33px"}
            >
                <NameCard>Story motion for sale English courses</NameCard>
                <FlexWrapper direction={"row"} gap={"20px"}>
                    <AStyled buttonHover borderRadius={"12px"} padding={"4px 19px 4px 19px"} fontWeight={"700"}
                             lineHeight={"148%"} color={theme.colors.fourthFont} fontSize={"14px"}
                             backgroundColor={theme.colors.primaryFont}>Edit code</AStyled>
                    <AStyled LinkHover color={theme.colors.secondaryFont}>View</AStyled>
                </FlexWrapper>
            </FlexWrapper>
        </StyledCard>
    );
};

const NameCard = styled.h3`
    flex-grow: 1;
    text-align: center;
    font-family: "Kalameh", sans-serif;
    font-weight: 700;
    font-size: 20px;
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
    padding: ${props => props.padding || "0"};
    width: 100%;
    //min-width: 250px;
    background-color: ${props => props.backgroundColor || "transparent"};
    border-radius: ${props => props.borderRadius || "0"};
    height: ${props => props.height || "auto"};
    box-sizing: border-box;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${theme.colors.primaryBg}
    }
`;
