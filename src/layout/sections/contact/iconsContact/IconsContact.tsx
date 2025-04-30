// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/wrappers/FlexWrapper.tsx";


export const IconsContact = () => {
    return (
        <IconsContactStyled>
            {/*<FlexWrapper justify={'flex-start'}>*/}
            {/*    <BlueWhite>*/}
            {/*        <Icon width={"31px"} height={"31px"} iconId={"instagramWhite"} />*/}
            {/*        <Icon width={"31px"} height={"31px"} iconId={"whatsappWhite"} />*/}
            {/*        <Icon width={"29px"} height={"29px"} iconId={"telegramWhite "} />*/}
            {/*    </BlueWhite>*/}
            {/*</FlexWrapper>*/}
            <FlexWrapper justify="center" alignItems="center">
                <Colored>
                    <Icon width={"33px"} height={"32px"} iconId={"instagramColor"}/>
                    <Icon width={"33px"} height={"32px"} iconId={"whatsappColor"}/>
                    <Icon width={"33px"} height={"32px"} iconId={"telegramColor"}/>
                </Colored>
            </FlexWrapper>

        </IconsContactStyled>
    );
};

const IconsContactStyled = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 200px 1fr;
    background-color: #222222;

`

const Colored = styled.div`
    display: flex;
    flex-direction: row;
    gap: 22px;
    min-width: 142px;
`


