const API_KEY = ""

const url = "https://api.giphy.com/v1/gifs/trending"

const container = document.getElementById("gifContainer")

async function fetchTrending () {
    try {
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10&rating=g`;

        const response = await fetch(url);
        const data = await response.json();

        return data.data;
    } catch (error) {
        console.error(error);
    }
}

async function includeTrending() {
    const gifs = await fetchTrending();

    gifs.forEach(element => {   
        const img = document.createElement('img');
        img.src = element.images.fixed_height.url;

        container.appendChild(img);
    });

    console.log(gifs);
}

window.addEventListener('load', includeTrending);
