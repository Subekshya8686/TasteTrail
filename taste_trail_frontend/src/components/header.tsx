import React, {useEffect, useState} from 'react';
import './css/header.css'

// function Header(){
const Header: React.FC = () => {
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

        const searchOn = document.querySelector('#searchopen') as HTMLElement;
        const searchOff = document.querySelector('#removesearch') as HTMLElement;
        const searchInput = document.querySelector('.searchinput') as HTMLElement;

        searchInput.style.display = 'none';

        searchOn.addEventListener('click', () => {
            searchInput.style.display = searchInput.style.display === 'none' ? 'flex' : 'none';
        });

        searchOff.addEventListener('click', () => {
            searchInput.style.display = searchInput.style.display === 'flex' ? 'none' : 'flex';
        });

        const mainNav = document.querySelector('.mainnav') as HTMLElement;

        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 2) {
                mainNav.classList.add('sticky');
            } else {
                mainNav.classList.remove('sticky');
            }
        });

        const darkModeToggle = document.querySelector('#checkbox') as HTMLInputElement;
        const profileLogo = document.createElement('img');

        if (isDarkMode) {
            body.classList.add('dark');
            darkModeToggle.checked = true;
        }

        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                body.classList.add('dark');
                localStorage.setItem('darkMode', 'true');
            } else {
                body.classList.remove('dark');
                localStorage.setItem('darkMode', 'false');
            }
        });

        const navToggle = document.querySelector('#checkbox2') as HTMLInputElement;
        const navList = document.querySelector('.navlist') as HTMLElement;

        navToggle.addEventListener('change', () => {
            navList.style.right = navToggle.checked ? '-150px' : '-400px';
        });

        const loginLogo = document.querySelector('.navlist li:nth-child(3) a') as HTMLElement;
        const registerLogo = document.querySelector('.navlist li:nth-child(4) a') as HTMLElement;

        if (isLoggedIn) {
            loginLogo.style.display = 'none';
            registerLogo.style.display = 'none';

            // Set the path to your profile logo image
            profileLogo.src = 'path/to/profile-logo.png';
            profileLogo.alt = 'Profile Logo';

            // Assuming you have a container for the profile logo
            const profileLogoContainer = document.createElement('div');
            profileLogoContainer.appendChild(profileLogo);
            profileLogoContainer.classList.add('profile-logo-container');
            document.querySelector('.mainnav .container')?.appendChild(profileLogoContainer);
        } else {
            profileLogo.style.display = 'none';
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isDarkMode, isLoggedIn]);

    return (
        <header>
            <div className="mainnav">
                <div className="container flex">
                    <div className="logo flex">
                        <h1>
                            <a href="homepage.html">Taste <span>Trail</span></a>
                        </h1>
                    </div>
                    <ul className="navlist flex">
                        <li>
                            <a href="/">Categories</a>
                        </li>
                        <li>
                            <a href="Category_Holiday.html">Holiday & Festives</a>
                        </li>
                        <li>
                            <a href="/">Contact Us</a>
                        </li>
                    </ul>

                    <div className="searchbar flex">
                        <i className="bx bx-search-alt-2" id="searchopen"></i>
                        <div className="navonoff">
                            <input type="checkbox" id="checkbox2" />
                            <label htmlFor="checkbox2" className="toggle2">
                                <div className="bar bar--top"></div>
                                <div className="bar bar--middle"></div>
                                <div className="bar bar--bottom"></div>
                            </label>
                        </div>
                    </div>
                    {/* Login and Register buttons within a form */}
                    {/* Add this link to include Font Awesome icons */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
                    {/* Update your HTML */}
                    <button id="registrationButton" type="button" onClick={() => registerUser()}>
                        <i className="fas fa-user-plus"></i> Register
                    </button>
                    <div className="searchinput">
                        <input type="text" placeholder="Search Here..." />
                        <i className="bx bx-minus" id="removesearch"></i>
                    </div>
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
