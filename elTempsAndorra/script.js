const API_KEY = '212ebafd80e67458b4fdf2fe666f697f';

const ANDORRA_LATITUDE = 42.5078;
const ANDORRA_LONGITUDE = 1.5211;

const CATALA = 'ca';

function fetchCurrentWeather() {
  const urlAvui = `https://api.openweathermap.org/data/2.5/weather?lat=${ANDORRA_LATITUDE}&lon=${ANDORRA_LONGITUDE}&units=metric&lang=${CATALA}&appid=${API_KEY}`;

  fetch(urlAvui)
    .then(res => res.json())
    .then(data => {
      console.log('Estat del cel:', data.weather[0].description);
      console.log('Temperatura actual:', data.main.temp + ' ºC');
      console.log('Temperatura màxima:', data.main.temp_max + ' ºC');
      console.log('Temperatura mínima:', data.main.temp_min + ' ºC');
      console.log('Vent:', data.wind.speed + ' m/s');
      console.log('Direcció del vent:', data.wind.deg + ' º');

      // Icono + descripcio
      const descripcio = data.weather[0].description;
      const icona = data.weather[0].icon;

      document.getElementById('descripcio').textContent = descripcio;
      document.getElementById(
        'icona'
      ).src = `https://openweathermap.org/img/wn/${icona}@2x.png`;
      document.getElementById('icona').alt = descripcio;

      // Temperatura + temperatura maxima i minima
      const graus = document.getElementById('graus');
      graus.textContent = data.main.temp + ' ºC';

      const maxMin = document.getElementById('maxmin');
      maxMin.innerHTML = `
      <span class="max">${data.main.temp_max}</span>  
      <span class="min">${data.main.temp_min}</span>
      `;

      // Vent + direccio
      const velocitat = document.getElementById('velocitat');
      velocitat.textContent = data.wind.speed + ' m/s';

      const direccio = document.getElementById('direccio');
      direccio.textContent = data.wind.deg + ' º';

      // El día d'avui: Miercoles 16 de Abril
    });
}
fetchCurrentWeather();

// Aquest endpoint retorna 40 valors: 8 per dia (cada 3h).
// Nosaltres agafem només les dades de les 12:00h perquè són les més representatives del migdia.
// Es pot canviar l'hora buscant per dt_txt.includes("15:00:00"), per exemple.
function fetchForecast() {
  const urlSetmana = `https://api.openweathermap.org/data/2.5/forecast?lat=${ANDORRA_LATITUDE}&lon=${ANDORRA_LONGITUDE}&units=metric&lang=${CATALA}&appid=${API_KEY}`;

  fetch(urlSetmana)
    .then(res => res.json())
    .then(data => {
      const diesContainer = document.getElementById('dies');

      // Agrupem per dia (filtrant les 12:00h)
      const previsions = data.list.filter(item =>
        item.dt_txt.includes('12:00:00')
      );

      previsions.forEach(item => {
        const date = new Date(item.dt * 1000);
        const diaSetmana = date.toLocaleDateString('ca-ES', {
          weekday: 'long',
        });

        const html = `
        <div class="dia">
          <h3>${diaSetmana}</h3>
          <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="${item.weather[0].description}" />
          <p>${item.weather[0].description}</p>
          <p>🌡 ${item.main.temp_min} ºC - ${item.main.temp_max} ºC</p>
          <p>💨 ${item.wind.speed} m/s</p>
        </div>
      `;

        diesContainer.innerHTML += html;
      });
    });
}

fetchForecast();
