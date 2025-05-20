const WEATHER_API_KEY = '212ebafd80e67458b4fdf2fe666f697f';

const city = 'nicaragua'; 
const units = 'metric'; 
const language = 'es';


fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=${units}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    console.log('El temps d avui: ', data);

    
    document.getElementById('lloc').textContent = data.name;
    document.getElementById('graus').textContent = `${Math.round(data.main.temp)}º`;
    document.getElementById('nublado').textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    document.getElementById('maxmin').textContent = `Màx. ${Math.round(data.main.temp_max)}º  Mín. ${Math.round(data.main.temp_min)}º`;
  })
  .catch(error => console.error('Error amb la petició:', error));


fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=${units}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    
    const graella = document.getElementById('graella');
    graella.innerHTML = '<div class="background"></div>';
    const now = new Date();
    const hours = data.list.filter(item => {
      const date = new Date(item.dt * 1000);
      return date > now && date.getHours() % 3 === 0;
    }).slice(0, 6);

    hours.forEach((item, idx) => {
      const date = new Date(item.dt * 1000);
      const hour = idx === 0 ? 'Ara' : date.getHours();
      const icon = getWeatherIcon(item.weather[0].main, date.getHours());
      const temp = `${Math.round(item.main.temp)}º`;
      const rain = item.pop ? Math.round(item.pop * 100) : 0;

      const diaDiv = document.createElement('div');
      diaDiv.className = 'dia';

      const cuan = document.createElement('p');
      cuan.className = 'cuan';
      cuan.textContent = hour;

      const icona = document.createElement('p');
      icona.className = 'icona';
      icona.innerHTML = icon + (rain > 0 ? `<span class="percent">${rain}%</span>` : '');

      const graus2 = document.createElement('p');
      graus2.className = 'graus2';
      graus2.textContent = temp;

      diaDiv.appendChild(cuan);
      diaDiv.appendChild(icona);
      diaDiv.appendChild(graus2);

      graella.appendChild(diaDiv);
    });

    
    const info = document.getElementById('info');
    const rainHour = hours.find(item => item.pop && item.pop > 0.2);
    const windMax = Math.max(...hours.map(item => item.wind && item.wind.gust ? item.wind.gust : 0));
    info.querySelector('.resum').textContent =
      (rainHour ? `S’espera que plogui sobre les ${new Date(rainHour.dt * 1000).getHours()}:00. ` : '') +
      (windMax ? `Les ràfegues de vent arriben als ${Math.round(windMax)} km/h.` : '');

    
    const dies = document.getElementById('dies');
    dies.innerHTML = '';
    const days = {};

    data.list.forEach(item => {
      const date = new Date(item.dt * 1000);
      const dayKey = date.toLocaleDateString('ca-ES', { weekday: 'short', day: 'numeric', month: 'numeric' });
      if (!days[dayKey]) days[dayKey] = [];
      days[dayKey].push(item);
    });

    Object.entries(days).slice(0, 5).forEach(([day, items], idx) => {
      const min = Math.round(Math.min(...items.map(i => i.main.temp_min)));
      const max = Math.round(Math.max(...items.map(i => i.main.temp_max)));
      const pop = Math.round(Math.max(...items.map(i => i.pop ? i.pop * 100 : 0)));
      const icon = getWeatherIcon(items[0].weather[0].main, 12);

      const fila = document.createElement('div');
      fila.className = 'fila';

      const nomdia = document.createElement('span');
      nomdia.className = 'nomdia';
      nomdia.textContent = idx === 0 ? 'Avui' : day.split(',')[0];

      const icona = document.createElement('span');
      icona.className = 'icona';
      icona.innerHTML = icon;

      const percent = document.createElement('span');
      percent.className = 'percent';
      percent.textContent = `${pop}%`;

      const minmax = document.createElement('span');
      minmax.className = 'minmax';
      minmax.innerHTML = `<span class="min">${min}º</span> <span class="barra"></span> <span class="max">${max}º</span>`;

      fila.appendChild(nomdia);
      fila.appendChild(icona);
      fila.appendChild(percent);
      fila.appendChild(minmax);

      dies.appendChild(fila);
    });
  })
  .catch(error => console.error('Error amb la previsió:', error));


function getWeatherIcon(main, hour) {
  switch (main) {
    case 'Clear':
      return hour >= 20 || hour < 7 ? '🌙' : '☀️';
    case 'Clouds':
      return '☁️';
    case 'Rain':
      return '🌧️';
    case 'Drizzle':
      return '🌦️';
    case 'Thunderstorm':
      return '⛈️';
    case 'Snow':
      return '❄️';
    case 'Mist':
    case 'Fog':
    case 'Haze':
      return '🌫️';
    default:
      return '🌡️';
  }
}

