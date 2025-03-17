const clientId = '2f5b3690f36248f0a3eba5616ebebc1f';
const clientSecret = '6e38cc0386104734905b601e47ee5a07';

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
        console.error('Error obtenint el token:', error);
        alert('No s\'ha pogut obtenir el token de Spotify.');
    }
}

async function searchTracks() {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) {
        alert('Si us plau, introdueix una cançó per cercar.');
        return;
    }

    try {
        const token = await getAccessToken();
        if (!token) return;

        const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`;

        const response = await fetch(url, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || 'Error en la cerca');

        return displayResults(data.tracks.items);
    } catch (error) {
        console.error('Error en la cerca:', error);
        alert('Hi ha hagut un problema amb la cerca de cançons.');
    }
}

function displayResults(tracks) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (!tracks.length) {
        resultsContainer.innerHTML = '<p>No s\'han trobat resultats.</p>';
        return;
    }

    tracks.forEach(track => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('song');

        const img = document.createElement('img');
        img.src = track.album.images[0]?.url || 'placeholder.jpg';
        img.alt = 'Portada';

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('song-info');
        infoDiv.innerHTML = `
            <strong>${track.name}</strong><br>
            ${track.artists.map(artist => artist.name).join(', ')}
        `;

        if (track.preview_url) {
            const audio = document.createElement('audio');
            audio.controls = true;
            audio.src = track.preview_url;
            infoDiv.appendChild(audio);
        } else {
            const noPreview = document.createElement('p');
            noPreview.textContent = 'No hi ha previsualització disponible';
            noPreview.style.color = 'red';

            const spotifyLink = document.createElement('a');
            spotifyLink.href = track.external_urls.spotify;
            spotifyLink.target = '_blank';
            spotifyLink.textContent = 'Escoltar a Spotify';
            spotifyLink.style.display = 'block';
            spotifyLink.style.marginTop = '5px';

            infoDiv.appendChild(noPreview);
            infoDiv.appendChild(spotifyLink);
        }

        songDiv.appendChild(img);
        songDiv.appendChild(infoDiv);
        resultsContainer.appendChild(songDiv);
    });
}

document.getElementById('searchButton').addEventListener('click', searchTracks);
