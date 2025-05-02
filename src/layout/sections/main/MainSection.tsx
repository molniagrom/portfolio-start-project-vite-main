import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import plusIcon from "../../../image/plus.svg";
// import {Icon} from "../../../components/icon/Icon.tsx";

export const MainSection = styled.section`
    display: flex;
    position: relative;
    margin-bottom: 140px;
    //background-image: url("../../../image/BlueBgKvadrat.svg");
    //background-position: -10px;

    div h2 span {
        color: ${theme.colors.accent};
    }
//todo: Пробовала сделать крестик псевдо элементам но не получилось не знаю почему не отображается 
    // &::before {
    //     content: "";
    //     display: inline-block;
    //     width: 88px;
    //     height: 88px;
    //     position: absolute;
    //     top: 0; /* или -88px — если действительно нужно выше */
    //     left: 500px;
    //     background-image: url(${plusIcon});
    //     background-repeat: no-repeat;
    //     background-size: contain;
    //     background-position: center;
    //     z-index: 3;
    // }

`