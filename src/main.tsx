import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {GlobalStyled} from "./styles/GlobalStyled.ts";
import {ThemeModeProvider} from "./context/ThemeModeContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeModeProvider>
            <GlobalStyled/>
            <App/>
        </ThemeModeProvider>
    </StrictMode>,
)
