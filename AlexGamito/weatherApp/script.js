const WEATHER_API_KEY = '212ebafd80e67458b4fdf2fe666f697f';

const city = 'Canillo'; // Nom de la ciutat
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
    const descr = data.weather[0].description;
    document.querySelector('#weather').innerHTML = `${temp} °C - ${descr}`;

    // Sensació tèrmica
    document.getElementById('sensacio-data').innerHTML = `
      <div style="font-size:2.5rem;font-weight:600;">${Math.round(data.main.feels_like)}º</div>
      <div>La sensació tèrmica és ${data.main.feels_like > data.main.temp ? 'més alta' : 'més baixa'} que la temperatura real.</div>
    `;

    // UV Index (dummy, OpenWeatherMap free API no UV, so static)
    document.getElementById('uv-data').innerHTML = `
      <div style="font-size:2.5rem;font-weight:600;">0</div>
      <div>Baix<br><span style="display:inline-block;width:60px;height:6px;background:linear-gradient(to right, #7ed957 0%, #ffe600 50%, #ff4e50 100%);border-radius:3px;margin:4px 0;"></span><br>Els nivells seran baixos tot el dia.</div>
    `;

    // Vent
    document.getElementById('vent-data').innerHTML = `
      <div>Vent <b>${data.wind.speed} km/h</b></div>
      <div>Direcció <b>${data.wind.deg}º</b></div>
    `;

    // Posta i sortida de sol
    const sunset = new Date(data.sys.sunset * 1000);
    const sunrise = new Date(data.sys.sunrise * 1000);
    document.getElementById('posta-data').innerHTML = `
      <div style="font-size:2rem;">${sunset.getHours().toString().padStart(2,'0')}:${sunset.getMinutes().toString().padStart(2,'0')}</div>
      <div>Sortida: ${sunrise.getHours().toString().padStart(2,'0')}:${sunrise.getMinutes().toString().padStart(2,'0')}</div>
    `;

    // Precipitació (dummy, OpenWeatherMap free API no rain last 24h, so static)
    document.getElementById('precipitacio-data').innerHTML = `
      <div style="font-size:2rem;">${data.rain && data.rain['1h'] ? data.rain['1h'] : 0} mm</div>
      <div>Avui<br><span style="font-size:0.9rem;">Demà s'esperen precipitacions de fins a 4 mm.</span></div>
    `;

    // Visibilitat
    document.getElementById('visibilitat-data').innerHTML = `
      <div style="font-size:2rem;">${Math.round(data.visibility/1000)} km</div>
    `;

    // Humitat
    document.getElementById('humitat-data').innerHTML = `
      <div style="font-size:2rem;">${data.main.humidity} %</div>
    `;
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

// Populate the header dynamically
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=${units}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    const location = data.name;
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const maxTemp = Math.round(data.main.temp_max);
    const minTemp = Math.round(data.main.temp_min);

    const headerHTML = `
      <p class="location">${location}</p>
      <p class="temperature">${temperature}º</p>
      <p class="description">${description}</p>
      <p class="range">Màx. ${maxTemp}º Mín. ${minTemp}º</p>
    `;

    document.getElementById('weather-header').innerHTML = headerHTML;
  })
  .catch(error => console.error('Error fetching weather data:', error));

// Populate the hourly forecast dynamically
fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${WEATHER_API_KEY}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    const hourlyContainer = document.getElementById('hourly-forecast');
    const hourlyData = data.list.slice(0, 8); // Get the next 8 hours

    hourlyData.forEach(item => {
      const time = new Date(item.dt * 1000).toLocaleTimeString('ca-ES', {
        hour: '2-digit',
        minute: '2-digit',
      });
      const temp = Math.round(item.main.temp);
      const icon = item.weather[0].icon;

      const hourHTML = `
        <div class="hour-box">
          <p>${time}</p>
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon" />
          <p>${temp}º</p>
        </div>
      `;

      hourlyContainer.innerHTML += hourHTML;
    });
  })
  .catch(error => console.error('Error fetching hourly forecast:', error));

// Populate the daily forecast dynamically
fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${WEATHER_API_KEY}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    const dailyContainer = document.getElementById('daily-forecast');
    const dailyData = data.list.filter(item =>
      item.dt_txt.includes('12:00:00')
    ); // Get daily data at 12:00 PM

    dailyData.forEach(item => {
      const day = new Date(item.dt * 1000).toLocaleDateString('ca-ES', {
        weekday: 'short',
      });
      const tempMax = Math.round(item.main.temp_max);
      const tempMin = Math.round(item.main.temp_min);
      const icon = item.weather[0].icon;

      const dayHTML = `
        <div class="day-box">
          <p class="day">${day}</p>
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon" />
          <p class="temp-range">${tempMin}º - ${tempMax}º</p>
        </div>
      `;

      dailyContainer.innerHTML += dayHTML;
    });
  })
  .catch(error => console.error('Error fetching daily forecast:', error));

// Añadir/actualizar la información del viento en el contenedor 'vent-data'
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=${units}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    // Información del vent
    if (document.getElementById('vent-data')) {
      document.getElementById('vent-data').innerHTML = `
        <div>Vent <b>${data.wind.speed} km/h</b></div>
        <div>Direcció <b>${data.wind.deg}º</b></div>
      `;
    }
  })
  .catch(error => console.error('Error amb la petició:', error));
