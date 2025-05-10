document
  .getElementById('registerForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    if(!boton.disabled) {
      alert('formulari enviat correctament');
    }
  });
emailInput = document.getElementById("email")
ContrasenyaInput = document.getElementById("password")
NomInput = document.getElementById("name")
emailError = document.getElementById("emailError")
passwordError = document.getElementById("passwordError")
submitButon = document.getElementById("boton")

  function validateForum(){
    const emailValid = emailInput.value.includes("@") && emailInput.value.includes('.')
    const passwordValid = ContrasenyaInput.value.lenght >= 8;

    emailError.style.display = emailValid ? 'none': 'block';
    passwordError.style.display = passwordValid ? 'none': 'block';

    boton.disabled = !(emailValid && passwordValid);
  }

  emailInput.addEventListener('input',validateForum);
  ContrasenyaInput.addEventListener('input',validateForum);