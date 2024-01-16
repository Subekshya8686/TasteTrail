// ServingCalculator.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ServingCalculatorProps {
  recipeId: string;
}

const ServingCalculator: React.FC<ServingCalculatorProps> = ({ recipeId }) => {
  const [servings, setServings] = useState<number>(1); // Start with 1 serving
  const [initialIngredients, setInitialIngredients] = useState<string[]>([]);

  useEffect(() => {
    // Fetch initial serving size and ingredients from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get(`YOUR_BACKEND_API_URL/recipe/${recipeId}`);
        const { servings: fetchedServings, ingredients } = response.data;

        setServings(fetchedServings);
        setInitialIngredients(ingredients);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchData();
  }, [recipeId]);

  const adjustIngredients = () => {
    const adjusted = initialIngredients.map((ingredient) => {
      const quantity = parseFloat(ingredient.split(' ')[0]);
      return `${(quantity * servings).toFixed(2)} ${ingredient.split(' ').slice(1).join(' ')}`;
    });

    return adjusted;
  };

  const handleServingsChange = (newServings: number) => {
    setServings(newServings);
  };

  const increaseServings = () => {
    handleServingsChange(servings + 1);
  };

  const decreaseServings = () => {
    if (servings > 1) {
      handleServingsChange(servings - 1);
    }
  };

  return (
      <div>
        <div>
          <h3>Servings:</h3>
          <button onClick={decreaseServings}>-</button>
          <span>{servings}</span>
          <button onClick={increaseServings}>+</button>
        </div>

        <div>
          <h3>Adjusted Ingredient Quantities:</h3>
          <ul>
            {adjustIngredients().map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default ServingCalculator;
