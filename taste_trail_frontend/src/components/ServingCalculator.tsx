import {useQuery} from 'react-query';
import axios from "axios";
import {useState} from "react";
import '../pages1/css/ServingCalculator.css';
import Fraction from "fraction.js";


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
  // const formatQuantity = (quantity: number) => {
  //   return Number.isInteger(quantity)
  //       ? quantity * servings
  //       : (quantity * servings).toFixed(2); // Adjust decimal places as needed
  // };
  //
  // Function to format quantity based on its type
  const formatQuantity = (quantity: number, isFraction: boolean = false) => {
     // Adjust decimal places as needed
    return isFraction
        ? new Fraction(quantity * servings).toFraction(true)  // Use fraction.js to convert to fraction
        : Number.isInteger(quantity)
            ? quantity * servings
            : (quantity * servings).toFixed(2);
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
            <th>Name</th>
            <th>Quantity</th>
            <th>Fraction</th>
            <th>Unit</th>
          </tr>
          </thead>
          <tbody>
          {data?.data?.map((ingredient: Ingredient) => (
              <tr key={ingredient.id}>
                <td>{ingredient.ingredientName}</td>
                <td>{formatQuantity(ingredient.ingredientQuantity)}</td>
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


