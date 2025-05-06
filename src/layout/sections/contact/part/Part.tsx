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
    
    h4 {
        font-weight: 500;
        font-size: 16px;
        line-height: 136%;
    }
    
    p {
        font-weight: 400;
        font-size: 12px;
        line-height: 136%;
        color: #8b8b8b;
    }
`

const PartContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 23px;
`