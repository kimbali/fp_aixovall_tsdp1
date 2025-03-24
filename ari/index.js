

const CLIENT_ID = '66b208be839f48838ed6e20b6dabf839';
const CLIENT_SECRET_ID = 'a5690ef0162f4cce9d6f66ebae40e0c2';

async function getAccessToken() {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET_ID),
      },
      body: 'grant_type=client_credentials',
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Error obtenint el token');
    return data.access_token;
  } catch (error) {
    console.error('Error:', error);
    alert('Error al obtenir el token de la API');
  }
}

async function searchTracks() {
  const query = document.getElementById('searchInput').value.trim();

  if (!query) {
    alert('Per favor, escriu el nom d\'una cançó');
    return;
  }

  try {
    const token = await getAccessToken();
    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`;

    const response = await fetch(url, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data.error || 'Error en la cerca');
    displayResults(data.tracks.items);
  } catch (error) {
    console.error('Error:', error);
    alert('No s\'han trobat resultats o ha hagut un error en la cerca');
  }
}

function displayResults(tracks) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ''; // Netejar resultats previs

  if (tracks.length === 0) {
    resultsContainer.innerHTML = '<p>No s\'han trobat resultats per a la teva cerca.</p>';
    return;
  }

  tracks.forEach(track => {
    const trackElement = document.createElement('div');
    trackElement.classList.add('track');

    trackElement.innerHTML = `
      <img src="${track.album.images[0].url}" alt="${track.name}">
      <h3>${track.name}</h3>
      <p>${track.artists.map(artist => artist.name).join(', ')}</p>
      <a href="${track.external_urls.spotify}" target="_blank">Escoltar a Spotify</a>
    `;

    resultsContainer.appendChild(trackElement);
  });
}


  



