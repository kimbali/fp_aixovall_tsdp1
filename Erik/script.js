const clientId = 'bb881d76eb0f48ad99384b48c5ffb09c';
const clientSecret = '34e3d33855764540ac51864a480ab114';

// Obtenir token d'accés
async function getAccessToken() {
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Error obtenint el token');
        return data.access_token;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Buscar cançons
async function searchTracks() {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) {
        alert("Introdueix el nom d'una cançó");
        return;
    }

    try {
        const token = await getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error.message || 'Error en la cerca');

        displayResults(data.tracks.items);
    } catch (error) {
        console.error('Error en la cerca:', error);
    }
}

// Mostrar resultats
function displayResults(tracks) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Esborrar resultats anteriors

    if (tracks.length === 0) {
        resultsDiv.innerHTML = '<p>No s\'han trobat resultats.</p>';
        return;
    }

    tracks.forEach(track => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('song');

        const img = document.createElement('img');
        img.src = track.album.images[0]?.url || 'https://via.placeholder.com/50';
        img.alt = track.name;

        const text = document.createElement('p');
        text.innerHTML = `<strong>${track.name}</strong> - ${track.artists.map(artist => artist.name).join(', ')}`;

        songDiv.appendChild(img);
        songDiv.appendChild(text);
        resultsDiv.appendChild(songDiv);
    });
}


document.getElementById('searchButton').addEventListener('click', searchTracks);
