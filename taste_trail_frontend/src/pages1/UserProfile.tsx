

// UserProfile.tsx

import React from 'react';
import './css/userProfile.css';
import Header from '../components/header.tsx';
import Footer from '../components/footer.tsx';
import Profiler from "./Profiler.tsx";



interface Recipe {
    id: number;
    title: string;
    category: string;
    description: string;
    totalTime: string;
    img: string;
}

const UserProfile: React.FC = () => {
    // Static mock data for user's favorite recipes
    const mockUserFavorites: Recipe[] = [
        {
            id: 1,
            img: 'path/to/image1.jpg',
            title: 'Favorite Recipe 1',
            category: 'Dessert',
            description: 'A delicious dessert recipe.',
            totalTime: '30 mins',
        },
        {
            id: 2,
            img: 'path/to/image2.jpg',
            title: 'Favorite Recipe 2',
            category: 'Main Course',
            description: 'A flavorful main course recipe.',
            totalTime: '45 mins',
        },
        // Add more favorite recipes as needed
    ];
    // Filter recipes for Section 1 and Section 2
    return (
        <>
            <Header />
            <Profiler/>

                <div className="favorites-section">
                    <h3>Your Favorites</h3>
                    <div className="">
                        {mockUserFavorites.map((recipe) => (
                            <div key={recipe.id} className="tcard">
                                <h4>{recipe.title}</h4>
                                <p>{recipe.category}</p>
                                <p>{recipe.description}</p>
                                <p>Total Time: {recipe.totalTime}</p>
                            </div>
                        ))}
                    </div>
                </div>

            <Footer />
        </>
    );
};

export default UserProfile;










