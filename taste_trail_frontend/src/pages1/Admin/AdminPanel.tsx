import '../css/AdminPanel.css';
import RecipeList from "./RecipeList.tsx";
import UserList from "./UserList.tsx";
// import CommentList from "../Admin/CommentList.tsx";
import {SetStateAction, useEffect, useState} from "react";
import {FaCircleUser} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import CommentList from "./CommentList.tsx";
// import BarChart from "../components/BarChart.tsx";

function AdminPanel() {

    const navigate = useNavigate();

    const [activeList, setActiveList] = useState('recipes');

    const handleListChange = (listType: SetStateAction<string>) => {
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

                </div>
            </main>
        </>
    );
}
export default AdminPanel