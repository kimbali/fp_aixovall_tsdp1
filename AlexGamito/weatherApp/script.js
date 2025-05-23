const WEATHER_API_KEY = '212ebafd80e67458b4fdf2fe666f697f';
const city = 'Canillo';
const units = 'metric';
const language = 'ca';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=${units}&lang=${language}`)
  .then(response => response.json())
  .then(data => {
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.src = iconUrl;
    weatherIcon.alt = data.weather[0].description;

    const header = document.getElementById('weather-header');
    header.innerHTML += `
      <p class="location">${data.name}</p>
      <p class="temperature">${Math.round(data.main.temp)}º</p>
      <p class="description">${data.weather[0].description}</p>
      <p class="range">Màx. ${Math.round(data.main.temp_max)}º Mín. ${Math.round(data.main.temp_min)}º</p>
    `;

    const ventData = document.getElementById('vent-data');
    ventData.innerHTML = `
      <div>Vent <b>${data.wind.speed} km/h</b></div>
      <div>Direcció <b>${data.wind.deg}º</b></div>
      <div>Sensació tèrmica: <b>${Math.round(data.main.feels_like)}º</b></div>
    `;
  });

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${WEATHER_API_KEY}&lang=${language}`)
  .then(response => response.json())
  .then(data => {
    const hourly = document.getElementById('hourly-forecast');
    data.list.slice(0, 8).forEach(item => {
      const time = new Date(item.dt * 1000).toLocaleTimeString('ca-ES', { hour: '2-digit', minute: '2-digit' });
      const temp = Math.round(item.main.temp);
      const icon = item.weather[0].icon;
      hourly.innerHTML += `
        <div class="hour-box">
          <p>${time}</p>
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon" />
          <p>${temp}º</p>
        </div>
      `;
    });

    const daily = document.getElementById('daily-forecast');
    data.list.filter(item => item.dt_txt.includes('12:00:00')).forEach(item => {
      const day = new Date(item.dt * 1000).toLocaleDateString('ca-ES', { weekday: 'short' });
      const tempMax = Math.round(item.main.temp_max);
      const tempMin = Math.round(item.main.temp_min);
      const icon = item.weather[0].icon;
      daily.innerHTML += `
        <div class="day-box">
          <p class="day">${day}</p>
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon" />
          <p class="temp-range">${tempMin}º - ${tempMax}º</p>
        </div>
      `;
    });
  });
