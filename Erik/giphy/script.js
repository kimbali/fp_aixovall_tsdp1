const API_KEY = 'gQTVMYMaus0dB0ZYtaX1DwJJjYggwVzL';

async function fetchTrending() {
    try{
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20`;

        const response = await fetch(url);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching trending GIFs:', error);
    }
}
async function includeTrending() {
    const gifs = await fetchTrending();
    gifs.forEach(element=> {
        const img = document.createElement('img');
        img.src = element.images.fixed_height.url;
        img.alt = element.title;
    })
    console.log(gifs);
}

window.addEventListener('load', includeTrending);