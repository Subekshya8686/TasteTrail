import React, {useState} from 'react';
import '../pages1/css/Recipes.css'
import Fraction from "fraction.js";

interface RecipeIngredientProps {
    recipe: {
        recipeQuantityNumber: number;
        recipeQuantityType: string;
        incredientList: string;
        stepDescription: string;
    };
}

const IngredientRecipe: React.FC<RecipeIngredientProps> = ({recipe}) => {
    const [servings, setServings] = useState<number>(recipe.recipeQuantityNumber);

    const updateServings = (action: string) => {
        if (action === '+' && servings < 30) {
            setServings(servings + 1);
        } else if (action === '-' && servings > 1) {
            setServings(servings - 1);
        }
    };


    const ingredients = recipe.incredientList.split(',');


    const formatQuantity = (quantity: string, fraction: string) => {
        const numericQuantity = parseInt(quantity, 10) || 0;
        const parsedFraction = new Fraction(fraction);

        let totalQuantity = numericQuantity * servings + parsedFraction.valueOf() * servings;


        if (parsedFraction.valueOf() === 0) {
            totalQuantity = numericQuantity * servings;
        }

        const mixedFraction = new Fraction(totalQuantity).toFraction(true);


        return {
            mixedFraction: mixedFraction !== '0' ? mixedFraction : '',
        };
    };


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
                            <button className="quantity-button" onClick={() => updateServings('-')}>-</button>
                            {servings} {recipe.recipeQuantityType}
                            <button className="quantity-button" onClick={() => updateServings('+')}>+</button>
                        </td>
                    </tr>
                    </tbody>
                    <thead>
                    <tr>
                        <th colSpan={3}>Ingredient List</th>
                    </tr>
                    <tr>
                        <th>Quantity*</th>
                        <th>Unit*</th>
                        <th>Ingredient Name*</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* Display Ingredient data in columns */}
                    <tr>
                        <td className="ingredient-column-quantity">
                            {ingredients.map((ingredient, index) => {
                                const [quantity, fraction] = ingredient.split(' ');
                                const {mixedFraction} = formatQuantity(quantity, fraction);
                                return (
                                    <div key={index} className="ingredient-cell">
                                        {mixedFraction !== '' ? mixedFraction.replace(' ', ' \u00a0') : ''}
                                    </div>
                                );
                            })}
                        </td>
                        <td className="ingredient-column-unit">
                            {ingredients.map((ingredient, index) => {
                                const [, , unit] = ingredient.split(' ');
                                return <div key={index} className="ingredient-cell">{unit}</div>;
                            })}
                        </td>
                        <td className="ingredient-column-name">
                            {ingredients.map((ingredient, index) => {
                                const [, , , name] = ingredient.split(' ');
                                return <div key={index} className="ingredient-cell">{name}</div>;
                            })}
                        </td>
                    </tr>
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