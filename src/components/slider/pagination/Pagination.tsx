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
        background-color: ${theme.colors.accent};
        cursor: pointer;
        transition: all 0.1s ease-in-out;

        &:hover {
            box-shadow: 1px 1px 19px 1px rgba(0, 8, 30, 0.88);
            transform: scale(1.1);
        }
    }
`