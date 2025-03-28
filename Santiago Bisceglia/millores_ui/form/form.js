document
  .getElementById('registerForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Formulari enviat! (Afegir validació aquí)');
  });
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const submitBtn = document.querySelector('button');

function validateForm(){
  const emailValid = emailInput.value.includes('@') && emailInput.value.includes('.');
  const passwordValid = passwordInput.value.length >=8;

  emailError.style.display = emailValid ? 'none' : 'block';
  passwordError.style.display = passwordValid ? 'none' : 'block';


  submitBtn.disabled = !(emailValid && passwordValid);
}


emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);