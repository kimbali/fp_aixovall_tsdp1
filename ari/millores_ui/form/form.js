document
  .getElementById('registerForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Formulari enviat! (Afegir validació aquí)');  });

    function validateForm() {
      // Obtenir valors dels camps
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // Validar email
      const emailValid = validateEmail(email);
      toggleError('emailError', !emailValid);
      toggleBorder('email', emailValid);
      
      // Validar contrasenya
      const passwordValid = validatePassword(password);
      toggleError('passwordError', !passwordValid);
      toggleBorder('password', passwordValid);
      
      // Activar/desactivar botó
      document.getElementById('registerBtn').disabled = !(emailValid && passwordValid);
    }
    
    function validateEmail(email) {
      return email.includes('@') && email.includes('.') && email.length > 5;
    }
    
    function validatePassword(password) {
      return password.length >= 8;
    }
    
    function toggleError(elementId, show) {
      const element = document.getElementById(elementId);
      element.style.display = show ? 'block' : 'none';
    }
    
    function toggleBorder(elementId, isValid) {
      const element = document.getElementById(elementId);
      element.classList.remove(isValid ? 'error-border' : 'valid-border');
      element.classList.add(isValid ? 'valid-border' : 'error-border');
    }
    
    // Afegir event listener per evitar enviament si no és vàlid
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
      if (!validateEmail(document.getElementById('email').value) || 
          !validatePassword(document.getElementById('password').value)) {
        e.preventDefault();
        alert('Si us plau, corregeixi els errors abans d\'enviar el formulari.');
      }
    });
