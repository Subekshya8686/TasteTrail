import React from 'react';
import '../pages1/css/Recipes.css'

interface RecipeImgProps {
    recipe: {
        recipePhoto: string;
        recipeTitle: string;
        recipeDescription: string;
    };
}

const RecipeViewImg: React.FC<RecipeImgProps> = ({ recipe }) => {
    return (
            <div className="recipeimg flex">
                <div className="img"><img src={recipe.recipePhoto} alt=""/></div>

                <div className="recipe_description">
                    <h1>{recipe.recipeTitle}</h1>
                    <h2>Description:</h2>
                    <p>{recipe.recipeDescription}</p>
                </div>
            </div>
    );
};

export default RecipeViewImg;