document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(errorElement => errorElement.textContent = '');

        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const termsCheckbox = document.getElementById('terms');

        let isValid = true;

        if (usernameInput.value.trim() === '') {
            document.getElementById('username-error').textContent = 'Username is required';
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            document.getElementById('email-error').textContent = 'Email is required';
            isValid = false;
        }

        if (phoneInput.value.trim() === '') {
            document.getElementById('phone-error').textContent = 'Phone number is required';
            isValid = false;
        } else {
            let trimmedValue = phoneInput.value.trim();
            if (isNaN(trimmedValue) || !trimmedValue.split('').every(char => !isNaN(char) && char !== ' ')) {
                document.getElementById('phone-error').textContent = 'Please enter only numbers';
                isValid = false;
            }
        }
        
        if (passwordInput.value.trim() === '') {
            document.getElementById('password-error').textContent = 'Password is required';
            isValid = false;
        }

        if (confirmPasswordInput.value.trim() === '') {
            document.getElementById('confirm-password-error').textContent = 'Please confirm your password';
            isValid = false;
        } else if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
            document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
            isValid = false;
        }

        if (!termsCheckbox.checked) {
            document.getElementById('terms-error').textContent = 'You must agree to the terms and services';
            isValid = false;
        }

        if (isValid) {
            form.submit();
            window.location.href = 'home.html';
        }
    }
});
