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
        <>
        <div className="recipeimg">
            <img src={recipe.recipePhoto} alt="" />
        </div>
        <div className="recipe_description">
            <h3>Recipe Title:<h1>{recipe.recipeTitle}</h1></h3>
            <h2>Description:</h2>
            <p>{recipe.recipeDescription}</p>
        </div>
            </>
    );
};

export default RecipeViewImg;