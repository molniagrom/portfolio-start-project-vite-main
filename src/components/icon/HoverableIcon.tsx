import {useState} from "react";
import {Icon} from "./Icon.tsx";

type HoverableIconProps = {
    iconId: string
    viewBox?: string
    width?: string
    height?: string
}

export const HoverableIcon = ({iconId, viewBox, width, height}: HoverableIconProps) => {
    const [hover, setHover] = useState(false);

    return (
        <a
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            href="#"
        >
            <Icon
                hover={hover}
                iconId={iconId}
                viewBox={viewBox}
                width={width}
                height={height}
            />
        </a>
    )
}
