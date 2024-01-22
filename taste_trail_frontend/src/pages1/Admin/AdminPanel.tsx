import '../css/AdminPanel.css';
import RecipeList from "./RecipeList.tsx";
import UserList from "./UserList.tsx";
import CommentList from "./CommentList.tsx";
import {useEffect, useState} from "react";
import {FaCircleUser} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
// import BarChart from "../components/BarChart.tsx";

function AdminPanel() {

    const navigate = useNavigate();

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
                    <h1>
                        <a onClick={() => {
                            navigate("/") }}>Taste<span>Trail</span></a>
                    </h1>
                </div>
                <nav className="navigation flex">
                    <a href="#">Dashboard</a>
                    <a href="#" onClick={() => handleListChange('recipes')}>Recipes</a>
                    <a href="#" onClick={() => handleListChange('users')}>Users</a>
                    <a href="#" onClick={() => handleListChange('comments')}>Comments</a>

                    <button onClick={() => navigate('/admin/contentCreate')}>Upload</button>
                </nav>
                <a href="#"><FaCircleUser size="3rem" color="#464444"/></a>
            </header>

            <main>
                <div className="container1">
                    {activeList === 'recipes' && <RecipeList />}
                    {activeList === 'users' && <UserList />}
                    {activeList === 'comments' && <CommentList />}
                    {/*<BarChart data={mockData} />*/}
                </div>
            </main>
        </>
    );
}
export default AdminPanel