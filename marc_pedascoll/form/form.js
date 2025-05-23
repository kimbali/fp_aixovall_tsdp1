// document
//   .getElementById('registerForm')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();
//     alert('Formulari enviat! (Afegir validació aquí)');
//   });
const mail = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('errorMail');
const errorPass = document.getElementById('errorPassword');
const submitBtn = document.querySelector('button');

function validateForm() {
  const emailValid=mail.value.includes('@')&&mail.value.includes('.');
  const passValid=password.value.length >=8;
}