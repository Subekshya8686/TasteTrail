// UserProfile.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/userProfile.css';
import RecipeCard from "../components/Recipecard.tsx";
import Header from '../components/header.tsx';
import Footer from '../components/footer.tsx';
import Profiler from "./Profiler.tsx";
import recipes from "./Recipes.tsx";

const UserProfile: React.FC = () => {
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    useEffect(() => {
        fetchFavoriteRecipes();
    }, []);

    const fetchFavoriteRecipes = async () => {
        try {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                console.error('User ID not found in local storage');
                return;
            }

            const response = await axios.get(`http://localhost:8080/favourite/userId/${userId}`);
            console.log(response.data); // This will show you the structure of the fetched data
            setFavoriteRecipes(response.data);
        } catch (error) {
            console.error('Error fetching favorite recipes:', error);
        }
    };

    return (
        <>
            <Header />
            <Profiler />

            {/* Favorite Recipes Section */}
            <div className="favorite-recipes">
                <h2>Favorite Recipes</h2>
                <div className="recipes-container">
                    {favoriteRecipes.map(recipe => (
                        <RecipeCard key={recipe.contentId} recipe={recipe} />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default UserProfile;
