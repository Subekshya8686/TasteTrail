import './css/Category.css';
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
import RecipeCard from '../components/Recipecard.tsx';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

interface Recipe {
    id: number;
    recipeTitle: string;
    categoryType: string;
    recipePhoto: string;
    recipeDescription: string;
    preparationTimeMinutes: string;

}

const Category_snacks: React.FC = () => {

    // State to hold recipes
    const [recipesData, setRecipesData] = useState<Recipe[]>([]);

    // Use useEffect to fetch data when component mounts
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const categoryType = "snacks"; // Change categoryType based on the page
                const response = await axios.get<Recipe[]>(`/api/recipes?categoryType=${categoryType}`);
                setRecipesData(response.data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []); // Empty dependency array
                // this effect runs once when the component mounts


    // Placeholder for data
    const section1Recipes = recipesData.filter(recipe => parseInt(recipe.preparationTimeMinutes) > 15);
    const section2Recipes = recipesData.filter(recipe => parseInt(recipe.preparationTimeMinutes) <= 15);

    return (
        <>
            <Header/>
            <main>
                <section className="headerimg">
                    <div className="container">
                        <div className="headerinfo flex">
                            <h2 className="headertitle">Snacks and Appetizers</h2>
                            <p className="headerpera">Elevate your snacking experience with our tasty and easy-to-make snacks.
                                Find the perfect snack recipes for any occasion.</p>
                            <a href="/" className="headerbtn"></a>
                        </div>
                    </div>
                </section>
                {/*featured recipes*/}
                <div className="featuredrecipe container flex">
                    <div className="featuredtitles flex">
                        <div className="titleicon">

                            <img src="snacks_ico.png" alt="snack_ico"/>
                        </div>
                        <h2>Featured Recipes</h2>
                        <p> Discover a World of Flavorful bites Crafted to Satisfy Your Cravings and
                            Elevate Your Snack game, Ensuring Every Moment is a Tasty Adventure:</p>
                    </div>
                </div>

                {/* Section 1: All recipes */}
                <div className={'main-cards'}>
                    <section className="threecards container flex">
                        {section1Recipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                </div>

                {/* Section 2: Recipes with duration <= 15 minutes */}
                <div className="quickrecipe-title flex">
                    <h2>Quick Fixes, Endless Flavor</h2>
                    <p>Elevate Your Everyday Meals with Our Handpicked Quick Recipe Collection:</p>
                </div>
                <div className={'main-cards'}>
                <section className="explorerecipe container flex">
                        {section2Recipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                </section>
                </div>
            </main>


            <Footer/>

        </>
    );
}

export default Category_snacks;