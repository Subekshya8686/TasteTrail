import React from 'react';
import RecipeCard from '../../components/Recipecard.tsx';
import '../css/Category.css'
import Header from "../../components/header.tsx";
import Footer from "../../components/footer.tsx";
import { useQuery } from 'react-query';
import axios from 'axios';

interface Recipe {
    id: number;
    recipeTitle: string;
    categoryType: string;
    recipePhoto: string;
    recipeDescription: string;
    preparationTimeMinutes: string;
    preparationTimeHours: string;
    isLiked?: boolean;
}

const Category_dessert: React.FC = () => {

    const {data:dessertCat}=useQuery({
        queryKey:["DESSERT_CAT"],
        queryFn:()=>{
            return axios.get("http://localhost:8080/content/byCategory/desserts")
        }
    })

    // Mapping data from the table structure to Recipe structure
    const recipes: Recipe[] = dessertCat?.data?.map((item: any) => ({
        id: item.id,
        recipeTitle: item.recipeTitle,
        categoryType: item.categoryType,
        recipePhoto: item.recipePhoto,
        recipeDescription: item.recipeDescription,
        preparationTimeMinutes: item.preparationTimeMinutes,
        preparationTimeHours: item.preparationTimeHours,

    })) || [];

    // Filter recipes for Section 1 and Section 2
    const section1Recipes = recipes.filter((recipe) => {
        const hours = parseInt(recipe.preparationTimeHours);
        const minutes = parseInt(recipe.preparationTimeMinutes);

        // Section 1
        return (hours > 0 || (hours === 0 && minutes > 15)) && recipe.categoryType === 'desserts';
    });

    const section2Recipes = recipes.filter((recipe) => {
        const hours = parseInt(recipe.preparationTimeHours);
        const minutes = parseInt(recipe.preparationTimeMinutes);

        // Section 2
        return (hours === 0 && minutes <= 15) && recipe.categoryType === 'desserts';
    });


    return (
        <>
            <Header/>

            <main>
                <section className="headerimg">
                    <div className="category-container">
                        <div className="headerinfo flex">
                            <h2 className="headertitle">Desserts</h2>
                            <p className="headerpera">Elevate your sweet experience with our tasty and easy-to-make snacks.
                                Find the perfect dessert recipes for any occasion.</p>
                            <a href="/" className="headerbtn"></a>
                        </div>
                    </div>
                </section>

                {/*featured recipes*/}
                <div className="featuredrecipe category-container flex">
                    <div className="featuredtitles flex">
                        <div className="titleicon">
                            <img src="snacks_ico.png" alt="snack_ico"/>
                        </div>
                        <h2>Featured Recipes</h2>
                        <p> Discover a World of Flavorful bites Crafted to Satisfy Your Cravings and
                            Elevate Your Dessert game, Ensuring Every Moment is a Tasty Adventure:</p>
                    </div>
                </div>

                {/* Section 1: All recipes for category */}
                <div className={'main-cards'}>
                    <section className="threecards category-container flex">
                        {section1Recipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} onUnlike={() => {}} />
                        ))}
                    </section>
                </div>

                {/* Section 2: Recipes with duration <= 15 minutes for category */}
                <div className="quickrecipe-title flex">
                    <h2>Quick Fixes, Endless Flavor:</h2>
                    <p>Elevate Your Everyday Meals with Our Handpicked Quick Recipe Collection.</p>
                </div>
                <div className={'main-cards'}>
                    <section className="explorerecipe category-container flex">
                        {section2Recipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} onUnlike={() => {}} />
                        ))}
                    </section>
                </div>
            </main>


            <Footer/>

        </>
    );
}

export default Category_dessert;