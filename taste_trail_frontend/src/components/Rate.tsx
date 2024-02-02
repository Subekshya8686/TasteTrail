import React, { useState, useEffect } from 'react';
import '../pages1/css/Recipes.css';

interface RateProps {
    onRate: (rating: number) => void;
}

const Rate: React.FC<RateProps> = ({ onRate }) => {
    const storedRating = localStorage.getItem('recipeRating');
    const [rating, setRating] = useState<number | null>(storedRating ? parseInt(storedRating, 10) : null);

    useEffect(() => {
        if (rating !== null) {
            localStorage.setItem('recipeRating', rating.toString());
        }
    }, [rating]);

    const handleRate = (value: number) => {
        setRating(value);
        onRate(value);
    };

    return (
        <div className="rating-section">
            <p>Rate this recipe:</p>
            {[1, 2, 3, 4, 5].map((value) => (
                <span
                    key={value}
                    onClick={() => handleRate(value)}
                    className={value <= (rating || 0) ? 'active' : ''}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default Rate;
