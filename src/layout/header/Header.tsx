// import React from 'react';
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import styled from "styled-components";

export const Header = () => {
    return (
        <StyleHeader>
            <Logo/>
            <Menu/>
        </StyleHeader>
    );
};

const StyleHeader = styled.header`
    background-color: cadetblue;
    display: flex;
    justify-content: space-between;
    position: relative;

`
