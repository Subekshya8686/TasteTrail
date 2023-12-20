const searchon = document.querySelector('#searchopen');
const searchoff = document.querySelector('#removesearch');
const searchinput = document.querySelector('.searchinput');

searchinput.style.display = "none";

searchon.addEventListener('click', ()=>{
    if(searchinput.style.display === 'none') {
        searchinput.style.display = 'flex';
    } else {
        searchinput, style.display = 'none';
    }
});

searchoff.addEventListener('click', ()=>{
    if(searchinput.style.display === 'flex') {
        searchinput.style.display = 'none';
    } else {
        searchinput.style.display = 'flex';
    }
});


// nav sticky

const mainnav = document.querySelector('.mainnav');

window.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop > 2) {
        mainnav.classList.add('sticky');
    } else {
        mainnav.classList.remove('sticky');
    }
});


// DarkMode js

const darkmode = document.querySelector('#checkbox');
let body = document.body;
const logoImage = document.querySelector('logo img');
const logoimage2 = document.querySelector('.titleicon img');


// check if there is a stored dark mode preference in localstorage
const idDarkMode = localStorage.getItem('darkMode') === 'true';

// set the initial state based on the stored preference
if(idDarkMode) {
    body.classList.add('dark');
    darkmode.checked = true;
    // logoImage.src = '/img/snacks_ico.png'
    // logoimage2.src = '/img/snacks_ico.png'
} else {
    // logoImage.src = '/img/logo.png'
    // logoimage2.src = '/img/logo.png'
}

darkmode.addEventListener('change', ()=>{
    if (darkmode.checked) {
        body.classList.add('dark')
        // logoImage.src = '/img/snacks_ico.png'
        // logoimage2.src = '/img/snacks_ico.png'
        localStorage.setItem('darkMode', 'true')
    } else {
        body.classList.remove('dark')
        // logoImage.src = '/img/logo.png'
        // logoimage2.src = '/img/logo.png'
        localStorage.setItem('darkMode', 'false');
    }
});


// navbar 0n 0ff js
const navonoff = document.querySelector('.navonoff');
const navtoggle = document.querySelector('#checkbox2');
const navlist = document.querySelector('.navlist');

navtoggle.addEventListener('change', ()=>{
    if (navtoggle.checked) {
        navlist.style.right = '-150px'
    } else {
        navlist.style.right = '-400px'
    }
});