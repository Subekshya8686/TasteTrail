// RecipeCard.tsx
import { FC, useState } from 'react';
import './css/Recipecard.css'; // Make sure the path matches your project structure
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
        isLiked?: boolean; // This prop indicates if the recipe is liked
    };
    onUnlike: () => void; // Function to call when unliking a recipe
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe, onUnlike }) => {
    const navigate = useNavigate();
    const [isLiked, setIsLiked] = useState<boolean>(recipe.isLiked || false);

    // Toggle favorite status and call onUnlike if unliking
    const handleFavoriteToggle = async () => {
        const newIsLiked = !isLiked;
        setIsLiked(newIsLiked);

        // If toggling off the like, call the parent's onUnlike
        if (!newIsLiked) {
            onUnlike();
        }

        // Perform the axios request to update the backend
        try {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                console.error('User ID not found in local storage');
                return;
            }

            await axios.post('http://localhost:8080/favourite', {
                userId: userId,
                contentId: recipe.id,
                isLike: newIsLiked,
            });

            // Optionally log or handle the successful update
        } catch (error) {
            console.error('Error saving favorite status:', error);
            // Optionally revert the like status in case of error
            setIsLiked(!newIsLiked);
        }
    };

    return (
        <div className="tcard">
            <div className="tcardimg">
                <img src={recipe.recipePhoto} alt={recipe.recipeTitle} />
                <span onClick={handleFavoriteToggle}>
                    <FaHeart size={'2rem'} color={isLiked ? 'red' : 'gray'} />
                </span>
            </div>
            <div className="tcardinfo flex">
                <label className="tlabel">{recipe.recipeTitle}</label>
                <p>{recipe.recipeDescription}</p>
                <ul className="flex">
                    <li>
                        <MdOutlineTimer size={'1.2rem'} />{recipe.preparationTimeHours} hr {recipe.preparationTimeMinutes} mins
                    </li>
                </ul>
                <button className="tcardbtn" onClick={() => navigate(`/recipeview/${recipe.id}`)}>
                    Read More
                </button>
            </div>
        </div>
    );
};

export default RecipeCard;
