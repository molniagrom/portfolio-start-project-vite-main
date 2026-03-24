export type ThemeMode = "dark" | "light";

type Palette = Record<string, string>;

export const darkPalette: Palette = {
    allBg: "#222222",
    allBgOpacity: "rgba(34, 34, 34, 0.5)",
    primaryBg: "#24335C",
    secondaryBg: "#2C2B2B",
    tertiaryBg: "#393838",
    accent: "#2157F2",
    happyClient: "#5982FF",
    primaryFont: "#FFFFFF",
    secondaryFont: "#A6BCFA",
    tertiaryFont: "#6C92FF",
    fourthFont: "#353535",
    linear: "#474747",
    colorForAboutMe: "#393939",
    border: "#4C546C",
    mutedText: "#8B8B8B",
    inputText: "#A5A5A5",
    quoteText: "#242B34",
    shadow: "rgba(34, 60, 80, 0.2)",
    overlayShadow: "rgba(19, 19, 19, 0.18)",
    cardHoverShadow: "rgba(0, 0, 0, 0.1)",
    menuLine: "rgba(255, 255, 255, 1)",
    menuLineTransparent: "rgba(255, 255, 255, 0)",
    heroGlass: "rgba(33, 87, 242, 0.2)",
    aboutGradient: "linear-gradient(132deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 71, 255, 0.05) 100%)",
    aboutBorder: "rgba(255, 255, 255, 0.4)",
    bulletGradient: "linear-gradient(90deg, rgba(166, 188, 250, 1) 50%, rgba(33, 87, 242, 1) 100%)",
    ratingActive: "#FFC107",
    ratingInactive: "#E4E5E9",
    white: "#FFFFFF",
    black: "#000000",
};

export const lightPalette: Palette = {
    allBg: "#F4F7FB",
    allBgOpacity: "rgba(244, 247, 251, 0.84)",
    primaryBg: "#D8E4FF",
    secondaryBg: "#FFFFFF",
    tertiaryBg: "#E8EEF8",
    accent: "#2157F2",
    happyClient: "#2157F2",
    primaryFont: "#162033",
    secondaryFont: "#2157F2",
    tertiaryFont: "#365AB5",
    fourthFont: "#E7ECF5",
    linear: "#B8C7E6",
    colorForAboutMe: "#1D2B45",
    border: "#9FB0D4",
    mutedText: "#61708F",
    inputText: "#32405A",
    quoteText: "#20304B",
    shadow: "rgba(37, 63, 115, 0.12)",
    overlayShadow: "rgba(37, 63, 115, 0.12)",
    cardHoverShadow: "rgba(37, 63, 115, 0.15)",
    menuLine: "rgba(22, 32, 51, 1)",
    menuLineTransparent: "rgba(22, 32, 51, 0)",
    heroGlass: "rgba(33, 87, 242, 0.12)",
    aboutGradient: "linear-gradient(132deg, rgba(255, 255, 255, 0.92) 0%, rgba(33, 87, 242, 0.12) 100%)",
    aboutBorder: "rgba(159, 176, 212, 0.8)",
    bulletGradient: "linear-gradient(90deg, rgba(166, 188, 250, 1) 0%, rgba(33, 87, 242, 1) 100%)",
    ratingActive: "#FFC107",
    ratingInactive: "#D4DCEB",
    white: "#FFFFFF",
    black: "#000000",
};

export const paletteByMode: Record<ThemeMode, Palette> = {
    dark: darkPalette,
    light: lightPalette,
};

export const createThemeCssVariables = (mode: ThemeMode) =>
    Object.entries(paletteByMode[mode])
        .map(([token, value]) => `--color-${token}: ${value};`)
        .join("\n");
