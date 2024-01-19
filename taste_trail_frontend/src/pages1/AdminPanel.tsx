import './css/AdminPanel.css';
import RecipeList from "../components/RecipeList.tsx";
import UserList from "../components/UserList.tsx";
import CommentList from "../components/CommentList.tsx";
import {useEffect, useState} from "react";
import {FaCircleUser} from "react-icons/fa6";

// import BarChart from "../components/BarChart.tsx";

function AdminPanel() {
    const mockRecipes = [
        { id: 1, title: 'Chicken Momo', category: 'Snacks', duration: 45, image: 'momo.jpg' },
        { id: 2, title: 'Onion Pakoda', category: 'Snacks', duration: 20, image: 'Onion_pakoda.jpg' },
        { id: 3, title: 'Pani Puri', category: 'Snacks', duration: 30, image: 'Paanipuri.jpg' },
        // Add more mock recipes as needed
    ];

    const mockUsers = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Alonso' },
        { id: 3, name: 'Ray Williams' },
        { id: 4, name: 'Jake' },
        { id: 5, name: 'Riyaa Shrestha' },
        // Add more mock users as needed
    ];

    const mockComments = [
        { id: 1, username: 'John Doe', text: 'Tried this recipe last night, and it was a hit with the family! The flavors were amazing. Definitely making it again.' },
        { id: 2, username: 'Alonso', text: 'Love the simplicity of this recipe! Quick and easy, yet so delicious. Perfect for busy weeknights.' },
        { id: 3, username: 'Ray Williams', text: 'I stumbled upon this recipe while looking for something new to try, and it exceeded my expectations! The combination of flavors is sublime. I particularly enjoyed the hint of citrus, which added a refreshing twist. The step-by-step instructions made it easy to follow, and the result was a restaurant-quality dish that I can proudly say I made at home. Can\'t wait to explore more recipes on this fantastic site!' },
        { id: 4, username: 'Jake', text: 'Adapted this recipe to make it vegan, and it worked like a charm. Thank you for providing alternatives!' },
        { id: 5, username: 'Riyaa Shrestha', text: 'As someone who loves experimenting in the kitchen, this recipe caught my eye, and I\'m so glad I tried it! The fusion of ingredients creates a symphony of tastes that dance on the palate. I made a few personal adjustments, adding a handful of fresh herbs from my garden, and the aroma filled my kitchen with an irresistible fragrance. The level of detail in your recipe made the entire cooking process enjoyable, and the final dish was nothing short of extraordinary. Bravo!' },
        // Add more mock comments as needed
    ];

    // const mockData = [
    //     { category: 'Desserts', avgRating: 4.5 },
    //     { category: 'Main Dishes', avgRating: 3.8 },
    //     { category: 'Appetizers', avgRating: 4.2 },
    //     { category: 'Snacks', avgRating: 4.0 },
    //     // Add more categories as needed
    // ];

    const [activeList, setActiveList] = useState('recipes');

    const handleListChange = (listType) => {
        setActiveList(listType);
    };

    useEffect(() => {

    }, []);

    return (
        <>
            <header>
                <div className="logo">
                    <h2>
                        <a href="/">TASTE<span>TRAIL</span></a>
                    </h2>
                </div>
                <nav className="navigation flex">
                    <a href="#">Dashboard</a>
                    <a href="#" onClick={() => handleListChange('recipes')}>Recipes</a>
                    <a href="#" onClick={() => handleListChange('users')}>Users</a>
                    <a href="#" onClick={() => handleListChange('comments')}>Comments</a>

                    <button className="btn">Upload</button>
                </nav>
                <a href="#"><FaCircleUser size="3rem" color="#464444"/></a>
            </header>

            <main>
                <div className="container1">
                    {activeList === 'recipes' && <RecipeList  recipes={mockRecipes}/>}
                    {activeList === 'users' && <UserList  users={mockUsers}/>}
                    {activeList === 'comments' && <CommentList  comments={mockComments}/>}
                    {/*<BarChart data={mockData} />*/}
                </div>
            </main>
        </>
    );
}
export default AdminPanel