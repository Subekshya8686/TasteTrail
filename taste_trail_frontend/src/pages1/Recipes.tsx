import React, { useEffect, useState } from 'react';
import './css/Recipes.css';
import Header from '../components/header.tsx';
import Footer from '../components/footer.tsx';
import RecipeViewImg from '../components/RecipeViewImg.tsx';
import RecipeRateTime from '../components/RecipeRate_time.tsx';
import { FaHeart, FaPrint } from 'react-icons/fa';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Recipe {
    id: number;
    recipePhoto: string;
    recipeTitle: string;
    recipeDescription: string;
    ratings: number;
    preparationTimeMinutes: string;
    preparationTimeHours: string;
    recipeOwner: string;
}

const Recipes: React.FC = () => {
    // const [servings, setServings] = useState<number>(10);
    const [recipeData, setRecipeData] = useState<Recipe | null>(null);
    const { id } = useParams();

    useEffect(() => {
        // Fetch recipe data from your API
        const fetchRecipeData = async () => {
            try {
                const response = await axios.get<Recipe>(`http://localhost:8080/content/${id}`);
                setRecipeData(response.data);
            } catch (error) {
                console.error('Error fetching recipe data:', error);
            }
        };

        if (id) {
            fetchRecipeData();
        }
    }, [id]);


    const handlePrint = () => {
        // Logic for printing
    };

    const handleSave = () => {
        // Logic for saving to favorites
    };

    return (
        <>
            <Header />
            <main>
                <section className="img_description">
                    {recipeData && <RecipeViewImg recipe={recipeData} />}
                </section>
                <section className="rating-time flex">
                    {recipeData && <RecipeRateTime recipe={recipeData} />}
                </section>
                <section className="print-fav">
                    <div className="print-fav-btn flex">
                        <button className="print" onClick={handlePrint}>
                            <i>
                                <FaPrint size={'2rem'} />
                            </i>
                            Print
                        </button>
                        <button className="fav" onClick={handleSave}>
                            <i>
                                <FaHeart size={'2rem'} />
                            </i>
                            Save
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Recipes;
