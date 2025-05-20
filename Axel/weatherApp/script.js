const WEATHER_API_KEY = '212ebafd80e67458b4fdf2fe666f697f';
const lloc = 'Aixovall';
const units = 'metric';
const language = 'ca';

// Dades actuals
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${lloc}&appid=${WEATHER_API_KEY}&units=${units}&lang=${language}`)
  .then(response => response.json())
  .then(data => {
    document.getElementById('lloc').textContent = data.name;
    document.getElementById('graus').textContent = `${Math.floor(data.main.temp)}°C`;
    document.getElementById('nublado').textContent = data.weather[0].description;

    updateWindData(data);
  })
  .catch(error => console.error('Error amb la petició actual:', error));

// Previsió 5 dies
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${lloc}&units=${units}&appid=${WEATHER_API_KEY}&lang=${language}`)
  .then(response => response.json())
  .then(data => {
    const temps = data.list.map(item => item.main.temp);
    const maxTemp = Math.max(...temps);
    const minTemp = Math.min(...temps);
    document.getElementById('maxmin').textContent = `Máx. ${Math.round(maxTemp)}º Mín. ${Math.round(minTemp)}º`;

    const hores = document.querySelectorAll('.dia');
    data.list.slice(0, hores.length).forEach((item, i) => {
      const hora = new Date(item.dt * 1000).getHours();
      const icon = item.weather[0].icon;
      const temp = Math.round(item.main.temp);

      hores[i].innerHTML = `
        <p>${hora}h</p>
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="icona">
        <p>${temp}°</p>
      `;

      if (i === 0) {
        const rain = Math.round(item.pop * 100);
        const humidity = item.main.humidity;
        const pressure = item.main.pressure;

        document.getElementById('rain').textContent = `Probabilitat de pluja: ${rain}%`;
        document.getElementById('humidity').textContent = `Humitat: ${humidity}%`;
        document.getElementById('pressure').textContent = `Pressió: ${pressure} hPa`;
      }
    });
  })
  .catch(error => console.error('Error amb la previsió:', error));

// Vent actual
function updateWindData(data) {
  const windSpeed = data.wind.speed;
  const direction = data.wind.deg;
  const gust = data.wind.gust || "No disponible";

  document.getElementById('speed').textContent = `Velocitat del vent: ${windSpeed} km/h`;
  document.getElementById('direction').textContent = `Direcció: ${direction}°`;
  document.getElementById('gust').textContent = `Ratxes: ${gust} km/h`;
}
