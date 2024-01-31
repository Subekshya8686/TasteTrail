import React from 'react';
import '../css/Category.css'
import RecipeCard from '../../components/Recipecard.tsx';
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

const Category_snacks: React.FC = () => {

    const {data:snacksCat}=useQuery({
        queryKey:["SNACKS_CAT"],
        queryFn:()=>{
            return axios.get("http://localhost:8080/content/byCategory/snacks", {
                headers:{authorization:"Bearer "+ localStorage.getItem("accessToken")}
            })
        }
    })

    // Mapping data from the table structure to Recipe structure
    const recipes: Recipe[] = snacksCat?.data?.map((item: any) => ({
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
        return (hours > 0 || (hours === 0 && minutes > 15)) && recipe.categoryType === 'snacks';
    });

    const section2Recipes = recipes.filter((recipe) => {
        const hours = parseInt(recipe.preparationTimeHours);
        const minutes = parseInt(recipe.preparationTimeMinutes);

        // Section 2
        return (hours === 0 && minutes <= 15) && recipe.categoryType === 'snacks';
    });


    return (
        <>
            <Header/>

            <main>
                <section className="headerimg">
                    <div className="category-container">
                        <div className="headerinfo flex">
                            <h2 className="headertitle">Snacks and Appetizers</h2>
                            <p className="headerpera">Elevate your snacking experience with our tasty and easy-to-make snacks.
                                Find the perfect snack recipes for any occasion.</p>
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
                            Elevate Your Snack game, Ensuring Every Moment is a Tasty Adventure:</p>
                    </div>
                </div>

                {/* Section 1: All recipes for 'snacks' category */}
                <div className={'main-cards'}>
                    <section className="threecards category-container flex">
                        {section1Recipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                </div>

                {/* Section 2: Recipes with duration <= 15 minutes for 'snacks' category */}
                <div className="quickrecipe-title flex">
                    <h2>Quick Fixes, Endless Flavor:</h2>
                    <p>Elevate Your Everyday Meals with Our Handpicked Quick Recipe Collection.</p>
                </div>
                <div className={'main-cards'}>
                    <section className="explorerecipe category-container flex">
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