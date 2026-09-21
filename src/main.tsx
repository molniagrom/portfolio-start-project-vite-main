import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {GlobalStyled} from "./styles/GlobalStyled.ts";
import {ThemeModeProvider} from "./context/ThemeModeContext.tsx";
import {LenisProvider} from "./context/LenisContext.tsx";
import "lenis/dist/lenis.css";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeModeProvider>
            <LenisProvider>
                <GlobalStyled/>
                <App/>
            </LenisProvider>
        </ThemeModeProvider>
    </StrictMode>,
)
