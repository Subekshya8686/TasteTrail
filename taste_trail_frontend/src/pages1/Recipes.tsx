import './css/Recipes.css';
<<<<<<< HEAD
// import {FaCircleUser} from "react-icons/fa6";
=======
import {FaCircleUser} from "react-icons/fa6";
>>>>>>> 12d277df5dc86843d0c5fe063c6c36ccffd87d8f
import {FaHeart} from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
<<<<<<< HEAD
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
import {useEffect} from "react";


function Recipes() {
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
<!--                <img$>-->
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
                cursor: pointer;">Print</button>
            `;

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

    return(
        <>
            <Header/>

=======


function Recipes() {
    return(
        <>
            <header>
                <div className="mainnav">
                    <div className="container flex">
                        <div className="logo flex">
                            <h1><a href="/">Taste<span>Trail</span></a></h1>
                        </div>
                        <ul className="navlist flex">
                            <li><a href="/">Categories</a></li>
                            <li><a href="/">Holiday&Festive</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>

                        <div className="searchbar flex">
                            <a href="/" className="logingtn"><i><FaCircleUser size={'3rem'}/></i></a>
                            <input type="checkbox" name="checkbox_toggle" id="checkbox" hidden/>
                            <label htmlFor="checkbox" className="toggle">
                                <div className="toggle__circle"></div>
                            </label>
                            <i className='bx bx-search-alt-2' id="searchopen"></i>
                            <div className="navonoff">
                                <input type="checkbox" id="checkbox2"/>
                                <label htmlFor="checkbox2" className="toggle2">
                                    <div className="bar bar--top"></div>
                                    <div className="bar bar--middle"></div>
                                    <div className="bar bar--bottom"></div>
                                </label>
                            </div>
                        </div>
                        {/*<div className="searchinput">*/}
                        {/*    <input type="text" placeholder="Search Here..."/>*/}
                        {/*    <IoClose />*/}
                        {/*</div>*/}
                    </div>
                </div>
            </header>
>>>>>>> 12d277df5dc86843d0c5fe063c6c36ccffd87d8f

            <main>
            <section className="img_description">
                <div className="recipeimg flex">
<<<<<<< HEAD
                    <div className="img"><img src="alooparatha.jpg" alt=""/></div>
=======
                    <div className="img"><img src="../assets/img/alooparatha.jpg" alt=""/></div>
>>>>>>> 12d277df5dc86843d0c5fe063c6c36ccffd87d8f
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
                <table>
                    <tr>
                        <th>Rating</th>
                        <th>Total Time</th>
                        <th>Recipe Owner</th>
                    </tr>
                    <tr>
                        <td>
                            <span><i><FaStar /></i></span>
                            <span><i><FaStar /></i></span>
                            <span><i><FaStar /></i></span>
                            <span><i><FaStarHalfAlt /></i></span>
                            <span><i><FaRegStar /></i></span>
                        </td>
                        <td>20 minutes</td>
                        <td>TasteTrail</td>
                    </tr>
                </table>
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
                        <th>Ingredients:</th>
                        <tr><td>SERVINGS CALCULATOR: 10 :</td></tr>
                        <tr><td>2 cups whole wheat flour</td></tr>
                        <tr><td>Water (as needed for kneading)</td></tr>
                        <tr><td>Salt per preference</td></tr>
                        <tr><td>3 medium-sized potatoes (boiled and mashed)</td></tr>
                        <tr><td>1 small onion (finely chopped)</td></tr>
                        <tr><td>2 green chilies (finely chopped)</td></tr>
                        <tr><td>1 teaspoon ginger (grated)</td></tr>
                        <tr><td>1/2 teaspoon cumin seeds</td></tr>
                        <tr><td>1/2 teaspoon garam masala</td></tr>
                        <tr><td>1/2 teaspoon red chili powder</td></tr>
                        <tr><td>1/2 teaspoon turmeric powder</td></tr>
                        <tr><td>Fresh coriander leaves (chopped)</td></tr>
                        <tr><td>Ghee or oil (for cooking the parathas)</td></tr>
                        <tr><td>Additional flour (for dusting while rolling)</td></tr>
                         {/*Add more rows as needed*/}
                    </table>
                </div>
                <div className="recipe">
                    <h3>Instructions:</h3>
                    <pre>
For the Dough
1. In a large mixing bowl, combine the whole wheat flour, salt, and oil.
2. Gradually add water and knead the mixture to form a smooth, soft dough. Cover the dough with a damp cloth and let it rest for about 15-20 minutes.

For the Potato Filling:
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
        </main>


<<<<<<< HEAD
            <Footer/>
=======
            <footer>
                <div className="container flex">
                    <div className="footer flex">
                        <div className="footerlogo">
                            <h2>Taste Trail</h2>
                            <p>We provide a platform for customers to share their
                                culinary creations and discover easy, delicious recipes,
                                fostering a vibrant community of food enthusiasts.</p>
                        </div>
                        <div className="footernav">
                            <h3>Recipes</h3>
                            <ul className="flex">
                                <li><a href="/">Breakfast</a></li>
                                <li><a href="/">Lunch</a></li>
                                <li><a href="/">Dinner</a></li>
                                <li><a href="/">Snacks</a></li>
                                <li><a href="/">Dessert</a></li>
                            </ul>
                        </div>
                        <div className="footernav">
                            <h3>Legal</h3>
                            <ul className="flex">
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms and Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
>>>>>>> 12d277df5dc86843d0c5fe063c6c36ccffd87d8f
        </>
    );
}
export default Recipes;