
const token ='BQAwuipKL5X7VBoPqvbgivKlDZ3VxWf9iWkUg_SbeYvSebgQBD7a-ioN1e9RD9PUaIZGzRILrNlwy_M8-0wBYM-_e2JU-mCfLeNLGmnWc1V_MfiHTgIhT-Ez7LZ8HysJg7jFL9BWZvySF28s-6iyiTwHxa9oOkjoo6E7vpG-bUNBT1mBbujD2Cg4iFsYlD_k7fl-sNQ9fBahc9p9ezcGP9e_hGG4moIqLIttv-JcXZBQ63PB8d3RL42C9K_H2B0log81Iv27o7fIHl8gSo7TaxsPU1ckqSs2Czp-91K7cLjPJT0jYtSFezjo';



const boton = document.getElementById("boton");
const input = document.getElementById("input");
const resultadosDiv = document.querySelector(".resultats");


const buscarCanciones = async () => {
    const query = input.value.trim(); 
    if (!query) return; 
    
 
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`; 

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (!response.ok) {
            throw new Error('Error en la búsqueda de canciones');
        }

        const data = await response.json();
        mostrarResultados(data.tracks.items); 

    } catch (error) {
        console.error('Error:', error);
        resultadosDiv.innerHTML = `<p>No se pudieron obtener los resultados.</p>`;
    }
};


const mostrarResultados = (canciones) => {
    
    resultadosDiv.innerHTML = "";

 
    if (canciones.length === 0) {
        resultadosDiv.innerHTML = "<p>No se encontraron canciones.</p>";
        return;
    }

    canciones.forEach(cancion => {
        const divCancion = document.createElement("div");
        divCancion.classList.add("cancion");

        const imagen = document.createElement("img");
        imagen.src = cancion.album.images[2].url; 
        imagen.alt = cancion.name;
        imagen.width = 100;

        const nombre = document.createElement("h2");
        nombre.textContent = cancion.name; 

        const artista = document.createElement("p");
        artista.textContent = `Artista: ${cancion.artists.map(artist => artist.name).join(", ")}`; 

        const enlace = document.createElement("a");
        enlace.href = cancion.external_urls.spotify;
        enlace.target = "_blank";
        enlace.textContent = "Escuchar en Spotify";

     
        divCancion.appendChild(imagen);
        divCancion.appendChild(nombre);
        divCancion.appendChild(artista);
        divCancion.appendChild(enlace);

       
        resultadosDiv.appendChild(divCancion);
    });
};


boton.addEventListener("click", buscarCanciones);


input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        buscarCanciones();
    }
});

