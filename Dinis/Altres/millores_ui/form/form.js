const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const submitButton = document.getElementById('submitButton');

function validateForm() {
  const emailValid = emailInput.value.includes('@') && emailInput.value.includes('.');
  const passwordValid = passwordInput.value.length >= 8;

  emailError.style.display = emailValid ? 'none' : 'block';
  passwordError.style.display = passwordValid ? 'none' : 'block';

  submitButton.disabled = !(emailValid && passwordValid);
}

document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Formulari enviat correctament!');
});

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);