import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyled = createGlobalStyle`

    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        margin: 0;
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.allBg};
        color: ${theme.colors.primaryFont};
        min-width: 350px;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }

    input {
        background-color: unset;
        border: none;
    }
`








