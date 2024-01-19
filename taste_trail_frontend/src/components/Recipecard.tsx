import { FC } from 'react';
import './css/Recipecard.css'
import { FaHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { Link } from 'react-router-dom';

interface RecipeCardProps {
    recipe: {
        id: number;
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
                {/*can keep recipetitle or id*/}
                <Link to={`/recipes/${recipe.recipeTitle}`} className="tcardbtn">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default RecipeCard;
