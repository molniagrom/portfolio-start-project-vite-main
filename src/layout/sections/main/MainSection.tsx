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

//     &::before {
//         content: "";
//         display: inline-block;
//         position: absolute;
//         top: 0;
//         left: 500px;
//         width: 150px; /* Увеличиваем размер для теста */
//         height: 150px; /* Увеличиваем размер для теста */
//         background: url(${plusIcon});
//         //border: 4px solid blue; // Увеличиваем толщину границы
//         z-index: 13;
//     }
// `