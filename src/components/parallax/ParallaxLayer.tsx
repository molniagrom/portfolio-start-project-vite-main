import {ReactNode, useRef} from "react";
import {motion} from "framer-motion";
import {useParallax} from "../../hooks/useParallax";

type ParallaxLayerProps = {
    children: ReactNode;
    speed?: number;
    direction?: "y" | "x";
    className?: string;
    style?: React.CSSProperties;
};

/**
 * Generic parallax wrapper. Speed is proportional to element height:
 * speed 0.1 on a 500px element → ±50px range.
 * Automatically disabled on mobile (<1024px) and prefers-reduced-motion.
 */
export const ParallaxLayer = ({
    children,
    speed = 0.1,
    direction = "y",
    className,
    style,
}: ParallaxLayerProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const {style: parallaxStyle} = useParallax(ref, {speed, direction});

    return (
        <motion.div
            ref={ref}
            style={{willChange: "transform", ...parallaxStyle, ...style}}
            className={className}
        >
            {children}
        </motion.div>
    );
};
