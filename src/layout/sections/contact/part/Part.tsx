// import React from 'react';

import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../styles/Theme.ts";

export const Part = (props: PartInfoLogoProps) => {
    return (
        <PartContent>
            <Icon adaptivePart iconId={props.iconId}/>
            <Info>
                <h4>{props.title}</h4>
                <p>{props.href ? <a href={props.href}>{props.subTittle}</a> : props.subTittle}</p>
            </Info>
        </PartContent>
    );
};

type PartInfoLogoProps = {
    title?: string;
    subTittle?: string;
    iconId: string;
    href?: string;
}

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4, p {
        margin: 0;
    }
    
    h4 {
        font-weight: 500;
        font-size: 16px;
        line-height: 136%;

        @media screen and ${theme.media.tablet} {
            font-size: 30px;
            text-align: left;
            margin-bottom: 2px;
        }
        @media screen and ${theme.media.mobile} {
            font-size: 18px;
            margin-bottom: 1px;
        }
    }
    
    p {
        font-weight: 400;
        font-size: 15px;
        line-height: 136%;
        color: ${theme.colors.primaryFont};
        overflow-wrap: anywhere;
        a { color: inherit; text-decoration: underline; text-underline-offset: 4px; }

        @media screen and ${theme.media.tablet} {
            font-size: 22px;
            text-align: left;
        }
        @media screen and ${theme.media.mobile} {
            font-size: 14px;
        }
    }
`

const PartContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 23px;

    @media screen and ${theme.media.tablet} {
        gap: 45px;
    }
    @media screen and ${theme.media.mobile} {
        gap: 26px;
    }
`