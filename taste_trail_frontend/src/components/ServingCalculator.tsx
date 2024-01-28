import { useQuery } from 'react-query';
import axios from "axios";
import { useState } from "react";
import '../pages1/css/ServingCalculator.css';
import Fraction from "fraction.js";

const ServingCalculator = () => {
  interface Ingredient {
    id: number;
    ingredientName: string;
    ingredientQuantity: string;
    ingredientFraction: string;
    ingredientUnit: string;
  }

  const { data } = useQuery({
    queryKey: "GET_DATA",
    queryFn() {
      return axios.get("http://localhost:8080/ingredients/getAll")
    }
  });

  const [servings, setServings] = useState(1);

  const updateServings = (action: string) => {
    if (action === '+' && servings < 20) {
      setServings(servings + 1);
    } else if (action === '-' && servings > 1) {
      setServings(servings - 1);
    }
  };

  const formatQuantity = (quantity: string, fraction: string) => {
    const numericQuantity = parseInt(quantity, 10) || 0;
    const parsedFraction = new Fraction(fraction);

    // Calculate the total quantity based on servings
    let totalQuantity = numericQuantity + parsedFraction.valueOf() * servings;

    // If fraction is zero, only consider the numeric quantity
    if (parsedFraction.valueOf() === 0) {
      totalQuantity = numericQuantity * servings;
    }

    // Display the total quantity as a mixed fraction
    return new Fraction(totalQuantity).toFraction(true);
  };


  return (
      <div className="serving-calculator">
        <h1>Ingredient Table</h1>
        <div className="class-serving">
          <button onClick={() => updateServings('-')}> - </button>
          <span>Servings: {servings}</span>
          <button onClick={() => updateServings('+')}> + </button>
        </div>
        <table className="ingredient-list">
          <thead>
          <tr>
            <th>Quantity</th>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
          {data?.data?.map((ingredient: Ingredient) => (
              <tr key={ingredient.id}>
                <td>
                {formatQuantity(ingredient.ingredientQuantity, ingredient.ingredientFraction)}
                  &nbsp;
                {ingredient.ingredientUnit}
                </td>
                <td>{ingredient.ingredientName}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default ServingCalculator;

