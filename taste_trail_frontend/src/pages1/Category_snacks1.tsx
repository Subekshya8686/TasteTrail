import React from 'react';
import RecipeCard from '../components/Recipecard.tsx';
// import { FaCircleUser } from "react-icons/fa6";
import "./Category1.css";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

interface Recipe {
    id: number;
    recipeTitle: string,
    categoryType: string,
    recipePhoto: string,
    recipeDescription: string,
    preparationTimeMinutes: string,
// Add other properties based on your actual recipe structure
}

const Category_snacks1: React.FC = () => {
    const recipes: Recipe[] = [
        {
            id: 1,
            recipeTitle: 'Chicken Momo',
            categoryType: 'snacks',
            recipePhoto: '../assets/img/momo.jpg',
            recipeDescription: 'A beloved dish of flatbread stuffed with spiced mashed potatoes,\n' +
                'rolled out, and cooked until golden brown.',
            preparationTimeMinutes: '10 Mins',
        },
        {
            id: 2,
            recipeTitle: 'Chicken Momo',
            categoryType: 'snacks',
            recipePhoto: '../assets/img/momo.jpg',
            recipeDescription: 'A beloved dish of flatbread stuffed with spiced mashed potatoes,\n' +
                'rolled out, and cooked until golden brown.',
            preparationTimeMinutes: '45 Mins',
        },
        {
            id: 3,
            recipeTitle: 'Chicken Momo',
            categoryType: 'snacks',
            recipePhoto: '../assets/img/momo.jpg',
            recipeDescription: 'A beloved dish of flatbread stuffed with spiced mashed potatoes,\n' +
                'rolled out, and cooked until golden brown.',
            preparationTimeMinutes: '15 Mins',
        },
        {
            id: 4,
            recipeTitle: 'Chicken Momo',
            categoryType: 'snacks',
            recipePhoto: '../assets/img/momo.jpg',
            recipeDescription: 'A beloved dish of flatbread stuffed with spiced mashed potatoes,\n' +
                'rolled out, and cooked until golden brown.',
            preparationTimeMinutes: '25 Mins',
        },
        {
            id: 5,
            recipeTitle: 'Chicken Momo',
            categoryType: 'breakfast',
            recipePhoto: '../assets/img/momo.jpg',
            recipeDescription: 'A beloved dish of flatbread stuffed with spiced mashed potatoes,\n' +
                'rolled out, and cooked until golden brown.',
            preparationTimeMinutes: '15 Mins',
        },
        {
            id: 6,
            recipeTitle: 'Chicken Momo',
            categoryType: 'snacks',
            recipePhoto: '../assets/img/momo.jpg',
            recipeDescription: 'A beloved dish of flatbread stuffed with spiced mashed potatoes,\n' +
                'rolled out, and cooked until golden brown.',
            preparationTimeMinutes: '45 Mins',
        },
        {
            id: 7,
            recipeTitle: 'Chicken Momo',
            categoryType: 'breakfast',
            recipePhoto: '../assets/img/momo.jpg',
            recipeDescription: 'A beloved dish of flatbread stuffed with spiced mashed potatoes,\n' +
                'rolled out, and cooked until golden brown.',
            preparationTimeMinutes: '40 Mins',
        },
    ];

// Filter recipes for Section 1 and Section 2
    // Filter recipes for Section 1 and Section 2
    const section1Recipes = recipes.filter(recipe => parseInt(recipe.preparationTimeMinutes) > 15 && recipe.categoryType === 'snacks');
    const section2Recipes = recipes.filter(recipe => parseInt(recipe.preparationTimeMinutes) <= 15 && recipe.categoryType === 'snacks');

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
                        <p> Discover a world of flavorful bites crafted to satisfy your cravings and
                            elevate your snack game, ensuring every moment is a tasty adventure:</p>
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
                    <h2>Quick Fixes, Endless Flavor:</h2>
                    <p>Elevate Your Everyday Meals with Our Handpicked Quick Recipe Collection.</p>
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

export default Category_snacks1;