const WEATHER_API_KEY = '212ebafd80e67458b4fdf2fe666f697f';

const lloc = 'Aixovall';
const units = 'metric'; // centigrades o 'imperial' per Fahrenheit
const language = 'ca';

// Actualitza dades meteorològiques
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${lloc}&appid=${WEATHER_API_KEY}&units=${units}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    console.log('El temps d avui:', data);

    document.getElementById('lloc').textContent = data.name;
    document.getElementById('graus').textContent = `${Math.floor(data.main.temp)}°C`;

    const descr = data.weather[0].description;
    document.getElementById('nublado').textContent = descr;

    updateWindData(data); // **Actualitza el vent**
  })
  .catch(error => console.error('Error amb la petició:', error));

// Actualitza previsió i calcula màxima i mínima
fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=${lloc}&units=${units}&appid=${WEATHER_API_KEY}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    console.log('Previsió de 5 dies:', data);

    // Calcula màxima i mínima de la previsió
    const temps = data.list.map(item => item.main.temp);
    const maxTemp = Math.max(...temps);
    const minTemp = Math.min(...temps);

    document.getElementById('maxmin').textContent = `Máx. ${maxTemp}º Mín. ${minTemp}º`;

    data.list.forEach(item => {
      const time = new Date(item.dt * 1000).toLocaleString();
      const temperature = item.main.temp;
      const description = item.weather[0].description;
      const icon = item.weather[0].icon;
      console.log(`A les ${time} hi haurà ${description} amb una temperatura de ${temperature}°C. Icona: ${icon}`);
    });
  })
  .catch(error => console.error('Hi ha hagut un error:', error));

// Funció per actualitzar dades del vent
function updateWindData(data) {
    const windSpeed = data.wind.speed;
    const direction = data.wind.deg;
    const gust = data.wind.gust || "No disponible"; // Si no hi ha dades de ratxes
    
    document.getElementById('speed').textContent = `Velocitat del vent: ${windSpeed} km/h`;
    document.getElementById('direction').textContent = `Direcció: ${direction}°`;
    document.getElementById('gust').textContent = `Ratxes: ${gust} km/h`;
}
