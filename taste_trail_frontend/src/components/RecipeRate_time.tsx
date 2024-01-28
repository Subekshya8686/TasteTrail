import React from 'react';
import {FaStar, FaStarHalfAlt, FaRegStar, FaPrint} from 'react-icons/fa';
import '../pages1/css/Recipes.css'

interface RecipeRatingsProps {
    recipe: {
        ratings: number;
        preparationTimeMinutes: string;
        preparationTimeHours: string;
    };
}

const RecipeRatings: React.FC<RecipeRatingsProps> = ({ recipe }) => {
    const renderStars = () => {
        const fullStars = Math.floor(recipe.ratings);
        const hasHalfStar = recipe.ratings % 1 !== 0;

        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={i}><FaStar size="1.6rem" color="#3d3d3d"/></i>);
        }

        if (hasHalfStar) {
            stars.push(<i key={fullStars}><FaStarHalfAlt size="1.6rem" color="#3d3d3d"/></i>);
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

    const handlePrint = () => {
        // Logic for printing
    };

    return (
        <section className="rating-time flex">
            <table>
                <tbody>
                <tr>
                    <th>Rating</th>
                    <th>Total Time</th>
                    <th>Print Recipe</th>
                </tr>
                <tr>
                    <td className="rate">
                        {renderStars()}
                    </td>

                    <td className="time">
                        {displayPreparationTime()}
                    </td>

                    <td className="print-btn">
                            <i className="print" onClick={handlePrint}>
                                <FaPrint size={'2rem'} />
                            </i>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    );
};

export default RecipeRatings;
