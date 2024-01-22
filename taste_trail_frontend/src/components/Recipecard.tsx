import { FC } from 'react';
import './css/Recipecard.css'
import { FaHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";


interface RecipeCardProps {
    recipe: {
        recipePhoto: string;
        recipeTitle: string;
        categoryType: string;
        recipeDescription: string;
        preparationTimeMinutes: string;

        // Add other properties based on your actual data structure
    };
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
    return (

        <div className="tcard">
            <div className="tcardimg">
                <img src={recipe.recipePhoto} alt={recipe.recipeTitle} />
                <span><i><FaHeart size={'2rem'}/></i></span>
            </div>
            <div className="tcardinfo flex">
                <label className="tlabel">{recipe.recipeTitle}</label>
                {/*<h3>{recipe.name}</h3>*/}
                <p>{recipe.recipeDescription}</p>
                {/* Other recipe details */}
                <ul className="flex">
                    <li>
                        <i><MdOutlineTimer size={'1.2rem'} />{recipe.preparationTimeMinutes}</i>
                    </li>
                </ul>
                <a href="/" className="tcardbtn">
                    Read More
                </a>
            </div>
        </div>
    );
};

export default RecipeCard;
