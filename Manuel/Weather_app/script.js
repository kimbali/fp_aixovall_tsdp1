const API_KEY = "TU_API_KEY"; // Reemplaza con tu clave de OpenWeather
const LAT = 42.4667; // Coordenades d'Aixovall
const LON = 1.4833;
const LANG = "ca";
const UNITS = "metric";

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${LAT}&lon=${LON}&exclude=minutely,hourly,alerts&units=${UNITS}&lang=${LANG}&appid=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  displayCurrentWeather(data.current);
  displayForecast(data.daily);
}

function displayCurrentWeather(current) {
  const weatherDiv = document.getElementById("current-weather");
  const html = `
    <h2>${new Date(current.dt * 1000).toLocaleDateString("ca")}</h2>
    <p>${current.weather[0].description}</p>
    <p>🌡️ ${Math.round(current.temp)}°C</p>
    <img src="https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png" alt="">
  `;
  weatherDiv.innerHTML = html;
}

function displayForecast(daily) {
  const forecastDiv = document.getElementById("forecast");
  forecastDiv.innerHTML = "";

  // Mostrar només els pròxims 7 dies (excloent avui)
  for (let i = 1; i <= 7; i++) {
    const day = daily[i];
    const date = new Date(day.dt * 1000);
    const dayName = date.toLocaleDateString("ca", { weekday: "long" });

    const html = `
      <div class="forecast-day">
        <h3>${dayName}</h3>
        <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="">
        <p>${day.weather[0].description}</p>
        <p>🌡️ ${Math.round(day.temp.day)}°C</p>
      </div>
    `;
    forecastDiv.innerHTML += html;
  }
}

getWeather();
