function Login() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-toggle').classList.add('active');
    document.getElementById('signup-toggle').classList.remove('active');
}

function Signup() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-toggle').classList.remove('active');
    document.getElementById('signup-toggle').classList.add('active');
}

function validateSignup(event) {
    event.preventDefault();
    var username = document.getElementById('signup-username').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('signup-confirm-password').value;
    var errorMessage = document.getElementById('error-message');

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'All fields are required.';
        errorMessage.style.display = 'block';
    } else if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
        alert('Signup successful!');
    }
}

document.getElementById('login-toggle').classList.add('active');
