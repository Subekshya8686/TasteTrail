import { useQuery } from 'react-query';
import axios from "axios";
import {useState} from "react";
import '../pages1/css/ServingCalculator.css';


const ServingCalculator = () => {
  interface Ingredient {
    id: number;
    ingredientName: string;
    ingredientQuantity: number;
    ingredientFraction: number;
    ingredientUnit: string;
  }

  const {data} = useQuery({
    queryKey: "GET_DATA",
    queryFn() {
      return axios.get("http://localhost:8080/ingredients/getAll")
    }
  })

  const [servings, setServings] = useState(1); // Initialize servings state with 1

  const updateServings = (action: string) => {
    if (action === '+' && servings < 20) {
      setServings(servings + 1);
    } else if (action === '-' && servings > 1) {
      setServings(servings - 1);
    }
  };

  // Function to format quantity based on its type
  const formatQuantity = (quantity: number) => {
    return Number.isInteger(quantity)
        ? quantity * servings
        : (quantity * servings).toFixed(2); // Adjust decimal places as needed
  };

  return (
      <div className="serving-calculator">
        <h1>Ingredient Table</h1>
        <div className="class-serving">
          <button onClick={() => updateServings('-')}>  -  </button>
          <span>Servings: {servings}</span>
          <button onClick={() => updateServings('+')}>  +  </button>
        </div>
        <table className="ingredient-list">
          <thead>
          <tr>
            <th>Quantity</th>
            <th>Name</th>
            <th>Fraction</th>
            <th>Unit</th>
          </tr>
          </thead>
          <tbody>
          {data?.data?.map((ingredient: Ingredient) => (
              <tr key={ingredient.id}>
                <td>{formatQuantity(ingredient.ingredientQuantity)}</td>
                <td>{ingredient.ingredientName}</td>
                <td>{formatQuantity(ingredient.ingredientFraction)}</td>
                <td>{ingredient.ingredientUnit}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default ServingCalculator;
