import React, { useEffect, useState } from 'react';
import './css/Recipes.css';
import Header from '../components/header.tsx';
import Footer from '../components/footer.tsx';
import RecipeViewImg from '../components/RecipeViewImg.tsx';
import RecipeRateTime from '../components/RecipeRate_time.tsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Rate from "../components/Rate.tsx";
import Comment from "../components/Comment.tsx";

interface Recipe {
    id: number;
    recipePhoto: string;
    recipeTitle: string;
    recipeDescription: string;
    ratings: number;
    preparationTimeMinutes: string;
    preparationTimeHours: string;
    rating: number;
    description: string;
}

const Recipes: React.FC = () => {
    const [recipeData, setRecipeData] = useState<Recipe | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [username, setUsername] = useState<string | null>(null); // Added username state

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch recipe data
                const recipeResponse = await axios.get<Recipe>(`http://localhost:8080/content/${id}`);
                setRecipeData(recipeResponse.data);

                // Fetch user data for the username
                const userId = localStorage.getItem('userId');
                const userResponse = await axios.get(`http://localhost:8080/users/${userId}`, {
                    headers: { authorization: "Bearer " + localStorage.getItem("accessToken") }
                });
                setUsername(userResponse.data.username);
            } catch (error) {
                console.error('Error fetching data:', error);

            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    const handleRate = async (rating: number) => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            console.error('User ID not found in local storage');
            return;
        }

        try {
            await axios.post('http://localhost:8080/review', {
                userId: userId,
                contentId: id,
                rate: rating,
            });
            console.log('Rating sent successfully!');
        } catch (error) {
            console.error('Error sending rating:', error);
        }
    };

    const handleCommentSubmit = async (comment: string) => {
        const userId = localStorage.getItem('userId');

        if (!userId || !username) {
            console.error('User ID or username not found in local storage');
            return;
        }

        try {
            await axios.post(`http://localhost:8080/comment`, {
                userId: userId,
                contentId: id,
                username: username,
                description: comment,
            });

            console.log('Comment submitted successfully!');

            // Refetch comments after submitting
            const commentsResponse = await axios.get<Comment[]>(`http://localhost:8080/comments/${id}`);
            setComments(commentsResponse.data);
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
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
                <section className="rate-recipe">
                    {recipeData && <Rate onRate={handleRate} />}
                    {recipeData && <Comment comments={comments} onCommentSubmit={handleCommentSubmit} />}
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Recipes;
