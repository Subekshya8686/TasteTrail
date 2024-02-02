// UserProfile.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Profiler from "./Profiler";
import Header from "../components/header"; // Make sure the path matches your project structure
import Footer from "../components/footer";
import RecipeCard from "../components/Recipecard.tsx"; // Make sure the path matches your project structure
import "./css/userProfile.css";

// Define the structure of a single recipe
interface RecipeContent {
    id: number;
    recipeTitle: string;
    recipeDescription: string;
    preparationTimeHours: number;
    preparationTimeMinutes: number;
    recipeQuantityNumber: number;
    recipeQuantityType: string;
    categoryType: string;
    stepDescription: string;
    recipePhoto: string;
    ingredientList: string;
}


interface FavoriteRecipe {
    id: number;
    content: RecipeContent;
    isLike: boolean;
}

const UserProfile: React.FC = () => {
    const [favorites, setFavorites] = useState<FavoriteRecipe[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFavorites = async () => {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                setError('User not identified.');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`http://localhost:8080/favourite/userId/${userId}`);
                const likedFavorites = response.data.filter((favorite: FavoriteRecipe) => favorite.isLike); // Filter to keep only liked recipes
                setFavorites(likedFavorites);
            } catch (error) {
                console.error('There was an error fetching the favorites', error);
                setError('Failed to fetch favorites.');
            } finally {
                setLoading(false);
            }
        };

        fetchFavorites();
    }, []);

    const handleRemoveFavorite = (id: number) => {
        setFavorites(favorites.filter(favorite => favorite.content.id !== id));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <Header />
            <Profiler />

            <div className="favorite-recipes">
                <h2>Favorite Recipes</h2>
                <div className={'main-cards'}>
                    <section className="threecards category-container flex">
                    {favorites.map((favorite) => (
                        <RecipeCard
                            key={favorite.content.id}
                            onUnlike={() => handleRemoveFavorite(favorite.content.id)}
                            recipe={{
                                ...favorite.content,
                                preparationTimeMinutes: favorite.content.preparationTimeMinutes.toString(),
                                preparationTimeHours: favorite.content.preparationTimeHours.toString(),
                                // Ensure isLiked is correctly handled based on your logic
                                isLiked: favorite.isLike,
                            }}
                        />
                    ))}
                    </section>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default UserProfile;
