import React from 'react';
import '../pages1/css/Recipes.css'

interface RecipeImgProps {
    recipe: {
        id:number;
        recipePhoto: string;
        recipeTitle: string;
        recipeDescription: string;
    };
}

const RecipeViewImg: React.FC<RecipeImgProps> = ({ recipe }) => {
    return (
        <div className="img-container">
        <div className="recipeimg">
            <img src={recipe.recipePhoto} alt="" />
        </div>
        <div className="recipe_description">
            <h3>{recipe.recipeTitle}</h3>
            <h5>Description:</h5>
            <p>{recipe.recipeDescription}</p>
        </div>
            </div>
    );
};

export default RecipeViewImg;