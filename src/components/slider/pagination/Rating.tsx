import React from "react";

type RatingProps = {
    total: number;     // Общее количество звёзд
    active: number;    // Сколько звёзд активны (подсвечены)
};

export const Rating: React.FC<RatingProps> = ({ total, active }) => {
    const stars = [];

    for (let i = 1; i <= total; i++) {
        stars.push(
            <span key={i} style={{
                color: i <= active ? '#ffc107' : '#e4e5e9',
                fontSize: '24px',
                marginRight: '4px'
            }}>
        ★
      </span>
        );
    }

    return <div>{stars}</div>;
};
