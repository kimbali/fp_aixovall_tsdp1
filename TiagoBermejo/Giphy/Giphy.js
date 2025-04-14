const API_KEY = 'eOETTqzlFUpgGLeTTAgwjlxd1xTBIYGa';
const container = document.getElementById('gifContainer');
const loadingMessage = document.getElementById('loadingMessage');

async function fetchTrending() {
  try {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20`;
    const response = await fetch(url);
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error(error);
  }
}

async function includeTrending() {
  const gifs = await fetchTrending();
    if (!gifs) {
        console.error('No gifs found');
        return;
    }
  loadingMessage.style.display = 'none';

  gifs.forEach(element => {
    const img = document.createElement('img');
    img.src = element.images.fixed_height.url;
    container.appendChild(img);
  });
}

function searchinput() {
    console.log('hello');
}

window.addEventListener('load', includeTrending);
