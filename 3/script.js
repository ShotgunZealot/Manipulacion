document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const passwordStrength = document.getElementById('passwordStrength');

    passwordInput.addEventListener('input', function () {
        const password = passwordInput.value;
        const strength = getPasswordStrength(password);
        const strengthText = getStrengthText(strength);
        passwordStrength.textContent = strengthText;
    });

    function getPasswordStrength(password) {
        let strength = 0;
        const minLength = 8;
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length <= 0) {
            strength = 0;
        }else{
            strength = 1;
        }
        if (password.length >= minLength) {
            strength += 1;
        }
        if (hasNumber) {
            strength += 1;
        }
        if (hasSpecialChar) {
            strength += 1;
        }
        return strength;
    }

    function getStrengthText(strength) {
        switch (strength) {
            case 0:
                return '';
            case 1:
                return 'Débil';
            case 2:
                return 'Moderada';
            case 3:
                return 'Fuerte';
            case 4:
                return 'Muy Fuerte';
            default:
                return '';
        }
    }
});
