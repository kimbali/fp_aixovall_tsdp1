const WEATHER_API_KEY = '212ebafd80e67458b4fdf2fe666f697f';
const city = 'Aixovall';
const units = 'metric';
const language = 'ca';

function updateWeatherData(data) {
  const temperature = Math.round(data.main.temp);
  const pressure = data.main.pressure;
  const description = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  document.querySelector('header h2').textContent = `${temperature}ºC`;
  document.querySelector('.box h3').textContent = description.charAt(0).toUpperCase() + description.slice(1);

  document.getElementById('weather-icon').src = iconUrl;
  document.getElementById('weather-description').textContent = description;

  document.querySelectorAll('.box')[1].innerHTML = `<h3>Pressió</h3><p>${pressure} hPa</p>`;
}

function updateWindData(data) {
  const { speed, deg, gust } = data.wind;
  document.getElementById('speed').textContent = `${speed} km/h`;
  document.getElementById('direction').textContent = `${deg}°`;
  document.getElementById('gust').textContent = `${gust || '—'} km/h`;
}

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=${units}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    console.log('El temps d avui: ', data);
    updateWeatherData(data);
    updateWindData(data);
  })
  .catch(error => console.error('Error amb la petició:', error));
