const clientId = 'b8b3567160e8478ab5114342a823912d';
const clientSecret = 'eb4b827b606a49318fdf51f38c2f7b6d';
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

if (!response.ok) throw new Error(data.error || 'Error obteniendo el token');
return data.access_token;
} catch (error) {

console.error('Error:', error);
}
}

async function searchTracks() {
    const query = document.getElementById('searchInput');

    console.log(query);

    try {
        const token = await getAccessToken();

        const URL = 'https://api.spotify.com/v1/search?offset=0&limit=20&query=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album&locale=en-US,en;q%3D0.9,es;q%3D0.8'

        const response = await fetch(url, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        });

        const data = await response.json();

        console.log('token: ', token);
        return displayresults(data.tracks.items);
    }  catch (error) {
        throw new Error('Error en la busqueda');
    }
}

function displayResults(trakcs) {
    console.log(searchTracks);

}