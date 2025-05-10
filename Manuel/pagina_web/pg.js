let index = 0;

const prevButon = document.getElementById("prev")
const nextButon = document.getElementById("next")

const items = document.querySelectorAll(".carrusel-item")
const totalItems = items.length

function updateCarouselPosition() {
    carrusel.style.transform = `translateX(-${index * 100}%)`;
}

prevButon.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = totalItems - 1;
    }
    updateCarouselPosition();
});

nextButon.addEventListener('click', () => {
    if (index < totalItems - 1) {
        index++;
    } else {
        index = 0;
    }
    updateCarouselPosition();

})



const menuBoton = document.getElementById("botonMenu");
const menu = document.getElementById("menu");

// menuBoton.addEventListener('click', () => {
//     menu.classList.toggle('hidden');
//     console.log("entro")
// });


function menuButton(){
    const menu = document.getElementById("menu");
    menu.classList.toggle('hidden');
console.log('este');

}