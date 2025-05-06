import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

export const Pagination = styled.div`
    padding-top: 40px;

    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        border-radius: 50%;
        background-color: ${theme.colors.tertiaryFont};
        
        
    }
`