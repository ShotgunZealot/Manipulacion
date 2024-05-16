document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const loginMessage = document.getElementById('loginMessage');

    const accounts = [
        { email: 'usuario1@example.com', password: 'contraseña1' },
        { email: 'usuario2@example.com', password: 'contraseña2' },
        { email: 'usuario3@example.com', password: 'contraseña3' }
    ];

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        usernameError.textContent = '';
        passwordError.textContent = '';
        loginMessage.textContent = '';

        const email = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        const account = accounts.find(account => account.email === email && account.password === password);

        if (account) {
            loginMessage.textContent = '¡Inicio de sesión exitoso!';
        } else {
            loginMessage.textContent = 'Correo o contraseña incorrectos.';
        }
    });

    usernameInput.addEventListener('input', function () {
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Por favor ingrese su correo electrónico.';
        } else {
            usernameError.textContent = '';
        }
    });

    passwordInput.addEventListener('input', function () {
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Por favor ingrese su contraseña.';
        } else {
            passwordError.textContent = '';
        }
    });
});
