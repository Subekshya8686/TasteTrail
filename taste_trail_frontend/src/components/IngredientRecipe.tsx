import React from 'react';
import '../pages1/css/Recipes.css'

interface RecipeIngredientProps {
    recipe: {
        recipeQuantityNumber: number;
        recipeQuantityType: string;
        incredientList: string;
        stepDescription: string;
    };
}

const IngredientRecipe: React.FC<RecipeIngredientProps> = ({ recipe }) => {

    const ingredients = recipe.incredientList.split(',');

    return (
        <div className="instruction-container flex">
            <div className="ingredient-serving">
                <table>
                    <thead>
                    <tr>
                        <th colSpan={4}>Serving Calculator</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan={4}>
                            <button className="quantity-button" onClick={() => ('-')}>-</button>
                            {recipe.recipeQuantityNumber} {recipe.recipeQuantityType}
                            <button className="quantity-button" onClick={() => ('+')}>+</button>
                        </td>
                    </tr>
                    </tbody>
                    <thead>
                    <tr>
                        <th colSpan={4}>Ingredient List</th>
                    </tr>
                    <tr>
                        <th>Quantity*</th>
                        <th>Fraction*</th>
                        <th>Unit*</th>
                        <th>Ingredient Name*</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* Display Ingredient rows */}
                    {ingredients.map((ingredient, index) => (
                        <tr key={index}>
                            {/* As ingredient data is in the format "Quantity Fraction Unit IngredientName" */}
                            {ingredient.split(' ').map((data, dataIndex) => (
                                <td key={dataIndex}>{data}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="recipe-instruction">
                <h5>Recipe Instructions</h5>
                <p>{recipe.stepDescription}</p>
            </div>
        </div>
    );
};

export default IngredientRecipe;