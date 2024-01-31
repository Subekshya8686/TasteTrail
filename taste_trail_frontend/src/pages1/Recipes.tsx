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
import IngredientRecipe from "../components/IngredientRecipe.tsx";
import {FaPrint} from "react-icons/fa";

interface Recipe {
    id: number;
    recipePhoto: string;
    recipeTitle: string;
    recipeDescription: string;
    ratings: number;
    preparationTimeMinutes: string;
    preparationTimeHours: string;
    description: string;
    stepDescription: string;
    recipeQuantityNumber: number;
    recipeQuantityType: string;
    incredientList: string;
}

interface CommentData {
    id: number;
    userId: {
        id: number;
        username?: string;
    };
    content: {
        id: number;
    };
    description: string;
    username?: string;
}

const Recipes: React.FC = () => {
    const [recipeData, setRecipeData] = useState<Recipe | null>(null);
    const [rating, setRating] = useState<number | null>(null);
    const [comments, setComments] = useState<CommentData[]>([]);
    const [username, setUsername] = useState<string | null>(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch recipe data
                const recipeResponse = await axios.get<Recipe>(`http://localhost:8080/content/${id}`);
                setRecipeData(recipeResponse.data);

                // Fetch rating data
                const ratingResponse = await axios.get<number>(`http://localhost:8080/review/${id}`);
                setRating(ratingResponse.data);

                // Fetch comment data
                const commentsResponse = await axios.get<CommentData[]>(`http://localhost:8080/comment/${id}`);

                // Map user IDs to usernames
                const commentsWithUsernames = commentsResponse.data.map(comment => {
                    return {
                        ...comment,
                        username: comment.userId?.username || 'Unknown User',
                    };
                });

                setComments(commentsWithUsernames);

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

        if (!userId) {
            console.error('User ID not found in local storage');
            return;
        }

        try {
            const userResponse = await axios.get(`http://localhost:8080/users/${userId}`, {
                headers: { authorization: "Bearer " + localStorage.getItem("accessToken") }
            });

            const username = userResponse.data.username;

            await axios.post(`http://localhost:8080/comment/save`, {
                userId: userId,
                contentId: id,
                username: username,
                description: comment,
            });

            console.log('Comment submitted successfully!');
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };


    const handlePrint = () => {
        const printWindow = window.open('', '_blank');

        if (printWindow && recipeData) {
            printWindow.document.write(`
                <html>
                <head>
                    <title>${recipeData.recipeTitle}</title>
                    <style>
                    body {
                        /*font-family: 'Arial', sans-serif;*/
                        background-color: #f5f5f5;
                        text-align: center;
                        padding: 30px 50px;
                    }
                    h1 {
                        color: #cc3d3d;
                        margin-bottom: 10px;
                    }
                    img {
                        max-width: 100%;
                        height: auto;
                        border-radius: 8px;
                        margin-bottom: 20px;
                    }
                    p {
                        color: #333;
                        line-height: 1.6;
                        margin-bottom: 15px;
                    }
                    h2 {
                        color: #2a9d8f;
                        margin-top: 20px;
                    }
                    button {
                        background-color: #cc3d3d;
                        color: #fff;
                        padding: 10px 20px;
                        border: none;
                        cursor: pointer;
                        width: 150px;
                        border-radius: 12px;
                    }
                    .print-form {
                    border: 2px #ababab solid;
                    border-radius: 20px;
                    padding: 10px 20px;
                    align-items: center;
                    }
                </style>
                </head>
                <body>
                <div class="print-form">
                    <h1>${recipeData.recipeTitle}</h1>
                    <img src="${recipeData.recipePhoto}" alt="${recipeData.recipeTitle}">
                    <p>${recipeData.recipeDescription}</p>
                    <h2>Ingredients</h2>
                    <p>${recipeData.incredientList}</p>
                    <h2>Instructions</h2>
                    <p>${recipeData.stepDescription}</p>
                    <button onclick="window.print()">Print</button>
                </div>
                </body>
                </html>
            `);
        } else {
            alert('Popup blocked. Please allow popups for this site.');
        }
    };


    return (
        <>
            <Header />
            <main>
                <section className="img_description">
                    {recipeData && <RecipeViewImg recipe={recipeData} />}
                </section>
                <section className="rating-time">
                    {recipeData && <RecipeRateTime recipe={recipeData} rating={rating} />}
                    <div className="recipe-time">
                    <table>
                        <tbody>
                        <tr>
                            <th>Print Recipe</th>
                        </tr>
                        </tbody>
                    <td className="print-btn" >
                        <i className="print" onClick={handlePrint}>
                            <FaPrint size={'2rem'} />
                        </i>
                    </td>
                    </table>
                    </div>
                </section>
                <section className="ingredients-recipe">
                    {recipeData && <IngredientRecipe recipe={recipeData} />}
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
