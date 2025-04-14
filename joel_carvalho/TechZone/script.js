document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();
        
        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }
        
        alert("Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.");
        form.reset();
    });
    
    // Efecto de cambio de color en los enlaces al pasar el mouse
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#28a745";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });
});
