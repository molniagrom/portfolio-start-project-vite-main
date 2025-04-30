// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";

export const Part = (props: PartInfoLogoProps) => {
    return (
        <PartContent>
            <Icon iconId={props.iconId}/>
            <Info>
                <h4>{props.title}</h4>
                <p>{props.subTittle}</p>
            </Info>
        </PartContent>
    );
};

type PartInfoLogoProps = {
    title?: string;
    subTittle?: string;
    iconId: string;
}

const Info = styled.div`
    display: flex;
    flex-direction: column;

    h4, p {
        margin: 0;
    }
`

const PartContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 26px;
`