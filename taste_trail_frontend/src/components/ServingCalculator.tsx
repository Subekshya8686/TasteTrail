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
    let totalQuantity = (numericQuantity*servings) + (parsedFraction.valueOf() * servings);

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
// //
//
//
//
//
// // import { useQuery } from 'react-query';
// // import axios from 'axios';
// // import { useState } from 'react';
// // import '../pages1/css/ServingCalculator.css';
// // import Fraction from 'fraction.js';
// // import React from 'react';
// //
// // const ServingCalculator = () => {
// //   // Fetch recipe data
// //   const { data: recipeData } = useQuery({
// //     queryKey: 'GET_RECIPE_DATA',
// //     queryFn() {
// //       return axios.get('http://localhost:8080/content/getAll'); // Replace with your actual endpoint
// //     },
// //   });
// //
// //   const [servings, setServings] = useState(1);
// //
// //   const updateServings = (action: string) => {
// //     if (action === '+' && servings < 20) {
// //       setServings(servings + 1);
// //     } else if (action === '-' && servings > 1) {
// //       setServings(servings - 1);
// //     }
// //   };
// //
// //   const formatQuantity = (quantity: string) => {
// //     const numericQuantity = parseFloat(quantity) || 0;
// //     const totalQuantity = numericQuantity * servings;
// //
// //     return new Fraction(totalQuantity).toFraction(true);
// //   };
// //
// //   return (
// //       <div className="serving-calculator">
// //         <h1>Ingredient Table</h1>
// //         <div className="class-serving">
// //           <button onClick={() => updateServings('-')}> - </button>
// //           <span>Servings: {servings}</span>
// //           <button onClick={() => updateServings('+')}> + </button>
// //         </div>
// //         <table className="ingredient-list">
// //           <thead>
// //           <tr>
// //             <th>Quantity</th>
// //             <th>Name</th>
// //           </tr>
// //           </thead>
// //           <tbody>
// //           {recipeData?.data?.map((recipe: any) => (
// //               <tr key={recipe.id}>
// //                 {recipe.ingredientList
// //                     .split(',')
// //                     .map((ingredient: string, index: number) => (
// //                         <React.Fragment key={index}>
// //                           <td>{formatQuantity(ingredient)}</td>
// //                           <td>{ingredient.trim()}</td>
// //                         </React.Fragment>
// //                     ))}
// //               </tr>
// //           ))}
// //           </tbody>
// //         </table>
// //       </div>
// //   );
// // };
// //
// // export default ServingCalculator;




// import React, { useState, useEffect } from 'react';
//
// interface Ingredient {
//   quantity: number;
//   fraction: string;
//   unit: string;
//   name: string;
// }
//
// const IngredientCalculator: React.FC = () => {
//   const [servings, setServings] = useState<number>(1);
//   const [ingredients, setIngredients] = useState<Ingredient[]>([]);
//
//   useEffect(() => {
//     // Fetch ingredient data from your API
//     // For demonstration purposes, a sample API call is shown here
//     fetch('http://localhost:8080/ingredients/getAll')
//         .then(response => response.json())
//         .then(data => setIngredients(data))
//         .catch(error => console.error('Error fetching ingredient data:', error));
//   }, []); // Empty dependency array ensures the effect runs only once
//
//   const increaseServings = () => {
//     setServings(prevServings => prevServings + 1);
//   };
//
//   const decreaseServings = () => {
//     if (servings > 1) {
//       setServings(prevServings => prevServings - 1);
//     }
//   };
//
//   const calculateAdjustedQuantity = (quantity: number): number => {
//     // Calculate the adjusted quantity based on the number of servings
//     return quantity * servings;
//   };
//
//   return (
//       <div>
//         <div>
//           <button onClick={decreaseServings}>Decrease Servings</button>
//           <span>Servings: {servings}</span>
//           <button onClick={increaseServings}>Increase Servings</button>
//         </div>
//         <ul>
//           {ingredients.map((ingredient, index) => (
//               <li key={index}>
//                 {ingredient.quantity} {ingredient.fraction} {ingredient.unit} of {ingredient.name}:{' '}
//                 {calculateAdjustedQuantity(ingredient.quantity)} units
//               </li>
//           ))}
//         </ul>
//       </div>
//   );
// };
//
// export default IngredientCalculator;
