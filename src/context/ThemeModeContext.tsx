import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import {ThemeMode} from "../styles/colors.ts";

type ThemeModeContextValue = {
    mode: ThemeMode;
    toggleMode: () => void;
};

const STORAGE_KEY = "portfolio-theme";

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

export const ThemeModeProvider = ({children}: { children: ReactNode }) => {
    const [mode, setMode] = useState<ThemeMode>("dark");

    useEffect(() => {
        const storedMode = window.localStorage.getItem(STORAGE_KEY);

        if (storedMode === "light" || storedMode === "dark") {
            setMode(storedMode);
            return;
        }

        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
        setMode(prefersLight ? "light" : "dark");
    }, []);

    useEffect(() => {
        document.documentElement.dataset.theme = mode;
        window.localStorage.setItem(STORAGE_KEY, mode);
    }, [mode]);

    const value = useMemo(
        () => ({
            mode,
            toggleMode: () => {
                setMode((currentMode) => (currentMode === "dark" ? "light" : "dark"));
            },
        }),
        [mode],
    );

    return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
};

export const useThemeMode = () => {
    const context = useContext(ThemeModeContext);

    if (!context) {
        throw new Error("useThemeMode must be used within ThemeModeProvider");
    }

    return context;
};
