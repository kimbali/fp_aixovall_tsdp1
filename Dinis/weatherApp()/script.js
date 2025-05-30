const WEATHER_API_KEY = '212ebafd80e67458b4fdf2fe666f697f';

const city = 'Aixovall';
const units = 'metric';
const language = 'es';

function fetchCurrentWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=${units}&lang=${language}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('El temps d avui: ', data);
      displayCurrentWeather(data);
    })
    .catch(error => console.error('Error al obtener el clima actual:', error));
}

function displayCurrentWeather(data) {
  const temp = data.main.temp;
  const tempMax = data.main.temp_max;
  const tempMin = data.main.temp_min;
  const descr = data.weather[0].description;

  const ciutat = document.querySelector('.location');
  ciutat.textContent = data.name;

  const graus = document.querySelector('.temperature');
  graus.textContent = `${Math.round(temp)}º`;

  const condition = document.querySelector('.condition');
  condition.textContent = descr;

  const tempRange = document.getElementById('temperature-range');
  if (tempRange) {
    tempRange.textContent = `Màx. ${Math.round(tempMax)}º Min. ${Math.round(tempMin)}º`;
  } else {
    console.warn('Element amb ID "temperature-range" no trobat.');
  }

  const weatherDetailsContainer = document.querySelector('.weather-details');
  weatherDetailsContainer.innerHTML = '';

  const labels = {
    temp: 'Temperatura',
    feels_like: 'Sensació Tèrmica',
    temp_min: 'Temperatura Mínima',
    temp_max: 'Temperatura Màxima',
    humidity: 'Humitat',
    visibility: 'Visibilitat',
  };

  const createDetailBox = (label, value) => {
    const detailBox = document.createElement('div');
    detailBox.classList.add('detail');

    const labelElement = document.createElement('p');
    labelElement.classList.add('label');
    labelElement.textContent = label;

    const detailValue = document.createElement('p');
    detailValue.classList.add('value');
    detailValue.textContent = value;

    detailBox.appendChild(labelElement);
    detailBox.appendChild(detailValue);
    weatherDetailsContainer.appendChild(detailBox);
  };

  if (labels.temp) createDetailBox(labels.temp, `${data.main.temp}º`);
  if (labels.feels_like) createDetailBox(labels.feels_like, `${data.main.feels_like}º`);
  if (labels.temp_min) createDetailBox(labels.temp_min, `${data.main.temp_min}º`);
  if (labels.temp_max) createDetailBox(labels.temp_max, `${data.main.temp_max}º`);
  if (labels.humidity) createDetailBox(labels.humidity, `${data.main.humidity}%`);
  if (labels.visibility) createDetailBox(labels.visibility, `${data.visibility / 1000} km`);

  const windBox = document.createElement('div');
  windBox.classList.add('detail');

  const windLabel = document.createElement('p');
  windLabel.classList.add('label');
  windLabel.textContent = 'Velocitat del Vent';

  const windValue = document.createElement('p');
  windValue.classList.add('value');
  windValue.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;

  windBox.appendChild(windLabel);
  windBox.appendChild(windValue);
  weatherDetailsContainer.appendChild(windBox);
}

function fetchWeatherForecast() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${WEATHER_API_KEY}&lang=${language}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('Previsió de 5 dies: ', data);
      displayHourlyForecast(data);
      displayDailyForecast(data);
    })
    .catch(error => {
      console.error('Error al obtener la previsión:', error);
    });
}

function displayHourlyForecast(data) {
  const forecastContainer = document.querySelector('.forecast-container');
  forecastContainer.innerHTML = '';

  const today = new Date().toDateString();
  const todayForecast = data.list.filter(
    item => new Date(item.dt * 1000).toDateString() === today
  );

  todayForecast.forEach(item => {
    const time = new Date(item.dt * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const temperature = Math.round(item.main.temp);
    const icon = item.weather[0].icon;

    const forecastItem = document.createElement('div');
    forecastItem.classList.add('forecast-item');

    const timeElement = document.createElement('p');
    timeElement.classList.add('forecast-time');
    timeElement.textContent = time;

    const iconElement = document.createElement('img');
    iconElement.classList.add('forecast-icon');
    iconElement.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    iconElement.alt = item.weather[0].description;

    const tempElement = document.createElement('p');
    tempElement.classList.add('forecast-temp');
    tempElement.textContent = `${temperature}º`;

    forecastItem.appendChild(timeElement);
    forecastItem.appendChild(iconElement);
    forecastItem.appendChild(tempElement);

    forecastContainer.appendChild(forecastItem);
  });
}

function displayDailyForecast(data) {
  const forecastNextContainer = document.querySelector('.forecast-next-container');
  forecastNextContainer.innerHTML = '';

  const dailyForecast = data.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toDateString();
    acc[date] = acc[date] || [];
    acc[date].push(item);
    return acc;
  }, {});

  Object.entries(dailyForecast)
    .slice(0, 5)
    .forEach(([date, items]) => {
      const day = new Date(date).toLocaleDateString('es-ES', { weekday: 'long' });
      const avgTemp = Math.round(
        items.reduce((sum, item) => sum + item.main.temp, 0) / items.length
      );
      const icon = items[0].weather[0].icon;

      const forecastItem = document.createElement('div');
      forecastItem.classList.add('forecast-item');
      const dayElement = document.createElement('p');
      dayElement.classList.add('forecast-day');
      dayElement.textContent = day;

      const iconElement = document.createElement('img');
      iconElement.classList.add('forecast-icon');
      iconElement.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      iconElement.alt = items[0].weather[0].description;

      const tempElement = document.createElement('p');
      tempElement.classList.add('forecast-temp');
      tempElement.textContent = `${avgTemp}º`;

      forecastItem.appendChild(dayElement);
      forecastItem.appendChild(iconElement);
      forecastItem.appendChild(tempElement);
      forecastNextContainer.appendChild(forecastItem);
    });
}

fetchCurrentWeather();
fetchWeatherForecast();
