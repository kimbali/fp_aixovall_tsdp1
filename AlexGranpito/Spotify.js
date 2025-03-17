const clientId = '80cb10eb3f8d4dc7a68072da5a708308';
const clientSecret = '6e95ea323bdd467c9e6e50c81877838e';
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