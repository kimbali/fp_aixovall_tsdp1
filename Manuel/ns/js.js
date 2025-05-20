const API_KEY = "212ebafd80e67458b4fdf2fe666f697f";
const city = "Aixovall";
const units = "metric";
const language = "ca";
const grados = document.getElementById("grados");
const info = document.getElementById("masInfo")
const maxmin = document.getElementById("maxmin")

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}&lang=${language}`
)
  .then(response => response.json())
  .then(data => {
    console.log("El temps d'avui:", data);

    const temp = data.main.temp;
    const descr = data.weather[0].description;
    const tempMax = data.main.temp_max;
    const tempMin = data.main.temp_min;


    grados.textContent = `${temp} °C`;
    info.textContent = `${descr}`;
    maxmin.textContent= ` Max ${tempMax}°C - min ${tempMin}°C`


  })
  .catch(error => console.error("Error amb la petició:", error));
