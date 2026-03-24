import React from "react";
import {theme} from "../../../styles/Theme.ts";

type RatingProps = {
    total: number;
    active: number;
};

export const Rating: React.FC<RatingProps> = ({total, active}) => {
    const stars = [];

    for (let i = 1; i <= total; i++) {
        stars.push(
            <span
                key={i}
                style={{
                    color: i <= active ? theme.colors.ratingActive : theme.colors.ratingInactive,
                    fontSize: "24px",
                    marginRight: "4px",
                }}
            >
                ★
            </span>
        );
    }

    return <div>{stars}</div>;
};
