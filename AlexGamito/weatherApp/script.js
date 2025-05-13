const WEATHER_API_KEY = '212ebafd80e67458b4fdf2fe666f697f';

const city = 'Canillo'; // Nom de la ciutat
const units = 'metric'; // centigrades o 'imperial' per Fahrenheit
const language = 'ca';

// Mostrar la fecha y hora actual en la cabecera
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' };
  const dateStr = now.toLocaleDateString('ca-ES', options);
  let dateEl = document.getElementById('weather-date');
  if (!dateEl) {
    dateEl = document.createElement('div');
    dateEl.id = 'weather-date';
    dateEl.style.fontSize = '1em';
    dateEl.style.color = '#007bff';
    dateEl.style.marginBottom = '6px';
    document.getElementById('weather-header').prepend(dateEl);
  }
  dateEl.textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
}
updateDateTime();
setInterval(updateDateTime, 60000);

// Mostrar alerta si la sensació tèrmica es molt diferent de la temperatura real
function checkThermalAlert(feels, temp) {
  const diff = Math.abs(feels - temp);
  if (diff >= 5) {
    let alertEl = document.getElementById('thermal-alert');
    if (!alertEl) {
      alertEl = document.createElement('div');
      alertEl.id = 'thermal-alert';
      alertEl.style.background = '#ffdd57';
      alertEl.style.color = '#222';
      alertEl.style.borderRadius = '8px';
      alertEl.style.padding = '8px 12px';
      alertEl.style.margin = '10px auto 0 auto';
      alertEl.style.fontWeight = 'bold';
      alertEl.style.maxWidth = '320px';
      alertEl.style.boxShadow = '0 2px 8px #ffdd5733';
      document.querySelector('.container').prepend(alertEl);
    }
    alertEl.textContent = 'Atenció: La sensació tèrmica difereix molt de la temperatura real!';
  } else {
    const alertEl = document.getElementById('thermal-alert');
    if (alertEl) alertEl.remove();
  }
}

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
      <div style="display:flex;align-items:center;justify-content:center;gap:10px;">
        <span>Direcció</span>
        <span style="display:inline-block;width:40px;height:40px;position:relative;">
          <svg width="40" height="40" style="transform:rotate(${data.wind.deg}deg);">
            <circle cx="20" cy="20" r="18" fill="none" stroke="#007bff" stroke-width="2"/>
            <polygon points="20,6 16,18 20,14 24,18" fill="#007bff"/>
          </svg>
          <span style="position:absolute;top:2px;left:18px;font-size:0.7em;color:#007bff;">N</span>
        </span>
        <span><b>${data.wind.deg}º</b></span>
      </div>
    `;

    // Sensació tèrmica al lado del viento (asegura que se muestra correctament)
    if (document.getElementById('sensacio-data')) {
      document.getElementById('sensacio-data').innerHTML = `
        <div class="sensacio-temp">${Math.round(data.main.feels_like)}º</div>
        <div class="sensacio-desc">
          Sensació tèrmica<br>
          ${data.main.feels_like > data.main.temp ? 'Més alta' : 'Més baixa'} que la temperatura real.
        </div>
      `;
      checkThermalAlert(data.main.feels_like, data.main.temp);
    }

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

    // Icono principal del tiempo
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const weatherIconEl = document.getElementById('weather-icon');
    if (weatherIconEl) {
      weatherIconEl.src = iconUrl;
      weatherIconEl.alt = data.weather[0].description;
    }

    // Header info
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
    document.getElementById('weather-header').innerHTML += headerHTML;

    // Solo la rueda del viento
    if (document.getElementById('vent-data')) {
      const windSpeed = Math.round(data.wind.speed);
      const windDeg = Math.round(data.wind.deg);
      const windCard = degToCardinal(windDeg);

      document.getElementById('vent-data').innerHTML = `
        <span class="wind-compass">
          <svg width="100%" height="100%" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" fill="#f7fbff" fill-opacity="0.7"/>
            <circle cx="60" cy="60" r="48" fill="none" stroke="#bfc9d1" stroke-width="2"/>
            <text x="60" y="24" text-anchor="middle" font-size="1.1em" fill="#007bff" font-weight="bold">N</text>
            <text x="60" y="112" text-anchor="middle" font-size="1.1em" fill="#007bff" font-weight="bold">S</text>
            <text x="18" y="66" text-anchor="middle" font-size="1.1em" fill="#007bff" font-weight="bold">O</text>
            <text x="102" y="66" text-anchor="middle" font-size="1.1em" fill="#007bff" font-weight="bold">E</text>
            <g style="transition: transform 0.7s cubic-bezier(.4,2,.6,1);transform:rotate(${windDeg}deg);transform-origin:60px 60px;">
              <polygon points="60,18 54,90 60,60 66,90" fill="#007bff"/>
              <circle cx="60" cy="60" r="8" fill="#fff" stroke="#007bff" stroke-width="2"/>
            </g>
            <text x="60" y="75" text-anchor="middle" font-size="1em" fill="#007bff" font-weight="bold">${windSpeed} km/h</text>
            <text x="60" y="90" text-anchor="middle" font-size="0.9em" fill="#444" font-weight="bold">${windDeg}º ${windCard}</text>
          </svg>
        </span>
      `;
    }

    function degToCardinal(deg) {
      const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO', 'N'];
      return dirs[Math.round(deg / 45) % 8];
    }
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
    // Sección de viento ultra-mejorada: animación, sombra, colores suaus, flecha 3D, graus i direcció destacats, intercardinals i animació suau
    if (document.getElementById('vent-data')) {
      const windSpeed = Math.round(data.wind.speed);
      const windDeg = Math.round(data.wind.deg);
      const windCard = degToCardinal(windDeg);

      document.getElementById('vent-data').innerHTML = `
        <div class="wind-info">
          <div class="wind-speed">${windSpeed} <span style="font-size:0.5em;font-weight:400;">km/h</span></div>
          <div class="wind-dir">${windDeg}º</div>
          <div class="wind-card">${windCard}</div>
        </div>
        <span class="wind-compass" style="background: radial-gradient(circle at 50% 50%, #e3f0fa 60%, #b3d1f7 100%); border-radius: 50%; box-shadow: 0 4px 24px #007bff33;">
          <svg width="100%" height="100%" viewBox="0 0 220 220">
            <!-- Sombra exterior -->
            <circle cx="110" cy="110" r="100" fill="#fff" fill-opacity="0.13"/>
            <!-- Círculo principal -->
            <circle cx="110" cy="110" r="90" fill="none" stroke="#bfc9d1" stroke-width="4"/>
            <!-- Marcas cardinales -->
            <text x="110" y="38" text-anchor="middle" font-size="2em" fill="#007bff" font-weight="bold" style="text-shadow:0 2px 8px #fff;">N</text>
            <text x="110" y="208" text-anchor="middle" font-size="2em" fill="#007bff" font-weight="bold" style="text-shadow:0 2px 8px #fff;">S</text>
            <text x="38" y="116" text-anchor="middle" font-size="2em" fill="#007bff" font-weight="bold" style="text-shadow:0 2px 8px #fff;">O</text>
            <text x="182" y="116" text-anchor="middle" font-size="2em" fill="#007bff" font-weight="bold" style="text-shadow:0 2px 8px #fff;">E</text>
            <!-- Intercardinales -->
            <text x="60" y="60" text-anchor="middle" font-size="1.1em" fill="#007bff" font-weight="bold">NO</text>
            <text x="160" y="60" text-anchor="middle" font-size="1.1em" fill="#007bff" font-weight="bold">NE</text>
            <text x="60" y="170" text-anchor="middle" font-size="1.1em" fill="#007bff" font-weight="bold">SO</text>
            <text x="160" y="170" text-anchor="middle" font-size="1.1em" fill="#007bff" font-weight="bold">SE</text>
            <!-- Marcas menores -->
            <line x1="110" y1="18" x2="110" y2="32" stroke="#bfc9d1" stroke-width="1.5"/>
            <line x1="110" y1="188" x2="110" y2="202" stroke="#bfc9d1" stroke-width="1.5"/>
            <line x1="18" y1="110" x2="32" y2="110" stroke="#bfc9d1" stroke-width="1.5"/>
            <line x1="188" y1="110" x2="202" y2="110" stroke="#bfc9d1" stroke-width="1.5"/>
            <!-- Flecha de viento animada y 3D -->
            <g style="transition: transform 0.7s cubic-bezier(.4,2,.6,1);transform:rotate(${windDeg}deg);transform-origin:110px 110px;">
              <polygon points="110,38 100,170 110,110 120,170" fill="url(#arrowGradient)" stroke="#007bff" stroke-width="2" filter="drop-shadow(0 2px 8px #007bff55)"/>
              <circle cx="110" cy="110" r="18" fill="#fff" stroke="#007bff" stroke-width="3"/>
            </g>
            <defs>
              <linearGradient id="arrowGradient" x1="110" y1="38" x2="110" y2="170" gradientUnits="userSpaceOnUse">
                <stop stop-color="#007bff" />
                <stop offset="1" stop-color="#b3d1f7" />
              </linearGradient>
            </defs>
            <!-- Valor en el centre -->
            <text x="110" y="128" text-anchor="middle" font-size="1.7em" fill="#007bff" font-weight="bold" style="text-shadow:0 2px 8px #fff;">${windSpeed} km/h</text>
            <!-- Graus en el centre, més petit -->
            <text x="110" y="150" text-anchor="middle" font-size="1.1em" fill="#444" font-weight="bold">${windDeg}º ${windCard}</text>
          </svg>
        </span>
      `;
    }

    // Funció per convertir graus a cardinal
    function degToCardinal(deg) {
      const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO', 'N'];
      return dirs[Math.round(deg / 45) % 8];
    }
  })
  .catch(error => console.error('Error amb la petició:', error));

// Añadir/actualizar solo la rueda del viento en el contenedor 'vent-data'
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=${units}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    if (document.getElementById('vent-data')) {
      const windSpeed = Math.round(data.wind.speed);
      const windDeg = Math.round(data.wind.deg);
      const windCard = degToCardinal(windDeg);

      document.getElementById('vent-data').innerHTML = `
        <span class="wind-compass" style="background: radial-gradient(circle at 50% 50%, #e3f0fa 60%, #b3d1f7 100%); border-radius: 50%; box-shadow: 0 4px 24px #007bff33;">
          <svg width="100%" height="100%" viewBox="0 0 220 220">
            <circle cx="110" cy="110" r="100" fill="#fff" fill-opacity="0.13"/>
            <circle cx="110" cy="110" r="90" fill="none" stroke="#bfc9d1" stroke-width="4"/>
            <text x="110" y="38" text-anchor="middle" font-size="2em" fill="#007bff" font-weight="bold" style="text-shadow:0 2px 8px #fff;">N</text>
            <text x="110" y="208" text-anchor="middle" font-size="2em" fill="#007bff" font-weight="bold" style="text-shadow:0 2px 8px #fff;">S</text>
            <text x="38" y="116" text-anchor="middle" font-size="2em" fill="#007bff" font-weight="bold" style="text-shadow:0 2px 8px #fff;">O</text>
            <text x="182" y="116" text-anchor="middle" font-size="2em" fill="#007bff" font-weight="bold" style="text-shadow:0 2px 8px #fff;">E</text>
            <text x="60" y="60" text-anchor="middle" font-size="1.1em" fill="#007bff" font-weight="bold">NO</text>
            <text x="160" y="60" text-anchor="middle" font-size="1.1em" fill="#007bff" font-weight="bold">NE</text>
            <text x="60" y="170" text-anchor="middle" font-size="1.1em" fill="#007bff" font-weight="bold">SO</text>
            <text x="160" y="170" text-anchor="middle" font-size="1.1em" fill="#007bff" font-weight="bold">SE</text>
            <line x1="110" y1="18" x2="110" y2="32" stroke="#bfc9d1" stroke-width="1.5"/>
            <line x1="110" y1="188" x2="110" y2="202" stroke="#bfc9d1" stroke-width="1.5"/>
            <line x1="18" y1="110" x2="32" y2="110" stroke="#bfc9d1" stroke-width="1.5"/>
            <line x1="188" y1="110" x2="202" y2="110" stroke="#bfc9d1" stroke-width="1.5"/>
            <g style="transition: transform 0.7s cubic-bezier(.4,2,.6,1);transform:rotate(${windDeg}deg);transform-origin:110px 110px;">
              <polygon points="110,38 100,170 110,110 120,170" fill="url(#arrowGradient)" stroke="#007bff" stroke-width="2" filter="drop-shadow(0 2px 8px #007bff55)"/>
              <circle cx="110" cy="110" r="18" fill="#fff" stroke="#007bff" stroke-width="3"/>
            </g>
            <defs>
              <linearGradient id="arrowGradient" x1="110" y1="38" x2="110" y2="170" gradientUnits="userSpaceOnUse">
                <stop stop-color="#007bff" />
                <stop offset="1" stop-color="#b3d1f7" />
              </linearGradient>
            </defs>
            <text x="110" y="128" text-anchor="middle" font-size="1.7em" fill="#007bff" font-weight="bold" style="text-shadow:0 2px 8px #fff;">${windSpeed} km/h</text>
            <text x="110" y="150" text-anchor="middle" font-size="1.1em" fill="#444" font-weight="bold">${windDeg}º ${windCard}</text>
          </svg>
        </span>
      `;
    }

    function degToCardinal(deg) {
      const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO', 'N'];
      return dirs[Math.round(deg / 45) % 8];
    }
  })
  .catch(error => console.error('Error amb la petició:', error));
