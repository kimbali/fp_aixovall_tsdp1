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