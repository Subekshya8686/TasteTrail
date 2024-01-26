import { FC, useState } from 'react';
import './css/Recipecard.css';
import { FaHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

interface RecipeCardProps {
    recipe: {
        id: number;
        recipePhoto: string;
        recipeTitle: string;
        categoryType: string;
        recipeDescription: string;
        preparationTimeMinutes: string;
        preparationTimeHours: string;
        isLiked?: boolean;
    };
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
    const navigate = useNavigate();
    const [isLiked, setIsLiked] = useState<boolean>(recipe.isLiked || false);

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

    const handleNavigate = (id: number) => {
        navigate(`/recipeview/${id}`);
    };

    const handleFavoriteToggle = async () => {
        // Toggle the liked state locally
        setIsLiked(!isLiked);

        try {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                console.error('User ID not found in local storage');
                return;
            }

            const response = await axios.post('http://localhost:8080/favourite', {
                userId: userId,
                contentId: recipe.id,
                isLike: !isLiked,
            });

            console.log('Favorite status updated successfully:', response.data);
        } catch (error) {
            console.error('Error saving favorite status:', error);
        }
    };

    return (
        <div className="tcard">
            <div className="tcardimg">
                <img src={recipe.recipePhoto} alt={recipe.recipeTitle} />

                <span onClick={handleFavoriteToggle}>
                    <i>
                        <FaHeart size={'2rem'} color={isLiked ? 'red' : 'gray'} />
                    </i>
                </span>
            </div>
            <div className="tcardinfo flex">
                <label className="tlabel">{recipe.recipeTitle}</label>
                {/*<h3>{recipe.name}</h3>*/}
                <p>{recipe.recipeDescription}</p>
                {/* Other recipe details */}
                <ul className="flex">
                    <li>
                        <i><MdOutlineTimer size={'1.2rem'} />{displayPreparationTime()}</i>
                    </li>
                </ul>
                {/*can keep recipetitle or id*/}
                <a className="tcardbtn" onClick={() => handleNavigate(recipe.id)}>
                    Read More
                </a>
            </div>
        </div>
    );
};

export default RecipeCard;