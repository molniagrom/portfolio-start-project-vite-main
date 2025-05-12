// import React from 'react';

import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const Menu = () => {
    return (
        <StyledMenu>
            <List>
                <ListItem><Link href={"/"}>Home</Link></ListItem>
                <ListItem><Link href={"/"}>Projects</Link></ListItem>
                <ListItem><Link href={"/"}>About</Link></ListItem>
                <ListItem><Link href={"/"}>Content</Link></ListItem>
            </List>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
   
    ul {
        display: flex;
        flex-direction: row;
        gap: 30px;
    }
    
    @media screen and ${theme.media.hideHeader} {
        display: none;
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
