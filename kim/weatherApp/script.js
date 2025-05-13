const WEATHER_API_KEY = '212ebafd80e67458b4fdf2fe666f697f';

const city = 'Aixovall';
const units = 'metric'; // centigrades o 'imperial' per Fahrenheit
const language = 'ca';

// WEATHER of today
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=${units}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    console.log('El temps d avui: ', data);

    const temp = data.main.temp;
    const description = data.weather[0].description;

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById('weather-icon').src = iconUrl;
    document.getElementById('weather-description').textContent = description;
  })
  .catch(error => console.error('Error amb la petició:', error));

// FORECAST of the week
fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${WEATHER_API_KEY}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    console.log('Previsió de 5 dies: ', data);

    data.list.forEach(item => {
      const time = new Date(item.dt * 1000).toLocaleString(); // Temps en format llegible
      const temperature = item.main.temp; // Temperatura
      const description = item.weather[0].description; // Descripció de l'estat del temps
      const icon = item.weather[0].icon; // Codi de l'icona del temps
      console.log(
        `A les ${time} hi haurà ${description} amb una temperatura de ${temperature}°C. Icona: ${icon}`
      );
    });
  })
  .catch(error => {
    console.error('Hi ha hagut un error:', error);
  });
