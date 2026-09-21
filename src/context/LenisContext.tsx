import { createContext, useContext, useEffect, useRef, ReactNode } from "react";
import Lenis from "lenis";

type LenisContextValue = {
    lenis: Lenis | null;
};

const LenisContext = createContext<LenisContextValue>({ lenis: null });

export const LenisProvider = ({ children }: { children: ReactNode }) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const lenis = new Lenis({
            duration: prefersReduced ? 0 : 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: !prefersReduced,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        let rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return (
        <LenisContext.Provider value={{ lenis: lenisRef.current }}>
            {children}
        </LenisContext.Provider>
    );
};

export const useLenis = () => {
    const { lenis } = useContext(LenisContext);
    return lenis;
};
