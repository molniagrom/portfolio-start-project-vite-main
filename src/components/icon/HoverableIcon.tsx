import {useState} from "react";
import {Icon} from "./Icon.tsx";

type HoverableIconProps = {
    href: string
    label: string
    iconId: string
    viewBox?: string
    width?: string
    height?: string
}

export const HoverableIcon = ({href, label, iconId, viewBox, width, height}: HoverableIconProps) => {
    const [hover, setHover] = useState(false);

    return (
        <a
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noreferrer"
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
