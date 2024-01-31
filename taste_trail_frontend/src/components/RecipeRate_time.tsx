import React from 'react';
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa';
import '../pages1/css/Recipes.css'

interface RecipeRatingsProps {
    recipe: {
        preparationTimeMinutes: string;
        preparationTimeHours: string;
    };
    rating: number;
}

const RecipeRatings: React.FC<RecipeRatingsProps> = ({ recipe, rating }) => {
    const renderStars = () => {
        const fullStars = Math.floor(rating);
        const decimalPart = rating % 1;
        const hasHalfStar = decimalPart >= 0.5;

        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={i}><FaStar  color="#3d3d3d" size="1.6rem"/></i>);
        }

        if (hasHalfStar) {
            stars.push(<i key={fullStars}><FaStarHalfAlt color="#3d3d3d" size="1.6rem"/></i>);
        }

        const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<i key={fullStars + i + (hasHalfStar ? 1 : 0)}><FaRegStar size="1.6rem"/></i>);
        }

        return stars;
    };


    const displayPreparationTime = () => {
        if (recipe.preparationTimeHours && recipe.preparationTimeMinutes) {
            return `${recipe.preparationTimeHours} hr ${recipe.preparationTimeMinutes} mins`;
        } else if (recipe.preparationTimeHours) {
            return `${recipe.preparationTimeHours} hr`;
        } else if (recipe.preparationTimeMinutes) {
            return `${recipe.preparationTimeMinutes} mins`;
        } else {
            return 'N/A'; // or any default value if both are not present
        }
    };


    return (
        <section className="rating-time flex">
            <table className="recipe-timetable">
                <tbody>
                <tr>
                    <th>Rating</th>
                    <th>Total Time</th>
                </tr>
                <tr>
                    <td className="rate">
                        {rating !== null ? (
                            renderStars()
                        ) : (
                            <span>Rating not available</span>
                        )}
                    </td>

                    <td className="time">
                        {displayPreparationTime()}
                    </td>
                </tr>

                </tbody>
            </table>
        </section>
    );
};

export default RecipeRatings;
