import myPhoto from "../../../../image/myPhoto.jpg"
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/wrappers/FlexWrapper.tsx";
import {Photo} from "../../main/Photo.tsx";
import {AStyled} from "../../../../components/AStyled/AStyled.tsx";


export const Card = () => {
    return (
        <StyledCard borderRadius={"26px"} backgroundColor={"#353535"} width={"394px"}>
            <Photo borderRadius={"20px 20px 0 0"} height={"60.91%"} width={"100%"} src={myPhoto} objectFit={"cover"} />

            <FlexWrapper flexGrow={"1"} alignItems={"center"} justify={"space-between"} direction={"column"} >
                 <NameCard>Story motion for sale English cources</NameCard>
                <FlexWrapper direction={"row"}  gap={"20px"}>
                    <AStyled backgroundColor={"#2157F2"} color={"#fff"}>Edit code</AStyled>
                    <AStyled color={"#2157F2"}>View</AStyled>
                </FlexWrapper>
            </FlexWrapper>
        </StyledCard>
    );
};

const NameCard = styled.h3`
    flex-grow: 1;
`

type StyledCardPropsType = {
    padding?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderRadius?: string
}

const StyledCard = styled.article<StyledCardPropsType>`
    display: flex;
    flex-direction: column;
    padding: ${props => props.padding || undefined};
    width: ${props => props.width || undefined};
    background-color: ${props => props.backgroundColor || undefined};
    border-radius: ${props => props.borderRadius || undefined};
    height: ${props => props.height || undefined};
`
