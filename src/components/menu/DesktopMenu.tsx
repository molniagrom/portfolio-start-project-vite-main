import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {Link} from "react-scroll";
import {Icon} from "../icon/Icon.tsx";
import {ThemeMode} from "../../styles/colors.ts";

export type MenuPropsType = {
    items: {
        title: string,
        href: string,
    }[];
    mode: ThemeMode;
    onToggleTheme: () => void;
}

export const DesktopMenu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <List>
                {props.items.map((item) => (
                    <ListItem key={item.href}>
                        <MyLink activeClass="active"
                                spy={true}
                                smooth={true}
                                to={item.href}>{item.title}</MyLink>
                    </ListItem>
                ))}
            </List>
            <ThemeButton
                type="button"
                onClick={props.onToggleTheme}
                aria-label={`Switch to ${props.mode === "dark" ? "light" : "dark"} theme`}
            >
                <Icon iconId={"moon"}/>
            </ThemeButton>
        </StyledMenu>
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
`

const List = styled.ul``

const ListItem = styled.li``

const ThemeButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
