import './css/Recipes.css';
// import {FaCircleUser} from "react-icons/fa6";
import {FaHeart, FaMinus, FaPlus, FaPrint} from "react-icons/fa";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
import {useEffect, useState} from "react";
import RecipeImg from "../components/RecipeImg.tsx";
import RecipeRate_time from "../components/RecipeRate_time.tsx";
import Rate_comment from "../components/Rate_comment.tsx";



function Recipes() {
    const [servings, setServings] = useState<number>(10);

    useEffect(() => {
        const printButton = document.querySelector('.print');
        printButton?.addEventListener('click', generateRecipePage);

        function generateRecipePage() {
            // Extract recipe details from HTML
            const recipeNameElement = document.querySelector('.recipe_description h1');
            const descriptionElement = document.querySelector('.recipe_description p');
            const ingredientsListElements = document.querySelectorAll('.ingredients table tr td');
            const recipeInstructionsElement = document.querySelector('.recipe h3 + pre');

            if (!recipeNameElement || !descriptionElement || !recipeInstructionsElement) {
                return;
            }

            const recipeName = recipeNameElement.textContent || '';
            const description = descriptionElement.textContent || '';
            const ingredientsList = Array.from(ingredientsListElements).map(ingredient => ingredient.textContent || '');
            const recipeInstructions = recipeInstructionsElement.textContent || '';

            // Generate HTML content
            const recipePageContent = `
          <h1>${recipeName}</h1>
          <p style="font-size: 20px;">${description}</p>
          <h2>Ingredients:</h2>
          <ul style="font-size: 20px;">
              ${ingredientsList.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
          <h2>Instructions:</h2>
          <pre style="font-size: 20px; font-family: 'Playfair', 'sans-serif'; white-space: pre-wrap;">${recipeInstructions}</pre>
          <button onclick="window.print()" style="background-color: grey;
          color: white;
          width: 200px;
          padding: 10px 20px;
          text-align: center;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          margin-left: 80vh;
          cursor: pointer;">Print</button>`;

            // Open a new tab with the generated HTML content
            const recipePage = window.open();
            recipePage?.document.write(recipePageContent);
            recipePage?.document.close();
        }

        // Cleanup the event listener when the component is unmounted
        return () => {
            printButton?.removeEventListener('click', generateRecipePage);
        };
    }, []);

    const updateServings = (action: string) => {
        if (action === '+' && servings < 20) {
            setServings(servings + 1);
        } else if (action === '-' && servings > 1) {
            setServings(servings - 1);
        }
    };


    // mock data
    const mockRecipeData = {
        recipePhoto: 'momo.jpg',
        recipeTitle: 'Chicken Momo',
        recipeDescription:
            'A beloved dish of flatbread stuffed with spiced mashed potatoes, rolled out, and cooked until golden brown.',
        ratings: 4.5, // Any decimal value between 0 and 5
        totalTime: '20 minutes',
        recipeOwner: 'TasteTrail',
    };

    const handleRate = (rating: number) => {
        console.log('Rating:', rating);
        // console.log(`User rated the recipe: ${rating}`);
        // Handle the rating data here or pass it to your API
    };

    const handleComment = (comment: string) => {
        console.log('Comment:', comment);
        // console.log(`User left a comment: ${comment}`);
        // Handle the comment data here or pass it to your API
    };

    return(
        <>
            <Header/>

            <main>
            <section className="img_description">
                <RecipeImg recipe={mockRecipeData}/>
                <div className="recipeimg flex">
                    <div className="img"><img src="alooparatha.jpg" alt=""/></div>

                    <div className="recipe_description">
                        <h1>Aloo Paratha</h1>
                        <h2>Description:</h2>
                        <p>
                            Aloo Paratha is a classNameic traditional flatbread filled with seasoned mashed potatoes. Crispy on the outside, soft on the inside, it's a delicious and comforting dish often served with yogurt or chutney.
                        </p>
                    </div>
                </div>
            </section>

            <section className="rating-time flex">
                <RecipeRate_time recipe={mockRecipeData}/>
            </section>
                
            <section className="print-fav">
                <div className="print-fav-btn flex">
                <button className="print"><i><FaPrint size={'2rem'}/></i>Print</button>
                <button className="fav"><i><FaHeart size={'2rem'}/></i>Save</button>
                </div>
            </section>

            <section className="ingredients-recipe flex">
                <div className="ingredients">
                    <table>
                        <thead>
                        <tr>
                            <th>Ingredients:</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                PORTIONS:{' '}
                                <button onClick={() => updateServings('-')}><FaMinus size={'1.1rem'}/></button>
                                <span>{servings}</span>
                                <button onClick={() => updateServings('+')}><FaPlus size={'1.1rem'}/></button>
                            </td>
                        </tr>
                        <tr><td>{`${servings * 2} cups whole wheat flour`}</td></tr>
                        <tr><td>Water (as needed for kneading)</td></tr>
                        <tr><td>Salt per preference</td></tr>
                        <tr><td>{`${servings * 3} medium-sized potatoes (boiled and mashed)`}</td></tr>
                        <tr><td>{`${servings * 1} small onion (finely chopped)`}</td></tr>
                        <tr><td>{`${servings * 2} green chilies (finely chopped)`}</td></tr>
                        <tr><td>{`${servings * 1/2} teaspoon ginger (grated)`}</td></tr>
                        <tr><td>{`${servings * 1/2} teaspoon cumin seeds`}</td></tr>
                        <tr><td>{`${servings * 1/2} teaspoon garam masala`}</td></tr>
                        <tr><td>{`${servings * 1/2} teaspoon red chili powder`}</td></tr>
                        <tr><td>{`${servings * 1/2} teaspoon turmeric powder`}</td></tr>
                        <tr><td>Fresh coriander leaves (chopped)</td></tr>
                        <tr><td>Ghee or oil (for cooking the parathas)</td></tr>
                        <tr><td>Additional flour (for dusting while rolling)</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="recipe">
                    <h3>Instructions:</h3>
                    <pre>
For the Dough <br/>
1. In a large mixing bowl, combine the whole wheat flour, salt, and oil.<br/>
2. Gradually add water and knead the mixture to form a smooth, soft dough. Cover the dough with a damp cloth and let it rest for about 15-20 minutes.<br/>

For the Potato Filling:<br/>
1. In a mixing bowl, combine the mashed potatoes, chopped onion, green chilies,grated ginger, red chili powder, garam masala, cumin powder, salt, and chopped coriander leaves. Mix well.

Assembling and Cooking:
1. Divide the dough into equal-sized balls, slightly larger than golf balls.
2. Take a dough ball, roll it in your hands to form a smooth ball, and flatten it slightly.
3. Roll out the ball into a small circle (about 4-5 inches in diameter) on a floured surface.
4. Place a portion of the potato filling in the center of the rolled-out dough.
5. Bring the edges of the dough together, covering the filling completely, and pinch to seal.
6. Flatten the filled ball gently and roll it out again into a larger circle (7-8 inches in diameter).
7. Heat a griddle or a flat pan over medium heat.
8. Place the rolled-out paratha on the hot griddle. Cook for a minute until you see small bubbles on the surface.
9. Flip the paratha and apply ghee or oil on the cooked side.
10. Flip again and apply ghee or oil on the other side. Press the edges with a spatula to ensure even cooking.
11. Cook until both sides are golden brown and crispy.
12. Repeat the process for the remaining dough and filling.

Serve the Aloo Parathas hot with yogurt, pickles, or any chutney of your choice. Enjoy your delicious homemade Aloo Parathas!
                </pre>
                </div>
            </section>

            <section className="rate-comment">
                <Rate_comment onRate={handleRate} onComment={handleComment}/>
            </section>

        </main>
            <Footer/>

        </>
    );
}
export default Recipes;