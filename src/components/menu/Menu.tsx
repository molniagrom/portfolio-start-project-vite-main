// import React from 'react';

import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {Link} from "react-scroll";
import {Icon} from "../icon/Icon.tsx";

export type MenuPropsType = {
    items: {
        title: string,
        href: string,
    }[];
}

export const Menu = (props: MenuPropsType) => {
    return (
        <>
            <StyledMenu>
                <List>
                    {props.items.map((item, i) => (
                        <ListItem key={i}><MyLink activeClass="active" spy={true} smooth={true}
                                                  to={item.href}>{item.title}</MyLink></ListItem>
                    ))}
                </List>
                <Icon iconId={"moon"}/>
            </StyledMenu>

        </>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;

    ul {
        display: flex;
        flex-direction: row;
        gap: 30px;
    }

    @media screen and ${theme.media.mobile} {
        display: none;
    }
`

const List = styled.ul`

`
const ListItem = styled.li`

`
export const MyLink = styled(Link)`
    display: inline-block;
    color: ${theme.colors.primaryFont};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    transition: color 0.2s ease, transform 0.2s ease;
    cursor: pointer;

    &:hover, &.active {
        color: ${theme.colors.secondaryFont};
        transform: scale(1.03);
    }
`;
