// JS code

// Toggle search bar
const searchon = document.querySelector('#searchopen');
const searchoff = document.querySelector('#removesearch');
const searchinput = document.querySelector('.searchinput');

searchinput.style.display = 'none';

searchon.addEventListener('click', () => {
    if (searchinput.style.display === 'none') {
        searchinput.style.display = 'flex';
    } else {
        searchinput.style.display = 'none';
    }
});

searchoff.addEventListener('click', () => {
    if (searchinput.style.display === 'flex') {
        searchinput.style.display = 'none';
    } else {
        searchinput.style.display = 'flex';
    }
});

// Navbar sticky
const mainnav = document.querySelector('.mainnav');

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 2) {
        mainnav.classList.add('sticky');
    } else {
        mainnav.classList.remove('sticky');
    }
});

// Dark Mode
const darkmode = document.querySelector('#checkbox');
let body = document.body;

// Check if there is a stored dark mode preference in localstorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// set the initial state based on the stored preference
if (isDarkMode) {
    body.classList.add('dark');
    darkmode.checked = true;
}

darkmode.addEventListener('change', () => {
    if (darkmode.checked) {
        body.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    } else {
        body.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
    }
});

// Navbar on/off
const navonoff = document.querySelector('.navonoff');
const navtoggle = document.querySelector('#checkbox2');
const navlist = document.querySelector('.navlist');
const loginLogo = document.querySelector('.navlist li:nth-child(3) a');
const registerLogo = document.querySelector('.navlist li:nth-child(4) a');
const profileLogoContainer = document.createElement('div');
const profileLogo = document.createElement('img');

// Check if the user is logged in (replace this with your actual authentication check)
const isLoggedIn = false;

// Update the login and register logos based on the user's authentication status
if (isLoggedIn) {
    loginLogo.style.display = 'none';
    registerLogo.style.display = 'none';

    // Set the path to your profile logo image
    profileLogo.src = 'path/to/profile-logo.png';
    profileLogo.alt = 'Profile Logo';

    // Assuming you have a container for the profile logo
    profileLogoContainer.appendChild(profileLogo);
    profileLogoContainer.classList.add('profile-logo-container');
    document.querySelector('.mainnav .container').appendChild(profileLogoContainer);
} else {
    // If the user is not logged in, display the login and register logos
    profileLogo.style.display = 'none';
}

navtoggle.addEventListener('change', () => {
    if (navtoggle.checked) {
        navlist.style.right = '-150px';
    } else {
        navlist.style.right = '-400px';
    }
});
