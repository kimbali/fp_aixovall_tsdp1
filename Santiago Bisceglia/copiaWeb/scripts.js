document.getElementById("form-contacto").addEventListener("submit", function(event){
    event.preventDefault();


    const apellido = document.querySelector('[name="apellido"]').value;
    const nombre = document.querySelector('[name="nombre"]').value;
    const email = document.querySelector('[name="email"]').value;
    const mensaje = document.querySelector('[name="mensaje"]').value;

    console.log("Apellido:", apellido);
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje", mensaje);

    alert("Gracias por tu mensaje, "+ nombre + " " + apellido + " 🙌");

    this.reset();
    
    
})