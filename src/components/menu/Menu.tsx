// import React from 'react';

import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {FlexWrapper} from "../wrappers/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";

export const Menu = () => {
    return (
        <StyledMenu gap={"64px"} alignItems={"center"} justify={"center"}>
            <List>
                <ListItem><Link href={"/"}>Home</Link></ListItem>
                <ListItem><Link href={"/"}>Projects</Link></ListItem>
                <ListItem><Link href={"/"}>About</Link></ListItem>
                <ListItem><Link href={"/"}>Content</Link></ListItem>
            </List>
            <Icon iconId={"moon"}/>
        </StyledMenu>
    );
};

const StyledMenu = styled(FlexWrapper)`
    ul {
        display: flex;
        flex-direction: row;
        gap: 30px;
    }
`

const List = styled.ul`

`
const ListItem = styled.li`

`
const Link = styled.a`
    display: inline-block;
    color: ${theme.colors.primaryFont};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
        color: ${theme.colors.secondaryFont};
        transform: scale(1.03); /* немного увеличивает размер */
    }
`;
