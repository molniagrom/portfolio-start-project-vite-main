import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

type RatingStarsProps = {
    value: number; // число звездочек, которые должны гореть
};

const RatingStars: React.FC<RatingStarsProps> = ({ value }) => {
    return (
        <Rating
            style={{ maxWidth: 120 }}
            value={value}
            readOnly
        />
    );
};

export default RatingStars;
