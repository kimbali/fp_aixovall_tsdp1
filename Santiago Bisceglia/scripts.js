const clientId = '7b494704a577424bbea360c81944d53f';
const clientSecret = '9922d861e8854814a2a1ebe4a15c95dc';
const button = document.getElementById("buttonBuscar");
const input = document.getElementById("search");

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
const token = getAccessToken();
console.log(token);
