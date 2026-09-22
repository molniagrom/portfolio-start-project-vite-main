import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {theme} from "../styles/Theme.ts";

export const LanguageSwitcher = () => {
    const {i18n} = useTranslation();
    const currentLang = i18n.language;

    const toggleLang = () => {
        const next = currentLang === "en" ? "ru" : "en";
        i18n.changeLanguage(next);
        localStorage.setItem("lang", next);
    };

    return (
        <StyledButton onClick={toggleLang} aria-label="Switch language">
            <LangItem $active={currentLang === "en"}>EN</LangItem>
            <Separator>/</Separator>
            <LangItem $active={currentLang === "ru"}>RU</LangItem>
        </StyledButton>
    );
};

const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 6px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${theme.colors.accent}22;
    }
`;

const Separator = styled.span`
    color: ${theme.colors.primaryFont};
    opacity: 0.4;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
`;

const LangItem = styled.span<{$active: boolean}>`
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: ${props => props.$active ? "700" : "400"};
    color: ${props => props.$active ? theme.colors.accent : theme.colors.primaryFont};
    opacity: ${props => props.$active ? 1 : 0.5};
    transition: color 0.2s ease, opacity 0.2s ease, font-weight 0.2s ease;
`;
