const CLIENT_ID = '0bac9cb6391a41a0ae4bcdf4f8858591'
const CLIENT_SECRET_ID = '3b4bc1d76b554d45bd9d098a7285629b'


async function getAccessToken() {
    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET_ID),
        },
        body: 'grant_type=client_credentials',
      });
  
      const data = await response.json();
  
      if (!response.ok)
        throw new Error(data.error || 'Error obteniendo el token');
  
      return data.access_token;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  async function searchTracks() {
    const query = document.getElementById('searchInput').value.trim();
  
    try {
      const token = await getAccessToken();
  
      const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        query
      )}&type=track&limit=10`;
  
      const response = await fetch(url, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
  
      const data = await response.json();
  
      return displayResults(data.tracks.items);
    } catch (error) {
      throw new Error('Error en la busqueda');
    }
  }
  
  function displayResults(tracks) {
    console.log(tracks);
  
    const resultsDiv = document.getElementById('results');
  
    console.log(resultsDiv);
  }