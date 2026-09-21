import {RefObject, useEffect, useState} from "react";
import {useScroll, useTransform, MotionValue} from "framer-motion";
import {useReducedMotion} from "./useReducedMotion";

type ParallaxOptions = {
    speed?: number;
    direction?: "y" | "x";
};

function useIsMobile(breakpoint = 1024): boolean {
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth < breakpoint : false
    );

    useEffect(() => {
        const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, [breakpoint]);

    return isMobile;
}

/**
 * Parallax hook inspired by GetHapply's approach:
 * - Range is proportional to element height (speed * elementHeight)
 * - Disabled on mobile (<1024px) and when prefers-reduced-motion is active
 * - Uses will-change: transform for GPU compositing
 * - scrub-like sync via framer-motion useScroll with "start end" → "end start"
 */
export function useParallax<T extends Element>(
    ref: RefObject<T>,
    options: ParallaxOptions = {}
): {style: {y?: MotionValue<number>; x?: MotionValue<number>}} {
    const {
        speed = 0.1,
        direction = "y",
    } = options;

    const prefersReducedMotion = useReducedMotion();
    const isMobile = useIsMobile();
    const disabled = prefersReducedMotion || isMobile;

    const {scrollYProgress} = useScroll({
        target: ref as unknown as RefObject<HTMLElement>,
        offset: ["start end", "end start"],
    });

    const [elementHeight, setElementHeight] = useState(0);

    useEffect(() => {
        if (disabled) return;
        const el = ref.current;
        if (!el) return;

        const measure = () => setElementHeight(el.getBoundingClientRect().height);
        measure();

        const ro = new ResizeObserver(measure);
        ro.observe(el);
        return () => ro.disconnect();
    }, [ref, disabled]);

    // Proportional range: speed * elementHeight
    // For speed 0.1 and a 500px element → ±50px (similar to GetHapply's 10% range)
    const range = disabled ? 0 : speed * elementHeight;

    const y = useTransform(scrollYProgress, [0, 1], [range, -range]);
    const x = useTransform(scrollYProgress, [0, 1], [range, -range]);

    return {
        style: direction === "y" ? {y} : {x},
    };
}
