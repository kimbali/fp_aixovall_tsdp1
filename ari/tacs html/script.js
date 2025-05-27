document.addEventListener('DOMContentLoaded', function() {
    // Validació del formulari de contacte
    const contactForm = document.getElementById('contacte-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validació bàsica
            const nom = document.getElementById('nom').value.trim();
            const email = document.getElementById('email').value.trim();
            const missatge = document.getElementById('missatge').value.trim();
            
            if (nom === '' || email === '' || missatge === '') {
                alert('Si us plau, omple tots els camps obligatoris.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Si us plau, introdueix una adreça de correu electrònic vàlida.');
                return;
            }
            
            // Simulació d'enviament
            alert('Gràcies pel teu missatge! Respondrem el més aviat possible.');
            contactForm.reset();
        });
    }
    
    // Funció per validar email
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Efecte scroll suau per als enllaços interns
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animació al fer hover sobre els llibres
    const llibres = document.querySelectorAll('.llibre');
    llibres.forEach(llibre => {
        llibre.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
        });
        
        llibre.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });
    });
});