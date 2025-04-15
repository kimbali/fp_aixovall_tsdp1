const apiUrl = 'https://api.pccomponentes.com/v1/products'; 
const apiKey = 'LA_TEVA_API_KEY'; 

async function carregarProductes() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    const data = await response.json();
    
    const productes = data.products; 

    const productesContainer = document.getElementById('productes');
    
    productesContainer.innerHTML = '';

    productes.forEach(producte => {
      const divProducte = document.createElement('div');
      divProducte.classList.add('producte');

      divProducte.innerHTML = `
        <img src="${producte.image}" alt="${producte.name}">
        <h3>${producte.name}</h3>
        <p>${producte.description}</p>
        <p><strong>Preu:</strong> ${producte.price}€</p>
        <button>Afegir al Carret</button>
      `;
      
      productesContainer.appendChild(divProducte);
    });

  } catch (error) {
    console.error('Error carregant els productes:', error);
  }
}

document.addEventListener('DOMContentLoaded', carregarProductes);
