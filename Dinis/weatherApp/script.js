const WEATHER_API_KEY = '212ebafd80e67458b4fdf2fe666f697f';

const city = 'Andorra';
const units = 'metric'; // centigrades o 'imperial' per Fahrenheit
const language = 'es';


fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=${units}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    console.log('El temps d avui: ', data);

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
      pressure: 'Pressió',
      humidity: 'Humitat',
      sea_level: 'Nivell del Mar',
      grnd_level: 'Nivell del Terreny',
      visibility: 'Visibilitat'
    };

    Object.entries(data.main).forEach(([key, value]) => {
      const detailBox = document.createElement('div');
      detailBox.classList.add('detail');

      const label = document.createElement('p');
      label.classList.add('label');
      label.textContent = labels[key] || key.charAt(0).toUpperCase() + key.slice(1);

      const detailValue = document.createElement('p');
      detailValue.classList.add('value');
      detailValue.textContent = `${value}`;

      detailBox.appendChild(label);
      detailBox.appendChild(detailValue);
      weatherDetailsContainer.appendChild(detailBox);
    });

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

    const visibilityBox = document.createElement('div');
    visibilityBox.classList.add('detail');

    const visibilityLabel = document.createElement('p');
    visibilityLabel.classList.add('label');
    visibilityLabel.textContent = 'Visibilitat';

    const visibilityValue = document.createElement('p');
    visibilityValue.classList.add('value');
    visibilityValue.textContent = `${data.visibility / 1000} km`;

    visibilityBox.appendChild(visibilityLabel);
    visibilityBox.appendChild(visibilityValue);
    weatherDetailsContainer.appendChild(visibilityBox);

    const weatherBox = document.createElement('div');
    weatherBox.classList.add('detail');

    const weatherLabel = document.createElement('p');
    weatherLabel.classList.add('label');
    weatherLabel.textContent = 'Descripció';

    const weatherValue = document.createElement('p');
    weatherValue.classList.add('value');
    weatherValue.textContent = data.weather[0].description;

    weatherBox.appendChild(weatherLabel);
    weatherBox.appendChild(weatherValue);
    weatherDetailsContainer.appendChild(weatherBox);

    const iconBox = document.createElement('div');
    iconBox.classList.add('detail');

    const iconLabel = document.createElement('p');
    iconLabel.classList.add('label');
    iconLabel.textContent = 'Icona';

    const iconValue = document.createElement('img');
    iconValue.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    iconValue.alt = data.weather[0].description;
    iconValue.style.width = '50px';
    iconValue.style.height = '50px';

    iconBox.appendChild(iconLabel);
    iconBox.appendChild(iconValue);
    weatherDetailsContainer.appendChild(iconBox);
  })
  .catch(error => console.error('Error amb la petició:', error));

fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${WEATHER_API_KEY}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    console.log('Previsió de 5 dies: ', data);

    const forecastContainer = document.querySelector('.forecast-container');
    forecastContainer.innerHTML = '';

    const today = new Date().toDateString();
    const todayForecast = data.list.filter(item => {
      const forecastDate = new Date(item.dt * 1000).toDateString();
      return forecastDate === today;
    });

    todayForecast.forEach(item => {
      const time = new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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

    const forecastNextContainer = document.querySelector('.forecast-next-container');
    forecastNextContainer.innerHTML = '';

    const dailyForecast = {};
    data.list.forEach(item => {
      const date = new Date(item.dt * 1000).toDateString();
      if (!dailyForecast[date]) {
        dailyForecast[date] = [];
      }
      dailyForecast[date].push(item);
    });

    Object.entries(dailyForecast).slice(0, 5).forEach(([date, items]) => {
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
  })
  .catch(error => {
    console.error('Hi ha hagut un error:', error);
  });