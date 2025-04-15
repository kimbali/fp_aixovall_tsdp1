async function searchNASA() {
    const query = document.getElementById('searchInput').value.trim();
    const container = document.getElementById('resultsContainer');
    container.innerHTML = '';
  
    if (!query) {
      alert('Por favor, escribe algo para buscar.');
      return;
    }
  
    const apiKey = 'rOl7eZ5x90wC3XGU6PGs1aVlFM9oVOBnAQddMkIa';
    const url = `https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
      const items = data.collection.items;
  
      if (items.length === 0) {
        container.innerHTML = '<p>No se encontraron resultados.</p>';
        return;
      }
  
      items.slice(0, 10).forEach(item => {
        const image = item.links ? item.links[0].href : '';
        const title = item.data[0].title;
        const description = item.data[0].description || 'Sin descripción disponible.';
  
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${image}" alt="${title}">
          <div class="info">
            <h3>${title}</h3>
            <p>${description.slice(0, 100)}...</p>
          </div>
        `;
        container.appendChild(card);
      });
    } catch (error) {
      console.error('Error al buscar en la NASA API:', error);
      container.innerHTML = '<p>Error al conectar con la NASA API.</p>';
    }
  }
  