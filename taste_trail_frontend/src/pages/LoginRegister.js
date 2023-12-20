function switchForm(className, e) {
    e.preventDefault();
    const allForm = document.querySelectorAll('form');
    const form = document.querySelector(`form.${className}`);

    allForm.forEach(item => {
        item.classList.remove('active');
    })
    form.classList.add('active');
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Event listener for same password
const registerPassword = document.querySelector('form.register #password');
const registerConfirmPassword = document.querySelector('form.register #confirm-password');

registerPassword.addEventListener(`input`, function () {
    registerConfirmPassword.pattern = `${this.value}`;
});

// Event listener for register form input
document.querySelector('form.register').addEventListener('input', function (e) {
    // Capitalize first name input value
    if (e.target.id === 'firstName') {
        e.target.value = capitalizeFirstLetter(e.target.value);
    }

    // Capitalize last name input value
    if (e.target.id === 'lastName') {
        e.target.value = capitalizeFirstLetter(e.target.value);
    }
});

// Event listener for register form input
document.querySelector('form.register').addEventListener('submit', function (e) {
    // Check if any field is empty
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
    //     alert('Please fill in all fields');
    //     e.preventDefault(); // Prevent form submission
    // } else {
    //     // Continue with form submission
    //     // Add any additional validation or processing logic here
    // }
});

// Event listener for login form input
document.querySelector('form.login').addEventListener('submit', function (e) {
    // Check if any field is empty
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Please fill in all fields');
        e.preventDefault(); // Prevent form submission
    } else {
        // Continue with form submission
        // Add any additional validation or processing logic here
    }
});