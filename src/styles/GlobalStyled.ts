import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";
import {createThemeCssVariables} from "./colors.ts";

export const GlobalStyled = createGlobalStyle`
    :root {
        ${createThemeCssVariables("dark")}
        color-scheme: dark;
    }

    :root[data-theme='light'] {
        ${createThemeCssVariables("light")}
        color-scheme: light;
    }

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
        transition: background-color 0.3s ease, color 0.3s ease;
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
        color: inherit;
    }

    input {
        background-color: unset;
        border: none;
    }

    textarea {
        background-color: unset;
        border: none;
        color: inherit;
        font: inherit;
    }

    img {
        display: block;
        max-width: 100%;
    }
`








