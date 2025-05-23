const WEATHER_API_KEY = '212ebafd80e67458b4fdf2fe666f697f';

const city = 'Aixovall';
const units = 'metric';
const language = 'ca';

function updateBackgroundByWeather(mainWeather) {
  const body = document.body;
  body.className = '';
  switch (mainWeather.toLowerCase()) {
    case 'clear':
      body.style.backgroundImage = "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80')"; // dia solejat
      body.style.color = '#222';
      break;
    case 'clouds':
      body.style.backgroundImage = "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=80')"; // dia nubolat
      body.style.color = '#222';
      break;
    case 'snow':
      body.style.backgroundImage = "url('https://images.unsplash.com/photo-1600448014958-f11b0e7e3d70?auto=format&fit=crop&w=1920&q=80')"; // dia nevat
      body.style.color = '#222';
      break;
    case 'rain':
    case 'drizzle':
      body.style.backgroundImage = "url('https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1920&q=80')"; // dia plujós
      body.style.color = '#eee';
      break;
    case 'thunderstorm':
      body.style.backgroundImage = "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1920&q=80')"; // tempesta
      body.style.color = '#eee';
      break;
    default:
      body.style.backgroundImage = "none";
      body.style.backgroundColor = '#e0e0e0';
      body.style.color = '#000';
      break;
  }
}

// la resta del codi és igual que abans

function updateCurrentWeather(data) {
  document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}ºC`;
  document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;
  document.getElementById('humidity').textContent = `${data.main.humidity} %`;

  const wind = data.wind;
  document.getElementById('speed').textContent = wind.speed ? `${(wind.speed * 3.6).toFixed(1)} km/h` : '--';
  document.getElementById('direction').textContent = wind.deg !== undefined ? `${wind.deg}º` : '--';
  document.getElementById('gust').textContent = wind.gust ? `${(wind.gust * 3.6).toFixed(1)} km/h` : '--';

  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const description = data.weather[0].description;

  document.getElementById('weather-icon').src = iconUrl;
  document.getElementById('weather-icon').alt = description;
  document.getElementById('weather-description').textContent = description;

  updateBackgroundByWeather(data.weather[0].main);
}

function displayForecast(data) {
  const forecastContainer = document.getElementById('forecast');
  forecastContainer.innerHTML = '';

  const daysMap = {};
  const hoursToShow = data.list.filter((_, i) => i % 2 === 0); // cada 6 hores

  hoursToShow.forEach(item => {
    const time = new Date(item.dt * 1000);
    const dayKey = time.toLocaleDateString(language, { weekday: 'long' });
    const hour = time.getHours().toString().padStart(2, '0');

    const temp = Math.round(item.main.temp);
    const iconCode = item.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    const desc = item.weather[0].description;

    const forecastHTML = `
      <div class="forecast-item" title="${desc}" style="display:inline-block; margin: 0 8px; text-align: center;">
        <p>${hour}h</p>
        <img src="${iconUrl}" alt="${desc}" />
        <p>${temp}ºC</p>
      </div>
    `;

    if (!daysMap[dayKey]) {
      daysMap[dayKey] = [];
    }

    daysMap[dayKey].push(forecastHTML);
  });

  for (const day in daysMap) {
    const dayContainer = document.createElement('div');
    dayContainer.className = 'forecast-day';
    dayContainer.innerHTML = `
      <p style="text-transform: capitalize; font-weight: bold; margin-bottom: 4px;">${day}</p>
      <div>${daysMap[day].join('')}</div>
    `;
    forecastContainer.appendChild(dayContainer);
  }
}



async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=${units}&lang=${language}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    updateCurrentWeather(data);
  } catch (error) {
    console.error('Error carregant el temps actual:', error);
  }
}

async function fetchForecast() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=${units}&lang=${language}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    displayForecast(data);
  } catch (error) {
    console.error('Error carregant la previsió:', error);
  }
}

fetchWeather();
fetchForecast();
