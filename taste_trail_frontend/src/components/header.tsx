import React, {useEffect, useState} from 'react';
import './css/header.css'
import {IoFilterSharp, IoSearchSharp} from "react-icons/io5";
import {IoIosArrowDown} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import '../pages1/css/darkmode.css'
import {FaUserPlus} from "react-icons/fa6";

// function Header(){
const Header: React.FC = () => {

    const navigate = useNavigate();

    const [isDarkMode] = useState<boolean>(localStorage.getItem('darkMode') === 'true');
    const [isLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const body = document.body;

        const handleScroll = () => {
            if (!body.classList.contains('no-scroll')) {
                body.classList.add('no-scroll');
            }
        };

        window.addEventListener('scroll', handleScroll);

        const mainNav = document.querySelector('.mainnav') as HTMLElement;

        if (mainNav) {
            window.addEventListener('scroll', () => {
                if (document.documentElement.scrollTop > 2) {
                    mainNav.classList.add('sticky');
                } else {
                    mainNav.classList.remove('sticky');
                }
            });
        }

        const darkModeToggle = document.querySelector('#checkbox') as HTMLInputElement;

        if (darkModeToggle) {
            darkModeToggle.addEventListener('change', () => {
                if (darkModeToggle.checked) {
                    body.classList.add('dark');
                    localStorage.setItem('darkMode', 'true');
                } else {
                    body.classList.remove('dark');
                    localStorage.setItem('darkMode', 'false');
                }
            });
        }

        const navToggle = document.querySelector('#checkbox2') as HTMLInputElement;
        const navList = document.querySelector('.navlist') as HTMLElement;

        if (navToggle && navList) {
            navToggle.addEventListener('change', () => {
                navList.style.right = navToggle.checked ? '-150px' : '-400px';
            });
        }

        const loginLogo = document.querySelector('.navlist li:nth-child(3) a') as HTMLElement;
        const registerLogo = document.querySelector('.navlist li:nth-child(4) a') as HTMLElement;

        if (isLoggedIn) {
            loginLogo.style.display = 'none';
            registerLogo.style.display = 'none';
        } else {
            // Optionally handle the case when the user is not logged in
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isDarkMode, isLoggedIn]);

    return (
        <header>
            <div className="mainnav sticky1">
                <div className="container2 flex sticky1">
                    <div className="logo">
                        <h1>
                            <a onClick={() => {
                            navigate("/") }}>Taste<span>Trail</span></a>
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
                        <input type="text" id="input" name="searchBox" placeholder="Search here..." />
                        <i><a><IoFilterSharp size="2rem" color="black"/></a>
                            <li><a>Veg</a></li>
                            <li><a>Non Veg</a></li>
                        </i>
                    </div>

                    <button id="registrationButton" type="button" onClick={() => {
                        navigate("/loginregister") }}>
                        <i className="fas fa-user-plus"><FaUserPlus size="1.3rem"/></i> Register
                    </button>

                    <input type="checkbox" name="checkbox_toggle" id="checkbox" hidden />
                    <label htmlFor="checkbox" className="toggle">
                        <div className="toggle__circle"></div>
                    </label>

                </div>
            </div>
        </header>
    );
};

export default Header;
