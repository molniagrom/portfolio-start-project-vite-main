import {FlexWrapper} from "../../../../../components/wrappers/FlexWrapper.tsx";
import {Photo} from "../../Photo.tsx";
import myPhoto from "../../../../../image/myPhoto.jpg"
import {Button} from "../../../../../components/Button/Button.tsx";
import styled from "styled-components";


export const Card = () => {
    return (
        <StyledCard borderRadius={"26px"} backgroundColor={"#353535"} width={"394px"}>
            <Photo borderRadius={"20px 20px 0 0"} height={"60.91%"} width={"100%"} src={myPhoto} objectFit={"cover"} />
            <FlexWrapper alignItems={"center"} direction={"column"} >
                 <NameCard>Story motion for sale English cources</NameCard>
                <FlexWrapper direction={"row"}  gap={"20px"}>
                    <Button color={"#000"}>Edit for you</Button>
                    <Button>see preview</Button>
                </FlexWrapper>
            </FlexWrapper>
        </StyledCard>
    );
};

const NameCard = styled.h3`
    width: 75.5%;
`

type StyledCardPropsType = {
    padding?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderRadius?: string
}

const StyledCard = styled.div<StyledCardPropsType>`
    padding: ${props => props.padding || undefined};
    width: ${props => props.width || undefined};
    background-color: ${props => props.backgroundColor || undefined};
    border-radius: ${props => props.borderRadius || undefined};
    height: ${props => props.height || undefined};
`
