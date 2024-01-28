import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IoFilterSharp, IoSearchSharp } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";
import './css/header.css';
import '../pages1/css/darkmode.css';
import {IoIosArrowDown} from "react-icons/io";
import {TbChefHat} from "react-icons/tb";

interface UserData {
    firstName: string;
    lastName: string;
    email: string;
}

const Header: React.FC = () => {
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState<boolean>(localStorage.getItem('darkMode') === 'true');
    const [user, setUser] = useState<UserData | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchData,setSearchData]=useState("");
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            const userData: UserData = JSON.parse(localStorage.getItem('userData') || '{}');
            setUser(userData);
        }

        const body = document.body;
        body.classList.toggle('dark', isDarkMode);

        const handleScroll = () => {
            const mainNav = document.querySelector('.mainnav') as HTMLElement;
            if (mainNav) {
                if (document.documentElement.scrollTop > 2) {
                    mainNav.classList.add('sticky');
                } else {
                    mainNav.classList.remove('sticky');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isDarkMode]);

    useEffect(() => {
        const body = document.body;
        body.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    // const getProfilePictureInitials = (firstName: string, lastName: string): string => {
    //     if (!firstName || !lastName) {
    //         return ""; // Return an empty string or some default initials
    //     }
    //     return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    // };
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('darkMode', (!isDarkMode).toString());
    };


    const handleLogout = () => {
        // Clear all items from local storage
        localStorage.clear();
        // Redirect to the login page
        // navigate("/");
    };


    return (
        <header>
            <div className="mainnav sticky1">
                <div className="container2 flex sticky1">
                    <div className="logo">
                        <h1>
                            <a onClick={() => navigate("/")}>Taste<span>Trail</span></a>
                        </h1>
                    </div>
                    <div id="collection">
                        <div id="Category"><a>Category<i><IoIosArrowDown /></i></a>
                            <ul className="dropdown">
                                <li><a onClick={() => {
                                    navigate("/category_breakfast") }}>Breakfast</a></li>
                                <li><a onClick={() => {
                                    navigate("/category_lunch") }}>Lunch</a></li>
                                <li><a onClick={() => {
                                    navigate("/category_snacks") }}>Snacks</a></li>
                                <li><a onClick={() => {
                                    navigate("/category_dinner") }}>Dinner</a></li>
                                <li><a onClick={() => {
                                    navigate("/category_dessert") }}>Dessert</a></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="navlist flex">
                        <li><a onClick={() => {
                            navigate("/category_holiday") }}>Holiday&Festives</a></li>
                    </ul>

                    {/*SEARCH SECTION */}
                    <div id="search">
                        <i className="icon search"><IoSearchSharp size="2rem"/></i>
                        <input onKeyUp={(event:any)=>{
                            console.log(event.keyCode)
                            if (event.keyCode===13) {
                                window.location.href="/searchBy/" + event.target.value;
                            }
                        }} type="text" id="input" name="searchBox" placeholder="Search here..." />
                        <i><a><IoFilterSharp size="2rem" color="black"/></a>
                            <li><a>Veg</a></li>
                            <li><a>Non Veg</a></li>
                        </i>
                    </div>



                    {/*//LOGOUT KO BUTTON YAA XAAA LOGIC WALA CODE YESMA RAKHAAA*/}
                    {/*//SUBEKSHYAA KO KAAM HOOO*/}
                    {/*//ARU HARU DON'T TOUCH*/}




                    <button id="registrationButton" type="button" onClick={() => {
                        navigate(user ? "/user-profile" : "/login");
                    }}>
                        {user ? (
                            <div className="dropdown-container">
                                <div onClick={toggleDropdown} className="dropdown-trigger">
                                    <i><TbChefHat size={"2.3rem"}/> </i>
                                </div>
                                {dropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li><a href="/ChangePassword">Change Password</a></li>
                                        <li><a href="/EditProfile">Update Profile</a></li>
                                        <li onClick={()=>{
                                            localStorage.clear();
                                            window.location.href="/"
                                        }}><a href="#">Log Out</a></li>
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <>
                                <i><FaUserPlus size="1.3rem"/></i> Register
                            </>
                        )}
                    </button>

                    <input type="checkbox" name="checkbox_toggle" id="checkbox" hidden checked={isDarkMode} onChange={toggleDarkMode} />
                    <label htmlFor="checkbox" className="toggle">
                        <div className="toggle__circle"></div>
                    </label>

                </div>
            </div>
        </header>
    );
};

export default Header;
