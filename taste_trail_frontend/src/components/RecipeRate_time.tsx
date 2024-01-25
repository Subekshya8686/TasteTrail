import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import '../pages1/css/Recipes.css'

interface RecipeRatingsProps {
    recipe: {
        ratings: number;
        preparationTimeMinutes: string;
        preparationTimeHours: string;
        recipeOwner: string;
    };
}

const RecipeRatings: React.FC<RecipeRatingsProps> = ({ recipe }) => {
    const renderStars = () => {
        const fullStars = Math.floor(recipe.ratings);
        const hasHalfStar = recipe.ratings % 1 !== 0;

        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={i}><FaStar /></i>);
        }

        if (hasHalfStar) {
            stars.push(<i key={fullStars}><FaStarHalfAlt /></i>);
        }

        const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<i key={fullStars + i + (hasHalfStar ? 1 : 0)}><FaRegStar /></i>);
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
            <table>
                <tbody>
                <tr>
                    <th>Rating</th>
                    <th>Total Time</th>
                    <th>Recipe Owner</th>
                </tr>
                <tr>
                    <td>{renderStars()}</td>
                    <td>{displayPreparationTime()}</td>
                    <td>{recipe.recipeOwner}</td>
                </tr>
                </tbody>
            </table>
        </section>
    );
};

export default RecipeRatings;
