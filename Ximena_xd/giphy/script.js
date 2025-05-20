const API_KEY = 'eOETTqzlFUpgGLeTTAgwjlxd1xTBIYGa';

const container = document.getElementById('gifContainer');

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

  gifs.forEach(element => {
    const img = document.createElement('img');
    img.src = element.images.fixed_height.url;
    container.appendChild(img);
  });
}

const input = document.getElementById('searchInput');

function searchInput() {
  console.log(input.value);
  
if(!input.value){
  return;
}
console.log('Hay valor');

}

window.addEventListener('load', includeTrending);
