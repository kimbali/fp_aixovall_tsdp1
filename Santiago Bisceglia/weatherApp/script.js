const WEATHER_API_KEY = "212ebafd80e67458b4fdf2fe666f697f";

const city = "Aixovall";
const units = "metric"; // centigrades o 'imperial' per Fahrenheit
const language = "en";

function updateWindData(data) {
  const { speed, gust, deg } = data.wind;

  // console.log( speed, gust, deg);

  const speedKmh = (speed * 3.6).toFixed(1);
  const gustKmh = (gust * 3.6).toFixed(1);

  document.getElementById("speed").textContent = `${speedKmh} km/h`;
  document.getElementById("direction").textContent = `${deg}°`;
  document.getElementById("gust").textContent = `${gustKmh} km/h`;
}

// WEATHER of today
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=${units}&lang=${language}`
)
  .then((response) => response.json())
  .then((data) => {
    console.log("El temps d avui: ", data);
    // city name
    const city = document.getElementById("city");
    city.textContent = `${data.name}`;
    // grados
    const graus = document.getElementById("graus");
    graus.textContent = `${Math.floor(data.main.temp)}º`;
    // temp max
    const maxTemp = document.getElementById("maxTemp");
    maxTemp.textContent = `H:${Math.floor(data.main.temp_max)}º`;
    // temp min
    const minTemp = document.getElementById("minTemp");
    minTemp.innerHTML = `L:${Math.floor(data.main.temp_min)}º`;
    // descripcion ej(nublado, soleado, etc)
    const descripcion = document.getElementById("descripcion");
    descripcion.textContent = `${data.weather[0].description}`;
    // icon
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById("weather-icon").src = iconUrl;

    updateWindData(data);

    const humidity = document.getElementById("humidity");
    humidity.textContent = `${data.main.humidity}%`;

    const pressure = document.getElementById("pressure");
    pressure.textContent = `${data.main.pressure}hPa`;

    const visibility = document.getElementById("visibility");
    const visibilityKm = (data.visibility / 1000).toFixed(1);
    visibility.textContent = `${visibilityKm} km`;

    const seaLevel = document.getElementById("sea-level");
    seaLevel.textContent = `${data.main.sea_level}`;

    const groundLevel = document.getElementById("ground-level");
    groundLevel.textContent = `${data.main.grnd_level}m`;

  })
  .catch((error) => console.error("Error amb la petició:", error));

// FORECAST of the week
fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${WEATHER_API_KEY}&lang=${language}`
)
  .then((response) => response.json())
  .then((data) => {
    console.log("Previsió de 5 dies: ", data);

    const forecastList = document.getElementById("forecast-list");
    forecastList.innerHTML = "";

    // Recorre los primeros 7 elementos de la lista de pronóstico
    data.list.slice(0, 7).forEach((item, index) => {
      const li = document.createElement("li");
      const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
      const date = new Date(item.dt * 1000);
      const hour = date.getHours().toString().padStart(2, "0");

      li.innerHTML = `
        <span class="forecast-small-text">${hour}</span><br>
        <img src="${iconUrl}" alt="icon" class="weather-icon-small" /><br>
        <span class="forecast-small-text">${Math.floor(item.main.temp)}º</span>
      `;
      forecastList.appendChild(li);

      const time = new Date(item.dt * 1000).toLocaleString(); // Temps en format llegible
      const temperature = item.main.temp; // Temperatura
      const description = item.weather[0].description; // Descripció de l'estat del temps
      const icon = item.weather[0].icon; // Codi de l'icona del temps
      console.log(
        `A las ${time} habra ${description} con una temperatura de ${temperature}°C. icono: ${icon}`
      );
    });
  })
  .catch((error) => {
    console.error("Hi ha hagut un error:", error);
  });
